# Performance map: a textured word (November 2026)

**Verdict:** the site meets the highest standards on everything Google and Lighthouse measure: 98–100 performance, 100 accessibility, 100 best practices, zero layout shift, near-zero blocking time, and pages about 30% lighter than before. **Two things are not at the top standard, and neither is fixable in code alone:**

1. **The domain (needs a decision).** Every page tells Google its address is `atexturedword.com`, but that domain shows a Namecheap parking page (`www`) or does not answer (bare domain). Until it points at Vercel, search engines are sent to a parked page and link previews will not show the photo.
2. **Phone loading in the lab is just over our own 2.0s budget on most pages (1.98–2.28s).** It is under Google's "good" line (2.5s) on every page, and **on a real connection the pages load in about half a second.** The 2.0s target is stricter than Google's; getting the lab figure under it everywhere would mean dropping her web fonts on first view, which changes how the site looks.

| | |
|---|---|
| Measured | 23 November 2026, branch `preview/feedback-5-general` |
| Before | commit `6ad0bcc` (deploy `awesbite1-r83ias05h`) |
| After | commit `1e10d58` for the scores (deploy `awesbite1-mwai0aqeg`); security headers added in `a18610c` (deploy `awesbite1-dww2ap70n`) and checked live |
| Tool | Lighthouse 12.8.2, Chromium; phone = Lighthouse's standard throttled profile (mid-range phone on slow 4G, simulated), desktop = its desktop preset |
| Pages | Home, Teach, Repurpose, Voice, About, Content, Contact, and one offer page (The Content Starter) |
| Runs | phone: three runs per page on each side, median shown; desktop: one run per page on each side |

**Measured on the Vercel preview, adjusted for two preview-only things:**

- Vercel adds a feedback toolbar script to previews only; it was blocked in every run, so the numbers match what a visitor to the live site gets.
- Previews are marked "do not index" and sit behind a login, so Lighthouse's SEO score on a preview is 58–61. Every other SEO check passes on every page (title, description, status code, link text, crawlable links, image alt text, canonical, hreflang).

## Scorecard: the standards and where the site stands

| Standard | Target | Before | After | Status |
|---|---|---|---|---|
| Lighthouse performance, phone | 90+ (top band) | 96–99 | **98–99** | Met |
| Lighthouse performance, desktop | 90+ | 100 | **100** | Met |
| Largest Contentful Paint (LCP), phone, lab | Google "good": under 2.5s | 2.14–2.74s (Voice failed) | **1.98–2.28s** | Met |
| LCP, phone, lab | Our budget: under 2.0s | 0 of 8 pages | **2 of 8 pages** (1.98s); the rest 2.11–2.28s | Not met (see verdict) |
| LCP, phone, real connection (observed) | under 2.0s | 0.49–0.65s | **0.48–0.60s** | Met |
| LCP, desktop | under 2.5s | 0.57–0.66s | **0.48–0.59s** | Met |
| Cumulative Layout Shift (CLS) | Google "good": under 0.1; our budget: under 0.05 | up to 0.020 | **0.000 on every run** | Met |
| Total Blocking Time | under 200ms | 1–37ms | **0–15ms** | Met |
| Home page weight | under 900KB | 265KB | **189KB** | Met |
| JavaScript | under 140KB gzipped | 6KB | **6KB** | Met |
| Accessibility (Lighthouse) | 100 | 100 | **100 on all 32 runs** | Met |
| Accessibility (axe-core, WCAG 2.2 AA) | 0 violations | 0 | **0** (two minor best-practice notes, unchanged) | Met |
| Best practices | 100 | 78–100 (Contact 78–79) | **100 everywhere** | Met |
| Fonts and audio cached on return visits | long-lived | re-checked every visit | **cached a year** | Met |
| Text compression | on | Brotli | **Brotli** | Met |
| HTTPS | enforced | yes (308 redirect, HSTS) | **yes** | Met |
| Security headers | the four standard ones | none of the four | **all four** | Met |
| Sitemap | present | none | **14 pages** | Met |
| Social share image | 1200×630 JPEG with size and alt | 2200px WebP, no size or alt | **1200×630 JPEG, size and alt** | Met |
| Canonical address serves the site | yes | no (parked domain) | **no (parked domain)** | **Needs a decision** |

## Phone, before → after


| Page | Performance | LCP (budget 2.0s) | LCP on a real connection | Layout shift (CLS) | Blocking time | Page weight | Best practices |
|---|---|---|---|---|---|---|---|
| Home | 98 → **98** | 2.39s → **2.28s** | 0.49s → 0.58s | 0.000 → **0.000** | 11 → 0ms | 265 → **189KB** | 100 → **100** |
| Teach | 98 → **99** | 2.38s → **2.11s** | 0.52s → 0.54s | 0.000 → **0.000** | 13 → 2ms | 255 → **180KB** | 100 → **100** |
| Repurpose | 98 → **99** | 2.41s → **2.20s** | 0.57s → 0.58s | 0.000 → **0.000** | 10 → 0ms | 260 → **184KB** | 100 → **100** |
| Voice | 96 → **99** | 2.74s → **2.13s** | 0.65s → 0.60s | 0.000 → **0.000** | 37 → 15ms | 257 → **181KB** | 100 → **100** |
| About | 98 → **99** | 2.38s → **2.11s** | 0.52s → 0.48s | 0.000 → **0.000** | 1 → 0ms | 262 → **186KB** | 100 → **100** |
| Content | 99 → **99** | 2.14s → **2.11s** | 0.56s → 0.51s | 0.000 → **0.000** | 15 → 0ms | 248 → **172KB** | 100 → **100** |
| Contact | 99 → **99** | 2.16s → **1.98s** | 0.55s → 0.52s | 0.000 → **0.000** | 1 → 0ms | 247 → **171KB** | 79 → **100** |
| An offer page | 99 → **99** | 2.16s → **1.98s** | 0.56s → 0.55s | 0.000 → **0.000** | 17 → 0ms | 246 → **171KB** | 100 → **100** |

"LCP on a real connection" is what Lighthouse observed with no throttling; the LCP column is its simulation of a slow phone, which is the standard reported above.

## Desktop, before → after


| Page | Performance | LCP (budget 2.0s) | LCP on a real connection | Layout shift (CLS) | Blocking time | Page weight | Best practices |
|---|---|---|---|---|---|---|---|
| Home | 100 → **100** | 0.59s → **0.58s** | 0.61s → 0.61s | 0.000 → **0.000** | 0 → 0ms | 284 → **203KB** | 100 → **100** |
| Teach | 100 → **100** | 0.62s → **0.57s** | 0.80s → 0.49s | 0.000 → **0.000** | 0 → 0ms | 264 → **186KB** | 100 → **100** |
| Repurpose | 100 → **100** | 0.66s → **0.57s** | 0.67s → 0.60s | 0.000 → **0.000** | 0 → 0ms | 279 → **198KB** | 100 → **100** |
| Voice | 100 → **100** | 0.64s → **0.59s** | 0.46s → 0.49s | 0.000 → **0.000** | 0 → 0ms | 266 → **188KB** | 100 → **100** |
| About | 100 → **100** | 0.64s → **0.59s** | 0.62s → 0.68s | 0.000 → **0.000** | 0 → 0ms | 262 → **186KB** | 100 → **100** |
| Content | 100 → **100** | 0.57s → **0.51s** | 0.64s → 0.58s | 0.020 → **0.000** | 0 → 0ms | 248 → **172KB** | 100 → **100** |
| Contact | 100 → **100** | 0.59s → **0.50s** | 0.63s → 0.56s | 0.000 → **0.000** | 0 → 0ms | 247 → **171KB** | 78 → **100** |
| An offer page | 100 → **100** | 0.59s → **0.48s** | 0.56s → 0.57s | 0.000 → **0.000** | 0 → 0ms | 246 → **171KB** | 100 → **100** |

## What was found and what was changed

| Found | Effect | Change | Checked |
|---|---|---|---|
| The handwriting font (used only for *a textured word*) carried 213 characters | 28KB on every page before the name could draw | Trimmed to a–z, space and basic punctuation: **6KB** | The name draws in the real font (not the stand-in) at phone and desktop |
| Literata italic covered every optical size (7–72) but is only used at 17–29px | 68KB | Fixed at optical size 20: **31KB**. Rendered side by side with the original at 17, 21 and 29px: no visible difference | Screenshots |
| Literata roman covered optical sizes from 7 | 96KB | Sizes 12–72 kept (nothing on the site is under 17px): **79KB**, no visible change | Screenshots |
| On Content, the tag line re-wrapped when Literata roman arrived (its separator dots were upright roman) | Layout shift up to 0.045 on a phone; a 39px jump at 1024px | Dots set in the tags' own italic; italic preloaded on Content | Every in-between font state now lays out identically to the final one, 360–1440px, at 1× and 1.75× |
| The smooth-scroll library and the scroll-reveal setup measured the page while it was still loading | "Forced layout" warnings, 33–51ms each | Smooth scroll starts after load; reveal positions now come from an IntersectionObserver | Reveal behaviour unchanged: nothing on screen is hidden, siblings still step in, all shown by the bottom, no errors |
| The enquiry form's `action` was a `mailto:` link | Chrome flagged mixed content; Contact best practices 78–79 | Removed: the script already builds the email, and the page shows her address for anyone without JavaScript | Submitting still opens the email with the topic filled in |
| Fonts and audio were re-checked with the server on every visit | A wait on every return visit | Cached for a year (`vercel.json`); a changed file must get a new name (in CLAUDE.md) | Headers checked live |
| No security headers beyond HSTS | Below current practice | `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options: DENY`, `Permissions-Policy` on every response | Headers checked live |
| No sitemap | Search engines find pages only by crawling | `/sitemap.xml` built from the same data as the pages (14 pages; new offers appear automatically); robots.txt points to it | Built and served |
| Share image was a 2200px WebP | LinkedIn and older WhatsApp do not reliably show WebP previews | A 1200×630 JPEG (32KB) cropped from the same photo, with size and alt text declared | Tags and file checked |
| A 1350–1440px laptop downloaded the 1600px photo | About 17KB extra on Home | A 1400px size added to every photo | Built |

## Still open

| Item | Why it matters | What it needs |
|---|---|---|
| **atexturedword.com is parked** (Namecheap) | Google is pointed at a parked page instead of her site; share previews will not show the image; the sitemap lists addresses on that domain | **Your decision.** Either connect the domain to the Vercel project (DNS records at Namecheap; I can add the domain on the Vercel side), or point the site at `awesbite1.vercel.app` until then (one line in `astro.config.mjs`) |
| Phone LCP in the lab, 2.11–2.28s on six pages (budget 2.0s) | Only the strict lab figure; real loads are about 0.5s and every page is under Google's 2.5s | What remains is the server's first response (simulated at about 0.6s) and the two text fonts. Going further means showing a system font first and her fonts only on later visits, a visible change I would not make without her say |
| "Network dependency tree" insight on every page | Informational: the page leads to the site's script and fonts | Nothing to do; there is no deeper chain |
| Two axe best-practice notes (About's two regions are both named "Aneesa"; the offer pages' price card is an `<aside>` inside a section) | Not WCAG failures; on the live site before this work | Small markup fixes, left for a later pass |
| Content Security Policy | The strictest security header | Would need allowances for the inline styles and scripts Astro produces; low value for a static site with no forms posting anywhere |

## Re-running this

The scripts are not in the repository. Lighthouse 12 was run with `--preset=desktop` or the default phone profile, `--blocked-url-patterns="*vercel.live*"`, and the preview's share cookie, on the eight pages above.
