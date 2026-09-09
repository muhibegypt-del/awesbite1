# a textured word — complete site copy

Every string that renders on the site, with the section it appears in and the key it is stored under.

**Source:** `src/content/site.json` and `src/content/global.json`. A key like `services[0].oneLiner` means the first service's one-liner. Keys marked *hardcoded* live in the template named, not in JSON.

**Status:** `Aneesa` = her approved wording · `Client` = supplied in your brief, not traceable to her transcripts · `Dev` = structural label · `EMPTY` = slot declared but unfilled, renders as a visible placeholder.

---

## Sitewide — header, footer, meta

`src/layouts/Base.astro`, on every page.

| Section | Key | Copy | Status |
|---|---|---|---|
| Header — wordmark | `global: brand.wordmark` | a textured word | Dev |
| Preview bar | `global: banner.text` | This is a site preview | Dev |
| Header — nav 1 | `global: nav.items[0]` | tuition → `/tuition` | Dev |
| Header — nav 2 | `global: nav.items[1]` | narration → `/narration` | Dev |
| Header — nav 3 | `global: nav.items[2]` | writing → `/writing` | Dev |
| Header — nav 4 | `global: nav.items[3]` | about → `/about` | Dev |
| Header — button | `global: nav.cta` | Book a free call → `/contact` | Dev |
| Skip link | `global: skipLink` | skip to content | Dev |
| Footer — tagline | `global: footer.tagline` | the taught word. the spoken word. the written word. | Aneesa |
| Footer — col 1 heading | `global: footer.columns[0].heading` | services | Dev |
| Footer — col 1 link 1 | `global: footer.columns[0].links[0]` | English tuition → `/tuition` | Dev |
| Footer — col 1 link 2 | `global: footer.columns[0].links[1]` | Narration and voice → `/narration` | Dev |
| Footer — col 1 link 3 | `global: footer.columns[0].links[2]` | Writing → `/writing` | Dev |
| Footer — col 2 heading | `global: footer.columns[1].heading` | get in touch | Dev |
| Footer — col 2 link 1 | `global: footer.columns[1].links[0]` | atexturedword@gmail.com → `mailto:atexturedword@gmail.com` | Dev |
| Footer — col 2 link 2 | `global: footer.columns[1].links[1]` | Book a free call → `/contact` | Dev |
| Footer — col 2 link 3 | `global: footer.columns[1].links[2]` | About Aneesa → `/about` | Dev |
| Footer — social heading | `global: social.heading` | elsewhere | Dev |
| Footer — social 1 | `global: social.links[0]` | Instagram — URL **None** | EMPTY |
| Footer — social 2 | `global: social.links[1]` | Substack — URL **None** | EMPTY |
| Footer — social 3 | `global: social.links[2]` | YouTube — URL **None** | EMPTY |
| Footer — social 4 | `global: social.links[3]` | TikTok — URL **None** | EMPTY |
| Footer — legal line | `global: footer.legal` | © 2026 a textured word · United Kingdom | Dev |
| Footer — legal 1 | `global: footer.legalLinks[0]` | privacy — href **None** | EMPTY |
| Footer — legal 2 | `global: footer.legalLinks[1]` | terms — href **None** | EMPTY |
| Contact email | `global: contact.email` | atexturedword@gmail.com | Aneesa |
| Meta — site title | `global: meta.title` | a textured word · English tuition, audiobook narration and writing | Dev |
| Meta — description | `global: meta.description` | One to one English tuition for ages 6 to 60, audiobook narration for authors, and writing that still sounds like you. Book a free 20-minute call. | Dev |
| Meta — share image | `global: meta.ogImage` | **None** | EMPTY |

---

## `/` — The hub
`src/pages/index.astro`

| Section | Key | Copy | Status |
|---|---|---|---|
| Hero — eyebrow | `site: brand.triad` | the taught word. the spoken word. the written word. | Aneesa |
| Hero — H1 | `site: hub.headline` | Bringing words to life. | Client |
| Hero — sub | `site: hub.sub` | Masterful English communication for students, authors and brands. | Client |
| Pillars — marker | `hardcoded, index.astro` | Services | Dev |
| Pillars — H2 | `site: hub.pillarsHeading` | Three services, one job | Aneesa |
| Pillars — line | `site: hub.pillarsLine` | Getting something out of a person without flattening it on the way. | Aneesa |
| Authority — marker | `hardcoded, index.astro` | Who | Dev |
| Authority — H2 | `site: hub.authorityHeading` | Aneesa | Aneesa |
| Authority — para 1 | `site: hub.authorityParagraphs[0]` | English teacher, voice artist, writer. Twelve years in classrooms across three countries, and a long-standing interest in the moment something stops making sense to somebody. | Aneesa |
| Authority — para 2 | `site: hub.authorityParagraphs[1]` | Before teaching I acted, wrote spoken word, and read novels aloud to elderly people in a care home. All of it closer to teaching than it sounds. | Aneesa |
| Authority — link | `site: hub.authorityLink` | More about Aneesa → `/about` | Dev |
| Authority — portrait | `not wired` | Empty 4:5 frame | EMPTY |
| Close — marker | `hardcoded, index.astro` | Contact | Dev |
| Close — H2 | `site: contact.heading` | Let's find out whether this is a fit. | Aneesa |
| Close — line | `site: contact.line` | Tell me what you need and by when. The first call is free, takes twenty minutes, and I will not try to sell you something you do not need. | Aneesa |

### The three pillar cards
`src/components/PillarCards.astro` — full version on `/`, compact at the foot of every spoke.

| Section | Key | Copy | Status |
|---|---|---|---|
| Card 1 — slug | `services[0].number/.tag` | [01 // TEACH] | Dev |
| Card 1 — name | `services[0].pillar` | The Taught Word | Dev |
| Card 1 — plain | `services[0].plain` | English tuition | Aneesa |
| Card 1 — one-liner | `services[0].oneLiner` | Most students who fall behind in English have missed one step. I find it and build from there, so they can show what they actually know. | Aneesa |
| Card 1 — audience | `services[0].audience` | For students, and the parents paying | Dev |
| Card 2 — slug | `services[1].number/.tag` | [02 // SPEAK] | Dev |
| Card 2 — name | `services[1].pillar` | The Spoken Word | Dev |
| Card 2 — plain | `services[1].plain` | Audiobook narration and voice work | Aneesa |
| Card 2 — one-liner | `services[1].oneLiner` | Most authors hand years of work to a stranger and hope. I read it first and find what you meant, so listeners stay to the end. | Aneesa |
| Card 2 — audience | `services[1].audience` | For authors, publishers and producers | Dev |
| Card 3 — slug | `services[2].number/.tag` | [03 // WRITE] | Dev |
| Card 3 — name | `services[2].pillar` | The Written Word | Dev |
| Card 3 — plain | `services[2].plain` | Writing and repurposing | Aneesa |
| Card 3 — one-liner | `services[2].oneLiner` | Most people with something worth saying will not sit down and write it. I take the voice notes and hand it back sounding like them. | Aneesa |
| Card 3 — audience | `services[2].audience` | For coaches, founders and podcasters | Dev |

---

## `/tuition` — The Taught Word: English tuition
`src/pages/tuition.astro` → `src/components/ServicePage.astro`

| Section | Key | Copy | Status |
|---|---|---|---|
| Hero — slug | `services[0].number/.tag` | [01 // TEACH] | Dev |
| Hero — pillar | `services[0].pillar` | The Taught Word | Dev |
| Hero — H1 | `services[0].plain` | English tuition | Aneesa |
| Hero — audience | `services[0].audience` | For students, and the parents paying | Dev |
| Hero — one-liner | `services[0].oneLiner` | Most students who fall behind in English have missed one step. I find it and build from there, so they can show what they actually know. | Aneesa |
| Hero — button | `services[0].cta` | Book a free assessment → `/contact?about=English+tuition` | Dev |
| Problem — marker | `hardcoded, ServicePage.astro` | The problem | Dev |
| Problem — para 1 | `services[0].problem[0]` | A class of thirty moves when most of the room is ready. If you are not, the lesson goes on without you, and after a while you start to think the problem is you. | Aneesa |
| Problem — para 2 | `services[0].problem[1]` | It is usually one missed step. Comprehension, exam technique, time under pressure, or going blank when it is finally your turn to write. | Aneesa |
| Problem — aside heading | `services[0].aside.heading` | What has probably already been tried | Aneesa |
| Problem — aside body | `services[0].aside.body` | Free videos with nobody holding you to them. A tutor who went too fast. Staying behind at school, which is more of the same room. Every piece of homework done, and the same grade back. | Aneesa |
| Tracks — H2 | `services[0].tracksHeading` | Who I teach | Dev |
| Tracks — row 1 | `services[0].tracks[0]` | **Primary, 6 to 11** — Reading and phonics, comprehension, writing with confidence | Aneesa |
| Tracks — row 2 | `services[0].tracks[1]` | **Key Stage 3** — Building the habits that GCSE assumes are already there | Aneesa |
| Tracks — row 3 | `services[0].tracks[2]` | **GCSE and iGCSE** — Exam technique, timing, and writing under pressure | Aneesa |
| Tracks — row 4 | `services[0].tracks[3]` | **A-Level** — Inference, authorial intention, and reading between the lines | Aneesa |
| Tracks — row 5 | `services[0].tracks[4]` | **IELTS** — Marked out of 9 across four skills. Most people need 6.5 to 7.5 to study, work or live abroad | Aneesa |
| Tracks — row 6 | `services[0].tracks[5]` | **Adults** — General English, beginner to advanced, at whatever pace suits | Aneesa |
| Note — heading | `services[0].note.heading` | Two kinds of student | Aneesa |
| Note — body | `services[0].note.body` | Not only the student who is behind. Also the one who is ahead, for whom the class is too slow, and who has stopped paying attention. | Aneesa |
| Method — H2 | `services[0].methodHeading` | How it works | Dev |
| Method — step 1 | `services[0].method[0]` | `01` **A free twenty-minute call.** What you need, and by when. | Aneesa |
| Method — step 2 | `services[0].method[1]` | `02` **A first session to find the gap.** Where you are, rather than where the syllabus assumes. | Aneesa |
| Method — step 3 | `services[0].method[2]` | `03` **Weekly lessons, booked in blocks.** Work set between them, marked before the next one. | Aneesa |
| Pricing — H2 | `services[0].pricingHeading` | Straightforward pricing | Aneesa |
| Pricing — line | `services[0].pricingLine` | Lessons are booked in monthly blocks rather than one at a time, so the work has somewhere to build. | Aneesa |
| Pricing — tier 1 | `services[0].tiers[0]` | **Four lessons** — One a week — Pricing on enquiry | EMPTY rate |
| Pricing — tier 2 | `services[0].tiers[1]` | **Eight lessons** — Twice a week — Pricing on enquiry | EMPTY rate |
| Pricing — tier 3 | `services[0].tiers[2]` | **Twelve lessons** — Three times a week — Pricing on enquiry | EMPTY rate |
| Agreements — H3 | `services[0].agreementsHeading` | The three agreements | Aneesa |
| Agreement 1 — heading | `services[0].agreements[0].heading` | I will not promise you a grade before I have met you. | Aneesa |
| Agreement 1 — body | `services[0].agreements[0].body` | You need to know your student. After a first session I will tell you what I can see and what it will take, which is more use than a number I invented. | Aneesa |
| Agreement 2 — heading | `services[0].agreements[1].heading` | We go at your pace. | Aneesa |
| Agreement 2 — body | `services[0].agreements[1].body` | That is the whole point of one to one. | Aneesa |
| Agreement 3 — heading | `services[0].agreements[2].heading` | If it does not land, that is my problem. | Aneesa |
| Agreement 3 — body | `services[0].agreements[2].body` | If I have explained something two or three ways and it still has not gone in, it is on me to go away and find a fourth. | Aneesa |
| Worth knowing — marker | `hardcoded, ServicePage.astro` | Worth knowing | Dev |
| Proof — H3 | `services[0].proofHeading` | What parents and students say | Dev |
| Proof — content | `services[0].proof` | [ TESTIMONIALS WILL GO HERE — 2 to 3 quotes, 240 characters each, from parents and students. Any review from a student under 18 needs written parental permission. ] | EMPTY |
| Also — marker | `hardcoded, ServicePage.astro` | Also | Dev |

---

## `/narration` — The Spoken Word: Audiobook narration and voice work
`src/pages/narration.astro` → `src/components/ServicePage.astro`

| Section | Key | Copy | Status |
|---|---|---|---|
| Hero — slug | `services[1].number/.tag` | [02 // SPEAK] | Dev |
| Hero — pillar | `services[1].pillar` | The Spoken Word | Dev |
| Hero — H1 | `services[1].plain` | Audiobook narration and voice work | Aneesa |
| Hero — audience | `services[1].audience` | For authors, publishers and producers | Dev |
| Hero — one-liner | `services[1].oneLiner` | Most authors hand years of work to a stranger and hope. I read it first and find what you meant, so listeners stay to the end. | Aneesa |
| Hero — button | `services[1].cta` | Request a custom audition → `/contact?about=Audiobook+narration` | Dev |
| Reels — H2 | `services[1].reelsHeading` | Listen | Dev |
| Reels — content | `services[1].reels` | [ VOICE REELS WILL GO HERE — three separate demos: fiction narration, corporate explainer, e-learning. MP3, 60 to 90 seconds each. This block sits at the top of the page because producers listen before they read. ] | EMPTY |
| Problem — marker | `hardcoded, ServicePage.astro` | The problem | Dev |
| Problem — para 1 | `services[1].problem[0]` | You got up early before work, or stayed up after the children were in bed, and you crafted the whole thing. Now it goes to somebody who has never met your characters. | Aneesa |
| Problem — para 2 | `services[1].problem[1]` | What you want is someone you trust to carry the vision through. | Aneesa |
| Problem — aside heading | `services[1].aside.heading` | What goes wrong | Aneesa |
| Problem — aside body | `services[1].aside.body` | It sounds cheap. It has to be re-recorded. Your client hates it. | Aneesa |
| Voice — H3 | `services[1].voiceHeading` | The voice | Dev |
| Voice — body | `services[1].voiceBody` | Warm and unhurried. Described by people who have booked me as rich, silky and buttery. English, from Leicester, which sounds like neither the South nor the Midlands to most people. | Aneesa |
| Voice — tags | `services[1].voiceTags` | Rich · Silky · Buttery · Warm · Unhurried | Aneesa |
| Tracks — H2 | `services[1].tracksHeading` | What I narrate | Dev |
| Tracks — row 1 | `services[1].tracks[0]` | **Audiobooks** — Fiction and non-fiction | Aneesa |
| Tracks — row 2 | `services[1].tracks[1]` | **E-learning** — Training and course material | Aneesa |
| Tracks — row 3 | `services[1].tracks[2]` | **Video** — Explainer and corporate | Aneesa |
| Tracks — row 4 | `services[1].tracks[3]` | **IVR** — Phone systems and continuity | Aneesa |
| Method — H2 | `services[1].methodHeading` | How it works | Dev |
| Method — step 1 | `services[1].method[0]` | `01` **A free call.** The book, the deadline, the voice you are hearing in your head. | Aneesa |
| Method — step 2 | `services[1].method[1]` | `02` **I read it and find the intention.** Before recording, not during. | Aneesa |
| Method — step 3 | `services[1].method[2]` | `03` **Recorded and delivered.** To your platform's spec. | Aneesa |
| Method — footnote | `services[1].footnote` | A finished audiobook is thirty to forty hours of work for every ten hours you hear. Quoted per project. | Aneesa |
| Worth knowing — marker | `hardcoded, ServicePage.astro` | Worth knowing | Dev |
| Studio — H3 | `services[1].studioHeading` | Studio and turnaround | Dev |
| Studio — content | `services[1].studio` | [ STUDIO SPEC WILL GO HERE — booth or treated room, microphone, interface, DAW, delivery formats, and typical turnaround. Corporate clients look for this to confirm broadcast quality. ] | EMPTY |
| Background — heading | `services[1].background.heading` | Background | Aneesa |
| Background — body | `services[1].background.body` | Trained with voice coach Gary Terzza. Stage acting at the Television Workshop and Derby Academy, spoken word with Beatfreeks, and plays at university in England and Canada. Attending RADA's audiobook narration course next year. | Aneesa |
| Also — marker | `hardcoded, ServicePage.astro` | Also | Dev |

---

## `/writing` — The Written Word: Writing and repurposing
`src/pages/writing.astro` → `src/components/ServicePage.astro`

| Section | Key | Copy | Status |
|---|---|---|---|
| Hero — slug | `services[2].number/.tag` | [03 // WRITE] | Dev |
| Hero — pillar | `services[2].pillar` | The Written Word | Dev |
| Hero — H1 | `services[2].plain` | Writing and repurposing | Aneesa |
| Hero — audience | `services[2].audience` | For coaches, founders and podcasters | Dev |
| Hero — one-liner | `services[2].oneLiner` | Most people with something worth saying will not sit down and write it. I take the voice notes and hand it back sounding like them. | Aneesa |
| Hero — button | `services[2].cta` | Book a discovery call → `/contact?about=Writing` | Dev |
| Problem — marker | `hardcoded, ServicePage.astro` | The problem | Dev |
| Problem — para 1 | `services[2].problem[0]` | You were brave enough to start the thing. Now the writing sits between you and the work you want to be doing. | Aneesa |
| Problem — para 2 | `services[2].problem[1]` | This is about convenience rather than ability. | Aneesa |
| Problem — aside heading | `services[2].aside.heading` | What goes wrong | Aneesa |
| Problem — aside body | `services[2].aside.body` | A good idea goes out once and disappears. Or it comes back sounding like everyone else's. | Aneesa |
| Swap — left label | `services[2].swap.fromLabel` | You send | Dev |
| Swap — left body | `services[2].swap.from` | A rambling voice note, a podcast episode, an old newsletter — whatever the thinking already lives in. | Aneesa |
| Swap — right label | `services[2].swap.toLabel` | You get back | Dev |
| Swap — right body | `services[2].swap.to` | One idea that keeps working in more than one place, instead of one post that vanishes. | Aneesa |
| Tracks — H2 | `services[2].tracksHeading` | What I take on | Dev |
| Tracks — row 1 | `services[2].tracks[0]` | **Carousels** — One idea, broken into a sequence | Aneesa |
| Tracks — row 2 | `services[2].tracks[1]` | **Newsletters** — Written from what you already said | Aneesa |
| Tracks — row 3 | `services[2].tracks[2]` | **Articles** — Long-form, in your voice | Aneesa |
| Tracks — row 4 | `services[2].tracks[3]` | **Repurposing systems** — So one idea keeps working | Aneesa |
| Method — H2 | `services[2].methodHeading` | How it works | Dev |
| Method — step 1 | `services[2].method[0]` | `01` **A call to agree what you are trying to grow.** Not a content plan. A destination. | Aneesa |
| Method — step 2 | `services[2].method[1]` | `02` **Send voice notes, a podcast, an old newsletter.** Whatever exists already. | Aneesa |
| Method — step 3 | `services[2].method[2]` | `03` **It comes back sounding like you.** Your voice, not mine. | Aneesa |
| Worth knowing — marker | `hardcoded, ServicePage.astro` | Worth knowing | Dev |
| Examples — H3 | `services[2].examplesHeading` | Examples | Dev |
| Examples — content | `services[2].examples` | [ BEFORE AND AFTER EXAMPLES WILL GO HERE — one source (voice note or podcast) shown beside what it became. Two or three, with client permission. ] | EMPTY |
| Background — heading | `services[2].background.heading` | Where this is up to | Aneesa |
| Background — body | `services[2].background.body` | One or two clients at a time while I build it up. More attention than you would usually get, at a rate that reflects how early it is. | Aneesa |
| Also — marker | `hardcoded, ServicePage.astro` | Also | Dev |

---

## `/about` — About Aneesa
`src/pages/about.astro`

| Section | Key | Copy | Status |
|---|---|---|---|
| Hero — marker | `hardcoded, about.astro` | About | Dev |
| Hero — H1 | `site: about.heading` | Aneesa | Aneesa |
| Hero — para 1 | `site: about.paragraphs[0]` | English teacher, voice artist, writer. Twelve years in classrooms across three countries, and a long-standing interest in the moment something stops making sense to somebody. | Aneesa |
| Hero — para 2 | `site: about.paragraphs[1]` | Before teaching I acted, wrote spoken word, and read novels aloud to elderly people in a care home. All of it closer to teaching than it sounds. | Aneesa |
| Hero — portrait | `site: about.portrait` | **null** — alt written: “Aneesa resting her chin on her hands beside an anthology of poetry” | EMPTY |
| Why — marker | `hardcoded, about.astro` | Why one to one | Dev |
| Why — empathy | `site: about.empathy` | Time pressure really affected me when I was a child, and it had nothing to do with my ability in any subject. I still needed a teacher for Arabic, years later, with all the free material in the world available to me. Some things do not go in until someone sits with you. | Aneesa |
| Why — authority | `site: about.authority` | Twelve years teaching English. Primary classrooms in England, the British Council in Egypt, a women's college in Saudi Arabia, and a British secondary school in Doha. Ages six to sixty, beginners through to A-Level. | Aneesa |
| Villain — H3 | `site: about.whyHeading` | What is built for everyone serves no one | Aneesa |
| Villain — para 1 | `site: about.why[0]` | A class of thirty cannot wait for one child. The feedback gets spread across twenty-five or thirty students until none of it lands anywhere. A narrator can read a book accurately without ever asking what it meant. Content gets shaped by a platform until every account sounds the same. | Aneesa |
| Villain — para 2 | `site: about.why[1]` | None of that is anyone's fault. It is what happens when something is built for a room instead of a person. | Aneesa |
| Villain — para 3 | `site: about.why[2]` | All I do is the version where somebody is paying attention to one person at a time. | Aneesa |
| Reflection — marker | `hardcoded, about.astro` | Reflection | Dev |
| Reflection — flag | `site: about.reflectionFlag` | A personal project · not a service | Aneesa |
| Reflection — H3 | `site: about.reflectionHeading` | The reading part | Aneesa |
| Reflection — body | `site: about.reflectionBody` | Books are how I got here, so I write about them away from the work. Nothing here is for sale. It is where the reading goes, and the close attention to the passages most people skim past. | Aneesa |
| Reflection — tags | `site: about.reflectionTags` | Words of the week · Close reading · Adaptations · Literary devices · Narrated extracts · Three takeaways | Aneesa |
| Reflection — platforms | `site: about.reflectionPlatforms` | Instagram · TikTok · YouTube · Substack | Aneesa |
| Open to — marker | `hardcoded, about.astro` | Open to | Dev |
| Open to — item 1 | `site: about.openTo[0]` | Panel moderation | Aneesa |
| Open to — item 2 | `site: about.openTo[1]` | Literary festival hosting | Aneesa |
| Open to — item 3 | `site: about.openTo[2]` | Author interviews | Aneesa |
| Open to — item 4 | `site: about.openTo[3]` | Publisher and bookshop events | Aneesa |
| Open to — item 5 | `site: about.openTo[4]` | Brand partnerships with publishers, stationery and education companies | Aneesa |
| Open to — link | `hardcoded, about.astro` | Enquiries: atexturedword@gmail.com | Dev |

### Credential row — renders on `/` and `/about`

| Section | Key | Copy | Status |
|---|---|---|---|
| Credential 1 | `site: credentials[0]` | **1st Class BA (Hons)** — English and American Literature | Aneesa |
| Credential 2 | `site: credentials[1]` | **Trinity CertTESOL** — Trinity College London | Aneesa |
| Credential 3 | `site: credentials[2]` | **PGCE & QTS** — Qualified Teacher Status | Aneesa |
| Credential 4 | `site: credentials[3]` | **British Council** — Former teacher, Egypt & KSA | Aneesa |

---

## `/contact` — Book a free call
`src/pages/contact.astro` → `src/components/ContactForm.astro`

| Section | Key | Copy | Status |
|---|---|---|---|
| Marker | `hardcoded, contact.astro` | Contact | Dev |
| H1 | `site: contact.heading` | Let's find out whether this is a fit. | Aneesa |
| Intro | `site: contact.line` | Tell me what you need and by when. The first call is free, takes twenty minutes, and I will not try to sell you something you do not need. | Aneesa |
| Form — required note | `site: contact.optionalNote` | Every field except the deadline is required. | Dev |
| Form — label, name | `site: contact.fields.name` | Name | Aneesa |
| Form — label, email | `site: contact.fields.email` | Email | Aneesa |
| Form — label, topic | `site: contact.fields.topic` | What is this about | Aneesa |
| Form — label, message | `site: contact.fields.message` | Tell me a bit more | Aneesa |
| Form — label, deadline | `site: contact.fields.deadline` | When do you need this by | Aneesa |
| Form — topic default | `site: contact.topicPlaceholder` | Choose one | Dev |
| Form — topic 1 | `site: contact.topics[0]` | English tuition | Aneesa |
| Form — topic 2 | `site: contact.topics[1]` | IELTS preparation | Aneesa |
| Form — topic 3 | `site: contact.topics[2]` | Audiobook narration | Aneesa |
| Form — topic 4 | `site: contact.topics[3]` | Voice work | Aneesa |
| Form — topic 5 | `site: contact.topics[4]` | Writing | Aneesa |
| Form — topic 6 | `site: contact.topics[5]` | Speaking or hosting | Aneesa |
| Form — topic 7 | `site: contact.topics[6]` | Something else | Aneesa |
| Form — message placeholder | `site: contact.placeholder` | Even a couple of lines is fine. | Aneesa |
| Form — button | `site: contact.submit` | Send enquiry | Aneesa |
| Form — button, sending | `site: contact.submitting` | Sending… | Aneesa |
| Form — error, name | `site: contact.errors.name` | Add your name so I know who I am replying to. | Aneesa |
| Form — error, email | `site: contact.errors.email` | Add an email address so I can reply. | Aneesa |
| Form — error, emailFormat | `site: contact.errors.emailFormat` | That address is missing something. Worth a second look. | Aneesa |
| Form — error, topic | `site: contact.errors.topic` | Pick the one that fits closest. | Aneesa |
| Form — error, message | `site: contact.errors.message` | Add a line or two about what you need. | Aneesa |
| Form — response time | `site: contact.response` | I reply within two working days. | Aneesa |
| Below form | `hardcoded, contact.astro` | Or email directly: atexturedword@gmail.com | Dev |
| Honeypot | `hardcoded, ContactForm.astro` | Do not fill this in — hidden from sight and from screen readers | Dev |

---

## Utility pages

| Section | Key | Copy | Status |
|---|---|---|---|
| `/thank-you` — H1 | `site: thankYou.heading` | Thank you. | Aneesa |
| `/thank-you` — body | `site: thankYou.body` | That has come through. I reply within two working days. If it has been longer, something has gone wrong and it is worth emailing me directly. | Aneesa |
| `/thank-you` — button | `hardcoded, thank-you.astro` | Back to the site | Dev |
| `/404` — H1 | `site: notFound.heading` | That page is not here. | Aneesa |
| `/404` — body | `site: notFound.body` | Either my fault or an old link. | Aneesa |
| `/404` — button | `hardcoded, 404.astro` | Back to the site | Dev |

---

## Outstanding — nothing below is written

| What | Where | From |
|---|---|---|
| Voice reels ×3 — fiction, corporate, e-learning | `/narration` | Aneesa |
| Home studio spec and turnaround | `/narration` | Aneesa |
| Testimonials | `/tuition` | Aneesa |
| Before-and-after writing examples | `/writing` | Aneesa |
| Lesson rates ×3 tiers | `/tuition` | Aneesa |
| Portrait photography ×2 — alt text already written | `/`, `/about` | Aneesa |
| Social URLs ×4 | footer, `/about` | Aneesa |
| **Privacy policy and Terms — blocks launch** | footer | Aneesa |
| Social share image, og:image | all pages | Design |

