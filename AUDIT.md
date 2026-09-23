# a textured word — Phase 1 audit

Read-only. Nothing in `src/` was changed to produce this.

**How it was measured**
- Read every file in `src/`, plus `astro.config.mjs`, `package.json`, `public/`, `CLAUDE.md` and the relevant parts of `docs/brief.md` and `docs/implementation-status.md`.
- Ran `npm run build`: it passes, 21 routes, no warnings.
- Served `dist/` and ran Playwright over 14 public routes at 390px and 1440px. For every visible element it recorded the computed colour, font, size, radius and shadow, measured text contrast against the real composited background, and listed the heading outline, overflow, console errors and images.
- Throttled runs (slow 4G, 4× CPU, 390px) for LCP, CLS and bytes on `/`, `/narration`, `/about`.
- Crawled `dist/` for internal links that go nowhere.

Counts in §3 are **rendered element counts summed over the 28 page renders**, not source occurrences. They show how much each value is used, not how many times it was written.

---

## 0. Summary

The codebase is in better shape than "spaghetti" suggests. The tokens are real and mostly respected: there are **no hardcoded hex values** outside the token and variant files, **no `box-shadow`** anywhere, **no `#000`**, and **no text contrast failures** on any live page. Headings are in order on every page. It builds cleanly, and JS is small.

The problems are of three kinds:

1. **Dead weight and drift.** About 1,300 lines of code serve only internal review pages for decisions already made. Six self-hosted font files are never loaded. `CLAUDE.md` describes a site that no longer exists (a Selector, Player and Accordion; `/services/*` routes; Netlify Forms).
2. **Re-implementation instead of reuse.** The same mono-label recipe is written by hand about 14 times. The framed-image treatment exists 3 times, and the hero layout is copied between the hub and the spokes. The `.t-*` type classes exist, but live pages barely use them.
3. **The brand's central idea is barely visible.** The site is called *a textured word*, yet it renders as a clean, flat, near-white editorial template. The palette has drifted paler and cooler than the brief. The black-and-white photography sits cold against warm paper. Both signature moments (the pencil-in logo and the service selector) have gone. The one tactile device, a 3% grain, is effectively invisible.

---

## 1. Code

### 1.1 Structure

```
src/
  layouts/Base.astro         head, header, footer, grain, scroll-fade script (461 lines)
  components/                12 components — see §2. Two of them are really page templates.
  pages/                     21 routes: 11 public, 2 redirects, 3 review, specimen, variants, 404, thank-you
  content/                   5 JSON files (site.json is the real SSOT; home.json is legacy)
  styles/tokens.css          tokens + reduced-motion overrides + the grain overlay rule
  styles/global.css          reset, type, layout primitives, patterns, scroll fade (1,070 lines)
  styles/variants/*.css      three colour variants, only used by /variants
```

- **Page templates live in `components/`.** `HomePage.astro` renders `<Base>` itself and `ServicePage.astro` is a whole page body. `ContentLayout.astro` is a layout, but it sits in `components/`. These belong in `layouts/` or in the pages.
- **`tokens.css` holds more than tokens.** It also has the `.grain` component rule and a global `* { animation-duration … !important }` block.
- **`global.css` is a single 1,070-line file.** It mixes the reset, the type scale, layout primitives, component patterns (`.card`, `.panel`, `.subblock`, `.steps`, `.rows-dl`, `.credentials`) and the scroll-fade system. The section numbers skip 6 and 8.
- **Scripts are spread around.** The scroll-fade script is in `Base.astro`, the nav script in `NavMenu`, the audio script in `AudioPlayer` and the form script in `ContactForm`. That is fine for Astro. But the fade script lists **component class names from all over the site** (`.rows-dl__row`, `.agreements > *`, `.content-grid > li` …) as a hardcoded selector array. Every new component therefore has to be registered in the layout.

### 1.2 Dead code

| Item | Size | Evidence |
|---|---|---|
| `components/HomeSections.astro` | 936 lines | Used only by `/variants`. It is the pre-hub home: hero selector, about strip, services grid. |
| `content/home.json` | 105 lines | Used only by `HomeSections`. It links to `/services/teaching`, `/services/voice` and `/services/writing`, which **don't exist**. |
| `pages/variants.astro` + `styles/variants/*.css` | 221 + 116 lines | A colour-variant demo. Its "Variant A — current" swatches (`--paper #F7E9DE`, `--coconut #D5CBC0`) **don't match the live tokens** (`#FFFAF6`, `#F6E9DF`), so it mislabels the live site. |
| `pages/specimen.astro` | 89 lines | Internal specimen. It links to `/work`, which doesn't exist. Phase 3's `/styleguide` supersedes it. |
| `pages/review/brand-a,b,options.astro` + the `brandTreatment` prop and styles in `HomePage` | ~40 lines | Brand-size review harness. The decision is still open per `implementation-status.md`, so remove it **once decided**, not now. |
| `public/fonts/*.woff2` (Cormorant Garamond, Jost, JetBrains Mono) | 144 KB, 6 files | **Never referenced.** No `@font-face` points at them. |
| `screenshots/*.png` | 2.7 MB, 9 files | Captures of the old variants. Committed to the repo, but nothing uses them. |
| Unused JSON keys in `site.json` | 10 keys | `reels`, `reelsHeading`, `reelsPlaceholder`, `studioPlaceholder`, `examplesPlaceholder`, `swapHeading`, `about.reflectionFlag`, `reflectionHeading`, `reflectionPlatforms`, `openToHeading`. |
| Unused type classes | — | `.t-hero`, `.t-display`, `.t-h1`, `.t-h2`, `.t-h3`, `.t-quote`, `.t-mono`, `.t-mono-lg`, `.stack--wide` and `.placeholder` are not used on any live page. Components re-type the same declarations instead (see 1.3). |
| `.placeholder` pattern | — | Only on the dead pages. No live page renders a slot-map placeholder any more. |
| `Base.astro` `<slot name="head" />` | — | Nothing fills it. |
| `ContactForm` server-side `?about=` preselect | 2 lines | `Astro.url.searchParams` is always empty in a static build. The client script does the real work. |
| Two view-transition systems | — | `@view-transition { navigation: auto }` in CSS **and** `<ClientRouter />` (16 KB). ClientRouter intercepts navigation, so the CSS rule never runs. Neither does the `body { animation: page-enter }` "fallback". |
| `@keyframes page-enter` on `body` | — | Fades the **entire page, LCP included,** from opacity 0 on every load. |

### 1.3 Duplication

- **The mono-label recipe is written by hand about 14 times:** font-family, 12px, 0.14em tracking, uppercase, the negative end margin and tabular numerals. It appears in `.marker`, `.slug`, `.hero__audience`, `.pillar__state`, `.credentials__body`, `.rows-dl__label`, `.rows-dl__price`, `.steps__number`, `.subblock__heading`, `.form__label`, `.form__note`, `.form__error`, `.audio-player__time`, `.testimonial footer`, `.site-footer__heading`, `.site-footer__legal` and `.content-grid span`. They have already drifted: line-height is `1.2` in some and `1.5` in others, and only some carry the trailing-tracking fix.
- **The framed image exists 3 times.** `.frame` + `::after` and `.band-media` + `::after` are in `global.css`. `.hero__media` + `::after` + `img` is copied identically into both `HomePage` and `ServicePage`, except that only the spoke copy adds `filter: contrast(1.02)`.
- **The hero is laid out twice.** The tablet 7fr/5fr override and the ≥1280px column placement are copied between `HomePage` and `ServicePage`. `.hero__eyebrow` (hub) and `.hero__pillar` (spoke) are the same style under two names. `.hero__headline` re-implements `.t-display` in one file and `h1` in the other.
- **The credentials list markup is copied** into `HomePage` and `about.astro` (and the dead `HomeSections`).
- **There are six link-underline treatments:** bare `a`, `.link-rule`, `.btn--quiet`, footer links, `.content-grid span` and `.pillar__state`.
- **Content navigation is defined twice.** `ContentLayout` hardcodes the five content routes, and `global.json` `nav.items[content].children` lists them again with different labels ("Intro" vs "introduction").
- **The content-route cards** in `content/index.astro` hardcode their titles and descriptions, a third copy of the same list.
- **Four content sub-pages hand-roll their hero** as `<section class="page-hero"><div class="container stack">` with no editorial grid. See §3.8 for how this breaks alignment.

### 1.4 Components doing too much

- **`ServicePage.astro` (573 lines).** One template renders all three spokes and branches on `service.id === 'narration'` / `'repurposing'` in four places. It also:
  - hardcodes section labels ("Voice portfolio", "Further details", "Portfolio", "Other services");
  - hardcodes one sentence of copy ("Selected long-form and short-form examples will be shared here.") and one link label ("Discuss your source material");
  - **string-splits a JSON paragraph on "The Television Workshop"** to inject a link.

  Copy and links belong in JSON.
- **`Base.astro` (461 lines)** holds the document head, header, footer and the global scroll-fade engine. The footer alone is ~190 lines of scoped CSS.
- **`HomePage.astro`** is a page with inline copy: the whole "The name" section ("Words aren't flat. They're *textured.*", the “Texture” paragraph and the mission line), plus "Notes on books and language" and "Explore the literary ecosystem". That breaks the project rule that copy lives in `src/content/*.json`.
- **`PillarCards.astro`** hardcodes a `treatments` map of copy ("learn the words.", the service lines) and the display order.

### 1.5 Props

- `ServicePage`: `service: Record<string, any>`. The props are untyped, so every `service.foo?.length > 0` is unchecked.
- `narration.astro` passes `service` without the `!` that the other two pages use. It is harmless at build, but inconsistent.
- `Button` and `Tag` accept `[key: string]: unknown` and spread it onto the element. That is flexible, but typos pass silently.
- `HomePage`'s `brandTreatment` prop exists only for review pages. It is a review concern leaking into the production template.
- `AudioPlayer` takes `src` but not the `duration` the project rules require ("durations come from the content JSON").

### 1.6 Hardcoded values that should be tokens

The token discipline is good. The remaining literals are:
- **30 unitless line-heights** outside the token ladder: `1.2`, `1.3`, `1.35`, `1.4`, `1.5`, `1.55`, `1.6`. The ladder has `--lh-tight 1.2` and `--lh-lead 1.6`, but mid values like 1.35, 1.4 and 1.5 have no names.
- **Touch targets:** `44px` appears ×6, `min-height: 44px` in four components.
- **Breakpoints don't form a set:** 480, 767/768, 1023/1024, **1100** (ServicePage only), 1279/1280. CSS can't tokenise media queries, but the set should be fixed and documented.
- `NavMenu`: `margin-right: -14px`, `min-width: 12rem`, and the chevron's `8px` / `1.5px`.
- `.rows-dl` `14rem` label column, `.hero` `88vh` (dead), `220px` (dead).
- `opacity: 0.45` for disabled controls, ×2.
- `Tag`: `calc(var(--s-2) - 0.14em)`, a literal copy of `--track-mono`.
- `image-settle` delay `120ms` and `filter: contrast(1.02)`.
- `color-mix(in srgb, var(--paper) 16% / 18% / 40% / 45%, …)`: four footer and band hairline tints invented inline. The site-wide rules got named tokens (`--rule`, `--rule-strong`), but these didn't.

### 1.7 Dependencies and config

- `package.json` has 3 dependencies: `astro`, `@fontsource-variable/fraunces` and `@fontsource-variable/inter`. All are used. **No unused npm dependencies.**
- **Deploy targets conflict.** `CLAUDE.md` says Netlify with Netlify Forms, `.vercelignore` says Vercel, and `.openai/hosting.json` says a third host. The contact form is actually a `mailto:` form. Pick one before Phase 6.
- The `astro.config.mjs` comment says "One stylesheet rather than per-page `<style>` blocks", but the build emits **4–5 render-blocking CSS files per page** (Base, SectionMarker, PillarCards, HomePage …).
- `tsconfig.json` extends `strict`, but nothing type-checks (by design, per `CLAUDE.md`).
- **Build warnings: none.**

### 1.8 `CLAUDE.md` is out of date

It lists `components/: Selector, Player, Tag, Button, Accordion`, `pages/services/*`, `reflection` and `work`, "Netlify Forms", a `role="slider"` scrubber with pointer events, and `preload="none"`. None of these match the code:
- there is no Selector, Accordion or Player-with-slider;
- the routes are flat (`/teaching`, `/narration`, `/repurposing`, `/content/*`);
- the form is mailto;
- the player uses a native range input and `preload="metadata"`.

Future agents working from it will make wrong assumptions. I recommend updating it in Phase 2, with your approval, because it's your instructions file.

---

## 2. Components

| Component | What it does | Broken / fragile | Recommendation |
|---|---|---|---|
| `Button` | `<a>`/`<button>`, three variants | Sound. `rest` spread is untyped. The quiet variant re-implements `.link-rule`. | **Keep.** Make `.link-rule` and `btn--quiet` one thing. |
| `Tag` | Mono chip | Sound. Hardcoded `0.14em`. Only used for voice tags and content tags. | **Keep.** |
| `SectionMarker` | Mono gutter label, optionally a heading | Sound. It re-types the mono recipe. | **Keep** as the owner of the mono-label style. |
| `NavMenu` | Primary nav, mobile disclosure, submenus | **The server renders `data-ready="true"`.** If JS is enabled but the script fails or is blocked, the mobile menu stays collapsed behind a toggle that does nothing. `<noscript>` only covers JS that is disabled. It also adds a document-level click listener on every `astro:page-load` (`data-bound` guards the nav, but ClientRouter swaps the nav, so listeners pile up on `document`). | **Keep.** Render `data-ready` from JS, and move the document listener outside the per-nav loop. |
| `PillarCards` | The three service cards (hub = full, spoke = compact with "You are here") | Copy is hardcoded in the component. Each service goes by three names in one card (TEACH / "learn the words." / "Teaching — KS3 …"). The `aria-label` overrides the visible text. | **Keep.** Move `treatments` into `site.json`. |
| `AudioPlayer` | Native `<audio>` with a custom play button and range | `preload="metadata"` (the rule says `none`). Durations come from file metadata, not JSON. Each empty slot announces two disabled controls, so the page has **six disabled controls** reading "Voice sample not yet available". The one-player-at-a-time rule is enforced. | **Keep.** Add `duration` to JSON and `preload="none"`, and render an empty slot as a single status line rather than dead controls. |
| `ContactForm` | Enquiry form, client validation, builds a `mailto:` URL | It depends on the visitor having a mail client, so a submission can silently go nowhere, which hurts conversion. It contradicts the documented Netlify Forms setup. The `role="alert"` error spans sit **inside** the `<label>`, so error text becomes part of the field's accessible name. The server-side preselect is dead code. | **Keep.** Deciding the form backend is your call. |
| `ContentLayout` | Wraps `Base`, adds the content sub-nav | Hardcoded route list that duplicates `global.json`. It lives in `components/` but is a layout. Its inline `a {}` rule styles every link in the sub-nav. | **Move** to `layouts/` and read the nav from `global.json`. |
| `LibraryStrip` | "Library" links strip on `/content` | Both links are null, so it renders two "coming soon" labels. Fine. | **Keep** (or fold into the content page). |
| `HomePage` | The hub page | A page in `components/`, with inline copy and review-harness props. | **Move** into `pages/index.astro`. Extract `Hero` and `Credentials`. |
| `ServicePage` | All three spokes | See 1.4. | **Split** into `ServiceHero`, `ServiceSection` wrappers and data-driven sections, with no `service.id` branches. |
| `HomeSections` | Legacy home | Dead. | **Delete.** |

**Missing components**, where markup repeats today:
- `Hero` (eyebrow + headline + lead + media);
- `Figure` / `FramedImage` (the three frame variants);
- `Credentials`;
- `Section` (the `section > .container.editorial > SectionMarker + body` shell, which appears about 35 times).

---

## 3. Brand audit

### 3.1 The brief's personality (from `docs/brief.md` §1)

> *Words are not flat. They have grain.* Feel on landing: **calm, assured, unhurried**. Think about her: **competent, graceful, composed, well read**. Explicitly not: loud, busy, clinical, corporate-agency. Atmosphere: "a luxury waiting room that is warm rather than sterile… a considered private practice."

### 3.2 Colours in use (rendered)

| Value | Token | Where | Count |
|---|---|---|---|
| `#241C1A` | `--ink` | text | 484 |
| `#5A4E48` | `--ink-soft` | text | 324 |
| `#8F4530` | `--clay-ink` | text | 296 |
| `#8F4530` | `--clay-ink` | bg (primary button) / border | 10 / 10 |
| `#FFFAF6` | `--paper` | text on footer (+ page bg) | 234 |
| `#F6E9DF` | `--coconut` | footer secondary text | 112 |
| `#F6E9DF` | `--coconut` | band bg, frames | 54 |
| `#FFFFFF` | `--paper-lift` | inputs, skip link | 38 |
| `#5B3B4E` | `--surface-dark` (plum) | footer bg | 28 |
| `#FFFAF6` @ 66% | `--surface-card-band` | cards on bands | 16 |
| `#241C1A` @ 14% | `--rule` | hairlines | 214 |
| `#241C1A` @ 22% | `--rule-strong` | section hairlines | 128 |
| `#FFFAF6` @ 18% | inline mix | footer rules | 28 |
| `#AF593E` | `--clay` | only `::before`/`::after` marks, list dashes, hover borders | pseudo-elements, not counted |
| `#5F8A8B` | `--teal` | `accent-color` on audio range (disabled on every page today) | — |
| `#6D7456` | `--olive` | **unused** | 0 |
| `#5B3B4E` | `--plum` | **unused** (a duplicate of `--surface-dark`) | 0 |

**Inconsistencies**
- **The palette has drifted from the brief.**
  - Brief `--paper` is `#F7E9DE` (a warm Albescent White); live is `#FFFAF6`, near white.
  - Brief `--coconut` is `#D5CBC0` (a real stone band); live is `#F6E9DF`.
  - The tonal step between paper and band has fallen from **1.34:1 to 1.16:1**, so section banding reads as a faint pink wash rather than a considered change of surface.
  - `--paper-lift` is now pure `#FFFFFF`, which the brief doesn't have.
  - The commit history doesn't record a client decision for any of this. `/variants` still presents the brief values as "current".
- **The footer plum is the most saturated area on every page, and it relates to nothing else.** No other element uses plum, so the footer reads as a different site rather than a closing chord.
- Two unused tokens (`--olive`, `--plum`) and one alias pair (`--plum` and `--surface-dark` are the same hex).
- Four footer hairline alphas (16/18/40/45%) are invented inline.

### 3.3 Fonts and weights in use (rendered text nodes)

| Face | Weight / style | Count | Role |
|---|---|---|---|
| Inter Variable | 400 | 636 | body |
| Inter Variable | 500 | 180 | h3, buttons, emphasis |
| "JetBrains Mono" (**not loaded**) | 400 | 444 | labels |
| Fraunces Variable | 400 | 74 | h2, hub hero, pillar names |
| Fraunces Variable | 300 | 54 | h1, footer wordmark |
| Fraunces Variable | 300 italic | 52 | pillar sub-lines, footer tagline |
| Fraunces Variable | 400 italic | 10 | hero eyebrow |

- **JetBrains Mono is never loaded.** `--font-mono` names it, but there is no `@font-face` and no Fontsource package. Its woff2 files sit unused in `public/fonts/`. The site's **second most common text style** therefore renders in whatever monospace the OS has: SF Mono on macOS, Consolas on Windows, DejaVu Sans Mono on Linux, Droid/Roboto Mono on Android. The "specimen card" utility voice is different on every device.
- **The fonts differ from the brief**, which recommended Cormorant Garamond + Jost + JetBrains Mono. However, `implementation-status.md` records that the **client approved Fraunces + Inter on 17 Sept**. Your ground rules say "no Inter-everywhere", so that approval is a conflict you'll need to resolve (see Phase 3).
- **Two h3 styles:** Inter 500 24px for real `<h3>`, and Fraunces 400 24px for `.pillar__name` and `.agreement__heading`.
- **The hero headline weight differs between hub and spokes:** 400 on the hub, 300 on the spokes. Both are the page's H1.
- **Italic Fraunces (80 KB) loads on every page** for one eyebrow line and the footer tagline.

### 3.4 Type sizes (rendered)

At 390 and 1440: 12, 15, 17, 18, 20, 21, 24, 28, 36, 40, 44, 62.4, 64 px, plus strays at 12.5 and 14.17 px from `<small>`.

- **12px is the most-used size on the site** (432 nodes), and every one of them is tracked uppercase mono. At `--ink-soft` it passes contrast (6.75:1), but it is the hardest text to read, and there's too much of it: gutter markers, audience lines, credential bodies, row labels, prices, form labels, footer headings and the legal line. The mono is carrying hierarchy that type size should carry.
- **`--t-h1` (64px) and `--t-display` (62.4px) are effectively the same size** under two tokens, and `--t-hero` (96px) is unused.
- **The steps don't follow a ratio.** At desktop, h2 → h3 is 44 → 24 (×1.83), h3 → lead is 24 → 21 (×1.14) and lead → body is 21 → 17 (×1.24). Nothing sits between 24 and 44, so an H2 and its first subordinate head are far apart while body and lead nearly touch.

### 3.5 Spacing

- The scale (4 … 160) is respected. There are no stray pixel paddings on live pages apart from the sanctioned 18px and 14/20px (and the latter only in dead code).
- **Section rhythm doesn't change.** Every section gets 128px top and bottom (96 on tablet, 64 on mobile), whatever it contains. A section holding one sentence ("Testimonials will be added here…") gets the same 256px of air as the pricing grid. `/narration` is **6,951px tall** at 1440, and a lot of that is empty stripes.
- **The layout collapses late.** The 12-column editorial grid only switches on at ≥1280px, so at 1024–1279 (a common laptop width) the page is one column with an 88px gutter.

### 3.6 Radii, borders, shadows

- Radii: `2px` ×86 (buttons, inputs, tags) and `10px` ×6 (audio players). Consistent with the brief.
- Borders: 1px hairlines everywhere. Good.
- **Shadows: none.** Compliant.
- One inconsistency: `.card` is square (radius 0), but the rules say "10px for cards". The brief says cards are 10px, and the code comment says "only navigation is boxed". Decide one way.

### 3.7 Imagery

- There are four photographs, all **black-and-white portraits of the client**, all 2200×1466 (3:2). They are consistent and personal, and they are the strongest brand asset on the site.
- **They're cold against warm paper.** The brief (§2.7) asks for a `--clay` 6% multiply over photography so that everything "sits in one world". It isn't implemented, so neutral grey sits on pinkish white.
- **Crops.** Three of the four are shown at 4:5 in a 3:2 source (object-fit crop, positioned by hand with `imagePosition`). The fourth is a 16:6 letterbox.
- **The same photo does two jobs.** The hub hero and the Narration hero use the same photo (`aneesa-portrait.webp`), so the first two pages a narration client sees open identically.
- There is no texture imagery, which the brief planned for the selector panels. Per `implementation-status.md` it's optional and needs your approval.

### 3.8 Composition

- **The hero has no anchor in the gutter.** Content starts at column 3, but the hub hero has no section marker in columns 1–2, so the headline floats right of the wordmark with nothing holding the left edge. On spokes the `03 — NARRATE` slug does this job, and it looks better.
- **Every section repeats the same pattern:** mono marker, H2, lead, then a list or link, alternating paper and band. It's calm, but after the third repetition it's monotonous, and **no section has a clear focal point** apart from the hero.
- **Some headlines run long.** The hub H1 runs 5 lines at 1440 and 5 lines at 390, which is long for a masthead. The copy is fixed, so the fix is compositional (measure and scale).
- **The four content sub-pages** (Substack, YouTube, Socials, Collaborations) skip the editorial grid. Their H1 sits at the page gutter, 2 columns left of every other page's H1.
- **The mobile header takes about 135px:** wordmark and outlined CTA on row 1, then a full-width "menu" row with a rule. That's 16% of an 844px viewport before content.
- **The pillar cards are the most complex object on the hub:** a mono tag, a 44px serif line, an italic sub-line, a paragraph, and then a mono exit line. That's five type styles in one card.

### 3.9 Tone of voice

- The copy is warm, first-person, British and unhurried, which matches the brief. The brand name is consistently lowercase.
- **Casing drifts across nav, footer and sub-nav.** Nav labels are lowercase ("about", "teach"), but submenus mix "Substack" and "YouTube" with "introduction". Footer links are sentence case ("Teaching"), footer headings are lowercase in source but uppercased by CSS, and the sub-nav says "Intro". "Explore Content" has a capital C mid-sentence.
- **Each service has several names:**
  - Teaching: nav "teach", card tag TEACH, card title "learn the words.", page H1 "English teaching", CTA "Enquire about **tuition**", form topic "English **tuition**", with `/tuition` redirecting.
  - Narration and Repurposing: the same spread.

  That's a content decision for you, not something I'll change.
- **Terminal punctuation is inconsistent.** Some headings end in a full stop ("Let's talk about what you need.", the hub H1, 404, thank-you) and most don't.

### 3.10 Does the look express the brand?

**Where it works:**
- It is calm, composed and well-read. It avoids the agency-template look.
- The editorial offset and mono gutter markers give it the "private practice" and "specimen card" feel.
- Hairlines instead of boxes, restrained colour, a good serif at display size and black-and-white portraiture all read as graceful and assured.

**Where it fails:**
1. **"Texture" is asserted in copy but never shown.** The name promises grain, and the site delivers flat vector fields:
   - the grain is 3% (the brief's number), but multiplied over near-white paper it's imperceptible;
   - the pencil-in logo (brief §1.4, "the site's signature moment") was never built;
   - the selector (brief §6.1.2, "the signature element") was removed in the hub rebuild;
   - there are no textural surfaces, image treatments or type details.

   The visual system could belong to any tasteful consultant.
2. **It's paler and cooler than the brief.** The drift toward white turns "warm luxury waiting room" into "clean", and the brief explicitly lists **clinical** as something the site must not be.
3. **The accent never lands.** Clay appears only as 12px text, 2px marks and one button per page. Nothing at display size uses terracotta, so there's no memorable colour moment. The footer plum is louder than the brand accent.
4. **The type system is generic at text size.** Inter is capable but anonymous. A non-loaded mono means the most brand-specific voice (labels) is a system fallback.
5. **The rhythm is uniform.** Identical section shells at identical spacing make long pages feel like a document rather than a composed sequence, and the placeholder sections (audio pending, testimonials pending) get full-weight treatment.

---

## 4. Typography

| Aspect | Finding |
|---|---|
| **Hierarchy** | H1 (64/300) → H2 (44/400) → H3 (24/500 **sans**) → lead (21) → body (17) → mono (12). Too big a gap from H2 to H3, and too small a gap from H3 to lead to body. H3 changes family (serif to sans) while the card "h3s" stay serif, so two tiers compete. Section markers carry the real section names on spokes (as `<h2>`), but at 12px they're visually the weakest text on the page. |
| **Measure** | Capped by `--measure: 68ch`. But `ch` is the width of "0" in Inter, which is wider than the average lowercase glyph, so paragraphs actually run **73–85 characters per line** at 1440 (measured: home 76, intro 77, narration 85). The project rule is 68 characters. At 390: 41–49. |
| **Line-height** | Body 1.7, lead 1.6, h2 1.1, h1 1.02, display 0.94. Body 1.7 at 17px is generous, which suits "unhurried". There are 30 stray literal line-heights (see 1.6). Mono labels use both 1.2 and 1.5. |
| **Letter-spacing** | A proper tracking ladder is tokenised (−0.028em → +0.14em). Good. |
| **Scale consistency** | Fluid `clamp()`s with no shared ratio. Two tokens are within 1.6px of each other (`--t-h1` / `--t-display`). `--t-hero` is unused. |
| **Wrapping** | `text-wrap: balance` is on h1–h3 and `.t-*` display, and `pretty` is on `p`. It's already in place. `max-inline-size: 20ch` on every h2 is aggressive: "Words aren't flat. They're textured." is forced to 15ch. |
| **Kerning / features** | Kerning, ligatures and optical sizing are set once on `body`. Good. |
| **Font loading** | Fontsource `@font-face` with `font-display: swap`. **No `<link rel="preload">`**, so fonts are discovered only after `Base.css` parses. **No fallback metric overrides** (`size-adjust`, `ascent-override`), so the swap from Georgia to Fraunces on a 5-line 62px headline can shift layout (measured CLS 0.02 on `/`: within budget, but that's the source). Fonts are **193 KB of the ~300 KB first load (64%)**: Inter latin 47 KB, Fraunces opsz 66 KB, Fraunces opsz italic 80 KB. Fontsource also emits cyrillic, greek and vietnamese subsets. `unicode-range` stops them downloading, but they're 12 extra files in `dist/`. |

---

## 5. Performance and accessibility quick check

### 5.1 Performance (390px, slow 4G, 4× CPU, local server without compression)

| Page | LCP | LCP element | CLS | Transfer |
|---|---|---|---|---|
| `/` | **1.90 s** | hero `<img>` | 0.020 | 299 KB |
| `/narration` | **1.94 s** | hero `<img>` | 0.000 | 314 KB |
| `/about` | **1.86 s** | portrait `<img>` | 0.000 | 301 KB |

- **LCP is right at the 2.0 s budget.** Things that push it:
  1. the `body` page-enter fade from opacity 0;
  2. the hero `enter-softly` animation on the LCP image (760 ms from opacity 0, plus a delay);
  3. no font preloads;
  4. 4–5 render-blocking stylesheets;
  5. a **2200px-wide image sent to a 390px screen** with no `srcset`.
- **Images don't go through `astro:assets` `<Image>`.** The project rules require it. They're plain `<img>` from `public/`, WebP only, with no AVIF and no responsive sizes. The bytes are small (34–90 KB) because they're heavily compressed, but a 2× phone needs about 780px, not 2200.
- JS: ClientRouter 5.6 KB gz plus about 2.5 KB of inline scripts. Well under the 140 KB budget.
- Home total is about 300 KB, well under the 900 KB budget.

### 5.2 Accessibility

| Check | Result |
|---|---|
| **Text contrast** | **0 failures** across 14 pages × 2 widths, measured against composited backgrounds. The `--clay` / `--clay-ink` split is respected. |
| **Heading order** | Every page has exactly one H1 and no skipped levels. |
| **Focus** | Global 2px `--clay-ink` outline with 3px offset, and a paper-coloured outline on the footer. The `:focus:not(:focus-visible)` reset is safe. |
| **Skip link** | Present, targets `main[tabindex=-1]`. |
| **Alt text** | All four images have descriptive alt text, and the decorative frames are CSS. |
| **Targets** | Nav, buttons, submenu toggles, player and content links are ≥44px. |
| **Reduced motion** | Covered by a token override and a global `!important` guard, and the fade script checks `prefers-reduced-motion`. |
| **Mobile nav without working JS** | ✗ The server renders `data-ready="true"`, so the menu is hidden unless JS **runs successfully** (see §2). |
| **Form errors** | ⚠ The `role="alert"` spans are inside `<label>`, so error text joins the accessible name. |
| **Audio placeholders** | ⚠ Six disabled controls announce the same string. |
| **Pillar card links** | ⚠ `aria-label` replaces the visible text. It passes label-in-name (it starts with the visible title), but screen readers lose the audience line. |
| **Hidden slug** | `aria-hidden` on the spoke "03 — NARRATE" slug is fine (decorative). |
| **Console errors** | None on any page. |
| **Horizontal overflow** | None at 390 or 1440. |
| **Broken internal links** | None on live pages. `/variants` → `/services/*` and `/specimen` → `/work` are dead. |

---

## 6. Prioritised problems

**P0: wrong now, and cheap to fix**
1. **The mono font never loads**, so the labels render in a different system face on every OS. *(fix: Phase 2/4)*
2. **The mobile nav is hidden when JS fails to execute**, because `data-ready="true"` is rendered by the server. *(Phase 2)*
3. **LCP is held back by animation.** The whole-page `body` fade and the hero-image fade-in both start the LCP element at opacity 0, and LCP sits at 1.9 s against a 2.0 s budget. *(Phase 5)*
4. **Images are unoptimised.** Every viewport gets the 2200px original, with no `srcset`, no AVIF and no `astro:assets`, which breaks the project rule. *(Phase 2: this changes markup, not the look)*

**P1: structural debt (Phase 2)**
5. About 1,300 lines of dead code: `HomeSections`, `home.json`, `variants`, `specimen`, the variant CSS, 144 KB of unused fonts, 2.7 MB of stale screenshots, 10 unused JSON keys and a duplicated view-transition system.
6. Hardcoded copy in `HomePage`, `ServicePage`, `PillarCards`, `ContentLayout` and `content/index.astro`, against the rule that copy lives in `src/content/*.json`.
7. `ServicePage` branches on service id and string-splits copy to inject a link.
8. Duplicated primitives: the mono label ×14, framed image ×3, hero layout ×2, credentials ×2, content nav ×3.
9. Untyped `service` prop, and page templates living in `components/`.
10. `CLAUDE.md` describes components, routes and a form backend that don't exist.
11. Three conflicting deploy configs, and a mailto form where Netlify Forms is documented. **Needs your decision.**

**P2: brand expression (Phases 3–4)**
12. "Texture" isn't visible anywhere. Neither signature moment exists, and the grain is imperceptible.
13. The palette has drifted paler and cooler than the brief (band contrast 1.34 → 1.16), toward the "clinical" the brief rules out.
14. Black-and-white photography has no warm treatment, so it sits cold on warm paper.
15. The accent never appears at display scale, and the footer plum is louder than the brand colour.
16. The type scale has no ratio. 12px mono is the most common text size, the H2 → H3 gap is ×1.83, two h3 styles compete, and the hero weight differs between hub and spokes.
17. The measure is really 73–85 characters, not 68.
18. Uniform 128px section rhythm regardless of content, so placeholder sections get full weight and pages run very long.
19. The hub hero has no gutter anchor, content sub-pages break the grid, and the mobile header takes 16% of the viewport.
20. Inter conflicts with your "no Inter-everywhere" rule, but the client approved it. **Needs your decision in Phase 3.**

**P3: polish**
21. The casing of nav, footer and sub-nav labels drifts, and each service goes by several names. That's content, so it's flagged, not changed.
22. `.card` radius (0) contradicts the "10px cards" rule.
23. The form's error-inside-label pattern, the six disabled audio controls, and `preload="metadata"` / JSON durations on the player.
24. Four render-blocking stylesheets per page, no font preloads, and no fallback metric overrides.
