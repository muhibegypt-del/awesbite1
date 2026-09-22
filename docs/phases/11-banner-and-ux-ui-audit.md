# Phase 11 - preview banner removal and UX/UI audit

Status: Banner complete; audit complete; findings not yet implemented

## Scope and method

- Removed the temporary private-preview banner globally.
- Audited the Astro production build against the local Frontend Design Review
  framework and Vercel's current Web Interface Guidelines.
- Installed Vercel's `react-best-practices` and `web-design-guidelines` skills.
  The React-specific rules are reference-only because this project is Astro.
- Ran Lighthouse against the local production build at a mobile viewport.
- Reviewed global navigation, page hierarchy, responsive layout, interaction
  states, forms, audio controls, motion, images and pricing presentation.

## Automated result

| Category | Score |
|---|---:|
| Accessibility | 100 |
| SEO | 100 |
| Best practices | 96 |
| Performance | 87 |

Core measurements: FCP 1.8 s; LCP 2.0 s; TBT 0 ms; CLS 0.225.

## Major findings

### `src/components/NavMenu.astro`

`src/components/NavMenu.astro:148` - mobile navigation renders expanded before
the deferred component script adds `data-ready`; it then collapses after first
paint. This is the main source of the 0.225 CLS and a visible page jump.

Recommended correction: set a synchronous `js` class in the document head and
use that class to render the mobile navigation closed before first paint, while
leaving the full navigation visible when JavaScript is unavailable.

### `src/components/ContactForm.astro`

`src/components/ContactForm.astro:19` - the primary enquiry flow is a `mailto:`
form. Visitors without a configured email application can complete every field
and still fail at the final conversion step.

`src/components/ContactForm.astro:247` - submit changes the label but does not
disable the button or provide a recovery state if no email application opens.

Recommended correction: connect the CTA to Calendly when supplied, or use a
real form endpoint. Until then, keep the direct email address visible and add a
clear recovery message beside the submit action.

## Minor findings

### `src/layouts/Base.astro`

`src/layouts/Base.astro:41` - no favicon is declared. `/favicon.ico` returns 404
and is the only Lighthouse best-practices failure.

`src/layouts/Base.astro:2` - critical Fraunces and Inter files are not preloaded.
Font swaps contributed a smaller layout shift after the navigation jump.

### `src/components/ContactForm.astro`

`src/components/ContactForm.astro:47` - email field should set
`spellcheck="false"`.

`src/components/ContactForm.astro:63` - non-auth topic/deadline controls should
explicitly manage autocomplete to avoid password-manager interference.

`src/components/ContactForm.astro:85` - placeholder uses a full stop rather
than the interface-guideline ellipsis pattern.

### `src/styles/global.css`

`src/styles/global.css:694` - price columns should use
`font-variant-numeric: tabular-nums` for easier comparison.

`src/styles/global.css:15` - touch behaviour and tap highlight are not set
intentionally at the root or interactive-control level.

### `src/components/ServicePage.astro`

`src/components/ServicePage.astro:256` - `#portfolio` and `#testimonials`
anchors have no `scroll-margin-top`. It is harmless with the current static
header, but should be added before making the header sticky.

## What passes

- Semantic links and buttons; no clickable `div` or `span` controls.
- Skip link and hierarchical page headings.
- Visible keyboard focus treatment.
- Labelled form fields with inline errors and first-invalid-field focus.
- Images have alt text, dimensions, decoding and appropriate loading priority.
- Navigation and audio controls have accessible names and keyboard semantics.
- 44 px navigation targets.
- Motion uses opacity/transform and honours `prefers-reduced-motion`.
- Clear primary action hierarchy and a persistent enquiry CTA.
- Empty audio and testimonial states are explicit rather than fabricated.
- Design tokens are consistently used; no aesthetic rewrite is required.

## Recommended implementation order

1. Eliminate the mobile navigation layout shift.
2. Add a favicon and preload/metric-stabilise the critical fonts.
3. Strengthen the mailto fallback, then replace it with Calendly or a form
   endpoint when supplied.
4. Apply the small form, number-alignment and touch-state refinements.

No audit finding requires changing the palette, typography choice, spacing
system, editorial layout or overall aesthetic.
