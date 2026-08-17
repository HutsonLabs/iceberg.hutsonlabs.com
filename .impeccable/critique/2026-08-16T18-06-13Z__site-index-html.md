---
target: site/index.html
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 3
timestamp: 2026-08-16T18-06-13Z
slug: site-index-html
---
# Critique — site/index.html (Iceberg download site)

Method: dual-agent (A: design-review sub-agent · B: detector sub-agent). Browser overlay skipped: no browser automation tool exposed in session; CLI detector evidence only.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Badges and warn callout state the world honestly — but only for App Store; TestFlight placeholder links carry no status |
| 2 | Match System / Real World | 3 | "MCP" never expanded anywhere; "Ask AI to Gather" and "Everything is a Thing" are insider dialect |
| 3 | User Control and Freedom | 3 | No traps; smooth-scroll disabled under reduced motion |
| 4 | Consistency and Standards | 3 | Footer "App Store" anchors to `#get` while cards link the store; wikilinks drop the underline `.ice-link` establishes |
| 5 | Error Prevention | 1 | Six live-looking buttons, four dead as shipped; `.ice-btn[aria-disabled]` style exists and is never used |
| 6 | Recognition Rather Than Recall | 3 | Hero edge colors (cites/supports/contradicts) carry meaning with no legend at first contact |
| 7 | Flexibility and Efficiency | n/a | Persuade surface; no repeated task to accelerate |
| 8 | Aesthetic and Minimalist Design | 4 | One accent, one gradient, zero decoration that isn't product truth |
| 9 | Error Recovery | 2 | Warn callout pre-explains App Store 404s (good, rare) but a tapped placeholder TestFlight link dead-ends unexplained |
| 10 | Help and Documentation | n/a | Single-task persuade page; install steps embedded in the iOS card copy |
| **Total** | | **22/32** | **Acceptable (69%, a point shy of Good)** |

n/a heuristics: 7, 10. Applicable max: 32.

## Design Specificity Verdict

**Authored, decisively — this page could not ship for another product.** The hero image is a hand-plotted SVG of the product's own data model (index.html:143–166), nodes filled with the app's real content-type tokens and edges stroked with the CVD-validated relation palette. The second section renders an actual note as the app renders it — eyebrow, type chip, wikilinks, backlink pills (172–190) — a screenshot substitute built from the app's own transcribed tokens, so it cannot misrepresent the app. The one gradient is spent deliberately at the CTA with a comment explaining the trade. Copy is first-person and anti-hype ("Claude, in my case"; "nothing here leaves your device today").

**Where template DNA persists:** the skeleton is the canonical landing shape — hero + 2 CTAs + badges → 3-up grid → 2-up grid → gradient CTA → footer columns. The content rescues the slots; the composition itself takes no risk. **The missed opportunity is the name**: the product is called Iceberg, the H1 says "below the surface," and nothing on the page is visually below anything — no waterline, no submerged mass, no deepening as you scroll. The metaphor the app is named for is stated in words and never drawn.

**Deterministic scan** (10 findings, exit 2): 4× low-contrast (white on #3478F6 primary buttons at 4.1:1; #6B6F7C on #16181F footer/eyebrow text at 3.5:1) — all legit, corroborating the design review; 1× kicker-above-heading ("TestFlight" eyebrow directly above the CTA h3, index.html:311–312) — a structural pattern the design review missed; 1× skipped-heading (h1 → h3 "Saturday", both assessments agree); 3× all-caps-body — **false positives** (they match 31–35-char `.ice-eyebrow` section labels, exactly the short-label chrome the rule exempts); 1× em-dash-overuse (advisory; 18 counted, ~4 are button/footer label separators, ~14 in prose — high but stylistic).

## Overall Impression

This is one of the more honest landing pages a beta app could ship: the demos are built from the app's own tokens, the copy admits what the product won't do, and restraint is enforced like law. The single biggest problem is that the page's entire conversion path — every install button — is a dead link as shipped, and the page's only warning vouches *for* the broken TestFlight links while disclaiming only the App Store ones. The single biggest opportunity is the iceberg itself: the brand metaphor is free product character, currently spent only on words.

## Priority Issues

**[P0] The sole conversion path 404s as shipped, and the page vouches for it.**
- **Why it matters**: Every TestFlight href is `join/XXXXXXXX`/`join/YYYYYYYY` (index.html:128–131, 287, 301, 317–320, 345–346). The warn callout (325–331) disclaims only App Store buttons and explicitly asserts "The TestFlight beta is the way in today." A visitor who taps the hero's primary button lands on Apple's invalid-invite page with zero explanation — for three of the four audiences, that's the whole visit wasted.
- **Fix**: Gate deployment on real invite URLs; until then, extend the warn callout to cover TestFlight and render all four dead buttons with the existing `.ice-btn[aria-disabled=true]` style (styles.css:179).
- **Suggested command**: /impeccable harden

**[P1] Dead App Store buttons dressed as live controls.**
- **Why it matters**: `id0000000000` links (288–289, 302–303) render as normal secondary buttons. Riley-types and App Store reviewers will tap them. Heuristic 5's score of 1 comes almost entirely from this.
- **Fix**: Apply `aria-disabled` now; the launch-swap workflow already tags these with `data-launch-link`, so flipping it at launch is the same mechanical edit.
- **Suggested command**: /impeccable harden

**[P1] Peak-end inversion: the page ends on a warning.**
- **Why it matters**: The warn callout sits after the gradient CTA ("Start below the surface tonight"), making "they'll come up empty" the final content impression before the footer. Peak-end rule: visitors remember the apology, not the crest. The detector's kicker-above-heading finding sits in this same block (eyebrow "TestFlight" stacked on the CTA h3).
- **Fix**: Move the callout above the platform cards (context before choice) or fold a one-liner into each card's App Store slot; let the gradient CTA close the page. Rework the CTA's eyebrow+h3 stack while there.
- **Suggested command**: /impeccable layout

**[P1] `og:image` is an SVG (index.html:31).**
- **Why it matters**: Twitter/X, Facebook, Slack, and most scrapers don't render SVG og-images. The share card — the first impression for the Hacker News/social audience — will be blank. Same class of issue: SVG `apple-touch-icon` (line 22) is unsupported on iOS.
- **Fix**: Ship a 1200×630 PNG og-image and a 180×180 PNG touch icon (cwebp/sips/ffmpeg are available).
- **Suggested command**: /impeccable harden

**[P2] Meaning-bearing text fails WCAG AA across the page.**
- **Why it matters**: `.ice-eyebrow` 11px on #6B6F7C ≈3.5:1 (every section label, callout label, footer head); white on #3478F6 ≈4.1:1 on 15–16px semibold button labels; `.ice-btn__meta` at opacity .7 on accent drops below 3:1. Detector and design review independently agree.
- **Fix**: Eyebrows → `--ink-muted` #8A8D98 (~5.4:1); raise meta opacity; consider the accent-hover shade as button fill.
- **Suggested command**: /impeccable polish

## Persona Red Flags

**Jordan (first-timer, no PKM/MCP background)**: "MCP built in" (253) — acronym never expanded, and it's the eyebrow, the orienting element. "Typed knowledge graph" (123) and "Everything is a Thing · Things link" (195) are category jargon at the two highest-attention positions. "New note · Import · Ask AI to Gather" (314–315) quotes three app-internal commands without context. Nothing says the app is useful *without* an agent — "for a human and an agent" reads as "do I need to bring an AI?"

**Riley (stress tester)**: Taps hero primary → Apple invalid-invite page; the existing warning covers different buttons. Finds `id0000000000` in store hrefs while the footer's "App Store" quietly anchors to `#get` — three treatments of one destination. All three note-card wikilinks (179–182) jump to the same `#what` anchor — the demo's links are revealed as fake. At ~900px the `.grid-3` wraps to 2 columns, orphaning the Graph card half-width. The hero SVG's `aria-label` (144) omits the contradicts edge drawn at line 149 — alt text and picture disagree.

**Casey (distracted mobile, one thumb)**: Hero graph labels are SVG text scaling with the viewBox — at 375px viewport they render ~7px, illegible, and they're the only thing explaining the nodes. Footer links are ~22px tap targets despite the system defining `--target-min:44px` (styles.css:140). On the plus side: no JS, two preloaded fonts, 52px hero buttons — Casey's only failure mode is the P0 tap-404-gone.

**Morgan (agent/MCP enthusiast from Hacker News — project persona)**: The hook lands in the lead, but the entire MCP substance is one 3-sentence paragraph (254–258) — no transport, no client compatibility, no tool list, no docs link. Only the macOS card mentions the MCP server; the iOS card is silent, so Morgan can't tell whether MCP exists on iPhone/iPad — the purchase question, unanswered. Footer "GitHub" links the org, not a repo or README — the one audience that reads source gets a dead end.

## Cognitive Load

7/8 pass; 1 failure → **low cognitive load**. The one failure: the Get-it region exposes **6 CTAs in one span** (4 card buttons + 2 gradient-card buttons, with 3 more in the footer), two of them known-dead; `testflight-ios` appears 4 times on the page. Also noted: the warn callout asks visitors to retroactively discount buttons seen 40px earlier.

## Minor Observations

- h1 → h3 heading skip ("Saturday", index.html:178) before the first h2 — confirmed by both detector and review.
- `--rel-cites` #9400C1 edges stroke at ≈2.7:1 against the near-black backdrop — the darkest meaning-bearing hue is the hardest to see.
- `.ice-wikilink` and `.ice-footer__link` signal link-ness by color alone (WCAG 1.4.1).
- Dead CSS: `.ice-link` never used in HTML; `.ice-typechip--contradicts`/`--related` unused — the page draws "contradicts" as an edge but never shows it as a chip.
- 13 `@font-face` declarations including unreferenced UltraLight/Heavy italics — harmless (lazy), but surface bloat.
- Inline `style` attribute on the footer grid (337–338) in an otherwise rigorously token-classed page.
- 18 em-dashes (detector advisory); ~14 in prose — a voice choice, but dense.
- `meta color-scheme: dark` is handled correctly for a dark-only page.

## Questions to Consider

1. **Where is the iceberg?** The name, the H1, and the closing CTA all promise verticality the page never draws. What if the hero graph sat half-submerged — a waterline hairline, submerged nodes dimmer but larger — and the backdrop deepened as you scroll?
2. **Could the note card's fake links become the actual demo?** With zero JS, each wikilink could anchor to a real card elsewhere on the page — the page itself becomes a five-node graph you traverse, and the product thesis is experienced instead of asserted.
3. **Pre-launch, why six buttons?** Until the App Store exists there are exactly two working actions in the world. With two buttons total, the warn callout, the dead store buttons, and the >4-option decision point all disappear.
