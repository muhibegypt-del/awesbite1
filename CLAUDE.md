# a textured word — project instructions

Boutique personal-brand site for Aneesa: English tutor, voice artist, content repurposer.
Astro + vanilla CSS. No React, no Tailwind, no CSS-in-JS.
Full spec: `docs/brief.md`. Content slots: `docs/slot-map.md`. Read those only when you need detail — do not load them for routine work.

## Stack

- Astro, static output. Zero JS shipped unless a component needs it.
- Vanilla CSS with custom properties. Tokens in `src/styles/tokens.css` — never hardcode a colour or a spacing value.
- Copy lives in `src/content/*.json`, never inline in templates.
- Deploy: Vercel, static (`dist/`). No backend. The enquiry form builds a `mailto:` message on the client; there is no form service.

## Structure

```
src/
  layouts/Base.astro       head, meta, header, footer, grain, photo grades, reveals, menus
  layouts/Service.astro    the three service pages, driven by site.json (no id branches)
  layouts/Content.astro    the content section (adds its contents line)
  pages/                   index (hub), teaching, repurposing, narration, about, contact,
                           content/*, thank-you, 404
                           tuition, writing: redirects to teaching, repurposing
  components/              Header, Footer, Wordmark, PencilMark, Photo, HubHero, Masthead,
                           SectionHead, ServiceList, Honours, EssayBand, Note, PriceList,
                           TrackList, ContactForm, ContentNav
  content/                 all copy as JSON: site.json (hub, services, about, contact),
                           pages.json (page copy and meta), global.json (nav, footer, meta),
                           content-links.json, narration-tracks.json;
                           home.json is the retired pre-hub home, kept as content
  lib/images.js            resolves the JSON's /images/… paths to src/assets/images
  lib/typeset.js           q(): curly quotes and apostrophes at render time
  styles/tokens.css        design tokens — source of truth
  styles/global.css        everything else
public/fonts/              self-hosted WOFF2 (Literata, Instrument Sans) + OFL licences
```

Photographs live in `src/assets/images` and always go through `components/Photo.astro` (astro:assets `<Picture>`, AVIF + WebP, graded). `public/images` keeps one copy for the OG image only.

## Direction

The client chose (September 2026) **Direction B, Printed Matter, with the portrait (`aneesa-portrait.webp`) as the hub hero**. Literata + Instrument Sans, plum as the second key, the photographs graded into the palette. `AUDIT.md` and `BRAND-AUDIT.md` record why; `CHANGES.md` records what changed.

Copy changes still need the client's approval. Typesetting (curly apostrophes via `q()`, line breaks, case transforms) is not a copy change.

## Design rules — do not violate these

- **Never use `#000000`.** Text is `var(--ink)` `#241C1A`. The client explicitly rejected black.
- **Two accent tokens, and they are not interchangeable.** `--clay` `#AF593E` is 3.95:1 on paper: fills, marks and text ≥24px only. Anything smaller uses `--clay-ink` `#8F4530` (5.57:1 on paper, 4.53:1 on band).
- **Plum `--dark` is the second key**: the essay band and the footer only. Photographs are graded into it (`#duotone` in Base.astro). Type sits on a photograph only where there is open wall, and only after measuring contrast against the graded pixels (the hub hero: ink on `#duotone-lift`, about 6:1).
- **No `box-shadow` anywhere.** Depth comes from tone and 1px `var(--rule)` hairlines.
- **One filled button (`.btn`) per viewport**, per page. The header enquiry link is a text link on purpose.
- Spacing only from the scale: 4 8 12 16 24 32 48 64 96 128 160 (`--s-1`…`--s-11`).
- Section rhythm `--sec` 64 / 96 / 128 (phone / tablet / desktop); `--sec-minor` 48 / 64 / 96 for a section holding a line or two.
- Radii: 0 for structure, 2px for fields and buttons, 10px for the audio player.
- Two families only. **Literata** for display, headings, leads, pull-quotes and labels (true small caps). **Instrument Sans** for body, UI, nav, buttons and figures. No monospace anywhere.
- Body copy capped at `--measure` (30em, at most 68 characters; essay pages 28em). Never full-width paragraphs.
- Emphasis is italic, not bold.
- Two left edges only: the page edge (grid column 1) and the text edge (column 3).
- Brand name is always lowercase, including in `<title>` and OG tags.
- The client's surname appears nowhere — not in copy, image filenames or metadata.

## Motion

Only: Lenis smooth scrolling (mouse and trackpad; touch stays native), the wordmark inking in (once per session, `sessionStorage` key `atw-inked`), the pencil line under *textured*, scroll reveals (`.reveal`; below the fold only, never the hero), hover states, menu open/close, cross-document view transitions. No parallax, no counters, no autoplay carousels.
**Owner's decision (September 2026): the motion plays for every visitor. `prefers-reduced-motion` is deliberately not honoured.** Do not add reduced-motion paths back without the owner asking. Transition specific properties, never `all`. If the script never runs, nothing is hidden and the page scrolls natively.

## Accessibility

WCAG 2.2 AA. Visible focus on everything: 2px `--clay-ink` outline, 3px offset (paper-coloured on plum). Never `outline: none` without a replacement.
Menus are `<details>` and must work with no JavaScript. Every section is labelled by a heading; a section with only a gutter label renders the label as its `<h2>` (`SectionHead labelAs="h2"`). One `<h1>` per page.

## Audio player

- `preload="none"` on every `<audio>`. Nothing downloads until someone presses play.
- One page-level controller: starting a track pauses any other.
- The scrubber is a native `<input type="range">` (keyboard and touch for free) with live `aria-valuetext`. Its fill is `--teal` `#5F8A8B` — the only cool colour on the site, used nowhere else.
- A track without a `src` renders as a quiet row with its pending tag.

## Performance budget

LCP < 2.0s mobile. CLS < 0.05. Home under 900KB, JS under 140KB gzipped.
Literata roman and Instrument Sans are preloaded; their fallback faces are metric-matched in `global.css` so the swap does not shift layout.
Calendly and any Instagram script load **on interaction only**, never on page load.

## Content

Unwritten copy stays as its literal placeholder from the slot map. Never write filler copy, never lorem ipsum, never invent a testimonial, a statistic, a client name or studio equipment.
Character limits in the slot map are layout constraints. Do not exceed them.

## Working style

- Match the existing page's structure when building a new one rather than inventing a second pattern.
- Prefer editing an existing component over adding a new one.
- Don't add dependencies without asking. The site builds with Astro and Lenis (smooth scroll, approved by the owner) and nothing else.
- No TypeScript. `astro check` is unavailable — do not add `@astrojs/check` or `typescript`, and don't add a `check` script. (`interface Props` and inline annotations inside `.astro` files are fine; Astro strips them at build with no dependency. Nothing type-checks them.)
- Don't create README or docs files unless asked.
