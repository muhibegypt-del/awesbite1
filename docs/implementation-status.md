# A Textured Word — implementation status

Last updated: 20 September 2026
Branch: `implementation/atw-action-brief`

This file is the continuity record for the approved developer action brief. It
is updated after every phase so a later session can resume without relying on
conversation history.

## Approved corrections that govern every phase

- Keep the header enquiry CTA. The five-item limit applies to navigation links,
  not the separate conversion button. The CTA can become the Calendly entry
  point when the client supplies and approves that link.
- Testimonials are deferred, not cancelled. Do not build them in this phase.
  Preserve the future information architecture: Narration and Repurposing may
  each gain a Testimonials dropdown item when approved content exists; Teaching
  will not.
- The British Council / Oxford Partnership sentence is draft copy assembled
  from client-supplied facts. It requires copy sign-off and is not verbatim.
- The Repurposing page must explicitly cover both long-form and short-form work.
- Replace “Three takeaways” with “Takeaways” at the actual Content-owned source
  and confirm that the obsolete phrase is absent across the built site.
- Texture imagery is an optional project-lead layout recommendation, not a
  client requirement. Do not add it without approval and suitable assets.
- Font selection remains the client’s final decision. Any interim font work
  must stay easy to replace.

## Platform decision

Retain the existing Astro implementation. The brief’s Next.js/shadcn/Tailwind
line is an assumption, not a client requirement. Rebuilding would add risk
without being necessary for the requested navigation, audio, content or layout.

## Phase status

| Phase | Scope | Status |
|---|---|---|
| 1 | Baseline, branch and continuity record | Complete |
| 2 | Global navigation, routes, footer, metadata and enquiry taxonomy | Complete |
| 3 | Home page copy, service blocks, meaning, mission and brand options | Complete |
| 4 | About, credentials and factual corrections | Complete |
| 5 | Teaching, Repurposing, Narration and accessible audio portfolio | Complete |
| 6 | Content literary ecosystem and Library placeholders | Complete |
| 7 | Visual system, responsive behaviour, motion and accessibility | Complete |
| 8 | Build validation, browser QA, public Vercel preview and handoff | In progress |

## Phase 1 completed

- Confirmed the starting branch built successfully with 10 static routes.
- Created `implementation/atw-action-brief` from `preview/client-motion-fix`.
- Confirmed the production stack is Astro with shared JSON content, shared
  design tokens and reusable Astro components.
- Recorded the seven approved corrections above before product changes began.

## Remaining external inputs

- Calendly URL and confirmation that it should replace the enquiry destination.
- Final brand-name treatment and capitalisation.
- Service-process copy sign-off.
- Real narration audio files, titles and tags.
- Substack, social and Library URLs.
- Repurposing portfolio examples.
- Narration and Repurposing testimonials for the later deferred phase.
- Approval and source assets for optional texture imagery.
- Privacy and terms copy before final production launch.

## Client response received 17 September

- Approved the recommended free font pairing; Fraunces and Inter are installed
  as replaceable CSS variables.
- Approved the mission draft.
- Did not give overall final sign-off.
- Left hero wording/scale, final brand-name treatment/capitalisation and Library
  appearance unresolved for the project lead.
- Confirmed no Substack or Library destination links yet.
- Asked whether existing price lists are held; no prices were supplied in the
  response, so none are published.
