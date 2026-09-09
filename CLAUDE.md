# a textured word — project instructions

Boutique personal-brand site for Aneesa: English tutor, voice artist, content repurposer.
Astro + vanilla CSS. No React, no Tailwind, no CSS-in-JS.
Full spec: `docs/brief.md`. Content slots: `docs/slot-map.md`. Read those only when you need detail — do not load them for routine work.

## Stack

- Astro, static output. Zero JS shipped unless a component needs it.
- Vanilla CSS with custom properties. Tokens in `src/styles/tokens.css` — never hardcode a colour or a spacing value.
- Copy lives in `src/content/*.json`, never inline in templates.
- Deploy: Netlify. Forms via Netlify Forms (`data-netlify="true"`), no backend.

## Structure

```
src/
  layouts/Base.astro        header, footer, grain overlay, meta
  pages/                    index, about, services/*, reflection, work, contact
  components/               Selector, Player, Tag, Button, Accordion
  content/                  all copy as JSON
  styles/tokens.css         design tokens — source of truth
```

## Design rules — do not violate these

- **Never use `#000000`.** Text is `var(--ink)` `#241C1A`. The client explicitly rejected black.
- **Two accent tokens, and they are not interchangeable.** `--clay` `#AF593E` fails WCAG at small sizes (4.09:1). Use it only for fills, marks, and text ≥24px. Anything smaller uses `--clay-ink` `#8F4530` (5.77:1).
- **No `box-shadow` anywhere.** Depth comes from tone and 1px `var(--rule)` hairlines.
- **One primary button per viewport**, per page.
- Spacing only from the scale: 4 8 12 16 24 32 48 64 96 128 160. Two deliberate exceptions, both from the brief and nowhere else: the header logo's 18px lockup offset (§1.4), and selector tab padding of 14px 20px (§6.1.2).
- Tablet section rhythm is 96px, not the 80px in brief §4.2 — 80 is not on the spacing scale, and the brief says err upward.
- Radii: 0 for structure, 2px for inputs/buttons, 10px for cards and the player.
- Body copy capped at 68 characters. Never full-width paragraphs.
- Mono (JetBrains Mono) is for labels, metadata, prices, section markers only. Never body copy, buttons or nav.
- Brand name is always lowercase, including in `<title>` and OG tags.
- The client's surname appears nowhere — not in copy, image filenames or metadata.

## Motion

Only: logo pencil-in (once per session, `sessionStorage` flag), scroll reveals, hover states, selector cross-fade, modal enter/exit. No parallax, no counters, no autoplay carousels.
Every animation must have a `prefers-reduced-motion: reduce` path. Transition specific properties, never `all`.

## Accessibility

WCAG 2.2 AA. Visible focus on everything: 2px `--clay-ink` outline, 3px offset. Never `outline: none` without a replacement.
The hero service selector is a real ARIA tablist — arrow keys, Home/End, `aria-selected`.
The audio player scrubber is `role="slider"` with working arrow keys and live `aria-valuetext`.

## Audio player

- `preload="none"` on every `<audio>`. Durations come from the content JSON, not from file metadata.
- One page-level controller: starting a player pauses any other.
- Scrubber fill is `--teal` `#5F8A8B` — the only cool colour on the site, used nowhere else.
- Pointer events, not mouse events, so dragging works on touch. `setPointerCapture` on the handle.

## Performance budget

LCP < 2.0s mobile. CLS < 0.05. Home under 900KB, JS under 140KB gzipped.
All images through Astro's `<Image>` to AVIF/WebP with explicit width and height.
Calendly and any Instagram script load **on interaction only**, never on page load.

## Content

Unwritten copy stays as its literal placeholder from the slot map, e.g. `[ HERO HEADLINE WILL GO HERE — 4 words max ]`, styled mono in `--clay-ink`. Never write filler copy, never lorem ipsum, never invent a testimonial, a statistic, a client name or studio equipment.
Character limits in the slot map are layout constraints. Do not exceed them.

## Working style

- Match the existing page's structure when building a new one rather than inventing a second pattern.
- Prefer editing an existing component over adding a new one.
- Don't add dependencies without asking. The site should build with Astro and nothing else.
- No TypeScript. `astro check` is unavailable — do not add `@astrojs/check` or `typescript`, and don't add a `check` script. (`interface Props` and inline annotations inside `.astro` files are fine; Astro strips them at build with no dependency. Nothing type-checks them.)
- Don't create README or docs files unless asked.
