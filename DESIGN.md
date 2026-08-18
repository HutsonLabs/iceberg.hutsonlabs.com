---
name: Iceberg
description: The site is a water column — you scroll down and the page actually gets deeper.
colors:
  backdrop-hi: "#14161D"
  backdrop-lo: "#08090C"
  abyss: "#050609"
  border-card: "#262933"
  text-primary: "#E8E9EC"
  text-body: "#D5D8E0"
  text-secondary: "#8A8D98"
  text-faint: "#565A66"
  accent: "#3478F6"
  accent-ink: "#2A67DD"
  accent-active: "#2456C8"
  link: "#7AA2FF"
  link-hover: "#A3BFFF"
  insights-deep: "#004280"
  audio: "#A18DF0"
  type-note: "#5B8DEF"
  type-journal: "#8B7CF6"
  type-book: "#F0A35E"
  type-capture: "#2FA79A"
  rel-supports: "#00B170"
  rel-cites: "#9400C1"
  rel-contradicts: "#DF001D"
  rel-related: "#565A66"
typography:
  display:
    fontFamily: "'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif"
    fontSize: "clamp(38px, 4.7vw, 64px)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(30px, 3.6vw, 46px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.028em"
  title:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(24px, 2.5vw, 32px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.022em"
  subtitle:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.08em"
  mono:
    fontFamily: "'Maple Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0"
rounded:
  chip: "999px"
  button: "10px"
  card: "16px"
  lg: "22px"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-5: "20px"
  s-6: "24px"
  s-8: "32px"
  s-10: "40px"
  s-12: "48px"
  s-16: "64px"
  s-20: "80px"
  s-24: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent-ink}"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "0 26px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.accent-active}"
    textColor: "#FFFFFF"
  button-glass:
    backgroundColor: "rgb(255 255 255 / .07)"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.button}"
    padding: "0 26px"
    height: "54px"
  button-glass-hover:
    backgroundColor: "rgb(255 255 255 / .12)"
  button-inverse:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.accent-active}"
    rounded: "{rounded.button}"
    padding: "0 26px"
    height: "54px"
  button-outline-inverse:
    backgroundColor: "transparent"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "0 26px"
    height: "54px"
  button-sm:
    rounded: "{rounded.button}"
    padding: "0 18px"
    height: "44px"
  chip:
    textColor: "{colors.text-body}"
    rounded: "{rounded.chip}"
    padding: "6px 12px"
  card-glass:
    backgroundColor: "rgb(255 255 255 / .062)"
    textColor: "{colors.text-body}"
    rounded: "{rounded.card}"
    padding: "{spacing.s-6}"
  stage-glass:
    backgroundColor: "rgb(255 255 255 / .062)"
    rounded: "{rounded.lg}"
    padding: "{spacing.s-4}"
  dock:
    backgroundColor: "rgb(20 22 29 / .72)"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.chip}"
    padding: "9px 9px 9px 20px"
  close-panel:
    textColor: "#FFFFFF"
    rounded: "{rounded.lg}"
    padding: "48px 40px"
---

# Design System: Iceberg

## Overview

**Creative North Star: "The Descent"**

The page is not a surface with sections on it; it is a column of water the
visitor falls through. Light, contrast, surface fill and shadow all fall off
together as you scroll, so a card near the floor is the *same* card as one near
the waterline, just deeper. Everything floats: glass panels with a specular top
edge, a backdrop blur that saturates what is behind them, and a lens band at
their border that bends the submerged iceberg drawn behind every station.

The system is dark-only and almost entirely achromatic. Saturated color is
rationed and almost always load-bearing: the four content-type hues and the
typed-relation hues are transcriptions of app data, and blue accent carries
exactly one job — install. Type is a single family (Avenir Next, self-hosted)
worked hard: negative tracking that tightens as size grows, one demibold weight
doing all the emphasis, and a mono face reserved for machine facts (URLs, specs,
timestamps). The build refuses the PKM-landing-page defaults it was drawn
against: no three-icon card row, no screenshot carousel, no feature grid.

Density is generous but never decorative. Every panel on the page is a *thing*
wearing its own chrome — a share sheet has a grabber, a viewfinder has corners,
a recorder meters — rather than a generic card with an icon in it.

**Key Characteristics:**
- Dark-only, depth-graded: one ramp spans the document, not the viewport.
- Liquid Glass as the only elevation material; no drawn borders standing in for it.
- Saturated color means something; grey means chrome.
- One type family, one accent, two authored motion moments on the whole page.
- Every station renders complete with JavaScript blocked.

## Colors

A near-monochrome cold-water ground transcribed from the app's canonical
palette, with a rationed blue accent and a small set of hues that carry data.

### Primary
- **Signal Blue** (`--accent`): the app's action blue. Used as the source of the
  install-affordance family and the page's link hue; never as decoration.
- **Signal Blue Ink** (`--accent-ink`): the *surface* rung. Any accent surface
  that carries white text uses this, not `--accent` — white on `--accent` is
  4.1:1, and this rung is 4.8:1. Primary buttons, the share-sheet tag pill and
  the closing panel's gradient origin all sit here.
- **Insights Deep** (`--insights-deep`): the deep stop of the app's own
  Insights-card gradient, and the only other stop in the closing panel's
  gradient — accent-ink at 0% falls to it at 100%. Two stops, no interpolation.
- **Signal Blue Active** (`--accent-active`): hover and pressed state for
  primary buttons; the text color of the inverse (white) button.
- **Surfacing Blue** (`--link`) / **Surfacing Blue Bright** (`--link-hover`):
  inline links, wiki-links, focus rings, and the beat cue line.

### Secondary — meaning-bearing content types (never decorative)
- **Note** (`--type-note`), **Journal** (`--type-journal`), **Book**
  (`--type-book`), **Capture** (`--type-capture`): these are the app's content
  types. They fill graph nodes, tint the legend chips, color each on-ramp's
  chrome glyph, and stripe the capture card's quote rule. They may not be
  reassigned to a different meaning or used because a panel needed color.
- **Voice Lavender** (`--audio`): the app's voice-memo hue. It names a *media
  affordance*, not a content type — it colors the voice on-ramp's chrome glyph,
  its metering waveform and its running time, and nothing else.

### Tertiary — meaning-bearing typed relations (never decorative)
- **Supports** (`--rel-supports`), **Cites** (`--rel-cites`), **Contradicts**
  (`--rel-contradicts`), **Related** (`--rel-related`): the graph's edge strokes
  and their matching relation chips. `--rel-supports` doubles as the live status
  dot; `--rel-contradicts` draws the refusal list's X mark. Both of those reads
  are truthful (live / negation) rather than borrowed for hue.

### Neutral
- **Surface Water** (`--backdrop-hi`): the ramp's top stop, just under the sky.
- **Deep Water** (`--backdrop-lo`): the ramp's 70% stop; also the opaque
  background the pinned graph stage takes below 960px.
- **Abyss** (`--abyss`): the floor and the `html` background. The one value on
  the page not transcribed from the app — it is `--backdrop-lo` taken one rung
  further down, because the column needed a bottom.
- **Ice** (`--text-primary` → `--ink`): headings, strong text, node labels.
- **Body** (`--text-body` → `--ink-body`): running copy.
- **Muted** (`--text-secondary` → `--ink-muted` / `--ink-dim`): secondary and
  tertiary copy, captions, hint text, graph labels.
- **Faint** (`--text-faint`): the scrollbar thumb's hover state. The dimmest
  value on the page and the only rung below Muted — it is chrome, never text.
- **Hairline** (`--border-card`, aliased `--hairline-strong`): the scrollbar
  thumb at rest and the beat's inactive rule. Most divider work on the page is
  done by `rgb(255 255 255 / .07–.1)` on glass instead.

### Named Rules

**The Mirrored Palette Rule.** Don't invent a hex for this site. Extend the
app's palette (`DesignPalette.swift`, `ContentTypeColor.swift`) first, then
mirror the value here. Every `:root` color traces to the app; `--abyss` is the
single sanctioned extension and its derivation is written next to it. The rule
is enforced by the sheet, not merely asserted: the audit is `grep` for a hex
outside `:root`, and the only two that may come back are `#000` and `#fff`,
which are mask stops and inverse-surface text rather than palette. Everything
else is `var(--token)` or an `rgb()` / `color-mix()` derivation of one — and
that includes gradient mid-stops, which are interpolations between app values,
never new ones. A token also earns its keep: one that nothing references is not
a system entry, it is dead weight, and it goes.

**The Meaning-Bearing Color Rule.** The four content-type hues and the four
relation hues encode facts about the app. They are semantics, not palette. If a
new surface has no note, journal, book, capture or typed relation on it, it gets
none of these colors.

**The Rung-Up Rule.** Text steps one rung brighter than the app's mapping,
because the app's `text.tertiary` (#6B6F7C) measures 3.6:1 on this ground.
`--ink-dim` and `--ink-muted` both resolve to `--text-secondary`, and tertiary
is not carried into the sheet at all. Likewise, accent surfaces carrying white
text use `--accent-ink`, never `--accent`.

**The One Accent Job Rule.** Blue accent means install. Links are the link hue;
everything else is water and grey.

## Typography

**Display / Body / Label Font:** Avenir Next, self-hosted woff2 (ultralight
through heavy shipped; the page uses 400, 500, 600), falling back to
`-apple-system`.
**Mono Font:** Maple Mono, falling back to `ui-monospace` / `SF Mono`.

**Character:** One humanist geometric sans doing every job, distinguished by
size, tracking and a single strong weight (600) rather than by family contrast.
Headlines are tight and optically tracked in; body runs long and loose (1.65).
The one true italic on the page is the hero's second line, in the regular weight
at `--link-hover` — the bright surfacing blue, borrowed here because it is the
palest cold value the system owns — which reads as a spoken aside.

### Hierarchy
- **Display** (600, `clamp(38px, 4.7vw, 64px)`, 1.06, -0.03em): the hero
  headline only. One per page.
- **Headline** (600, `clamp(30px, 3.6vw, 46px)`, 1.1, -0.028em): station `h2`s.
  Capped at 62ch with `text-wrap: balance`.
- **Title** (600, `clamp(24px, 2.5vw, 32px)`, 1.15, -0.022em): scroll beats
  beside the graph stage. The closing panel's heading is the same shape at
  `clamp(24px, 2.8vw, 34px)`.
- **Subtitle** (600, 20–24px, 1.2–1.25, -0.015 to -0.02em): card headings —
  platform, refusal, capture/note titles.
- **Lead** (400, 19px, 1.6, max 52ch): the hero's supporting paragraph.
- **Body** (400, 17px, 1.65, 16px below 720px): running copy. Measure is capped
  per context — 52ch in a note card, 56ch in a beat, 60–66ch in station copy.
- **Small** (400, 13–15.5px): captions, fine print, footer links, meta.
- **Label** (600, 11px, 0.08em, uppercase): the `.lbl` micro-heading — backlink
  counts, speaker attributions in the agent answer, footer column headings.
- **Mono** (400, 11.5–12.5px, tracking reset to 0): URLs, clipped sources,
  platform specs, recorder timestamps. Machine facts only.

### Named Rules

**The Tracking-With-Size Rule.** The bigger the type, the tighter the track:
-0.03em at display, -0.022em at title, 0 at body, +0.08em only at 11px label.
Never letterspace body copy.

**The Mono-Means-Machine Rule.** The mono face marks something a machine
produced or consumes — a URL, a build spec, a duration. It is never used for
emphasis or texture.

**The One Family Rule.** Hierarchy is size, weight and tracking. Do not
introduce a second display face; the page ships its own woff2 files and no CDN.

## Layout

A single centered column, `--content: 1180px`, with a gutter token `--pad` that
steps 40px → 32px → 20px across the breakpoints. `main` stacks stations with a
96px gap and 150px of lead-in below the waterline.

**Spacing rhythm.** A 4px base scale, `--s-1` (4) through `--s-24` (96), used at
every level: card padding is 24px, wide panels 32–48px, station internals 40px,
section gaps 96px. Interactive minimums come from `--target: 44px`.

**Station model.** Every section is a `.station` (or the graph's `.deep`) that
declares `data-depth="1..4"`. Depth is a position in the water, not a style
variant — it drives glass fill, rim, blur and shadow by calc.

**Signature compositions.**
- *Hero*: two columns, `1.08fr / 0.92fr` — copy left, the five capture on-ramps
  right in a 2-up grid with the share sheet spanning both.
- *Graph station*: two columns with the stage sticky at `top: max(4vh, 40px)`
  in visual order 2, and the scroll beats in order 1, separated by
  `min(30vh, 260px)`.
- *Refusals*: a 2×2 grid built from a 1px gap over a translucent white
  background — the gap is the divider, no borders drawn.
- *Platforms*: 2-up glass cards with actions pushed to the bottom by
  `margin-top: auto`.

**Breakpoints.**
- **≤1180px** — gutters tighten to 32px; hero and graph column gaps compress.
  Composition is unchanged.
- **≤960px** — everything goes single-column: hero stacks (on-ramps stay 2-up),
  the capture→note arrow rotates 90° to point down, refusals and platforms
  become one column. The graph stage stops being a companion and becomes a
  pinned headpiece: full-bleed via negative margins, `background: --backdrop-lo`
  (opaque, because a translucent pinned panel lets copy scroll through it),
  graph capped at 34vh, and the agent's answer moves inline under its beat.
- **≤720px** — gutters 20px, body 16px, hero rungs all tightened so a drawn
  on-ramp clears the fold at 390×844. On-ramps go one-up, the clipper drops its
  in-flight pose, buttons go full-width, and the dock reduces to a
  right-anchored pill with the Mac link hidden.

### Named Rules

**The Depth-Is-Data Rule.** A new section declares `data-depth`; it never
hand-tunes fill, blur or shadow. If it looks wrong at its depth, the ramp is
wrong, not the section.

**The Document-Ramp Rule.** The body gradient spans the document and must not
be `background-attachment: fixed`. A fixed ramp re-runs identically on every
screen and the page never actually gets deeper.

## Elevation & Depth

Depth is the system. There is no shadow scale to pick from: a single Liquid
Glass material reads at four depths, and the `--depth` custom property drives
all four of its parameters by calc.

- **Fill**: `rgb(255 255 255 / calc(.062 - depth * .0092))` — glass gets darker
  and more transparent as it sinks.
- **Rim**: `calc(.30 - depth * .045)` — the specular top edge fades with the
  light.
- **Blur**: `calc(26px - depth * 2px)` — less to refract down deep.
- **Shadow**: `0 24px 60px -28px rgb(0 0 0 / calc(.55 + depth * .08))` — one
  soft, far-offset ambient drop, deepening with depth.

Behind everything, a blurred (9px) submerged iceberg SVG is drawn at z-index 0
across the full station stack, masked to fade out at its base. It exists so the
glass has something real to refract; without it the material reads as a drawn
outline.

### Shadow Vocabulary
- **Glass ambient** (`var(--glass-shadow)`): the only structural shadow. Every
  floating panel.
- **Primary button lift** (`0 10px 26px -12px rgb(36 86 200 / .7)` + a 1px inner
  top highlight): color-matched glow under the install button.
- **Dock** (`0 26px 60px -24px rgb(0 0 0 / .85)` + inner 1px rim): the summoned
  bar, heaviest shadow on the page because it is closest to the viewer.
- **Closing panel** (`0 40px 90px -40px rgb(52 120 246 / .55)`): the accent
  panel at the floor, lit from its own color.

### Named Rules

**The Glass-Is-A-Material Rule.** `.glass` is three layers and all three are
required: a 1px gradient rim drawn with `mask-composite: exclude` on `::before`,
a caustic folded into the fill, and a lens band on `::after` carrying its own
`backdrop-filter` so the boundary over-blurs and over-saturates what's behind
it. A rim highlight alone reads as a drawn outline, not as glass.

**The No-Substitute-Border Rule.** Elevation is fill, rim and blur. Never add a
solid 1px border to a glass panel to "define" it, and never use a hard, offset
or double shadow — the page has one soft ambient family.

## Shapes

Four radii, chosen by what the thing is rather than by size: pills
(`--r-chip`, 999px) for chips, buttons in the dock family and the skiplink;
10px (`--r-button`) for every button; 16px (`--r-card`) for the default glass
panel; 22px (`--r-lg`) for wide containers — the graph stage, the refusal grid,
the closing panel. Inner details take small ad-hoc radii (7–9px for the clipped
URL field and the viewfinder frame).

The recurring geometry is faceted: the iceberg above and below the waterline is
drawn as flat polygons at four opacities (lit / mid / edge / dim), and the same
facet language closes the page as a decorative mass bleeding off the right edge
of the final panel. Icons are 19px inline SVG strokes at 1.5px with round caps
and joins — never a glyph font, never a raster.

**The Chrome-Belongs-To-The-Thing Rule.** A panel representing a real surface
wears that surface's chrome: the share sheet gets a grabber bar, the scanner
gets viewfinder corners, the recorder gets a metering waveform and a running
time, the widget gets a streak strip. Don't render five different affordances as
five identical cards with icons.

## Components

### Buttons
- **Shape:** softly rounded rectangle (10px), never a pill outside the dock.
  Two sizes: large 54px tall / 0 26px (50px below 720px), small 44px tall /
  0 18px — the small size *is* the touch-target token.
- **Primary:** accent-ink fill with white text, a color-matched glow and a 1px
  inner top highlight; hover and active both go to accent-active.
- **Glass:** 7% white over a 14px backdrop blur with a 1px inset rim, ice text;
  hover to 12%. This is the secondary everywhere on a dark ground.
- **Inverse / Outline-inverse:** white fill with accent-active text, and a 45%
  white inset rim with white text. Only on the accent closing panel.
- **Meta line:** every install button may carry a `.btn__meta` span — 12px,
  weight 400, 72% opacity — naming the platform or the channel inline.
- **States:** 160ms transitions on background, color, shadow and transform;
  `:active` translates down 1px; focus is the global 2px link-colored outline at
  3px offset.
- **Pre-launch:** a button pointing at a listing that doesn't exist yet renders
  at 55% opacity with a faint rim and an honest meta label; its meta line stays
  full-strength so the label is legible. It stays keyboard-reachable.

### Chips
- **Style:** pill with the hue at 18% fill, a 50% rim, and an 8px solid dot
  before the text; body-colored 12.5px medium text. The hue arrives as `--dot`
  from a modifier class, so one recipe serves both content types and relations.
- **State (legend variant):** a chip that is also a checkbox — hover lifts fill
  to 27%; unchecked drops to 38% opacity with a transparent fill; the hidden
  input's focus draws the standard focus ring on the chip.

### Cards / Containers
- **Corner style:** 16px for content cards, 22px for wide containers.
- **Background:** the glass primitive at the station's depth. No opaque cards
  anywhere except the pinned mobile stage.
- **Shadow:** the glass ambient only (see Elevation).
- **Border:** none drawn; the rim is the border. Internal dividers are
  `rgb(255 255 255 / .07–.1)` hairlines.
- **Padding:** 24px content cards, 32px platform cards, 40px/32px refusal cells,
  48px/40px the closing panel.

### Navigation
There is no top nav. Wayfinding is the descent itself plus a skiplink (a pill
that flies in on focus), and the footer's two label-headed link columns, whose
links are 44px-tall touch targets in muted text going to ice on hover.

### Motion

Two easings and two durations cover the page: `--ease`
(`cubic-bezier(.2,0,.2,1)`) at `--dur` 160ms for state changes on controls, and
`--ease-out` (`cubic-bezier(.16,1,.3,1)`, the page's one expressive curve) at
`--dur-slow` 640ms for arrivals and departures. Reveal transitions on graph
nodes, edges and beat rules run 420ms on the same expressive curve.

**The Two Moments Rule.** The page authors exactly two moments of motion: the
web clipper's single descent into the hero (`@keyframes inflight`, 1500ms,
once, and dropped entirely below 720px where it costs vertical room the phone
hasn't got), and the graph's assembly with the arriving node's flight — which is
performed by the spring simulation itself, not by a keyframe. Anything else that
moves is a response to input (hover, drag, scroll position) or is in-content
(the recorder's `vu` meter is a depicted VU meter, not entrance motion). Do not
add a third entrance.

**The Full Opt-Out Rule.** `prefers-reduced-motion: reduce` collapses every
animation and transition to 1ms, disables smooth scrolling, and freezes the
recorder's waveform at a static height. Staging never runs at all under reduced
motion — the markup's finished state is what the visitor gets.

### The Dock (signature)
A summoned install affordance, not a persistent header. A glass pill fixed
bottom-right: brand mark, a status line, and the two beta buttons at 40px.

- It is hidden until the hero's own buttons have left the viewport, hides again
  over the closing panel, and hides while the visitor is scrolling *down* —
  it returns on scroll-up, so it reads as summoned rather than parked.
- While the graph stage is on screen it compacts: the status line is dropped and
  the left padding tightens, because the collision it caused was a width
  problem.
- Hidden state is opacity 0 plus a 26px downward translate over 640ms on the
  page's exponential ease; pointer events are removed.
- ≤720px it is a right-anchored pill with no status line, 38px buttons, and the
  Mac link removed (it still lives in the download station and the footer).

### The Graph Stage (signature)
A 22px glass panel holding a filter legend, a hint line, an SVG graph, and a
revealed agent answer.

- **Authored in HTML.** Every node and edge, with its final coordinates, is in
  `index.html`. `app.js` only adopts them. With JavaScript blocked the section
  renders as a complete, labelled graph, and the SVG carries a full prose
  `<desc>`.
- **Nodes** are filled with their content-type hue; labels are 11.5px medium in
  muted ink with a 3px dark paint-order stroke so they stay legible over edges.
  **Edges** are 2.5px round-capped strokes in their relation hue at 85% opacity.
- **Staging is progressive enhancement only**: the module adds
  `.graph--staged` — which hides anything not marked `.on` — and only when the
  module is alive and reduced-motion is not set. Nothing is hidden that
  JavaScript can't restore.
- **Tracing an answer** lights the cited path: lit nodes take a white 2.5px
  stroke and glow, lit edges thicken to 4.5px, and everything else falls back
  to 12–22% opacity. Filtering mutes to 13% rather than removing.
- **Beats** are marked active by the 1px rule beside them turning from
  `--border-card` to muted ink. Copy is never dimmed to signal inactivity —
  dimmed body text is a contrast failure wearing a scroll effect.

### The Waterline (signature)
A zero-height crossing between hero and stations: an 88px band of
`backdrop-filter: blur(7px) saturate(1.5) brightness(1.08)` masked to fade in
and out, a 1px pale-blue top edge, and a centered 34ch line of 500-weight text
at 62% pale blue. The berg's tip is in flow above it so its base *is* the hero's
bottom edge.

## Do's and Don'ts

### Do:
- **Do** declare `data-depth` on a new section and let the ramp compute its
  glass; that is what makes it part of the column.
- **Do** mirror the app's palette before adding any color, and record the
  derivation in a comment when you extend it (as `--abyss` does).
- **Do** use `--accent-ink` for any accent surface carrying white text (4.8:1),
  and keep every text rung at `--text-secondary` or brighter.
- **Do** author interactive content — nodes, edges, coordinates, labels — in the
  HTML and let the module adopt it, so the section is complete with JS blocked.
- **Do** give each panel the chrome of the real thing it represents.
- **Do** keep the page to two authored motion moments (see The Two Moments
  Rule) and make every animation opt out under `prefers-reduced-motion`.
- **Do** cap measure per context (52–66ch) and let `text-wrap: balance` handle
  headings.
- **Do** keep interactive targets at 44px (`--target`) or larger.

### Don't:
- **Don't** use `background-attachment: fixed` on the depth ramp, or re-tune
  glass values per section instead of setting a depth.
- **Don't** spend a content-type or relation hue on anything that isn't that
  content type or that relation.
- **Don't** write a literal hex anywhere outside `:root`; `#000` and `#fff` are
  the only two allowed, and only as mask stops and inverse-surface text.
- **Don't** reintroduce the app's `text.tertiary` (#6B6F7C) as a text rung; it
  is 3.6:1 on this ground. `--text-faint` is chrome only.
- **Don't** add a hard, offset or double shadow, or a solid border to a glass
  panel; there is one soft ambient family and the rim is the border.
- **Don't** dim body copy to indicate an inactive state — move the indicator to
  a rule, a dot or a stroke.
- **Don't** signal state with color alone; the legend chips change fill,
  opacity *and* carry a text label.
- **Don't** introduce a second type family, a webfont CDN, an icon font, or a
  raster icon; icons are 19px inline SVG strokes at 1.5px.
- **Don't** hide content behind an entrance animation the module has to undo,
  and never stage anything when reduced motion is requested.
- **Don't** add a persistent top navigation bar; the descent is the navigation.
