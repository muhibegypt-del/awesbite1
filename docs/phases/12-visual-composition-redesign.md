# Phase 12 — screenshot-led visual composition redesign

Date: 22 September 2026  
Branch: `implementation/atw-action-brief`

## Why this phase happened

The content was accurate and the brand system was coherent, but long service
pages relied too heavily on one narrow prose column and repeated ruled rows.
The result was elegant at a glance but difficult to scan, especially where a
visitor needed to compare audiences, process steps or prices.

The governing constraint was to improve information design without changing
the approved aesthetic, design tokens, page structure, StoryBrand sequence or
copy.

## Review method

- Applied the `frontend-design-review` framework: frictionless
  insight-to-action, quality craft and trustworthy building.
- Attempted to use the requested computer-use browser connection first. The
  connection failed before page access because the Windows sandbox could not
  apply its read ACLs.
- Used a screenshot-equivalent fallback: rendered the local site with Chrome at
  desktop and narrow-screen sizes, inspected full-page Home, Teaching,
  Narration and Content captures, implemented the changes, then rendered and
  inspected the same representative pages again.

## Clear findings

1. Service audiences, process steps and prices were semantically structured but
   visually read as a long stream of text.
2. Important supporting passages looked nearly identical to ordinary body
   copy, so the page hierarchy was too quiet.
3. The Home and Content choices lacked enough containment to read immediately
   as discrete destinations.
4. The mobile menu changed from expanded to collapsed after JavaScript loaded,
   producing a measured CLS of 0.225.
5. The missing favicon caused an avoidable asset request and contributed to the
   previous Best Practices score of 96.

## Implemented changes

### Shared service template

- Converted audience and service-type lists to a responsive card grid.
- Converted process steps to numbered cards: one column on phones, two at
  tablet width and three on wider screens.
- Converted every approved price tier to a comparison-friendly card while
  preserving the exact labels, cadence, inclusions and prices.
- Converted teaching expectation statements to a three-card group.
- Added restrained bordered panels to challenge explanations, notes,
  testimonial placeholders, portfolio placeholders and selected detail blocks.
- Left the hero, service order, section order and all copy unchanged.

### Home, About and Content

- Gave the three Home service choices equal contained surfaces so each offer is
  visibly actionable.
- Contained the two longer About-page narrative sections to improve reading
  focus.
- Turned the Content destinations into equal-height cards with a subtle,
  reduced-motion-safe hover response.

### Navigation and platform polish

- Marked the mobile navigation as enhanced in the initial HTML so it is
  collapsed before first paint.
- Kept a `noscript` fallback that exposes all navigation links when JavaScript
  is unavailable.
- Added a small SVG favicon using the existing plum, paper and clay palette.

## What deliberately did not change

- No colour, typography, radius, spacing or motion tokens were replaced.
- No StoryBrand copy was rewritten or reordered.
- No new claim, testimonial, price, package or portfolio item was invented.
- No shadows, gradients, stock imagery or generic SaaS styling were introduced.
- The site remains Astro; no React or Next.js migration was needed.

## Verification

- `npm run build`: passed, 21 static routes generated.
- Post-change visual review: Home, Teaching and Narration at desktop width;
  Teaching at narrow-screen width.
- Production Lighthouse on the local built site:
  - Performance: 98
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100
  - FCP: 1.8 s
  - LCP: 2.0 s
  - CLS: 0.023
  - TBT: 0 ms

## Still outstanding — external content only

- Calendly or other approved booking destination.
- Real narration audio files and metadata.
- Repurposing portfolio examples.
- Narration and Repurposing testimonials.
- Final Substack, social and Library URLs.
- Privacy and terms copy.
- Any optional texture imagery requires explicit approval and source assets.
