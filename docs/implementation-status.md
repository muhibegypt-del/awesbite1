# A Textured Word — implementation status

Last updated: 22 September 2026
Branch: `implementation/atw-action-brief`

This file is the continuity record for the approved developer action brief. It
is updated after every phase so a later session can resume without relying on
conversation history.

## Approved corrections that govern every phase

- Keep the header enquiry CTA. The five-item limit applies to navigation links,
  not the separate conversion button. The CTA can become the Calendly entry
  point when the client supplies and approves that link.
- Testimonials are designed into Narration and Repurposing now and populated
  later. Teaching has no Testimonials or Portfolio item.
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
| 8 | Build validation, browser QA, public Vercel preview and handoff | Complete |
| 9 | Source-fidelity audit and three narration placeholders | Complete |
| 10 | Clear-cut SSOT corrections: terminology, processes, pricing and testimonials | Complete |

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
- Confirmation that the proposed service packages, labels and prices are
  approved for publication.
- Substack, social and Library URLs.
- Repurposing portfolio examples.
- Narration and Repurposing testimonial content; the sections and dropdown
  entries are already present.
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
- A service and pricing proposal was supplied on 20 September. It contains
  package labels and open questions. The later SSOT confirms the prices and
  inclusions for publication, so they now appear under neutral descriptive
  labels. Branded package names and the separate intensive ideas remain open.

## Phase 8 completed

- Production build passes with 21 generated routes.
- Dependency audit reports 0 vulnerabilities after upgrading Astro to 7.2.8.
- Reviewed representative desktop and responsive layouts for Home, Content and
  Narration; the shared navigation remains usable without JavaScript.
- Verified the deployed Home, About, Teaching, Repurposing, Narration, Content
  and brand-review routes return HTTP 200 to anonymous visitors.
- Deployed a non-production Vercel preview and added a protection exception to
  that preview only, so clients and responsive-testing services do not require
  a Vercel account.
- Public preview:
  `https://awesbite1-cmp7rwhxc-muhibegypt-8034s-projects.vercel.app`
- No production domain or production deployment was changed.

## Phase 9 completed

- Cross-checked all current factual claims against the original copy ledger,
  action brief, sign-off answers and two newly supplied revision PDFs.
- Confirmed that the biography, credentials, countries and experience claims
  are sourced. Editorial bridging remains a sign-off draft, not client-verbatim
  copy.
- Replaced the old developer-only `founders` audience term with `creators` and
  removed the unsupported `Reassuring` voice descriptor.
- Removed the dormant 4/8/12-lesson tier draft; no pricing structure is stored
  as approved content while the new 5/10-lesson proposal remains unsigned.
- Added three honest narration placeholders without assigning any ambiguous
  local audio file to the client.
- Full evidence notes and deferred decisions are recorded in
  `docs/phases/09-source-fidelity-audit.md`.

## Phase 10 completed

- Replaced the outdated homepage service line with Teaching → Content
  repurposing → Narration terminology and order.
- Replaced the three abbreviated service processes with the exact SSOT process
  titles: five Teaching steps, six Repurposing steps and six Narration steps.
  Descriptions remain empty because their wording still requires approval.
- Published every confirmed Teaching, Repurposing and Narration price and
  inclusion from the SSOT under neutral descriptive labels. The unresolved
  branded package names and Teaching intensive ideas were not added.
- Corrected The Television Workshop wording to state plainly that Aneesa was a
  student there while preserving the existing external link.
- Added Testimonials dropdown entries and honest empty-state sections to
  Repurposing and Narration only.
- Production build passes with all 21 static routes.
