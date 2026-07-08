# The Marriage Blueprint

A research-grounded, pre-engagement compatibility and readiness assessment. Version 0.1, research prototype.

Most compatibility quizzes measure opinions. This one is built to surface patterns: it combines individual questionnaires across ten research-backed dimensions with six guided scenario conversations that reveal how a couple actually navigates disagreement. The output is a couple profile (one of seven empirically-derived partnership types), a dimension map with partner gaps flagged, a conflict portrait scored against the behavioral markers that best predict divorce, a trajectory forecast, and a three-move action plan.

## Try it

The site runs entirely in the browser. Nothing is stored or sent anywhere.

- **Live site:** https://marriage-blueprint.vercel.app
- **Locally:** open `index.html`, or serve the folder with any static server

## What's here

| File | What it is |
|---|---|
| `index.html` | Landing page: the pitch and the framing |
| `test.html` | The full assessment: questionnaires, scenarios, scoring engine, report |
| `methodology.html` | The research basis for every dimension, weight, and rule |
| `limitations.html` | What the tool cannot tell you, and when not to use it |
| `METHODOLOGY.md` | The methodology document in markdown, written for researchers and reviewers |
| `styles.css` | Shared styling |

## The research basis, in brief

- The three-layer structure follows Karney and Bradbury's vulnerability-stress-adaptation model (1995, Psychological Bulletin), the most-cited framework in marriage science.
- The conflict markers follow Gottman and Levenson's longitudinal findings: criticism, contempt, defensiveness, and stonewalling predict dissolution, with contempt the strongest single predictor, and repair attempts (made and accepted) the strongest protection.
- The seven partnership types are grounded in Olson and Fowers' cluster analysis of 8,385 couples. The Enneagram was deliberately not used: a 104-sample systematic review found its nine types have never been recovered by factor analysis or clustering.
- The before-the-engagement positioning follows Huston's 13-year PAIR project, which showed courtship-stage patterns already predict long-term outcomes.

Full sources and the claims that were excluded after verification are in `methodology.html`.

## Status and caveats

This is an unvalidated research prototype built on validated published findings. It is not a clinical instrument, not therapy, and never a verdict on a relationship. The specific items, weights, type thresholds, and forecast rules have not been through their own psychometric validation. Read `limitations.html` in full before using the results for anything that matters, especially the section on abuse and coercive control, which a compatibility tool cannot detect and can actively mask.

## Validation roadmap

1. Content validity review by independent relationship researchers and clinicians
2. Pilot with ~100 couples: item analysis, internal consistency
3. Structure study with ~500 couples: confirmatory factor analysis, re-deriving the couple types by latent profile analysis
4. Coding study: language-model coding of scenario responses versus trained human coders
5. Longitudinal criterion study following assessed couples for 3-5 years
6. Socioeconomic and cultural moderation studies

## License

MIT
