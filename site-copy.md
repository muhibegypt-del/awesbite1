# a textured word — revised site copy

Every string that renders on the site, with the section it appears in and the key it is stored under.

**Source:** `src/content/site.json` and `src/content/global.json`. A key like `services[0].oneLiner` means the first service's one-liner. Keys marked *hardcoded* live in the template named, not in JSON.

**Status:** `Aneesa` = based on her approved wording · `Client` = supplied in your brief, not traceable to her transcripts · `Dev` = structural label · `EMPTY` = slot declared but unfilled, renders as a visible placeholder. Statuses record the source of the underlying message; published wording below has been editorially revised.

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
| Footer — col 1 link 2 | `global: footer.columns[0].links[1]` | Narration and voice work → `/narration` | Dev |
| Footer — col 1 link 3 | `global: footer.columns[0].links[2]` | Writing → `/writing` | Dev |
| Footer — col 2 heading | `global: footer.columns[1].heading` | get in touch | Dev |
| Footer — col 2 link 1 | `global: footer.columns[1].links[0]` | atexturedword@gmail.com → `mailto:atexturedword@gmail.com` | Dev |
| Footer — col 2 link 2 | `global: footer.columns[1].links[1]` | Book a free call → `/contact` | Dev |
| Footer — col 2 link 3 | `global: footer.columns[1].links[2]` | About Aneesa → `/about` | Dev |
| Footer — social heading | `global: social.heading` | follow | Dev |
| Footer — social 1 | `global: social.links[0]` | Instagram — URL **None** | EMPTY |
| Footer — social 2 | `global: social.links[1]` | Substack — URL **None** | EMPTY |
| Footer — social 3 | `global: social.links[2]` | YouTube — URL **None** | EMPTY |
| Footer — social 4 | `global: social.links[3]` | TikTok — URL **None** | EMPTY |
| Footer — legal line | `global: footer.legal` | © 2026 a textured word · United Kingdom | Dev |
| Footer — legal 1 | `global: footer.legalLinks[0]` | privacy — href **None** | EMPTY |
| Footer — legal 2 | `global: footer.legalLinks[1]` | terms — href **None** | EMPTY |
| Contact email | `global: contact.email` | atexturedword@gmail.com | Aneesa |
| Meta — site title | `global: meta.title` | a textured word · English tuition, audiobook narration and writing | Dev |
| Meta — description | `global: meta.description` | One-to-one English tuition for children and adults, professional audiobook narration and voice work, and writing that sounds like you. Book a free 20-minute call. | Dev |
| Meta — share image | `global: meta.ogImage` | **None** | EMPTY |

---

## `/` — The hub
`src/pages/index.astro`

| Section | Key | Copy | Status |
|---|---|---|---|
| Hero — eyebrow | `site: brand.triad` | the taught word. the spoken word. the written word. | Aneesa |
| Hero — H1 | `site: hub.headline` | English tuition, narration and writing, delivered with care. | Client |
| Hero — sub | `site: hub.sub` | Thoughtful, professional support for students, authors and businesses. | Client |
| Pillars — marker | `hardcoded, index.astro` | Services | Dev |
| Pillars — H2 | `site: hub.pillarsHeading` | Three ways to work with me | Aneesa |
| Pillars — line | `site: hub.pillarsLine` | Each service begins with careful attention—to the student, the text or the voice behind the idea. | Aneesa |
| Authority — marker | `hardcoded, index.astro` | Who | Dev |
| Authority — H2 | `site: hub.authorityHeading` | Aneesa | Aneesa |
| Authority — para 1 | `site: hub.authorityParagraphs[0]` | I am an English teacher, voice artist and writer with 12 years of classroom experience across three countries. My work is grounded in listening closely, identifying what is needed and responding with care. | Aneesa |
| Authority — para 2 | `site: hub.authorityParagraphs[1]` | Before teaching, I acted, performed spoken word and read novels aloud in a care home. Each experience taught me something about language, interpretation and connecting with an audience. | Aneesa |
| Authority — link | `site: hub.authorityLink` | More about Aneesa → `/about` | Dev |
| Authority — portrait | `not wired` | Empty 4:5 frame | EMPTY |
| Close — marker | `hardcoded, index.astro` | Contact | Dev |
| Close — H2 | `site: contact.heading` | Let's talk about what you need. | Aneesa |
| Close — line | `site: contact.line` | Tell me what you are looking for and when you need it. We can begin with a free 20-minute call to see whether I am the right person to help. | Aneesa |

### The three pillar cards
`src/components/PillarCards.astro` — full version on `/`, compact at the foot of every spoke.

| Section | Key | Copy | Status |
|---|---|---|---|
| Card 1 — slug | `services[0].number/.tag` | [01 // TEACH] | Dev |
| Card 1 — name | `services[0].pillar` | The Taught Word | Dev |
| Card 1 — plain | `services[0].plain` | English tuition | Aneesa |
| Card 1 — one-liner | `services[0].oneLiner` | I identify the gaps holding a student back and build from there, helping them develop the skills and confidence to show what they know. | Aneesa |
| Card 1 — audience | `services[0].audience` | For students and parents | Dev |
| Card 2 — slug | `services[1].number/.tag` | [02 // SPEAK] | Dev |
| Card 2 — name | `services[1].pillar` | The Spoken Word | Dev |
| Card 2 — plain | `services[1].plain` | Audiobook narration and voice work | Aneesa |
| Card 2 — one-liner | `services[1].oneLiner` | I take the time to understand the text and its intention, then deliver a thoughtful performance that holds the listener's attention. | Aneesa |
| Card 2 — audience | `services[1].audience` | For authors, publishers and producers | Dev |
| Card 3 — slug | `services[2].number/.tag` | [03 // WRITE] | Dev |
| Card 3 — name | `services[2].pillar` | The Written Word | Dev |
| Card 3 — plain | `services[2].plain` | Writing and repurposing | Aneesa |
| Card 3 — one-liner | `services[2].oneLiner` | I turn voice notes, recordings and existing content into clear, useful writing that still sounds like you. | Aneesa |
| Card 3 — audience | `services[2].audience` | For coaches, founders and podcasters | Dev |

---

## `/tuition` — The Taught Word: English tuition
`src/pages/tuition.astro` → `src/components/ServicePage.astro`

| Section | Key | Copy | Status |
|---|---|---|---|
| Hero — slug | `services[0].number/.tag` | [01 // TEACH] | Dev |
| Hero — pillar | `services[0].pillar` | The Taught Word | Dev |
| Hero — H1 | `services[0].plain` | English tuition | Aneesa |
| Hero — audience | `services[0].audience` | For students and parents | Dev |
| Hero — one-liner | `services[0].oneLiner` | I identify the gaps holding a student back and build from there, helping them develop the skills and confidence to show what they know. | Aneesa |
| Hero — button | `services[0].cta` | Book a free assessment → `/contact?about=English+tuition` | Dev |
| Problem — marker | `hardcoded, ServicePage.astro` | The challenge | Dev |
| Problem — para 1 | `services[0].problem[0]` | In a busy classroom, lessons have to keep moving. When a student misses an important step, later work becomes harder and confidence can begin to fall. | Aneesa |
| Problem — para 2 | `services[0].problem[1]` | The difficulty is often specific: comprehension, exam technique, working within a time limit or knowing how to begin a piece of writing. One-to-one tuition gives us the time to identify it and work on it directly. | Aneesa |
| Problem — aside heading | `services[0].aside.heading` | Why previous support may not have worked | Aneesa |
| Problem — aside body | `services[0].aside.body` | Online resources can be difficult to follow consistently. A tutor may move too quickly, while extra time at school can feel like more of the same. Completing every piece of homework does not always address the underlying gap. | Aneesa |
| Tracks — H2 | `services[0].tracksHeading` | Who I teach | Dev |
| Tracks — row 1 | `services[0].tracks[0]` | **Primary, 6 to 11** — Phonics, reading, comprehension and confident writing | Aneesa |
| Tracks — row 2 | `services[0].tracks[1]` | **Key Stage 3** — Building the core reading and writing skills needed for GCSE | Aneesa |
| Tracks — row 3 | `services[0].tracks[2]` | **GCSE and iGCSE** — Exam technique, time management and writing under pressure | Aneesa |
| Tracks — row 4 | `services[0].tracks[3]` | **A-Level** — Close analysis, inference and authorial intention | Aneesa |
| Tracks — row 5 | `services[0].tracks[4]` | **IELTS** — Focused preparation across reading, writing, listening and speaking | Aneesa |
| Tracks — row 6 | `services[0].tracks[5]` | **Adults** — General English from beginner to advanced, taught at a pace that suits you | Aneesa |
| Note — heading | `services[0].note.heading` | Support at every level | Aneesa |
| Note — body | `services[0].note.body` | Tuition is not only for students who are struggling. It can also challenge students who are working ahead of their class and need more stimulating material. | Aneesa |
| Method — H2 | `services[0].methodHeading` | How it works | Dev |
| Method — step 1 | `services[0].method[0]` | `01` **A free 20-minute call.** We discuss what support is needed, the timescale and any current concerns. | Aneesa |
| Method — step 2 | `services[0].method[1]` | `02` **A first session to identify the gaps.** I assess where the student is now, rather than relying only on where the syllabus says they should be. | Aneesa |
| Method — step 3 | `services[0].method[2]` | `03` **Weekly lessons, booked in blocks.** Work can be set between sessions and reviewed before the next lesson. | Aneesa |
| Pricing — H2 | `services[0].pricingHeading` | Straightforward pricing | Aneesa |
| Pricing — line | `services[0].pricingLine` | Lessons are booked in monthly blocks so that each session can build on the last and progress can be reviewed consistently. | Aneesa |
| Pricing — tier 1 | `services[0].tiers[0]` | **Four lessons** — One a week — Pricing on enquiry | EMPTY rate |
| Pricing — tier 2 | `services[0].tiers[1]` | **Eight lessons** — Twice a week — Pricing on enquiry | EMPTY rate |
| Pricing — tier 3 | `services[0].tiers[2]` | **Twelve lessons** — Three times a week — Pricing on enquiry | EMPTY rate |
| Agreements — H3 | `services[0].agreementsHeading` | What you can expect | Aneesa |
| Agreement 1 — heading | `services[0].agreements[0].heading` | An honest assessment from the beginning. | Aneesa |
| Agreement 1 — body | `services[0].agreements[0].body` | I will not promise a particular grade before meeting a student. After the first session, I will explain what I have identified, what we can work towards and what that is likely to require. | Aneesa |
| Agreement 2 — heading | `services[0].agreements[1].heading` | Lessons shaped around the student. | Aneesa |
| Agreement 2 — body | `services[0].agreements[1].body` | We work at the right pace for the individual, with time to revisit or extend material as needed. | Aneesa |
| Agreement 3 — heading | `services[0].agreements[2].heading` | A flexible approach to explanation. | Aneesa |
| Agreement 3 — body | `services[0].agreements[2].body` | If one explanation does not make sense, I will find another. It is my responsibility to make the learning clear and accessible. | Aneesa |
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
| Hero — one-liner | `services[1].oneLiner` | I take the time to understand the text and its intention, then deliver a thoughtful performance that holds the listener's attention. | Aneesa |
| Hero — button | `services[1].cta` | Request a custom audition → `/contact?about=Audiobook+narration` | Dev |
| Reels — H2 | `services[1].reelsHeading` | Listen | Dev |
| Reels — content | `services[1].reels` | [ VOICE REELS WILL GO HERE — three separate demos: fiction narration, corporate explainer, e-learning. MP3, 60 to 90 seconds each. This block sits at the top of the page because producers listen before they read. ] | EMPTY |
| Problem — marker | `hardcoded, ServicePage.astro` | The challenge | Dev |
| Problem — para 1 | `services[1].problem[0]` | A book can take years to write. Its characters, tone and rhythm deserve a narrator who will understand the work before stepping up to the microphone. | Aneesa |
| Problem — para 2 | `services[1].problem[1]` | The right performance should feel true to the text, consistent from beginning to end and engaging for the listener. | Aneesa |
| Problem — aside heading | `services[1].aside.heading` | What careful preparation prevents | Aneesa |
| Problem — aside body | `services[1].aside.body` | An unsuitable tone, inconsistent character voices and avoidable re-recording can all weaken the finished production. Preparation helps the recording process run smoothly and protects the quality of the work. | Aneesa |
| Voice — H3 | `services[1].voiceHeading` | The voice | Dev |
| Voice — body | `services[1].voiceBody` | Warm, rich and unhurried, with a clear English accent shaped in Leicester. Clients have described my voice as silky and reassuring, with a natural pace suited to sustained listening. | Aneesa |
| Voice — tags | `services[1].voiceTags` | Warm · Rich · Clear · Reassuring · Unhurried | Aneesa |
| Tracks — H2 | `services[1].tracksHeading` | What I narrate | Dev |
| Tracks — row 1 | `services[1].tracks[0]` | **Audiobooks** — Fiction and non-fiction | Aneesa |
| Tracks — row 2 | `services[1].tracks[1]` | **E-learning** — Training and course material | Aneesa |
| Tracks — row 3 | `services[1].tracks[2]` | **Video** — Explainer and corporate content | Aneesa |
| Tracks — row 4 | `services[1].tracks[3]` | **IVR** — Phone systems and continuity messaging | Aneesa |
| Method — H2 | `services[1].methodHeading` | How it works | Dev |
| Method — step 1 | `services[1].method[0]` | `01` **A free initial call.** We discuss the project, the deadline, the audience and the voice you have in mind. | Aneesa |
| Method — step 2 | `services[1].method[1]` | `02` **Preparation before recording.** I read the material closely, clarify the intention and make the necessary performance choices. | Aneesa |
| Method — step 3 | `services[1].method[2]` | `03` **Recording and delivery.** Your finished audio is supplied to the agreed technical specification and deadline. | Aneesa |
| Method — footnote | `services[1].footnote` | Producing a finished audiobook typically takes 30 to 40 hours of work for every 10 hours of completed audio. Each project is quoted individually. | Aneesa |
| Worth knowing — marker | `hardcoded, ServicePage.astro` | Worth knowing | Dev |
| Studio — H3 | `services[1].studioHeading` | Studio and turnaround | Dev |
| Studio — content | `services[1].studio` | [ STUDIO SPEC WILL GO HERE — booth or treated room, microphone, interface, DAW, delivery formats, and typical turnaround. Corporate clients look for this to confirm broadcast quality. ] | EMPTY |
| Background — heading | `services[1].background.heading` | Training and experience | Aneesa |
| Background — body | `services[1].background.body` | I have trained with voice coach Gary Terzza and studied stage acting at the Television Workshop and Derby Academy. My performance experience also includes spoken word with Beatfreeks and university theatre in England and Canada. Further audiobook narration training with RADA is planned. | Aneesa |
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
| Hero — one-liner | `services[2].oneLiner` | I turn voice notes, recordings and existing content into clear, useful writing that still sounds like you. | Aneesa |
| Hero — button | `services[2].cta` | Book a discovery call → `/contact?about=Writing` | Dev |
| Problem — marker | `hardcoded, ServicePage.astro` | The challenge | Dev |
| Problem — para 1 | `services[2].problem[0]` | You have the expertise and the ideas, but turning them into consistent, well-structured content takes time away from the work only you can do. | Aneesa |
| Problem — para 2 | `services[2].problem[1]` | The challenge is often time and process, not a lack of things to say. | Aneesa |
| Problem — aside heading | `services[2].aside.heading` | What can get in the way | Aneesa |
| Problem — aside body | `services[2].aside.body` | A strong idea is shared once and then lost, or polished so heavily that it no longer sounds like the person behind it. | Aneesa |
| Swap — left label | `services[2].swap.fromLabel` | You send | Dev |
| Swap — left body | `services[2].swap.from` | A voice note, podcast episode, old newsletter or any other material in which your thinking already exists. | Aneesa |
| Swap — right label | `services[2].swap.toLabel` | You get back | Dev |
| Swap — right body | `services[2].swap.to` | Clear, purposeful content adapted for more than one platform and written in a voice that remains recognisably yours. | Aneesa |
| Tracks — H2 | `services[2].tracksHeading` | What I take on | Dev |
| Tracks — row 1 | `services[2].tracks[0]` | **Carousels** — One idea developed into a clear, engaging sequence | Aneesa |
| Tracks — row 2 | `services[2].tracks[1]` | **Newsletters** — Structured writing developed from your existing ideas | Aneesa |
| Tracks — row 3 | `services[2].tracks[2]` | **Articles** — Thoughtful long-form writing in your voice | Aneesa |
| Tracks — row 4 | `services[2].tracks[3]` | **Repurposing systems** — A practical way to make each idea work across several formats | Aneesa |
| Method — H2 | `services[2].methodHeading` | How it works | Dev |
| Method — step 1 | `services[2].method[0]` | `01` **A call to agree the purpose.** We clarify what the content needs to achieve, who it is for and where it will be used. | Aneesa |
| Method — step 2 | `services[2].method[1]` | `02` **You share what already exists.** Send voice notes, podcast recordings, previous newsletters or other source material. | Aneesa |
| Method — step 3 | `services[2].method[2]` | `03` **You receive polished, ready-to-use writing.** The structure is mine; the voice remains yours. | Aneesa |
| Worth knowing — marker | `hardcoded, ServicePage.astro` | Worth knowing | Dev |
| Examples — H3 | `services[2].examplesHeading` | Examples | Dev |
| Examples — content | `services[2].examples` | [ BEFORE AND AFTER EXAMPLES WILL GO HERE — one source (voice note or podcast) shown beside what it became. Two or three, with client permission. ] | EMPTY |
| Background — heading | `services[2].background.heading` | Current availability | Aneesa |
| Background — body | `services[2].background.body` | I currently work with one or two writing clients at a time. This allows for close attention, a collaborative process and introductory rates while I continue to develop the service. | Aneesa |
| Also — marker | `hardcoded, ServicePage.astro` | Also | Dev |

---

## `/about` — About Aneesa
`src/pages/about.astro`

| Section | Key | Copy | Status |
|---|---|---|---|
| Hero — marker | `hardcoded, about.astro` | About | Dev |
| Hero — H1 | `site: about.heading` | Aneesa | Aneesa |
| Hero — para 1 | `site: about.paragraphs[0]` | I am an English teacher, voice artist and writer with 12 years of classroom experience across three countries. My work is grounded in listening closely, identifying what is needed and responding with care. | Aneesa |
| Hero — para 2 | `site: about.paragraphs[1]` | Before teaching, I acted, performed spoken word and read novels aloud in a care home. Each experience taught me something about language, interpretation and connecting with an audience. | Aneesa |
| Hero — portrait | `site: about.portrait` | **null** — alt written: “Aneesa resting her chin on her hands beside an anthology of poetry” | EMPTY |
| Why — marker | `hardcoded, about.astro` | Why one to one | Dev |
| Why — empathy | `site: about.empathy` | As a child, I found time pressure difficult even when I understood the subject. Years later, I needed a teacher to help me learn Arabic despite having access to countless free resources. Both experiences showed me that the right individual support can make all the difference. | Aneesa |
| Why — authority | `site: about.authority` | I have spent 12 years teaching English: in primary classrooms in England, with the British Council in Egypt, at a women's college in Saudi Arabia and at a British secondary school in Doha. I have taught learners from age six to adult, from beginner level through to A-Level. | Aneesa |
| Villain — H3 | `site: about.whyHeading` | The value of individual attention | Aneesa |
| Villain — para 1 | `site: about.why[0]` | Classrooms, production schedules and content platforms are designed to serve many people efficiently. That can leave limited space for the needs of one student, the intention behind one book or the individual voice behind an idea. | Aneesa |
| Villain — para 2 | `site: about.why[1]` | This is not a failure of the people involved. It is a natural limitation of work designed for a group rather than an individual. | Aneesa |
| Villain — para 3 | `site: about.why[2]` | My approach creates that individual space: close attention, thoughtful questions and work shaped around the person or project in front of me. | Aneesa |
| Reflection — marker | `hardcoded, about.astro` | Reflection | Dev |
| Reflection — flag | `site: about.reflectionFlag` | A personal project · not a service | Aneesa |
| Reflection — H3 | `site: about.reflectionHeading` | Reading and reflection | Aneesa |
| Reflection — body | `site: about.reflectionBody` | Books are central to how I think and work, so I also write about them outside my professional services. This is a personal space for close reading, thoughtful interpretation and the passages that reward a little more attention. | Aneesa |
| Reflection — tags | `site: about.reflectionTags` | Words of the week · Close reading · Adaptations · Literary devices · Narrated extracts · Three takeaways | Aneesa |
| Reflection — platforms | `site: about.reflectionPlatforms` | Instagram · TikTok · YouTube · Substack | Aneesa |
| Open to — marker | `hardcoded, about.astro` | Open to | Dev |
| Open to — item 1 | `site: about.openTo[0]` | Panel moderation | Aneesa |
| Open to — item 2 | `site: about.openTo[1]` | Literary festival hosting | Aneesa |
| Open to — item 3 | `site: about.openTo[2]` | Author interviews | Aneesa |
| Open to — item 4 | `site: about.openTo[3]` | Publisher and bookshop events | Aneesa |
| Open to — item 5 | `site: about.openTo[4]` | Brand partnerships with publishers, stationery brands and education companies | Aneesa |
| Open to — link | `hardcoded, about.astro` | Enquiries: atexturedword@gmail.com | Dev |

### Credential row — renders on `/` and `/about`

| Section | Key | Copy | Status |
|---|---|---|---|
| Credential 1 | `site: credentials[0]` | **First-class BA (Hons)** — English and American Literature | Aneesa |
| Credential 2 | `site: credentials[1]` | **Trinity CertTESOL** — Trinity College London | Aneesa |
| Credential 3 | `site: credentials[2]` | **PGCE and QTS** — Qualified Teacher Status | Aneesa |
| Credential 4 | `site: credentials[3]` | **British Council** — Former teacher in Egypt and Saudi Arabia | Aneesa |

---

## `/contact` — Book a free call
`src/pages/contact.astro` → `src/components/ContactForm.astro`

| Section | Key | Copy | Status |
|---|---|---|---|
| Marker | `hardcoded, contact.astro` | Contact | Dev |
| H1 | `site: contact.heading` | Let's talk about what you need. | Aneesa |
| Intro | `site: contact.line` | Tell me what you are looking for and when you need it. We can begin with a free 20-minute call to see whether I am the right person to help. | Aneesa |
| Form — required note | `site: contact.optionalNote` | Every field except the deadline is required. | Dev |
| Form — label, name | `site: contact.fields.name` | Name | Aneesa |
| Form — label, email | `site: contact.fields.email` | Email | Aneesa |
| Form — label, topic | `site: contact.fields.topic` | What is this about? | Aneesa |
| Form — label, message | `site: contact.fields.message` | Tell me a little more | Aneesa |
| Form — label, deadline | `site: contact.fields.deadline` | When do you need this? | Aneesa |
| Form — topic default | `site: contact.topicPlaceholder` | Choose one | Dev |
| Form — topic 1 | `site: contact.topics[0]` | English tuition | Aneesa |
| Form — topic 2 | `site: contact.topics[1]` | IELTS preparation | Aneesa |
| Form — topic 3 | `site: contact.topics[2]` | Audiobook narration | Aneesa |
| Form — topic 4 | `site: contact.topics[3]` | Voice work | Aneesa |
| Form — topic 5 | `site: contact.topics[4]` | Writing | Aneesa |
| Form — topic 6 | `site: contact.topics[5]` | Speaking or hosting | Aneesa |
| Form — topic 7 | `site: contact.topics[6]` | Something else | Aneesa |
| Form — message placeholder | `site: contact.placeholder` | A couple of lines is enough to get started. | Aneesa |
| Form — button | `site: contact.submit` | Send enquiry | Aneesa |
| Form — button, sending | `site: contact.submitting` | Sending… | Aneesa |
| Form — error, name | `site: contact.errors.name` | Please add your name so I know who I am replying to. | Aneesa |
| Form — error, email | `site: contact.errors.email` | Please add an email address so I can reply. | Aneesa |
| Form — error, emailFormat | `site: contact.errors.emailFormat` | Please check that the email address is complete. | Aneesa |
| Form — error, topic | `site: contact.errors.topic` | Please choose the option that fits best. | Aneesa |
| Form — error, message | `site: contact.errors.message` | Please add a line or two about what you need. | Aneesa |
| Form — response time | `site: contact.response` | I reply within two working days. | Aneesa |
| Below form | `hardcoded, contact.astro` | Or email directly: atexturedword@gmail.com | Dev |
| Honeypot | `hardcoded, ContactForm.astro` | Do not fill this in — hidden from sight and from screen readers | Dev |

---

## Utility pages

| Section | Key | Copy | Status |
|---|---|---|---|
| `/thank-you` — H1 | `site: thankYou.heading` | Thank you. | Aneesa |
| `/thank-you` — body | `site: thankYou.body` | Your enquiry has been received. I reply within two working days; if you have not heard from me after that, please email me directly. | Aneesa |
| `/thank-you` — button | `hardcoded, thank-you.astro` | Back to the site | Dev |
| `/404` — H1 | `site: notFound.heading` | That page could not be found. | Aneesa |
| `/404` — body | `site: notFound.body` | The link may be out of date, or the page may have moved. | Aneesa |
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

