// Encrypted session relay for paired mode. Carries only end-to-end
// encrypted messages between the two partners' devices: the encryption
// key lives in the QR code / join code and never reaches this server,
// so everything stored here is unreadable ciphertext. Sessions are
// deleted when the couple finishes; a janitor pass removes leftovers.
import { put, list, del } from '@vercel/blob';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  Object.entries(CORS).forEach(([k, v]) => res.setHeader(k, v));
  if (req.method === 'OPTIONS') return res.status(200).end();

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = null; } }
  const sid = String((req.method === 'POST' ? body && body.sid : req.query.sid) || '').toUpperCase();
  if (!/^[A-Z2-9]{6}$/.test(sid)) return res.status(400).json({ error: 'bad sid' });
  const prefix = 'sessions/' + sid + '/';

  if (req.method === 'POST') {
    const { from, seq, iv, data } = body || {};
    if (!['A', 'B'].includes(from)) return res.status(400).json({ error: 'bad from' });
    if (!Number.isInteger(seq) || seq < 1 || seq > 5000) return res.status(400).json({ error: 'bad seq' });
    if (typeof iv !== 'string' || iv.length > 40 || typeof data !== 'string' || data.length > 120000) return res.status(413).json({ error: 'too large' });
    const name = prefix + String(seq).padStart(5, '0') + '-' + from + '.json';
    try {
      await put(name, JSON.stringify({ from, seq, iv, data, t: Date.now() }), {
        access: 'private', addRandomSuffix: false, contentType: 'application/json', allowOverwrite: true,
      });
    } catch (e) {
      return res.status(500).json({ error: 'store failed' });
    }
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'GET') {
    const haveA = parseInt(req.query.a, 10) || 0;
    const haveB = parseInt(req.query.b, 10) || 0;
    let blobs;
    try { ({ blobs } = await list({ prefix, limit: 1000 })); }
    catch (e) { return res.status(500).json({ error: 'list failed' }); }
    const wanted = blobs.filter(x => {
      const m = x.pathname.match(/(\d{5})-([AB])\.json$/);
      if (!m) return false;
      const seq = parseInt(m[1], 10);
      return m[2] === 'A' ? seq > haveA : seq > haveB;
    }).slice(0, 120);
    const out = [];
    for (const x of wanted) {
      try {
        const r = await fetch(x.url, { headers: { authorization: 'Bearer ' + process.env.BLOB_READ_WRITE_TOKEN } });
        if (r.ok) out.push(await r.json());
      } catch (e) {}
    }
    out.sort((x, y) => x.seq - y.seq);
    return res.status(200).json(out);
  }

  if (req.method === 'DELETE') {
    try {
      const { blobs } = await list({ prefix, limit: 1000 });
      if (blobs.length) await del(blobs.map(x => x.url));
      // Janitor: sweep a few stale sessions older than 24h on each delete.
      const all = await list({ prefix: 'sessions/', limit: 300 });
      const cutoff = Date.now() - 24 * 3600 * 1000;
      const stale = all.blobs.filter(x => new Date(x.uploadedAt).getTime() < cutoff).slice(0, 200);
      if (stale.length) await del(stale.map(x => x.url));
    } catch (e) {}
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: 'method not allowed' });
}
