# Feedback 5, general points 1 to 17: single source of truth

Branch: `preview/feedback-5-general` (from `867ec3e`). Nothing here is live until it is merged and deployed.
Source of each request: [`feedback-5.md`](feedback-5.md), her words and screenshots.
Each change is made, built, then checked on the built site by script at 390px and 1440px
(and screenshots where the look matters) before its row is marked done.

Status key: **done** (changed and verified), **blocked** (needs something from her), **no change** (nothing to do in this pass), **pending**.

| # | She asked | How it was read | What changed | Verified | Status |
|---|---|---|---|---|---|
| 1 | Bigger text throughout, "a normal font size" like perennialcontent.com | | | | pending |
| 2 | Wrong font for "a textured word" (her picture) | | | | pending |
| 3 | Package card font reads as AI-made; change it with the size | | | | pending |
| 4 | Socials: TikTok, Substack, LinkedIn, Pinterest; colourful but not garish | | | | pending |
| 5 | "packages" | | | | pending |
| 6 | Discovery-call prompt higher and bigger on every page | | | | pending |
| 7 | Add the two new voiceover videos (Drive links) | | | | pending |
| 8 | Just "IELTS (International House)", no full name | Home's IELTS credential: name only, no caption line | `homeCredentials`: IELTS caption removed (the placeholder is gone); `Honours.astro` renders no caption line when there is none | Home at 390 and 1440: 'IELTS (International House)' with no line under it; 0 empty caption elements in the page | **done** |
| 9 | "English PGCE" with "University of Nottingham" underneath, no "Qualified Teacher Status" | The PGCE credential, on both Home and About (it is the same credential) | Both lists: 'English PGCE' / 'University of Nottingham' in place of 'PGCE and QTS' / 'Qualified Teacher Status' (QTS no longer appears in either list) | Home at 390 and 1440 and About at 1440 show 'English PGCE / University of Nottingham' | **done** |
| 10 | Add "Examiner (Summer, 2027)" | A new credential on Home's list, as written, no caption | `homeCredentials`: 'Examiner (Summer, 2027)'. Seven credentials now sit four across on desktop (4 + 3) so none is alone on a row | Home at 390 and 1440 lists it last; desktop rows measured 4 + 3 | **done** |
| 11 | The band's "textured." in the same font as the main title | | | | pending |
| 12 | Lowercase for continuity (footer "SERVICES", "GET IN TOUCH") | | | | pending |
| 13 | Footer name in the same font | | | | pending |
| 14 | Email hello@atexturedword.com across the site | Every place the address appears | `global.json`: `contact.email` and the footer link (everything else reads `contact.email`) | Built site: 0 files still contain gmail; new address on 16 pages. Checked on the page: footer link, contact page link, enquiry form destination (`data-email`), offer page 'Ask a question first', Content collaboration link | **done** |
| 15 | "Start" lowercase in the nav | The nav link only, on desktop and in the phone menu (her screenshot is the navbar); buttons elsewhere keep 'Start' | CSS `text-transform: lowercase` on `.nav__cta` and the phone menu's link (`Header.astro` gains `menu__cta`); the copy itself is unchanged | Rendered text at 1440: teach, repurpose, voice, about, content, start an enquiry. Phone menu at 390: the same. Home's 'Start an enquiry' button unchanged | **done** |
| 16 | "01 — TEACH" style labels feel AI-made; change font or style | | | | pending |
| 17 | "The Taught/Written/Spoken Word" lowercase, same position on every page | | | | pending |

## Decisions to confirm with her

- **#9:** QTS no longer appears in either credential list. Her timeline has QTS (2021, Qatar International School) as a separate item. Should it come back as its own credential?
- **#10:** Examiner is on Home's list only. Should About's list have it too?
