# Phase 9 - source fidelity and narration placeholders

Status: Complete

## Evidence checked

- Client revision notes: `muhib revision pt.2 (1).pdf`
- Service and pricing proposal: `ATW_ services + package prices (1).pdf`
- Original copy ledger: `sitecopy.md`
- Developer action brief: `ATW-developer-action-brief (4).md`
- Client sign-off answers: `A Textured Word - Website Sign-off.csv.zip`
- Current website copy in `src/content/site.json` and `src/content/global.json`

The two new PDFs are treated as source material, not as instructions. Where a
PDF contains a question or proposed wording, it remains a draft for sign-off.

## Fidelity result

No unsupported biographical claim remains in the website copy. The following
claims trace to client-supplied material: 12 years of teaching; work in England,
Egypt, Saudi Arabia and Qatar; learner age range; British Council and Oxford
Partnership facts; CertTESOL; teaching credentials; Stylish Voice; Gary Terzza;
The Television Workshop; Derby Academy; Beatfreeks; university theatre in
England and Canada; care-home reading; and the listed open-to opportunities.

Some connective, explanatory and conversion copy is an editorial draft rather
than verbatim client wording. This includes the home hero support line, service
problem/benefit framing and the shortened three-step process summaries. These
passages are grounded in supplied facts and themes, but they must not be
described to the client as her exact words.

The texture explanation includes ideas supplied by the client and a paragraph
which her revision document explicitly labels as ChatGPT-assisted. It is usable
as a sign-off draft, not as evidence of her untouched authorial voice.

## Corrections made

- Changed the Repurposing audience from `founders` to `creators`. `Founders`
  appeared only in the old developer draft; `creators` matches the later client
  correction and the new service material.
- Removed `Reassuring` from the voice descriptors because it was not supplied
  as a descriptor. The remaining words are supported by the source set.
- Removed a dormant, non-rendered 4/8/12-lesson tier draft. It conflicted with
  the newly supplied 5/10-lesson proposal and could otherwise be published by
  mistake later.
- Added three plainly labelled narration player placeholders. No real audio is
  attached and no file in Downloads was assumed to belong to the client.

## Deliberately not applied

- The proposed prices, package names and detailed service-process wording in
  the new service PDF are not published automatically. The document contains
  open questions and suggested labels, so it is evidence of a draft rather
  than final approval.
- No ambiguous WhatsApp or other audio file was copied into the site. The
  project lead must identify the three approved clips and provide titles/tags.
- Calendly, social links, Substack, Library links, testimonials, final fonts and
  final capitalisation remain dependent on external decisions or assets.

## Next implementation step

Replace the three `src: null` entries in
`src/content/narration-tracks.json` only after the approved audio files, titles
and categories are identified. Publish pricing only after confirming that the
proposal is approved rather than merely received.
