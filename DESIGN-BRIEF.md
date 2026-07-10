# The Marriage Blueprint: design handoff brief

Live site: https://marriage-blueprint.vercel.app
Repo: https://github.com/selinayfilizp/marriage-blueprint
Written for a designer taking over the visual and interaction design. The goal of the redesign: keep the credibility, make it feel alive, warm, and fun to complete as a couple.

---

## 1. What this product is

A free, research-grounded compatibility test for couples who are seriously dating but not yet engaged. Two people pair their phones by QR code, answer a 45-question assessment simultaneously, then sit together through six guided "scenario" conversations (money, values, in-laws, children, career, phones) where each writes a private response, both screens reveal the answers at the same moment, and they talk it through. At the end they get a shared report: a partnership type (one of seven), a dimension map, a conflict portrait, a forecast, and a three-move action plan.

The tone in one line: a mirror, not a judge. It is serious science delivered warmly. It never tells anyone whether to marry.

Think of the product as one long date with a keepsake at the end, currently dressed like a well-mannered document. The redesign should dress it like the date.

## 2. Brand voice and hard non-negotiables

These survive any redesign:

- **Honesty is the brand.** The site openly says it is an unvalidated prototype, links to a limitations page, and never overstates. Fun cannot come at the cost of credibility; we are the anti-BuzzFeed quiz.
- **Never a verdict.** No design element should imply pass/fail, doomed/safe. Forecasts are probabilities framed as changeable. No red X over a couple, ever.
- **Privacy is load-bearing.** "No account, no storage, no email" badge near CTAs. Answers stay on the two devices. The design should make privacy feel true (calm, local, intimate), not just claimed.
- **The safety screen stays somber.** There is a private two-question screen about fear and control in the relationship, plus a private resources note on the report if flagged. This screen and note must remain visually quiet, plain, and dignified. No illustration, no playfulness, nothing that draws the partner's eye from across the table.
- **No em dashes anywhere in copy.** House style. Commas, colons, periods.
- **Sentence case everywhere.** No Title Case in headings or buttons.

## 3. Site map

Seven static pages plus the app:

1. **index.html**, landing: hero, why-before-engagement, what it is, comparison table, three-layer model, footer disclaimer.
2. **test.html**, the entire app (see screen inventory below). This is where the redesign matters most.
3. **pattern-quiz.html**, a 3-minute solo teaser quiz: six either/or questions, four insight cards, invite-your-partner CTA. Acquisition funnel entry.
4. **methodology.html**, the research basis. Long-form, credibility page.
5. **limitations.html**, what the tool cannot do. Deliberately the most sober page.
6. **blog.html** plus three posts. Two are illustrated watercolor timelines (Catholic marriage preparation history; history of marriage from Babylon to now), one is an essay on Esther Perel and Orna Guralnik.
7. **test.html#sample**, the full report rendered with fictional data and a banner. Conversion tool: shows the reward before the work.

## 4. Screen inventory for the app (test.html)

The app is a single-page state machine. Every screen below needs design attention; the emotional beat is noted because the design should track it.

| Screen | What happens | Emotional beat |
|---|---|---|
| Intro | Explains the two parts, privacy badge, start button, resume card if a saved session exists | Reassurance |
| Mode chooser | Two phones together (recommended), join a session, one device | Commitment to begin |
| Pair, host | Big QR code plus 6-letter code, waiting pulse until partner joins | Anticipation |
| Pair, guest | Name plus code entry (QR scan prefills), connecting state | Anticipation |
| Context | Four dropdowns (time together, cohabitation, finances, children intent) | Neutral, quick |
| Quiz | 3 sections x 15ish items, 1-5 numbered scale with endpoint labels, own progress bar plus live partner progress bar | Focus, companionship (you can see them answering) |
| Safety screen | Two private checkboxes, never shared | Quiet dignity, see non-negotiables |
| Quiz wait | One partner done, watching the other's progress | Gentle suspense |
| Come back together | Full-screen moment: part one done, sit side by side, begin | Celebration, transition |
| Scenario write | Prompt card plus private textarea, "lock in my response" | Vulnerability |
| Scenario wait | Locked in, waiting for partner | Suspense |
| The reveal | Both responses appear side by side simultaneously, then talk prompts | THE dramatic peak, six times |
| Halfway break | After scenario three: take a breather | Exhale |
| Reflection | Private checkboxes about what actually happened in the talk | Honesty |
| Report | Type card, dimension map, conflict portrait, forecast, action plan, donation opt-in, share card button, print | Identity payoff, keepsake |

The report is the "Spotify Wrapped" moment. The seven types (Builders, Harmonizers, Balancers, Conventionals, Pragmatists, Strivers, Drifters) are the identity payload. Right now they are text in a card; they deserve full visual identities.

## 5. Current visual language

- **Palette** (from styles.css): warm paper background #FAF9F5, ink #1a1a18, muted #6b6a64, hairline #e4e2da. Accent families, each with a light wash and a deep tone: green #EAF3DE/#3B6D11 (the primary accent, used for badges, insights, timeline), purple #EEEDFE/#534AB7 (partner A), teal #E1F5EE/#0F6E56 (partner B), amber #FAEEDA/#854F0B, blue #E6F1FB/#185FA5, coral #FAECE7/#993C1D, red #FCEBEB/#A32D2D (alerts only).
- **Type**: system sans stack, 16px body, weight 600 headings. No display face. This is the single cheapest place to add personality.
- **Components**: white cards with 1px hairline borders and 14px radius, pill badges, black rectangular buttons, thin progress bars, a dimension map with two colored dots per row (purple = partner A, teal = partner B) and gap bands.
- **Illustration**: the strongest existing brand asset. The two history blog posts contain 16 hand-built watercolor scenes: flat layered translucent washes, wobbly edges via SVG turbulence displacement, paper-grain texture, muted sage/sky/cream/terracotta palette, faceless rounded figures (rose and slate-blue for the couple). The Open Graph image and the shareable type card reuse the motif of two figures as pillars holding up a roof with a heart between them. The app itself currently has zero illustration; the blog has all of it. Biggest opportunity: bring the watercolor world into the app.
- **No favicon, no logo mark.** The wordmark is plain text. A mark is needed (the two-pillars-roof-heart motif is the natural candidate).
- **No motion.** There is one pulsing dot. Everything else is instant swaps. Transitions, micro-celebrations, and the reveal choreography are all open space.
- **No dark mode.**

## 6. Where "fun" should go, ranked

1. **The reveal moment.** Six times per session, two private answers appear simultaneously. This is the heart of the product and currently it just renders. It deserves choreography: a held beat, cards flipping or curtains parting, the two colors meeting. If the designer only touches one thing, touch this.
2. **The seven type identities.** Each type needs its own watercolor crest or scene, a color world, and a shareable card design. This powers the report, the share loop, and future merchandise (prints, the planned weekend kits).
3. **Come back together.** The hinge between solo work and the shared experience. Currently a text card. Should feel like a small ceremony.
4. **Progress and companionship.** Two progress bars fill side by side while partners answer. Make the partner's presence felt (their color, their pace, a gentle signal when they finish) without showing their answers.
5. **The quiz itself.** 45 items is a march. Section transitions, a sense of place in the three layers (vulnerabilities, stress, adaptation), tiny acknowledgments between sections.
6. **The landing page.** It reads like a document. It should read like an invitation to a date with one foot in a research library.
7. **The teaser quiz.** Six taps, needs to feel like flirting with the real thing.

Anti-goals: confetti everywhere, gamified points, streaks, anything that trivializes the safety screen or the honest limitations voice, anything that makes the report look like a horoscope.

## 7. Technical constraints the design must live within

- Vanilla HTML/CSS/JS, no build system, no framework. Each page is one file; the app is one file with inline styles and a state machine that swaps innerHTML per screen. CSS lives in styles.css plus per-page style blocks.
- Everything self-contained: inline SVG illustration, no external image dependencies (two CDN scripts exist for QR and peer-to-peer networking). Fonts: if a webfont is added, it should be self-hosted or a single fast Google Fonts family.
- Mobile-first is mandatory: the paired mode is two phones. Touch targets are large; the rating scale is five numbered buttons.
- The report has a print stylesheet (couples save it as PDF). The share card is drawn on a canvas at 1080x1080; its design spec matters.
- Peer-to-peer sync means some screens are waiting states; design must make waiting feel intentional.
- Accessibility: all illustration carries aria labels today; keep it. Color is never the only signal on the dimension map (flags are also text).

## 8. Asset inventory to hand over

- styles.css design tokens (colors, radii, components)
- 16 watercolor SVG scenes across the two illustrated blog posts (view source of blog-catholic-preparation.html and blog-history-of-marriage.html)
- Open Graph image (og-image.png, 1200x630) and its source concept
- The canvas-drawn share card (in test.html, function shareCard) with per-type taglines
- Seven type names, descriptions, and share percentages (in test.html, TYPES object)
- The full copy deck is the site itself; copy voice examples on every page

## 9. Suggested deliverables from the design engagement

1. A small brand kit: logo mark from the two-pillars motif, favicon, one display typeface pairing, refined palette that keeps the paper-and-watercolor feel.
2. The seven type identities: crest illustration, color world, share card template, report header treatment per type.
3. The app flow redesigned around the emotional beats table above, with motion specs for the reveal, come-back-together, and section transitions (CSS-only or small JS, given no build system).
4. Landing page redesign.
5. A component sheet: cards, buttons, badges, scale, progress, dimension map, alert boxes, in light of the new brand.

Everything currently live is disposable except the voice, the honesty, the privacy promises, and the watercolor direction, which testing so far suggests people love. Make it fun; keep it true.
