# iceberg.hutsonlabs.com

The single-page site for [Iceberg](https://iceberg.hutsonlabs.com) — a
knowledge system for a human and an agent, native on iPhone, iPad, and Mac. It
points people at the TestFlight beta now and the App Store listings at launch.

## Layout

- `site/` — the whole site: `index.html`, `styles.css`, `assets/`. Static, no
  build step, no JavaScript.
- `site/styles.css` — the design system. Its tokens are transcribed from the
  app's canonical palette (`DesignPalette.swift` / `ContentTypeColor.swift` in
  the iceberg repo); don't invent a hex here — extend the app's palette first,
  then mirror it.
- `wrangler.jsonc` — Cloudflare config. Same approach as
  `term.hut-releases`: an assets-only Worker (no `main`) named
  `iceberg-website` serving `site/`, deployed by Workers Builds on every push
  to `main`. The dashboard project name must stay identical to `"name"` in
  that file.

## Launch-day link swap

Every anchor that changes at release is tagged `data-launch-link` in
`site/index.html`, with the full list in a comment at the top of `<head>`.
While a link is pending, its anchor ships with **no `href`** and
`aria-disabled="true"`, so nothing on the page can 404. To take a link live:

1. add its `href` to every anchor carrying that tag,
2. delete the `aria-disabled="true"` (and `role="link"`) attributes,
3. delete any `· link soon` meta text inside those anchors.

| tag | pending URL (recorded in the head comment) | replace with |
|---|---|---|
| `testflight-ios` | `testflight.apple.com/join/XXXXXXXX` | the iOS public TestFlight invite |
| `testflight-mac` | `testflight.apple.com/join/YYYYYYYY` | the macOS public TestFlight invite |
| `appstore-ios` | `apps.apple.com/app/iceberg/id0000000000` | the real App Store URL |
| `appstore-mac` | same, `?platform=mac` | the real Mac App Store URL |

When the TestFlight links go live, reword the "before launch" status callout
at the top of the "Get it" section (it's marked with a comment); when the App
Store listing is live, delete it.
