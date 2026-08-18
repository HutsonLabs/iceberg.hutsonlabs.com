# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Four confirmed audiences, all of whom this site must serve (user selected all
four, 2026-08-16):

- **PKM-curious public** — strangers arriving from Hacker News, social posts, or
  search; they know tools like Obsidian and Notion and need convincing from
  scratch.
- **Agent/MCP enthusiasts** — people specifically hunting for MCP-connected,
  agent-native tools; the human+agent shared graph is the hook for them.
- **App Store reviewers and press** — Apple review, journalists, curators
  checking the product is real and coherent.
- **Personally invited people** — friends and colleagues sent the link
  directly; for them the site confirms what they were told and hands over the
  TestFlight button.

## Product Purpose

This repository is the single-page marketing/download site for **Iceberg**, a
knowledge system for a human and an agent — notes, journal, and a typed
knowledge graph, native (SwiftUI) on iPhone, iPad, and Mac. The site's job:
route visitors to the TestFlight beta now, and to the App Store listings at
launch. Success = a visitor understands what Iceberg is and taps a working
install link.

## Positioning

One knowledge graph both a human and an agent read and write. Iceberg ships an
MCP server, so an agent (Claude, in the developer's own use) works in the
**same** notes, journal, and typed relations the human sees — nothing filed
invisibly, nothing leaves the device today, no proprietary trap format. The
graph's relations are typed (supports, contradicts, cites, causes…) with a
CVD-validated color palette. Neighboring PKM tools cannot truthfully claim the
native-on-all-Apple-platforms + built-in MCP + shared-visibility combination.

## Operating Context

- The app is distributed via public TestFlight (iOS and macOS) today; App
  Store + Mac App Store listings go live at launch.
- Launch-day link swap is a designed workflow: every URL that changes at
  release carries `data-launch-link` in `site/index.html`, enumerated in a
  comment at the top of `<head>` and in README.md. The two App Store anchors
  additionally carry `data-prelaunch`, which renders them dimmed and labelled
  "At launch"; deleting that attribute at launch is the whole change. (The
  standalone "Before launch" warn callout was removed 2026-08-17 — it damped
  the page at the moment of conversion.)
- Deployed as an assets-only Cloudflare Worker (`iceberg-website`) by Workers
  Builds on every push to `main`; the dashboard project name must stay
  identical to `"name"` in `wrangler.jsonc`.

## Capabilities and Constraints

- Static site: `site/` holds everything (`index.html`, `styles.css`, `app.js`,
  `assets/`). No build step and no dependencies. Client-side JavaScript is
  allowed as of 2026-08-17 (user, during the capture-first redesign): one
  hand-written ES module drives the install dock and the interactive graph. The
  page must still read completely with JavaScript off. Unknown paths 404
  (`not_found_handling: "none"`).
- The site's design tokens are transcribed from the app's canonical palette
  (`DesignPalette.swift`, `ContentTypeColor.swift`, `FontRole.swift` in the
  iceberg repo). Repo rule of record: don't invent a hex here — extend the
  app's palette first, then mirror it. (See Brand Commitments for how binding
  this now is.)
- **Beta status (confirmed 2026-08-16): the TestFlight beta is open; the four
  invite/App Store URLs are placeholders only because the real links are
  pending.** The "TestFlight open" copy is true. Undecided/unknown: the actual
  invite URLs and App Store id — never invent them.

## Brand Commitments

- Name: Iceberg, by HutsonLabs (`iceberg.hutsonlabs.com`;
  github.com/HutsonLabs). Tagline in use: "Most of what you know is below the
  surface."
- Positioning as of 2026-08-17 (user, capture-first redesign): the site is
  **two-sided and capture-first**. Lead with how effortless it is to get a
  thought in (share sheet, web clipper, voice memo, scan, Home Screen widget);
  the payoff is both a real notes app for the human and a memory the agent
  reads and writes. Neither half is subordinate, and the MCP server is framed
  as what makes an agent useful rather than as a feature the app ships.
- The app's design system (Avenir Next + Maple Mono NF faces shipped in
  `assets/fonts`, dark-only stock theme, app-transcribed palette) is the
  **basis, not law** for the site (user, 2026-08-16): future site work should
  challenge it with modern aesthetics where warranted. The site's own world as
  built (2026-08-17) is a water column: a depth ramp that darkens with scroll,
  and Liquid-Glass surfaces (macOS/iOS 26+ as the reference) floating in it. The user specifically
  finds the near-absence of gradients jarring — the app's one-tinted-gradient
  rule is not binding on the site. Product truth (colors that carry meaning,
  e.g. the four content-type colors and typed-relation hues) should stay
  truthful when shown.
- Voice in current copy: first-person, plain, concrete, anti-hype ("Claude, in
  my case"; "nothing here leaves your device today").

## Evidence on Hand

- Real: the app's fonts (`site/assets/fonts/`), favicon/OG marks
  (`site/assets/`), the app-derived token sheet (`site/styles.css`), and the
  feature descriptions in `index.html` copy (notes/wiki-links/backlinks,
  journal with streaks/prompts/voice memos, typed graph, share extension, web
  clipper, MCP server, home widgets).
- Absent — never fabricate: testimonials, user counts, press quotes,
  screenshots of the real app, App Store id, TestFlight invite URLs, pricing.

## Product Principles

1. **The link is the product.** Every page decision is judged by whether it
   moves a visitor to a working install link with accurate expectations.
2. **Say only what the app does.** Copy mirrors real capabilities and the
   settings pane's own privacy claim; no aspirational features, no invented
   proof.
3. **Meaning-bearing color stays truthful.** The four content-type colors and
   typed-relation hues encode facts about the app; when shown, they match the
   app. Chrome and expression around them may evolve.
4. **Launch-day changes are mechanical.** Anything that flips at release stays
   tagged and enumerated so the swap is a find-and-replace, not a redesign.
5. **Serve all four doors.** A stranger, an MCP hunter, a reviewer, and an
   invited friend each find their path without the page splitting into
   personas.
