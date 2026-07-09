// Opt-in research donation endpoint. Accepts anonymized scores only:
// dimension scores, behavioral tallies, type, and coarse context.
// Never receives names, written responses, or safety-screen answers;
// the client never sends them and this handler strips anything extra.
import { put } from '@vercel/blob';

const S = (v, n) => String(v == null ? '' : v).slice(0, n);
const N = v => { const x = Math.round(Number(v)); return Number.isFinite(x) ? Math.max(-1, Math.min(100, x)) : null; };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });
  let b = req.body;
  try { if (typeof b === 'string') b = JSON.parse(b); } catch (e) { return res.status(400).json({ error: 'bad json' }); }
  if (!b || !Array.isArray(b.dims) || b.dims.length < 5 || b.dims.length > 15) return res.status(400).json({ error: 'bad shape' });
  if (JSON.stringify(b).length > 8000) return res.status(413).json({ error: 'too large' });

  const clean = {
    v: S(b.v, 8),
    mode: ['solo', 'host', 'guest'].includes(b.mode) ? b.mode : 'unknown',
    type: S(b.type, 16),
    trajectory: S(b.trajectory, 8),
    forecast: S(b.forecast, 12),
    context: {
      duration: S((b.context || {}).duration, 4),
      cohab: S((b.context || {}).cohab, 4),
      ses: S((b.context || {}).ses, 8),
      kidsIntent: S((b.context || {}).kidsIntent, 10),
    },
    dims: b.dims.slice(0, 15).map(d => ({ key: S(d.key, 4), a: N(d.a), b: N(d.b) })),
    tally: Object.fromEntries(Object.entries(b.tally || {}).slice(0, 10).map(([k, v]) => [S(k, 12), N(v)])),
    repairAcceptRate: b.repairAcceptRate == null ? null : Math.round(Number(b.repairAcceptRate) * 100) / 100,
    resolutionRate: Math.round(Number(b.resolutionRate || 0) * 100) / 100,
    quizMsBand: Array.isArray(b.quizMsBand) ? b.quizMsBand.slice(0, 2).map(x => S(x, 8)) : [],
    t: Date.now(),
  };

  const name = 'donations/' + new Date().toISOString().slice(0, 10) + '/' + Date.now() + '-' + Math.random().toString(36).slice(2, 10) + '.json';
  try {
    await put(name, JSON.stringify(clean), { access: 'private', contentType: 'application/json' });
  } catch (e) {
    return res.status(500).json({ error: 'store failed' });
  }
  return res.status(200).json({ ok: true });
}
