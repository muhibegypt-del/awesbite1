# a textured word — what changed, and why

The redesign on `implementation/atw-action-brief-visual-polish`, from audit to QA. The reasoning behind each decision is in `AUDIT.md` (code, components, typography, motion) and `BRAND-AUDIT.md` (brand and visual, with measurements). This file records what was done and what is still open.

**No copy was rewritten.** Every string on the site is the client's wording, moved out of the templates into JSON and checked byte for byte. The only changes to text are typesetting: curly apostrophes and quotes (applied at render time, the JSON is untouched), line breaks and letter case.

---

## 1. Direction

The client chose between two element collages. She picked **Direction B, "Printed Matter", with Direction A's portrait as the hub hero**.

- The page reads like a well-made printed object: warm uncoated paper, one serif, one sans, true small caps for labels, hairline rules and chapter numerals instead of cards.
- **Plum** is the second key (`--dark #5B3B4E`). It is used for the essay band and the footer only.
- The photographs are graded into the palette with an SVG duotone (plum-black shadows to paper highlights), so image and page are one material rather than stock photos dropped onto a background.
- No two pages open with the same photograph. The portrait leads the hub, the anthology photo leads Narration, and About shows the anthology photo cropped close and upright.

## 2. Typography

| Before | After | Why |
|---|---|---|
| Fraunces + Inter via Fontsource, JetBrains Mono for labels | **Literata** (serif) + **Instrument Sans** (sans), self-hosted | Literata was drawn for long reading: calm, bookish, with real small caps and an italic with character. Instrument Sans is narrow and quiet, so it never competes. Three families became two. |
| Monospace labels and prices | Literata true small caps; prices in the sans with tabular figures | Mono read as "developer template". Small caps read as print. |
| Sizes chosen per component | Nine type roles in `tokens.css` (display, title, h2, h3, entry, quote, lead, body, small), each fluid from 390px to 1440px | One ramp, one leading and one tracking per role, so every page sets type the same way. |
| Full-width paragraphs possible | Body measure 30em (64–68 characters); essay pages 28em | Measured on the rendered pages: no line now exceeds 67 characters. |

- The fonts are subset to Latin and instanced to the weights actually used (Literata roman 300–400, italic 300, Instrument Sans 400–500): about 200KB for all three files. OFL licences ship alongside.
- Each font has a **metric-matched fallback** (size and vertical metrics measured against Times New Roman and Arial). Small caps and italics each have their own fallback face, because the fallback's fake small caps and its italic differ in width from Literata's by about 10%. Before this, the content section's contents line re-wrapped when the font arrived (layout shift 0.207). It is now 0.005.

## 3. Colour, surface and photography

- The tokens were rewritten (`src/styles/tokens.css`): paper, band, lift, ink, soft ink, two clay accents, plum, the photographs' shadow colour, and the teal reserved for the audio scrubber.
- The **clay rule** still holds. `--clay` is used only for marks and text of 24px or more; `--clay-ink` for anything smaller. Every text/background pair on every page was measured at four widths and all pass WCAG AA.
- **The hub hero sets type on the photograph.** This works only because the portrait has open wall behind the headline. That side of the photo gets a lifted grade (`#duotone-lift`) and the italic word is set in ink rather than clay: about 6:1 contrast, measured on the graded pixels, from 1024px to 2560px.
- A fine grain overlay sits on the paper (multiply, 8.5%). There are no shadows anywhere: depth comes from tone and 1px rules.
- Every photograph goes through `astro:assets`: AVIF and WebP at five widths, with explicit dimensions. The source files moved to `src/assets/images`. One copy stays in `public/images` for the social-share image.

## 4. Layout

- **A 12-column grid with named lines and full-bleed rows** (`.bleed`), from 1024px. Every page has two left edges: the page edge, which carries the small-caps gutter labels, and the text edge (column 3), which carries headings and copy.
- **Section rhythm** is 64 / 96 / 128px (phone / tablet / desktop), with a minor rhythm of 48 / 64 / 96px for short sections. Two plain sections in a row share their padding rather than doubling it.
- **Services are chapters, not cards.** A numbered row per service has the large title, its small-caps line, the one-sentence description and a quiet link, and the whole row is clickable.
- **Tablet and laptop (768–1279px) got their own treatment where the desktop layout was cramped:**
  - prices sit on two lines (name and rate, then details and bundles);
  - "What you can expect" puts each heading beside its copy;
  - the credentials sit two across;
  - the footer puts the wordmark on its own row.

  The full desktop arrangements start at 1280px.

## 5. Pages and components

Every page was rebuilt on the new system. URLs and slugs are unchanged, and `/tuition` and `/writing` still redirect.

- **Hub (`/`):** portrait hero, the three services as chapters, the About teaser with credentials, the essay band ("The name") in plum with the reading photograph, the content teaser, and the close with the one filled button.
- **Service pages** (`/teaching`, `/repurposing`, `/narration`) share one layout, `layouts/Service.astro`. The old template branched on the service id; the new one renders a section only when its content exists in `site.json`. Narration puts the voice portfolio first, because producers listen before they read.
- **About, Contact, the content section (hub and five sub-pages), 404 and thank-you** use the same masthead, section heads and rules. The introduction is set as a printed essay: serif body, first-line indents, old-style figures.
- **Removed:** the review/specimen/direction prototype pages and the retired components (HomePage, ServicePage, AudioPlayer, Button, Tag, NavMenu, PillarCards, SectionMarker, ContentLayout, LibraryStrip). The two Fontsource packages were uninstalled. `package.json` now depends on Astro and Lenis only.
- **Retired, not deleted:** `src/content/home.json`, the pre-hub home page copy, kept as content.

## 6. Motion

The earlier complaint was "no fade-in". There were three causes:
1. the Vercel preview was an old build;
2. reduced-motion settings switched every animation off;
3. reveals fired only as blocks reached the bottom edge of the screen.

All three are fixed.

- **Smooth scrolling (Lenis):** mouse-wheel and trackpad scrolling glide to a stop instead of stepping; phones keep their native touch scrolling. In-page links glide to their target. About 6KB of JavaScript in total, bundled with the site. Lenis is the one dependency besides Astro, added at the owner's request.
- **Scroll reveals:** a 900ms fade with a 32px rise on a long, soft ease, staggered 90ms within a group, triggered once a block is about 12% up the screen rather than at the bottom edge, so it happens where the reader is looking. They apply only to blocks that start below the fold, so nothing on first screen ever waits to appear.
- **Everyone gets the motion.** At the owner's request the site no longer tones animation down for visitors whose device asks for reduced motion (iPhone/Mac "Reduce motion", Windows "Animation effects" off). This departs from WCAG 2.2 guidance (2.3.3, a AAA criterion) and can be reversed by restoring the `prefers-reduced-motion` blocks removed in this change.
- **The wordmark "inks in"** once per visit (a left-to-right wipe), and the pencil line under *textured* draws itself on the hub.
- **Cross-document view transitions** give a soft cross-fade between pages in browsers that support them. No router script is needed.
- **If JavaScript fails, nothing is hidden.** This was tested with JavaScript off: all 31 reveal blocks visible, and the phone menu opens (it is a `<details>` element).

## 7. Accessibility

- WCAG 2.2 AA contrast on every page at 390, 768, 1024 and 1440px: 56 page/width combinations, 0 failures.
- One `<h1>` per page. Every section is labelled by a heading; where a section has only a gutter label, that label is the `<h2>`.
- **Keyboard:** the skip link is the first stop on every page, and every stop shows a 2px focus ring (paper-coloured on plum). This was checked by tabbing through all 14 pages at two widths. Clickable service rows ring the whole row for keyboard focus only, not on mouse click.
- Menus and sub-menus work with no JavaScript, close on Escape and on an outside click, and have 44px targets.
- **Audio player:** a native range slider (keyboard and touch come free) with a spoken time readout. `preload="none"`, and one track plays at a time.
- `noindex` pages (404, thank-you) no longer declare a canonical URL.

## 8. Performance

Measured on the production build, phone viewport, throttled to slow 4G with a 4× slower CPU.

| | Budget | Result |
|---|---|---|
| Largest contentful paint | < 2.0s | 0.9–1.1s measured; Lighthouse's simulated estimate 2.1–2.3s |
| Cumulative layout shift | < 0.05 | 0.000–0.017 on every page |
| Home page weight | < 900KB | ~245KB transferred, fonts and images included |
| JavaScript | < 140KB gzipped | ~6KB gzipped, Lenis included; no framework |

Lighthouse (mobile), served with compression as Vercel serves it: **Performance 99, Accessibility 100, Best Practices 100, SEO 100** on the hub, all three services, About, Contact and the content pages.

- The stylesheet (6.6KB gzipped) is inlined into each page, which removes a render-blocking request. Screenshots before and after were pixel-identical.
- The hero image on each page loads eagerly at high priority; every other image loads lazily.
- A broken-link crawl of the build (790 links and anchors) found none broken.

---

## 9. Waiting on the client

These render as visible, deliberate placeholders. Nothing was invented to fill them.

- **Audio samples** for the Narration portfolio (three rows marked "Audio pending"). The player is built and appears as soon as a file path is added to `narration-tracks.json`.
- **Testimonials** for Narration and Repurposing.
- **Repurposing portfolio** examples.
- **Links:** Substack, YouTube, LinkedIn, Instagram, TikTok. Each appears in the footer and content pages automatically once its URL is added to `global.json`; until then there is no dead link.
- **Privacy and terms pages.** The footer links appear once their pages exist and the paths are added. A privacy notice is advisable before the form or any analytics go live, since the site collects names and email addresses (even though only via the visitor's own email app).

## 10. Recommended next, not done

- **Redeploy the Vercel preview** from this branch. The live preview still shows an old build, which is why the fades appeared to be missing. Not done without permission.
- **A real form endpoint.** The enquiry form opens the visitor's email app with a prepared message. This works everywhere with no backend, but some visitors have no email app configured. A hosted form service would remove that step; it is a new dependency, so it needs a decision.
- **Scheduling on the contact page** (Calendly or similar), loaded only when someone clicks, as the brief requires.
- **Open Graph image.** It is currently the anthology photograph. A designed 1200×630 card with the wordmark would present better when links are shared.
- **Analytics** (privacy-friendly and cookieless, such as Vercel Web Analytics), if the client wants to know which service page is doing the work.
