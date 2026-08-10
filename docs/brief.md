# a textured word — Master Web Design & Development Brief

**Client:** Aneesa · **Brand:** a textured word (always lowercase, never title case)
**Enquiries route to:** atexturedword@gmail.com
**Document version:** 1.0 · **Prepared for:** front-end developer + UI designer
**Source material analysed:** `COLOURS / TYPOGRAPHY.pdf` (11 pages, 25 embedded reference images), client discovery notes

---

## 0. How to use this document

Sections 1–4 are the **design system**. Treat them as law: every colour, size and spacing value on the site must come from a token defined here.

Sections 5–7 are the **build spec**, page by page and component by component.

Section 8 is the **technical stack**.

> **Content slots:** every text and image slot on this site is enumerated in the companion document `atw-content-slot-map.md`, with a literal `[ X WILL GO HERE ]` placeholder, a character limit, an owner and a fallback for non-delivery. Those placeholders go into the staging build as written, so a walkthrough of staging doubles as the content checklist. Copywriting is not in the build scope.

Sections 9–11 are **client-side dependencies and open decisions**. Nothing in section 11 blocks the design work, but several items block launch. They are flagged rather than invented.

Where this document says *recommended*, the designer may argue. Where it says *rule*, it has an accessibility or brand-integrity reason behind it and should not be quietly overridden.

---

## 1. Brand identity & philosophy

### 1.1 The idea

Words are not flat. They have grain. Some run smooth as silk, some drag like sandpaper. That single conviction is what makes three apparently separate services into one practice: teaching words, voicing words, reshaping words. The site's job is to make a visitor feel that connection within about eight seconds, before they have read a single service description.

### 1.2 What the site must achieve

| Priority | Job | How the design serves it |
|---|---|---|
| 1 | Make three services legible as one practice | Hero service selector; shared texture language; one visual system with no per-service theming |
| 2 | Convert a warm lead into a booked call | Calendly modal reachable from every section within one click |
| 3 | Establish credibility fast | Credential row sits above the fold on About; British Council and QTS carry real weight |
| 4 | Signal availability for literary/hosting opportunities | "Reflection" section plus a quiet availability banner |
| 5 | Feel calm | Whitespace budget, restrained motion, one accent colour |

### 1.3 Feeling and voice

**Feel on landing:** calm, assured, unhurried.
**Think about her:** competent, graceful, composed, well read.
**Explicitly not:** loud, chaotic, busy, clinical, corporate-agency, "hustle".

The client's own reference for the atmosphere was a luxury waiting room that is warm rather than sterile. The design should read as a considered private practice, not a marketplace listing.

**Copy voice rules for the developer and copywriter:**

- Sentence case everywhere except mono labels, which are uppercase.
- The brand name never capitalises, even at the start of a sentence.
- Active voice. "Book a call", not "Submit enquiry". The action keeps its name from button to confirmation.
- No exclamation marks anywhere in interface copy.
- British English spellings throughout (`specialise`, `programme`, `colour`).
- Never claim a qualification that is in progress. See §11, item 3.

### 1.4 Logo and the pencil-in animation

The client's reference is a hand-lettered wall sign — chalky, slightly uneven, human. This is the strongest single idea in the moodboard and it becomes the site's signature moment.

**Implementation — rule: SVG stroke animation, not a handwriting font.**

1. Set `a textured word` as a single-line SVG path in the chosen display face, converted to outlines, then to a single-stroke centreline path.
2. Animate with `stroke-dasharray` / `stroke-dashoffset` from full offset to 0 over **1400ms**, `cubic-bezier(0.65, 0, 0.35, 1)`.
3. Stroke: `--ink`, 1.25px, `stroke-linecap: round`.
4. On completion, cross-fade from stroke to filled text over 320ms so the logo settles into flat type.
5. Add a faint graphite texture: a 4% opacity noise mask clipped to the glyphs. This is what makes it read as pencil rather than as a generic line-draw.
6. Runs **once per session** only. Store a flag in `sessionStorage`; on subsequent page views render the filled logo immediately.
7. `prefers-reduced-motion: reduce` → skip straight to the filled state, no fade.
8. Total SVG payload: under 12KB. If the outlined path exceeds this, simplify the path in Illustrator before export.

**Lockup:** logo sits top-left, 18px from the header's left gutter, optically aligned to the nav baseline. Never centred, never enlarged above 22px cap height in the header.

---

## 2. Colour system

### 2.1 What was extracted from the moodboard

Every hex below was read directly from the client's reference PDF — either from the printed label on the swatch card or, where the card carried no label, sampled from the rendered page. This is the raw inventory, not the final palette.

| Source page | Swatch name | Hex | Notes |
|---|---|---|---|
| 1 | Persimmon | `#F15C34` | Label partially legible; verify before use |
| 1 | Italian Plum | `#533146` | |
| 1 | Caramel Cream | `#F4BA94` | |
| 1 | **Albescent White** | `#F7E9DE` | Labelled "secondary" on card; **adopted as site base** |
| 1 | Cinnabar | `#DB3E1D` | Too hot for large areas; see §2.3 |
| 1 | Eggplant | `#4F364B` | |
| 1 | Lavender Gray | `#CABAD7` | Not adopted — pulls the palette cool and feminine |
| 2 | Chestnut | `#480903` | |
| 2 | Olive | `#937F26` | |
| 2 | Desert Tan | `#E5D1A4` | |
| 2 | Caramel | `#CE7B44` | |
| 2 | Copper | `#C04B12` | |
| 2 | Card set | `#FAE3B1` `#998731` `#5FA8C2` `#CF5527` `#7D2027` `#673C34` | |
| 3 | Peach Echo | `#F47358` | |
| 3 | Burnt Toast | `#200808` | **Client rejected** ("minus the black") |
| 3 | English Breakfast | `#451616` | |
| 3 | Faded Violet | `#DBBDDC` | |
| 4 | Pistachio | `#B8B570` | Sampled |
| 4 | Moss | `#605C3B` | Sampled |
| 4 | Dusty Pink | `#CA9BA3` | Sampled; client asked for "less feminine pink" |
| 4 | **Coconut** | `#D5CBC0` | Sampled; **adopted as secondary surface** |
| 4 | Mandarine | `#B07841` | Sampled |
| 5 | Cloud | `#CDD0DB` | |
| 5 | Azul | `#9197AA` | |
| 5 | Mimosa | `#F7B557` | |
| 5 | Orange | `#E27921` | |
| 5 | Aperol | `#C1521E` | |
| 5 | Card set | `#F3EED7` `#DFD6A4` `#E1B4A1` `#A15D66` `#808249` `#321F12` | |
| 5 | **Caramel** | `#D2B48C` | |
| 5 | **Terracotta** | `#AF593E` | **Adopted as the accent** |
| 5 | **Olive Leaf** | `#6D7456` | **Adopted as quiet support** |
| 5 | Sea Teal | `#5F8A8B` | The "should blue feature?" question — see §2.4 |
| 5 | **Muted Plum** | `#5B3B4E` | **Adopted for the dark footer** |

### 2.2 The final palette — nine tokens, no more

The moodboard contains roughly forty colours across eight palettes. A site that uses forty colours cannot feel calm. Nine ship.

```css
:root {
  /* Surfaces */
  --paper:      #F7E9DE;  /* Albescent White — default page background */
  --paper-lift: #FCF4EC;  /* Raised cards, input fields, modal bodies */
  --coconut:    #D5CBC0;  /* Alternating section bands, image placeholders */

  /* Type & structure */
  --ink:        #241C1A;  /* Headings and body copy — warm near-black */
  --ink-soft:   #5A4E48;  /* Captions, metadata, mono labels at rest */
  --rule:       rgba(36, 28, 26, 0.14); /* Hairlines and borders */

  /* Accent */
  --clay:       #AF593E;  /* Terracotta — fills, large type, non-text marks */
  --clay-ink:   #8F4530;  /* Text-safe accent — links, small labels, buttons */

  /* Quiet support */
  --olive:      #6D7456;  /* Reflection / literary hub only */
  --plum:       #5B3B4E;  /* Footer and one dark pull-quote band */
}
```

**On the "Ink Black" in the original brief:** the client explicitly rejected the near-black in her own moodboard. `--ink` is therefore `#241C1A`, a warm graphite-brown, not `#000000`. Pure black must not appear anywhere on the site, including in shadows, icons or SVG defaults. Set `color: var(--ink)` on `html` so nothing inherits the browser default.

### 2.3 On the accent: why Terracotta and not Cinnabar

Cinnabar `#DB3E1D` appears twice in the references and it is the obvious "clay red". It is also 40% more saturated than anything else on the boards and it will fight the calm brief in every hover state. Terracotta `#AF593E` comes from the client's own earth-tone strip, sits in the same family, and holds still. Cinnabar can survive as a single 24px underline flourish on the hero if the designer wants heat, but not as the system accent.

**Rule, and a deliberate one:** avoid `#D97757` and its neighbours. That specific warm-clay tone is the current default accent of AI-generated design and will make a hand-crafted brand read as templated.

### 2.4 Answering the client's blue question

Blue does not become a feature colour. The palette already carries calm through the enormous warm-neutral field and the generous whitespace; adding a cool accent would split the identity and pull it toward generic wellness branding. Sea Teal `#5F8A8B` earns exactly one job: the progress fill and scrub handle of the audio player, where a cool tone genuinely helps the control read as a control. Nowhere else.

### 2.5 Contrast — verified, non-negotiable

All ratios computed against the tokens above.

| Foreground | Background | Ratio | Verdict |
|---|---|---|---|
| `--ink` `#241C1A` | `--paper` | **14.06** | Body copy ✓ |
| `--ink` | `--coconut` | **10.46** | Body copy ✓ |
| `--ink-soft` `#5A4E48` | `--paper` | **6.75** | Captions and mono labels ✓ |
| `--clay-ink` `#8F4530` | `--paper` | **5.77** | Links and small text ✓ |
| `--paper` | `--clay-ink` | **5.77** | Solid button text ✓ |
| `--clay` `#AF593E` | `--paper` | **4.09** | ✗ Fails normal text. Large display only (≥24px, or ≥18.66px bold) |
| `--paper` | `--clay` | **4.09** | ✗ Same restriction |
| `--ink` | `--clay` | **3.44** | ✗ Large text only |
| `--olive` `#6D7456` | `--paper` | **4.12** | ✗ Large text only |
| `--paper` | `--plum` `#5B3B4E` | **8.10** | Footer copy ✓ |
| `--coconut` | `--plum` | **6.02** | Footer secondary copy ✓ |

**The rule that follows:** any surface carrying text below 24px uses `--clay-ink`, never `--clay`. `--clay` is for fills behind large type, for rules, icons, underline marks and hover washes. Do not let a developer swap them because they "look the same".

### 2.6 Colour budget

Per viewport, on any given screen:

- Warm neutrals (`--paper`, `--paper-lift`, `--coconut`): **85–92%** of the visible area
- `--ink` in all its forms, including type: **6–12%**
- `--clay` / `--clay-ink`: **1–3%**, and never more than three separate clay elements visible at once
- `--olive`, `--plum`, `--teal`: zero on most screens

If a screenshot of any page shows more than three terracotta elements, something is wrong.

### 2.7 Texture

The brand is called *a textured word*. The surfaces should not be flat vector fields.

- **Grain overlay:** a tiling SVG `feTurbulence` noise layer at **3% opacity**, `mix-blend-mode: multiply`, fixed to the viewport, `pointer-events: none`, sitting above backgrounds and below content. Base frequency `0.8`, one octave. Costs under 1KB and gives the whole site a paper tooth.
- **Section bands:** where `--coconut` is used as a band, add a 1px `--rule` hairline at the top edge only. No box shadows anywhere on the site — the depth comes from tone, not from blur.
- **Images:** all photography gets a very slight warm overlay (`--clay` at 6%, `multiply`) so that supplied photos with different white balances still sit in one world.

---

## 3. Typography

### 3.1 The three roles

| Role | Where it appears | Character required |
|---|---|---|
| **Display** | H1, H2, pull-quotes, service names | High-contrast editorial serif. Elegant, a little literary, never wedding-invitation |
| **Body** | Paragraphs, buttons, form fields, nav | Geometric humanist sans. Quiet, generous, highly legible at 17px |
| **Utility** | Mono labels, section markers, metadata, prices, timecodes | Monospace. Carries the "specimen card" energy from the moodboard palettes |

The client stated a preference for sans-serif. That preference is honoured where it counts — every word a visitor actually *reads* is sans. The serif appears only in headlines and quotes, which are looked at more than read. This is the contrast she asked for in her notes, kept subtle.

### 3.2 Licensing reality — read before specifying

Several faces in the moodboard (Maison, Noiré, Athena, Azore, Debora, Belvare, Marco Poles, Macline, Berilyn) are marketplace or foundry display fonts. Avenir is a licensed Linotype face. **None of these can be self-hosted without a webfont licence, and desktop licences do not cover web use.** Before build, the developer must confirm one of: an Adobe Fonts subscription that includes the face, a purchased webfont licence with sufficient monthly pageviews, or a substitution.

To avoid a launch blocked on font paperwork, the system is specified as **preferred face → open-licence stand-in**. The stand-ins are genuinely good, not compromises of last resort, and the site can ship on them and swap later by changing one variable.

```css
:root {
  --font-display: "Maison", "Instrument Serif", "Cormorant Garamond", Georgia, serif;
  --font-body:    "Avenir Next", "Jost", "Futura", -apple-system, "Segoe UI", sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace;
}
```

- **Display, open-licence stand-in:** Instrument Serif for a tighter, more contemporary editorial feel, or Cormorant Garamond for something closer to the "Maison / Noiré" refinement in the references. Recommended: **Cormorant Garamond**, 300 and 400 weights only.
- **Body, open-licence stand-in:** **Jost** — geometric, Futura-lineage, very close to both Avenir and the "Athena" specimen the client pinned, and free under the SIL Open Font Licence.
- **Utility:** **JetBrains Mono** is free under the OFL and needs no substitution. Ships as specified.

**Loading rules:** self-host as WOFF2, `font-display: swap`, preload only the two files used above the fold (body 400, mono 400). Subset to Latin + Latin Extended. Total font payload target: **under 180KB**.

### 3.3 Type scale

Fluid, clamped between 360px and 1440px viewports.

| Token | Role | Size | Face | Weight | Line height | Tracking |
|---|---|---|---|---|---|---|
| `--t-hero` | Home H1 | `clamp(2.75rem, 7vw, 6rem)` | display | 300 | 0.94 | -0.02em |
| `--t-h1` | Page H1 | `clamp(2.25rem, 5vw, 4rem)` | display | 300 | 1.02 | -0.015em |
| `--t-h2` | Section head | `clamp(1.75rem, 3.2vw, 2.75rem)` | display | 400 | 1.1 | -0.01em |
| `--t-h3` | Card title | `clamp(1.25rem, 2vw, 1.5rem)` | body | 500 | 1.25 | 0 |
| `--t-quote` | Pull-quote | `clamp(1.5rem, 3vw, 2.25rem)` | display | 300 italic | 1.28 | -0.01em |
| `--t-lead` | Intro paragraph | `clamp(1.125rem, 1.6vw, 1.3125rem)` | body | 400 | 1.6 | 0 |
| `--t-body` | Body copy | `1.0625rem` (17px) | body | 400 | 1.7 | 0 |
| `--t-small` | Caption | `0.9375rem` (15px) | body | 400 | 1.55 | 0 |
| `--t-mono` | Label / marker | `0.75rem` (12px) | mono | 400 | 1.2 | **0.14em** |
| `--t-mono-lg` | Selector label | `0.875rem` (14px) | mono | 500 | 1.2 | **0.12em** |

**Measure:** body text is capped at **68 characters**. Lead paragraphs at 58. Never full-width paragraphs on desktop.

### 3.4 Mono usage rules

The monospace face is structural, not decorative. It is permitted in exactly these places:

1. Service selector labels: `[01 // TEACH]`, `[02 // SPEAK]`, `[03 // WRITE]`
2. Section markers in the left gutter: `§ SERVICES`, `§ REFLECTION`
3. Metadata: durations, dates, prices, file formats, exam-board names, tags
4. Form field labels and validation messages
5. Footer legal line

It is forbidden in body paragraphs, buttons, and navigation. Uppercase only, always with the 0.12–0.14em tracking, always at `--ink-soft` unless active.

**A note on the numbering:** `01 / 02 / 03` is used here because the three services genuinely are the order in which the client's own practice developed and the order of commercial priority — teaching is the present, voice is the return, writing is the new one. It encodes something true. It is not decoration, and it should not spread to sections where no sequence exists.

---

## 4. Layout, spacing, motion

### 4.1 Grid

- **Desktop:** 12 columns, 1240px max content width, 88px outer gutters, 24px column gutters.
- **Tablet:** 8 columns, 48px outer gutters.
- **Mobile:** 4 columns, 20px outer gutters.
- **Editorial offset:** the site's default is *not* centred. Body text columns sit in columns 3–9, leaving a wide left gutter that holds the mono section markers. This single decision does more for the "editorial salon" feel than any other layout choice.

### 4.2 Spacing scale

An 8px base. Only these values may be used:

```
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160
```

Vertical rhythm between major sections: **128px desktop / 80px tablet / 64px mobile**. The client asked for high spaciousness; err upward, never downward.

### 4.3 Radii, borders, shadows

| Token | Value | Applies to |
|---|---|---|
| `--radius-none` | `0` | Section bands, image frames, tags |
| `--radius-sm` | `2px` | Inputs, buttons |
| `--radius-md` | `10px` | Cards, modal, audio player |
| Borders | `1px solid var(--rule)` | All structural lines |
| Shadows | **none** | Site-wide. Depth comes from tone |

Mixed radii are intentional: hard-edged structure, softly rounded objects. The moodboard's palette cards do exactly this.

### 4.4 Motion

```css
--ease: cubic-bezier(0.65, 0, 0.35, 1);
--dur-fast: 180ms;   /* hovers, colour changes */
--dur-mid: 320ms;    /* accordions, modal, tab swap */
--dur-slow: 640ms;   /* scroll reveals */
```

**Permitted motion, and nothing else:**

1. Logo pencil-in, once per session (§1.4)
2. Scroll reveal: opacity 0→1 with a 16px upward translate, `--dur-slow`, staggered 60ms across siblings, triggered once at 12% viewport intersection
3. Hover states on interactive elements only
4. Service selector panel cross-fade
5. Modal enter/exit

No parallax. No auto-playing carousels. No number counters. No marquees. Every animation must respect `prefers-reduced-motion: reduce`, under which all of the above collapse to instant state changes with opacity-only transitions at 120ms.

### 4.5 Breakpoints

```css
/* mobile-first; these are min-widths */
--bp-sm:  480px;   /* large phone */
--bp-md:  768px;   /* tablet portrait — nav collapses above this */
--bp-lg:  1024px;  /* tablet landscape / small laptop */
--bp-xl:  1280px;  /* desktop — editorial offset grid activates */
--bp-2xl: 1440px;  /* max container reached */
```

Design and QA at **360, 390, 768, 1024, 1440, 1920**. The 390px iPhone width is the primary design target — most Instagram traffic lands there.

---

## 5. Site map & navigation architecture

### 5.1 Routes

```
/                        Home
/about                   About Aneesa
/services                Services overview + packages + pricing
  /services/teaching     Academic English & tuition
  /services/voice        Voiceover & audio narration
  /services/writing      Strategic content repurposing
/reflection              Literary hub — feed, Substack, availability
/work                    Portfolio: voice reels, repurposing samples, results
/contact                 Booking, enquiry form, Calendly
/thank-you               Post-submission confirmation (noindex)
/privacy                 Privacy policy (required — the site collects data)
/terms                   Terms of service (required if taking payment)
```

### 5.2 Why the client's original list was restructured

Her notes listed: About / Services / Packages / Portfolio / Testimonials / Contact. Six nav items on a calm site is two too many, and two of them cannot stand alone:

- **Packages** has no meaning separated from the service it prices → folded into `/services` and each service page.
- **Testimonials** as its own page is a weak destination and, given that most of the client's testimonials were lost with her old account, would launch nearly empty → social proof becomes a band that recurs on Home and each service page.
- **Reflection** is added because the literary/bookstagram positioning is doing real strategic work: it is the portfolio for all three services at once and the doorway to hosting and partnership enquiries.

### 5.3 Header

```
┌──────────────────────────────────────────────────────────────────────┐
│  a textured word            about  services  reflection  work   [Book a call] │
└──────────────────────────────────────────────────────────────────────┘
```

- Height 76px desktop / 64px mobile. Background `--paper` at 92% with `backdrop-filter: blur(8px)` once scrolled past 40px; fully transparent at the top of the page.
- Bottom hairline `--rule` appears only in the scrolled state, transitioning over `--dur-fast`.
- Nav links: `--t-body`, `--ink`. Hover: a 1px `--clay` underline that wipes in from the left over `--dur-fast`. Active page: underline persistent, `--clay-ink`.
- `[Book a call]` is the only button in the header. Ghost style at rest, filled `--clay-ink` on hover. Opens the Calendly modal (§7.6).
- Sticky, but hides on scroll-down and reappears on scroll-up past 400px.

### 5.4 Mobile navigation

Below 768px the links collapse to a two-line "menu" text button (not a hamburger icon — the moodboard's hand-lettered menu references support a typographic control).

Panel: full-screen `--paper`, slides in from the right over `--dur-mid`. Links stacked at `--t-h2`, left-aligned, each preceded by its mono marker (`01`, `02`, `03`, `04`). Book a call sits at the bottom as a full-width filled button. Body scroll locks while open; focus traps inside the panel; Escape closes; the trigger regains focus on close.

### 5.5 Footer

Background `--plum`, text `--paper`. The only dark surface on the site, which is what makes it feel like a closing rather than another section.

```
┌──────────────────────────────────────────────────────────────────────┐
│  a textured word                                                     │
│  words are not flat.                                                 │
│                                                                      │
│  SERVICES            REFLECTION          ELSEWHERE      GET IN TOUCH  │
│  Teaching            Substack            Instagram      atexturedword │
│  Voice               Reading notes       LinkedIn        @gmail.com   │
│  Writing             Availability                       [Book a call] │
│                                                                      │
│  ──────────────────────────────────────────────────────────────────  │
│  © 2026 A TEXTURED WORD · UNITED KINGDOM · PRIVACY · TERMS           │
└──────────────────────────────────────────────────────────────────────┘
```

Column headings in mono uppercase `--coconut`. Legal line in mono 12px `--coconut` at 70% opacity.

---

## 6. Page specifications

### 6.1 HOME

#### 6.1.1 Hero

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  § 01                                                                │
│                                                                      │
│         words are not flat.                                          │
│         they have grain, weight, and a way of                        │
│         changing the person who receives them.                       │
│                                                                      │
│         I teach them, voice them, and reshape them.                  │
│                                                                      │
│                                                                      │
│   press the ─────────  if you ─────────────────                      │
│                                                                      │
│   ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                │
│   │[01 // TEACH] │ │[02 // SPEAK] │ │[03 // WRITE] │                │
│   └──────────────┘ └──────────────┘ └──────────────┘                │
│                                                                      │
│   ┌────────────────────────────────────────────────────────────┐    │
│   │  texture panel — swaps on selection                        │    │
│   └────────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────┘
```

**Headline:** `words are not flat.` — `--t-hero`, display face, weight 300, `--ink`. Lowercase, full stop included. This is the thesis; nothing else competes with it.

**Subhead:** two lines at `--t-lead`, `--ink-soft`, max 52 characters per line, sitting in columns 3–7.

**Height:** `min-height: 88vh` desktop, `auto` with 96px top padding on mobile. Never `100vh` — a sliver of the next section should be visible to invite scroll.

**Background:** `--paper` with the grain overlay. No hero image. The client's photography has not been shot yet (§9), and a type-led hero is both stronger for this brand and immune to a late photo delivery.

#### 6.1.2 The service selector — the signature element

This comes directly from the client's own moodboard: the coffee-shop panel where you press an object to choose, and the hand-lettered line "press the fridge if you're hungry / press the coffee machine for happiness". It is translated into a sentence that completes itself as the visitor chooses.

**Resting state.** A single line above the three buttons, in mono, `--ink-soft`:

`PRESS ▁▁▁▁▁▁ IF YOU ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁`

The blanks are underscored spans. On hover or focus of a button, the blanks fill with that service's words, typed in over 220ms with no cursor blink:

| Button | Sentence completes to |
|---|---|
| `[01 // TEACH]` | `PRESS 01 IF SOMEONE NEEDS TO PASS SOMETHING` |
| `[02 // SPEAK]` | `PRESS 02 IF SOMETHING NEEDS A VOICE` |
| `[03 // WRITE]` | `PRESS 03 IF SOMETHING GOOD DESERVES A WIDER ROOM` |

**Button specification:**

| State | Border | Background | Label colour | Other |
|---|---|---|---|---|
| Rest | 1px `--rule` | transparent | `--ink-soft` | |
| Hover | 1px `--clay` | `--clay` at 6% | `--ink` | Texture panel previews |
| Focus-visible | 2px `--clay-ink` offset 3px | as hover | `--ink` | |
| Active/selected | 1px `--clay-ink` | `--clay-ink` | `--paper` | Panel locks to this service |

Labels use `--t-mono-lg`, rendered exactly as `[01 // TEACH]` including brackets and slashes. Padding 14px 20px, `--radius-sm`.

**Texture panel.** Below the buttons, a 16:6 panel that cross-fades between three states over `--dur-mid`. Each state carries: a macro texture image, one line of display-face copy, and a text link.

| Service | Texture | Line | Link |
|---|---|---|---|
| Teach | Woven paper / exercise-book grain | *the slow work of making a sentence obey* | Explore teaching → `/services/teaching` |
| Speak | Velvet or brushed silk, raking light | *warm, unhurried, British — a voice that stays in the room* | Hear samples → `/services/voice` |
| Write | Folded and re-folded paper, soft creases | *one long idea, opened out into many rooms* | See the process → `/services/writing` |

This is where the brand name stops being a claim and becomes visible. Budget real money for these three textures: commissioned macro photography or a licensed set shot under the same light. Three mismatched stock images will sink it.

**Interaction rules:** implemented as a WAI-ARIA tablist. Buttons are `role="tab"`, panel `role="tabpanel"`, arrow keys move between tabs, Home/End jump to first/last. Default selected state on load: `[01 // TEACH]`. Deep-linkable via `#teach`, `#speak`, `#write`. On mobile the three buttons stack full-width and the panel sits below; the sentence line shortens to `PRESS 01 · 02 · 03`.

#### 6.1.3 About strip

Two columns, 5/7 split. Left: portrait photograph in a 4:5 frame, `--radius-none`, with a 1px `--rule` inset border 8px inside the image edge (a framed-print effect, cheap and elegant). Right:

- Mono marker `§ ABOUT`
- H2: `twelve years, three countries, one preoccupation.`
- Two short paragraphs, `--t-body`, max 68 characters
- Credential row (see §6.2.2 for the component)
- Text link: `More about Aneesa →`

#### 6.1.4 Services grid

Three columns desktop, one column mobile. No card borders — separation comes from a 1px `--rule` vertical divider between columns and generous 48px internal padding.

```
┌───────────────────┬───────────────────┬───────────────────┐
│ [01 // TEACH]     │ [02 // SPEAK]     │ [03 // WRITE]     │
│                   │                   │                   │
│ Academic English  │ Voiceover &       │ Strategic content │
│ & tuition         │ audio narration   │ repurposing       │
│                   │                   │                   │
│ For students who  │ For producers who │ For thought       │
│ need a specific   │ need a voice that │ leaders whose     │
│ result by a       │ people stay       │ best thinking is  │
│ specific date.    │ listening to.     │ trapped in long   │
│                   │                   │ form.             │
│                   │                   │                   │
│ · Primary reading │ · Audiobooks      │ · Carousels       │
│   fluency         │ · E-learning      │ · Newsletters     │
│ · KS3 · GCSE      │ · Explainers      │ · Articles        │
│ · A-Level         │ · IVR             │ · Repurposing     │
│ · IELTS 6.5–9.0   │                   │   systems         │
│                   │                   │                   │
│ FROM £__ / HOUR   │ FROM £__ / FIN.MIN│ FROM £__ / MONTH  │
│                   │                   │                   │
│ Book a trial →    │ Hear samples →    │ Start with a call →│
└───────────────────┴───────────────────┴───────────────────┘
```

- Service titles: `--t-h3`, body face, weight 500.
- Bullet lists: mono 12px, `--ink-soft`, no bullet glyphs — use a 12px `--rule` dash instead.
- Price line: mono, `--clay-ink`, uppercase. **Placeholder until §11 item 1 is resolved.** If prices are not ready at launch, the line reads `PRICING ON ENQUIRY` — it must not be left blank or as filler.
- CTA links are text links with an arrow that translates 4px right on hover.

#### 6.1.5 Reflection teaser

Full-bleed `--coconut` band, 96px vertical padding, with the site's only olive accents.

- Mono marker `§ REFLECTION`
- Pull-quote at `--t-quote`, display italic, max 3 lines. Use the client's own words, lightly trimmed:
  *"a space where things slow down just enough to actually process what we've read — and to give these authors room to keep speaking."*
- Below: a 4-across grid of the latest Instagram posts (2-across on mobile), each a square image with a hover state that lifts the caption in from the bottom.
- Right-aligned text link: `Read the reflections →` `/reflection`

#### 6.1.6 Social proof band

- Mono marker `§ WORKED WITH`
- A single row of wordmarks: British Council, plus schools and clients as permission allows. Rendered as text in the body face at 15px, `--ink-soft`, tracked 0.06em, separated by a 16px `--rule` dot. **Do not use logo images without written permission from each organisation.**
- Below: two testimonial quotes in a 2-column layout, display italic at `--t-quote` scaled down to 1.25rem, attributed in mono. Launch with the salvaged testimonials only. If only one exists at launch, render one centred quote rather than an empty second slot.

#### 6.1.7 Availability callout

A bordered band, 1px `--rule`, `--paper-lift` fill, sitting just above the contact section.

```
┌──────────────────────────────────────────────────────────────────────┐
│  § CURRENTLY OPEN TO                                                 │
│                                                                      │
│  Panel moderation · literary festival hosting · author interviews    │
│  Publisher and bookshop events · audiobook narration · brand         │
│  partnerships with publishers, stationery and education companies    │
│                                                                      │
│  Enquiries: atexturedword@gmail.com →                                │
└──────────────────────────────────────────────────────────────────────┘
```

Items in mono 12px, separated by `·`. This is deliberately understated — it signals receptiveness without overclaiming experience the client does not yet have.

#### 6.1.8 Contact / booking

Two columns, 6/6.

Left: H2 `let's find out if this is a fit.` Short paragraph. Then the enquiry form (§7.5).
Right: a bordered panel containing the booking route — `[Book a 20-minute call]` filled button opening the Calendly modal, response-time line (`Replies within two working days`), and the email address as a `mailto:` text link.

---

### 6.2 ABOUT

The layout reference the client flagged (the salon site with the oversized display headline, offset image blocks and a colour-field text panel) is the model here.

#### 6.2.1 Structure

```
┌──────────────────────────────────────────────────────────────────────┐
│  § ABOUT                                                             │
│                                                                      │
│   A N E E S A                        ┌──────────────┐                │
│   ─────────────────────              │              │                │
│   english teacher ·                  │   portrait   │                │
│   voice artist ·                     │     4:5      │                │
│   content strategist                 │              │                │
│                                      └──────────────┘                │
├──────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────┐  ┌───────────────────────────────────┐ │
│  │  CLAY-FILLED PANEL      │  │                                   │ │
│  │  the byline: how the    │  │      secondary image              │ │
│  │  three skills are one   │  │      3:4, teaching or             │ │
│  │  skill                  │  │      recording context            │ │
│  └─────────────────────────┘  └───────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────┤
│  CREDENTIALS ROW                                                     │
├──────────────────────────────────────────────────────────────────────┤
│  THE PATH — a typed timeline                                         │
├──────────────────────────────────────────────────────────────────────┤
│  PULL-QUOTE BAND (plum)                                              │
├──────────────────────────────────────────────────────────────────────┤
│  CTA → book a call                                                   │
└──────────────────────────────────────────────────────────────────────┘
```

**Name treatment:** `ANEESA` set at `--t-h1` in the display face with 0.24em tracking, letterspaced across the full text column. Below it, a 1px `--rule` and the three-part descriptor in mono. Surname is not used anywhere on the site, per the client's instruction — including in metadata, image filenames and the copyright line.

#### 6.2.2 Credentials row — component spec

Four items, equal width, divided by 1px `--rule` verticals. Each item: qualification in body face 15px weight 500 `--ink`, awarding body beneath in mono 12px `--ink-soft`.

```
1st Class BA (Hons)  │  Trinity CertTESOL  │  PGCE & QTS  │  British Council
ENGLISH & AMERICAN   │  TRINITY COLLEGE    │  QUALIFIED   │  FORMER TEACHER
LITERATURE, FILM     │  LONDON             │  TEACHER     │  EGYPT · KSA
                     │                     │  STATUS      │
```

Stacks 2×2 on mobile. No icons, no badges, no circular seals — the restraint is what makes it read as credible rather than as a Fiverr profile.

#### 6.2.3 The byline panel

Solid `--clay` fill, 48px padding, `--radius-md`. Copy in `--paper` at `--t-quote` — permitted at this size, contrast 4.09 is acceptable for display text at ≥24px, but **the copy in this panel must never drop below 24px, including at mobile breakpoints**. If the text needs to shrink for mobile, switch the fill to `--clay-ink` at that breakpoint.

Draft copy:
> teaching taught me how a sentence lands. acting taught me how it sounds. writing is where the two meet — the same skill, pointed at three different rooms.

#### 6.2.4 The path — typed timeline

A left-gutter mono timeline. Years in mono `--clay-ink`, entries in body face. Content from the client's notes:

| Year | Entry |
|---|---|
| `2014–17` | Teaching assistant across primary, middle and secondary schools in the UK. Phonics with primary children — where the interest in reading fluency started. |
| `2017–20` | British Council, Egypt — General English to CEFR, elementary through advanced. Then PET exam preparation at a women's college in Saudi Arabia. |
| `2021–26` | British national curriculum at a private British secondary school in Doha, Qatar. KS3 through A-Level. |
| `alongside` | Stage acting at the Television Workshop and Derby Academy Acting. Spoken-word poetry with Beatfreeks. Fiction narration, read aloud, in a care home. |

That last line is the most persuasive sentence on the page. Give it its own row and let it sit.

#### 6.2.5 Pull-quote band

Full-bleed `--plum`, `--paper` text, 128px vertical padding, single centred quote at `--t-quote`, max 3 lines. One per page maximum, site-wide.

---

### 6.3 SERVICES OVERVIEW `/services`

Header, then the three services as full-width alternating rows (image left / image right), then a combined pricing section, then FAQ, then CTA.

**Pricing presentation.** The client wants prices visible; this is the correct instinct and filters out mismatched enquiries before they reach her inbox. Structure each service's pricing as a three-tier table:

```
┌─────────────────────┬─────────────────────┬─────────────────────┐
│ SINGLE              │ BLOCK               │ INTENSIVE           │
│ £__ / hour          │ £__ / 10 hours      │ £__ / month         │
│                     │                     │                     │
│ · one 60-min lesson │ · 10 × 60-min       │ · weekly sessions   │
│ · lesson notes      │ · lesson notes      │ · marked homework   │
│ · homework set      │ · progress report   │ · monthly report    │
│                     │ · rescheduling      │ · parent check-in   │
│                     │                     │                     │
│ Book →              │ Book →              │ Enquire →           │
└─────────────────────┴─────────────────────┴─────────────────────┘
```

Tier names in mono. Prices in display face at `--t-h3`. Feature lists in 15px body. The middle tier gets a 1px `--clay` border and a small mono flag reading `MOST BOOKED` — but only once there is evidence for that claim; until then, no flag.

**FAQ:** accordion, `--rule` divider between rows, question in body 17px weight 500, chevron rotating 180° over `--dur-mid`. One row open at a time. Questions to cover: how online lessons run, what platform, cancellation notice, whether she teaches in person, turnaround on voice work, revisions policy, whether she works with clients outside the UK, how repurposing engagements start.

---

### 6.4 SERVICE PAGE — TEACHING `/services/teaching`

Sections in order: hero (service name + one-line promise), who it's for, the three teaching tracks, how it works, pricing, results, testimonials, FAQ, CTA.

**The three tracks** — expressed as tabs sharing the selector's mono styling:

| Track | Covers | Outcome language |
|---|---|---|
| `GENERAL ESL` | CEFR A1–C2, adults and young learners | Move up a CEFR level with a measurable plan |
| `SCHOOL CURRICULUM` | KS3, KS4 (GCSE / iGCSE), KS5 (A-Level / IAL) | Target grade for a named exam board and paper |
| `IELTS PREPARATION` | Listening, reading, writing, speaking | Band 6.5–9.0 for study, work or migration routes |

**Copy integrity note:** IELTS-specific qualification is in progress. Until it is held, this track's copy describes preparation experience and exam-technique teaching, and does not state or imply a completed IELTS examiner or trainer qualification. See §11 item 3.

**How it works** — four numbered steps, mono numerals:
`01` Free 20-minute call to agree the target and the deadline · `02` Baseline assessment and a written plan · `03` Weekly lessons with set homework and marking · `04` Progress review every six weeks against the original target.

**Results block:** where real data exists (grade improvements, band jumps, reading-age gains), present it in a mono figure + body-face label pair. Where it does not, omit the block entirely rather than fill it with adjectives.

---

### 6.5 SERVICE PAGE — VOICE `/services/voice`

The page's whole job is to get a visitor to press play within four seconds.

```
┌──────────────────────────────────────────────────────────────────────┐
│  § 02 // SPEAK                                                       │
│                                                                      │
│  warm, unhurried British RP.                                         │
│  a voice people stay listening to.                                   │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  ▶   COMMERCIAL SHOWREEL              ──────●──────  01:12     │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ┌──────────────┬──────────────┬──────────────┬──────────────┐      │
│  │ ▶ AUDIOBOOK  │ ▶ E-LEARNING │ ▶ EXPLAINER  │ ▶ IVR        │      │
│  │   00:48      │   00:36      │   00:41      │   00:22      │      │
│  └──────────────┴──────────────┴──────────────┴──────────────┘      │
└──────────────────────────────────────────────────────────────────────┘
```

Below the players: tone descriptors as mono tags (`WARM` `RP` `SMOOTH` `VELVETY` `RESONANT` `UNHURRIED`), technical specifications, the acting and spoken-word background as a short paragraph, delivery and licensing terms, pricing, CTA.

**Technical specifications block** — mono, two columns. This is what producers scan for, so it must be accurate and must be confirmed with the client before build:

```
FORMAT        WAV 48kHz 24-bit · MP3 320kbps on request
BOOTH         [to confirm: treated home studio]
MICROPHONE    [to confirm]
INTERFACE     [to confirm]
DELIVERY      Within [X] working days · rush available
DIRECTION     Live session via Source-Connect / Zoom / phone patch
REVISIONS     One round included on script-unchanged retakes
USAGE         Quoted per project: usage, territory, term
```

Do not ship invented equipment names. Leave the bracketed placeholders visible in staging until the client fills them.

---

### 6.6 SERVICE PAGE — WRITING `/services/writing`

This is the newest service and the page should be honest about that while still being commercially confident. The framing is *systems*, not *volume*.

Sections: what it is, who it's for, the transformation shown visually, the process, engagement model, pricing, CTA.

**The transformation, shown not described.** A three-stage horizontal diagram:

```
   ONE LONG THING                 STRUCTURED INTO              PLACED
   ┌────────────┐                 ┌──────────────┐             ┌─────────┐
   │  a lecture │  ──────────▶    │  8 carousels │  ────────▶  │ IG      │
   │  a podcast │                 │  2 essays    │             │ Substack│
   │  a chapter │                 │  1 newsletter│             │ LinkedIn│
   └────────────┘                 └──────────────┘             └─────────┘
```

Rendered in mono inside `--rule` bordered boxes with `--clay` connecting arrows. No stock illustration.

**Engagement model:** limited to **one to two clients at a time**. State this plainly on the page. Scarcity that happens to be true is the most persuasive kind, and it accurately sets expectations.

**Founding-client offer:** the client intends to work at a heavily reduced or zero rate for her first two clients while building testimonials. Present this as `FOUNDING CLIENT RATE · TWO PLACES` in mono with an end date, not as "free" — the framing protects future pricing.

---

### 6.7 REFLECTION `/reflection`

The literary hub. Positioning, not selling.

1. **Manifesto block** — the client's own paragraph about slowing down and giving skimmed-over passages room to crystallise, set at `--t-quote` in display italic across a narrow 46-character measure with generous leading. This is the most distinctive writing she has produced; treat it as the page's hero.
2. **Instagram feed** — 9-post grid, lazy-loaded. See §8.5 for the integration method.
3. **Substack** — the three most recent posts as text-led cards (title, date in mono, 2-line excerpt, read link), plus an embedded subscribe form.
4. **Content pillars** — six mono tags describing what she covers: `WORDS OF THE WEEK` `CLOSE READING` `ADAPTATIONS` `LITERARY DEVICES` `NARRATED EXTRACTS` `THREE TAKEAWAYS`.
5. **Availability panel** — the same component as §6.1.7, expanded here with the full list of opportunity types from the client's notes.
6. **CTA** — `For festival, panel, publisher and brand enquiries: atexturedword@gmail.com`

---

### 6.8 WORK `/work`

A single filterable index. Filter chips in mono: `ALL` `VOICE` `TEACHING` `WRITING`. Filtering is client-side, animated with a 180ms opacity fade only — no layout-shifting FLIP animations, which read as busy.

Item types:
- **Voice samples** — audio player rows with category, duration, and a one-line context note
- **Repurposing case studies** — before/after: source material, what was produced, and the outcome where measurable
- **Teaching outcomes** — anonymised, with the exam board and the grade movement

Where a category is empty at launch, hide its filter chip rather than showing an empty state.

---

### 6.9 CONTACT `/contact`

Single column, narrow measure, deliberately sparse. Form on the left, booking panel on the right at desktop; stacked on mobile with the booking panel first (mobile visitors book more readily than they type).

Copy above the form: `Tell me what you need and by when. I reply within two working days.`

---

## 7. Component library

### 7.1 Buttons

| Variant | Rest | Hover | Focus-visible | Disabled |
|---|---|---|---|---|
| **Primary** | `--clay-ink` fill, `--paper` text | `--clay` fill, 2px upward translate | 2px `--clay-ink` outline, 3px offset | `--coconut` fill, `--ink-soft` text, `cursor: not-allowed` |
| **Ghost** | 1px `--rule` border, `--ink` text, transparent | `--clay` border, `--clay` 6% wash | as above | 40% opacity |
| **Text link** | `--ink`, 1px underline at 30% opacity | `--clay-ink`, underline to 100% | 2px outline, 2px offset | — |

Height 48px desktop, 52px mobile. Horizontal padding 28px. `--radius-sm`. Label in body face 15px weight 500, sentence case. Transitions on `background-color`, `border-color`, `transform` only — never `all`.

**Rule:** a maximum of one primary button per viewport. Two competing filled buttons is the fastest way to make a calm page feel like a landing page.

### 7.2 Mono tag

`--t-mono`, uppercase, 6px 10px padding, 1px `--rule` border, `--radius-none`, `--ink-soft` text. Active/selected: `--clay-ink` fill with `--paper` text. Used for filters, content pillars, and voice tone descriptors.

### 7.3 Section marker

Sits in the left gutter, vertically aligned to the section's first line. `--t-mono`, `--ink-soft`, preceded by a `§`. On viewports below 1280px it moves inline above the heading.

### 7.4 Custom HTML5 audio player

Third-party embeds (SoundCloud, Spotify) are prohibited on this site — they import their own type, colours and tracking, and they break the calm. The player is built from scratch.

**Markup:**

```html
<figure class="atw-player" data-player>
  <audio preload="none" data-audio
         src="/audio/showreel-commercial.mp3"
         aria-label="Commercial showreel, 1 minute 12 seconds"></audio>

  <button class="atw-player__toggle" data-toggle
          aria-label="Play commercial showreel" aria-pressed="false">
    <svg class="icon-play" aria-hidden="true">…</svg>
    <svg class="icon-pause" aria-hidden="true" hidden>…</svg>
  </button>

  <div class="atw-player__meta">
    <span class="atw-player__title">Commercial showreel</span>
    <span class="atw-player__cat">AUDIOBOOK · FICTION</span>
  </div>

  <div class="atw-player__scrub" data-scrub
       role="slider" tabindex="0"
       aria-label="Seek" aria-valuemin="0" aria-valuemax="72"
       aria-valuenow="0" aria-valuetext="0 seconds of 1 minute 12 seconds">
    <div class="atw-player__track"></div>
    <div class="atw-player__fill" data-fill></div>
    <div class="atw-player__handle" data-handle></div>
  </div>

  <time class="atw-player__time" data-time>00:00 / 01:12</time>
</figure>
```

**Visual specification:**

| Element | Spec |
|---|---|
| Container | `--paper-lift` fill, 1px `--rule` border, `--radius-md`, 20px padding, 16px gap, flex row |
| Toggle | 44×44px, `--clay-ink` fill, `--paper` icon, fully rounded. Hover → `--clay` |
| Title | Body face 15px weight 500 `--ink` |
| Category | `--t-mono` `--ink-soft` |
| Track | 3px tall, `--rule` fill, full remaining width |
| Fill | 3px, **Sea Teal `#5F8A8B`** — the palette's only cool colour |
| Handle | 11px circle, Sea Teal, appears on hover/focus/playing, scales 1→1.15 on grab |
| Time | `--t-mono` `--ink-soft`, `font-variant-numeric: tabular-nums`, fixed width so it doesn't reflow |

**Behavioural requirements:**

1. `preload="none"` on every player. With eight players on a page, `metadata` alone costs hundreds of KB before anyone presses anything. Duration is therefore rendered from a CMS field, not read from the file.
2. **Single-playback controller:** a page-level module holds a reference to the currently playing element; starting any player pauses the previous one and resets its button state.
3. Keyboard: Space/Enter toggles play from the button. On the scrubber, ← → seek 5s, ↑ ↓ seek 10s, Home/End jump to start/end. All seek actions update `aria-valuenow` and `aria-valuetext`.
4. Pointer: click anywhere on the track to seek; drag the handle with pointer events (not mouse events, so it works on touch); `setPointerCapture` on the handle so the drag survives leaving the element.
5. Loading: between press and `canplay`, the toggle shows a 1.2s rotating 270° arc in `--paper`. No spinner libraries.
6. Error: on `error`, replace the control row with mono text `AUDIO UNAVAILABLE — email atexturedword@gmail.com for this sample.` Errors state what happened and what to do; they do not apologise.
7. Right-click download is not blocked (it does not work and looks defensive). Instead, files are exported at 128kbps mono for web samples, with masters supplied privately to booked clients.
8. Announce play state changes via the button's `aria-pressed` and a visually hidden `aria-live="polite"` region.

**Asset requirements:** MP3, 128kbps, mono, loudness-normalised to −16 LUFS integrated so no sample is jarringly louder than the last. Target under 1.2MB per file. Store in `/audio/`, cached for one year with a hashed filename.

### 7.5 Enquiry form

Fields, in order:

| Field | Type | Required | Notes |
|---|---|---|---|
| Name | text | ✓ | |
| Email | email | ✓ | HTML5 validation plus server-side check |
| I'm enquiring about | select | ✓ | Teaching · Voiceover · Content repurposing · Hosting or partnership · Something else. **Pre-selects from the hero selector if the visitor used it** |
| Tell me about it | textarea | ✓ | 6 rows, 1200 char limit with a live mono counter appearing at 1000 |
| When do you need this by | text | — | Free text, not a date picker — most people answer "September" or "before her exams" |
| How did you find me | select | — | Instagram · Substack · LinkedIn · Referral · Search · Other |
| Honeypot | hidden | — | Named plausibly, e.g. `company_website`; label `visually-hidden`, `tabindex="-1"`, `autocomplete="off"` |

**Field styling:** label in mono above the field, `--ink-soft`. Input: `--paper-lift` fill, 1px `--rule`, `--radius-sm`, 14px padding, 16px body text (below 16px, iOS Safari zooms on focus). Focus: 1px `--clay-ink` border plus 2px offset outline. Error: 1px `--clay-ink` border, message beneath in mono `--clay-ink`, and `aria-describedby` pointing at it.

**Validation copy** — states the problem and the fix, no apology:
- `Add an email address so I can reply.`
- `That email address is missing something — check for a typo.`
- `Add a note about what you need, even a short one.`

**Submission:** button label changes `Send enquiry` → `Sending…` → route to `/thank-you`. On failure, an inline message with the email address as a fallback route. Never a silent failure.

### 7.6 Calendly modal

- Triggered by every `Book a call` button site-wide.
- **Load the Calendly script only on first trigger**, not on page load. It is roughly 90KB and blocking it until intent is expressed protects the performance budget.
- Modal: `--paper-lift` panel, `--radius-md`, max-width 620px, max-height 86vh, centred, with the page behind dimmed by `--ink` at 42% and blurred 3px.
- Focus moves to the close button on open; focus is trapped; Escape closes; focus returns to the trigger; `aria-modal="true"` with `aria-labelledby` on the panel heading.
- Body scroll locks with a scrollbar-gutter compensation so the page does not jump.
- Fallback beneath the embed: `Prefer email? atexturedword@gmail.com`
- Calendly's own theme is configured to `--paper` background, `--ink` text and `--clay-ink` accent via URL parameters so the embed does not arrive in Calendly blue.

### 7.7 Instagram feed card

Square image with `object-fit: cover`, 1px `--rule`. Hover: a `--ink` 78% gradient wash rises from the bottom over `--dur-mid` carrying the caption's first line in `--paper` at 14px. Below 768px the caption is always hidden — there is no hover on touch, and a permanently visible caption clutters the grid. Every image needs a real `alt` value from the CMS caption field, truncated to 125 characters.

---

## 8. Technical specification

### 8.1 Stack recommendation

| Option | Verdict |
|---|---|
| **Framer** — *recommended* | Best fit. Handles the motion spec natively, has a usable CMS for reflections and voice samples, hosts on a fast CDN, and the client can edit copy without a developer. Custom code components cover the audio player and the pencil-in SVG. Limitations: custom-code components are React and need a developer for the initial build; export is not portable. |
| **WordPress + Elementor** | Choose this only if the client wants full ownership, a large plugin ecosystem, and a long-term blog on her own domain rather than Substack. Costs: hosting, security maintenance, and real effort to hit the performance budget. The design system survives the move intact. |
| **Astro + Tailwind, hand-built** | The best possible performance and total control over the audio player. Best if a developer will be retained. The client cannot edit copy without a headless CMS layered on, which adds cost. |
| **Squarespace / Wix** | Not recommended. The custom audio player, the pencil-in animation and the selector's sentence mechanic all fight the platform. |

**The recommendation is Framer**, with the design system delivered as tokens so that a later migration to Astro or WordPress does not require redesign.

### 8.2 CMS collections

```
VOICE_SAMPLES
  title (text) · category (select: audiobook|elearning|explainer|ivr|commercial)
  audio_file (file) · duration_display (text "01:12") · duration_seconds (number)
  context_note (text, ≤90 chars) · order (number) · featured (boolean)

REFLECTIONS
  title · slug · date · excerpt (≤160 chars) · body (rich text)
  cover_image · alt_text · substack_url · tags (multi)

TESTIMONIALS
  quote (≤240 chars) · attribution · role_or_context
  service (select: teaching|voice|writing) · consent_confirmed (boolean)

PACKAGES
  service (select) · tier_name · price_display · billing_unit
  features (list) · cta_label · cta_url · highlight (boolean)

WORK_ITEMS
  title · type (select) · summary · source_material · output_produced
  outcome (text, optional) · media · date
```

`consent_confirmed` exists because testimonials from students, and especially from minors' parents, must not be published without recorded permission. The field gates publication.

### 8.3 Forms and routing

- Form endpoint → email to `atexturedword@gmail.com` with a reply-to set to the enquirer's address, so replying works in one click from a phone.
- Subject line: `[a textured word] {service} enquiry — {name}` so the inbox self-sorts.
- A copy of every submission is stored (Framer's form storage, or Google Sheets via a webhook) as a backup against Gmail spam filtering.
- Autoresponder: plain-text, one short paragraph in the brand voice, confirming a two-working-day reply window. No HTML template, no logo header.
- Spam defence in layers: honeypot field, a 3-second minimum time-to-submit check, and Cloudflare Turnstile only if spam actually appears. Do not ship a CAPTCHA pre-emptively.
- **Payments:** Stripe Payment Links per package, opened in a new tab. Full checkout integration is unnecessary at this volume and adds compliance surface.

### 8.4 Performance budget

| Metric | Target |
|---|---|
| Largest Contentful Paint (mobile, 4G) | < 2.0s |
| Cumulative Layout Shift | < 0.05 |
| Interaction to Next Paint | < 200ms |
| Total page weight, home | < 900KB |
| JavaScript, home | < 140KB gzipped |
| Lighthouse performance, mobile | ≥ 92 |

Enforcement: all images as AVIF with WebP fallback, `width`/`height` attributes on every image to reserve space, `loading="lazy"` and `decoding="async"` below the fold, hero texture images preloaded, Calendly and Instagram scripts loaded on interaction only, fonts subset and preloaded.

### 8.5 Instagram integration

Do not use an off-the-shelf widget — they inject their own CSS, load a third-party frame, and drag CLS. Use the Instagram Basic Display API to fetch the latest nine posts on a scheduled server-side job, cache the results for six hours, and render them with the site's own markup. If API setup is out of scope for the first build, ship a manually curated nine-image grid backed by the CMS; it looks identical and never breaks when a token expires.

### 8.6 SEO and metadata

- Title pattern: `{Page} · a textured word` — home: `a textured word · English tuition, voiceover and content repurposing`
- Every page needs a hand-written 150–160 character description. No generated ones.
- Structured data: `Person` on About, `Service` on each service page, `FAQPage` on the FAQ blocks, `Organization` sitewide with `email` and `sameAs` links to Instagram, LinkedIn and Substack.
- Open Graph image: 1200×630, `--paper` background with the wordmark and one line of copy. One per section, not one per page.
- `sitemap.xml`, `robots.txt`, canonical tags, `/thank-you` set to `noindex`.
- Target queries worth building pages around: online GCSE English tutor UK, A-Level English literature tutor online, IELTS preparation tutor, British RP female voiceover, audiobook narrator UK.

### 8.7 Accessibility — the floor, not the ceiling

- WCAG 2.2 AA. The contrast rules in §2.5 are the binding constraint.
- Every interactive element has a visible focus state: 2px `--clay-ink` outline at 3px offset. Never `outline: none` without a replacement.
- Logical heading order, one `h1` per page.
- Skip-to-content link, first in tab order, visible on focus.
- All decorative images `alt=""`; all meaningful images described.
- Audio samples: a one-line text description of content for each; if any sample is used as substantive page content rather than as a demonstration, provide a transcript.
- `prefers-reduced-motion` honoured everywhere (§4.4).
- Test with keyboard only, then with VoiceOver on iOS, before launch.

### 8.8 Analytics, legal and privacy

- Plausible or Fathom rather than Google Analytics: no cookie banner needed, which keeps the first impression clean and matches the brand's restraint.
- Cookie banner only if a tool that sets cookies is added later.
- Privacy policy must name what the form collects, where it is stored, and how long it is kept. Terms are required before taking payment.
- Instagram embeds and Calendly are third-party processors and must be named in the privacy policy.

---

## 9. What the client needs to supply

| Item | Blocks | Status from notes |
|---|---|---|
| Professional photography — 1 portrait 4:5, 2 contextual 3:4, 1 wide | About, home about strip | Shoot booked |
| Voice samples, final masters | `/services/voice`, `/work` | To be sent |
| Salvaged testimonials with permission to publish | Social proof band | Partially recovered, emailed |
| Final pricing for all three services | Services, all service pages | Not ready — see §11 |
| Home-studio equipment details | Voice technical block | Not supplied |
| Instagram handle, LinkedIn URL, Substack URL | Footer, Reflection | Instagram and LinkedIn available |
| Three texture images (woven / velvet / folded paper) | Hero selector — the signature element | Not commissioned |
| Written consent from any named organisation | Social proof band | Not started |

---

## 10. Build phases

**Phase 1 — Foundations (week 1).** Tokens as CSS custom properties or Framer variables. Typography scale. Header, footer, buttons, tags, form fields, section markers. Grain overlay. Motion primitives.

**Phase 2 — Signature (week 2).** Logo pencil-in animation. Hero service selector with the sentence mechanic, full keyboard and ARIA behaviour. Texture panel. This is the highest-risk work; do it early while there is time to iterate.

**Phase 3 — Pages (weeks 3–4).** Home, About, Services overview, three service pages, Reflection, Work, Contact, Thank-you, Privacy, Terms.

**Phase 4 — Systems (week 5).** Audio player. Calendly modal. Form routing and autoresponder. CMS collections and content entry. Instagram feed.

**Phase 5 — QA and launch (week 6).** Cross-browser (Safari, Chrome, Firefox, Edge; iOS Safari and Chrome Android). Keyboard pass. Screen-reader pass. Lighthouse against §8.4. Broken-link check. Form test from three devices. 404 page. Analytics verification. Domain, SSL, `www` redirect, email deliverability check on the enquiry route.

**Launch QA checklist:**

- [ ] Brand name is lowercase in every instance including the page title and OG tags
- [ ] Surname appears nowhere, including image filenames and metadata
- [ ] No `#000000` anywhere in the compiled CSS
- [ ] `--clay` is not used behind text smaller than 24px anywhere
- [ ] Only one primary button per viewport on every page
- [ ] Every audio player has `preload="none"`
- [ ] No claim of an unheld qualification (§11 item 3)
- [ ] Every testimonial has recorded consent
- [ ] Reduced-motion pass shows no animation
- [ ] Enquiry form arrives at the Gmail inbox and reply-to works from mobile

---

## 11. Open decisions

**1. Pricing is not ready, and it is the single biggest blocker.** Every service page has a pricing slot in the design. The site can launch with `PRICING ON ENQUIRY`, but conversion will be measurably worse and the inbox will fill with mismatched enquiries. Recommendation: publish teaching prices at launch, since those are known, and hold voice and writing at "quoted per project", which is normal in both industries anyway.

**2. Three services on one site.** The client raised this herself. The answer built into this design is that the three appear as one practice with a shared thesis, not as three businesses sharing a landing page. The selector, the single visual system and the "power of the word" spine do that work. It holds. The risk to watch is the *packages* layer: three services × three tiers is nine things to price, and that is where overload would actually show. Keep tiers to three per service, maximum.

**3. Qualifications in progress.** IELTS certification is expected within the year; the content-repurposing course is in progress. Copy must describe experience honestly and describe forthcoming qualifications as forthcoming. This is not only an integrity question — advertising an unheld teaching qualification is a real risk with parents and with awarding bodies. Build the copy so a single CMS text swap upgrades it the day each qualification lands.

**4. Blue in the palette.** Answered in §2.4: no, other than the audio scrubber. Revisit only if the client actively dislikes the warm-only result once she sees it built.

**5. Client photography.** Every layout here works with a type-led hero and no photograph, so a delayed shoot does not delay launch. But the About page needs at least one portrait. If the shoot slips, launch About with the credential row and timeline expanded and add the portrait later.

**6. Texture images for the selector.** This is the site's signature and the one line item worth arguing to protect in the budget. If commissioned photography is not possible, the fallback is a set of three high-resolution scans — a sheet of textured paper, a length of velvet, a folded page — shot on a phone under one window's light. Consistent light matters more than camera quality.

**7. Substack versus an on-site blog.** Substack is recommended for now: it has its own discovery, handles the mailing list, and costs nothing to run. Revisit if the reading notes become a significant traffic source, at which point an on-site archive with canonical links is worth the build.
