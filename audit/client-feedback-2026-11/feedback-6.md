# Website revision 6: Aneesa (via Muhib)

Source: `muhib_revision_6` (one-page PDF exported from Google Sheets), received 27 November 2026.
Kept here as [`muhib-revision-6.pdf`](muhib-revision-6.pdf), with a text extract
[`muhib-revision-6.txt`](muhib-revision-6.txt). Her words are copied as written, typos included.
Every screenshot was extracted from the PDF at full resolution into [`screens-6/`](screens-6/).
Each screenshot was placed beside its point by matching its position on the page to the
point's row.

Checked against the live site (https://awesbite1.vercel.app, commit `39ab60c`) and against
feedback 5 ([`feedback-5.md`](feedback-5.md)).

Status key: **Clear** = can be done as written. **Call** = clear intent, one detail decided
by us (stated). **Ask her** = cannot be done correctly without her answer. **Decide** = needs
Muhib's decision (a service, hosting or cost).

---

## 1. Contact: email link and an enquiry box. **Decide**

> We have this on the contact page - i tried the email link but it didn't seem to be working.
> Also, can we have an enquiry box prospects can type straight into? Example given.

*Screenshots:*
- [our contact page](screens-6/p01-our-contact.jpg): "Let's talk about what you need.", hello@atexturedword.com, *Email me* (filled) and *Copy email address* (outline), "I reply within two working days."
- [her example](screens-6/p01-her-form-example.jpg): "GET IN TOUCH", four social icons, then Name, Email and "Type your message here…" fields and a dark *Submit* button. The fields and the button are strongly rounded; the grey panel around them is square.

*Checked:*
- The link is correct: `mailto:hello@atexturedword.com`.
- The domain's mail is live (MX `smtp.google.com`, Google SPF).
- So the link is not broken. A `mailto:` link only opens the device's email app, and nothing happens where none is set up (common with webmail users). That is the same reason the previous form was retired.

*Reading:* she wants a real form: Name, Email, Message, Submit, sent to her without the visitor's email app.

*Needs:* a sending service. The site has none by design (`CLAUDE.md`), so this is Muhib's decision.
- **Option A:** a form service such as Web3Forms or Formspree. The form posts to the service and the service emails hello@. Someone with access to the hello@ inbox confirms it once.
- **Option B:** our existing Vercel Function plus an email API (for example Resend). This needs an account, an API key and DNS records on atexturedword.com.

*Feedback 5 / earlier:* the form was removed in revision 5 because its `mailto:` action did nothing without an email app.

## 2. Soft rather than sharp corners. **Call**

> Is it possible to have boxes with soft rather than sharp edges throughout the website?
> The images above show sharp and round-edged boxes.
> Psychologically, apparently this is better?

*Screenshots:* the two images under point 1. Ours has near-square buttons (`--radius-sm`, 2px, also used on fields). Hers has rounded fields, a rounded message box and a rounded *Submit*, inside a **square** panel. Today only the audio player's play button is rounder (`--radius-md`, 10px); the player row itself is square.

*Reading:* round the boxes you click, type into or read inside: buttons, form fields, cards, cream boxes, credential tiles and the audio player rows. Her own example keeps the outer panel square, so full-width bands (header, plum band, footer) and photographs stay square.

*Call:* one soft radius token (12px) for all of those. Update the radii rule in `CLAUDE.md`.

## 3. About page: lines at the top. **Call**

> The 'about' page is the only one that has lines at the top, rather than plain like the rest?

*Screenshot:* [About masthead](screens-6/p03-about-masthead.jpg): "about / Aneesa / Book a free discovery call" on faint horizontal ruled lines.

*Checked:* the lines are the `texture-ruled` pattern, added for her feedback 5 #27 ("are there ways to design this page so it feels a bit fuller / textured? … patterns i guess, or textures?").

*Reading:* she wants the top of About plain, like every other page.

*Call:* remove the ruled lines from the About masthead only. Keep the textures lower down (the hatched plum band and the dotted band), which she did not mention.

## 4. Social icons: Instagram, YouTube, Substack, Pinterest. **Clear** (removals) / **Ask her** (Instagram link)

> Instagram (main one) hasn't been added to social icons, nor Youtube. We can remove substack for now
> as we agreed that blog would be better for SEO purposes but we'll do that later.
>
> I don't think I mentioned I wanted Pinterest on there.

*Screenshot:* [footer "follow"](screens-6/p04-footer-follow.jpg): scalloped badges for Substack, TikTok, Pinterest and LinkedIn.

*Checked against feedback 5:*
- **Pinterest:** she supplied it herself in feedback 5 #4: `https://uk.pinterest.com/atexturedword/`. She now does not want it. Remove it.
- **Substack:** also supplied in feedback 5 #4. Remove it "for now". An on-site blog comes "later" (future work, not this round). The Content page's automatic Substack list (`api/substack.js`) goes with it.
- **Instagram:** never supplied in any round. It cannot be added without the link.
- **YouTube:** in feedback 5 she wrote "won't let me create new account?", and reminder 3 asked Muhib to open one: "youtube account (as can't open one on my end)". It stays hidden until a channel exists. That is on Muhib's side.

*After this round the icons are:* TikTok and LinkedIn, then Instagram once she sends the link and YouTube once the channel exists.

## 5. Content page: delete sections, socials at the top, footer to match. **Clear**

> On the content page - I thinkn all this can be deleted, and can the social icons just be at the very
> top of the content page. Can the social icons in the banner at bottom of website page correspond
> with the 'Content' page where the social icons are more explicit?
>
> \>>>> sections deleted        << DELETED**
>
> So social icons can be just underneath here >>>>

*Screenshots:*
- [the two sections](screens-6/p05-content-sections.jpg), marked "<< DELETED**":
  - *substack*: "Reading notes and reflections on books and language." and "Read on Substack";
  - *socials*: "Words of the week, close readings, narrated extracts and takeaways." with TikTok, Pinterest and LinkedIn, each shown as a badge **with its name**.
- [Content masthead](screens-6/p05-content-masthead.jpg): "content / A literary ecosystem / Outside my client work… / tags / Book a free discovery call", marked "underneath here".

*Reading:*
- Delete the Substack and Socials sections.
- Put the social icons directly under the masthead.
- "More explicit" means the Content page shows each icon **with its platform name**, so the footer ("banner at bottom") should do the same: badge plus name.

*Remaining Content page:* masthead, social icons, Intro ("Why I started it"), Collaborations.

## 6. Teach: drop ESL, focus on IELTS. **Clear** (one call)

> I'm going to say delete 'ESL' - as I try to refine services. Would rather focus exclusively on IELTS
> within the ESL world. Can still keep the ESL / British Council reference though.
>
> So the tagline would now need to be more focused on IELTS. No longer 'from everyday communication'.
>
> Something along the lines of: *refine your reading, listening, speaking and writing skills for the IELTS exam*

*Screenshots:*
- [jump link](screens-6/p06-label.jpg): "ESL & IELTS" in the Teach masthead links.
- [card](screens-6/p06-teach-card.jpg): "ESL & IELTS / *Find the words. Find your confidence.* / Develop practical English for life, study and work — from everyday communication to IELTS preparation."
- [band](screens-6/p06-available-for.jpg): "lessons and packages / Available for KS3 English, I/GCSE and ESL & IELTS."

*Live mentions to change:*
- the Teach masthead jump link;
- the "Who I teach" card title and body (the same card also appears under "Who it's for" on each of the three offer pages);
- "Available for…" on Teach and on all three offer pages;
- the Teach meta description ("…KS3, I/GCSE, ESL and IELTS").

*Keep:* British Council / ESL teacher in the credentials, and the British Council line in her About story.

*Call:*
- The quoted "from everyday communication" is in the card's body line, so "tagline" means that line.
- New body: "Refine your reading, listening, speaking and writing skills for the IELTS exam." (her words, capitalised).
- The italic line "Find the words. Find your confidence." stays.
- "Available for KS3 English, I/GCSE and IELTS."

*Checked:* there is no separate ESL price or offer live (the old ESL / General English packages are retired), so nothing else is removed.

## 7. Repurpose: packages straight under "the raw material". **Clear**

> For repurposing: 'packages' is too far down, can it go directly underneath 'the raw material'? (see >>)
> I always think it's better to have packages directly under intro, as that tends to be what clients are looking
> for the quickest anyway!

*Screenshots:*
- [packages section](screens-6/p07-repurpose-packages.jpg): labelled *packages*; it opens with "Writing Strategy & Content Repurposing / Make more of the words you already have.", her intro and the services, then the package cards.
- [the raw material](screens-6/p07-raw-material.jpg).

*Live order (checked):* masthead, the raw material, what I take on, how it works, **packages** (its heading is "Writing Strategy & Content Repurposing"), further details, other services.

*New order:* masthead, the raw material, **packages**, what I take on, how it works, further details, other services. Section colours are re-alternated so two bands do not touch.

## 8. Unfinished. **Ask her**

> The long pieces of text on the 'about'

The sentence stops there, with no screenshot beside it. It may lead into the About edits at the end of point 14, but it does not say so.

## 9. Voice samples: remove one, add videos. **Clear** (removal) / **Decide** (video hosting)

> Can you remove this last one? I just don't like the audio quality. >>>>
>
> And is it possible to include the original videos for any of the audios sent? For the sake
> of page variety.

*Screenshot:* [last sample](screens-6/p09-social-ad-2.jpg): "Social ad series, episode 2", 1:28.

*Removal:* remove `voice-social-ad-2`. "Social ad series, episode 1" then needs a title without "episode 1" (the titles are already our drafts).

*Checked:* the four samples added last round were all **videos** on her Drive. The links still download:

| Sample | Original file | Size |
|---|---|---|
| Software explainer | `in4it DevOps Platform.mp4` | 9 MB |
| Charity film | `Spirit of 2012 - FINAL 1080p_1.mp4` | 599 MB |
| Social ad 1 | `FINAL EP-1.mp4` | 87 MB |
| Social ad 2 (being removed) | `FINAL EP-2.mp4` | 74 MB |

Three videos are therefore available now.

The first four samples (Audiobook, Commercial, Health explainer, IVR) were supplied in October as MP3 audio (commit `b201a6a`). One of them was named "Explainer: health video", so a video of it may exist; videos for any of them would have to come from her.

In feedback 5 she also listed a YouTube video with her voice clients: "not sure if you can download this video? https://www.youtube.com/watch?v=VaZIPc3z2-Q". That is "Hello Paris, France | Hello World" on a motion design studio's channel. It was never used. A YouTube video can be embedded without her own channel.

*Decide:* hosting.
- Self-host, compressed to 720p (about 15 to 40 MB each), loading only on play, with a poster frame.
- Or upload them to YouTube, which needs the channel she does not have.
- The "Hello Paris" video is already on YouTube and can be embedded now (the YouTube player loading only when pressed, as with Calendly).

## 10. Voice: delete "How it works". **Clear**

> For voice, this can be deleted. I'm not as granular with the voice process as I am with teaching and writing
> right now. >>>

*Screenshot:* [voice process](screens-6/p10-voice-how-it-works.jpg): "how it works", steps 1 to 6 (Tell me about the project, Find the voice, Prepare the performance, Record, Refine, Receive your final audio). Delete the section.

## 11. "Larger projects" becomes "Projects". **Clear**

> Because of the deletion of price packages, can 'Larger projects' be changed to 'Projects', as there's
> technically no price for any sized project now on the web page.

*Screenshot:* [narration prices](screens-6/p11-narration-prices.jpg). New text: "Projects are priced per finished hour and quoted according to word count, finished audio length, usage and project requirements."

## 12. About qualifications to match Home. **Clear**

> Can this match what's on the home page? As it's updated on home page

*Screenshot:* [About qualifications band](screens-6/p12-about-qualifications.jpg): First-class BA (Hons), Cert TESOL (Trinity College London), English PGCE / University of Nottingham, British Council / *Teacher Training Programme*.

*Reading:* About shows the same list as Home, including the new point 13 list. This also settles the open item from the November round, "whether About's British Council caption should match Home's 'ESL teacher'": it should.

## 13. Credentials: new order and detail. **Clear** (her list) / **Ask her** (the three not in it) / her questions answered by us

> Wanted to change order round + extra detail. Because they're wordy - would a drop down menu be better?
> Is there a more aesthetic way to present this on the page, + do you think any of it is redundant
> \- better left for 'teach' page?
>
> English PGCE:
> State + Private Schools
> University of Nottingham
>
> IELTS Prep Tutor:
> General Exam
> International House
>
> ESL teacher:
> CEFR: Beginners - Advanced
> B1 Preliminary Exams
> British Council
>
> I/GCSE Examiner
> English Language
> Pearson Edexcel
> (Summer, 2027)

*Screenshots:* [Home credentials, part](screens-6/p13-home-creds-a.jpg) (English PGCE / University of Nottingham; British Council / ESL teacher) and [part](screens-6/p13-home-creds-b.jpg) (IELTS (International House); Examiner (Summer, 2027)). These are exactly the four entries her new list rewrites.

*Live Home list (7):*
1. First-class BA (Hons)
2. Cert TESOL (Trinity College London)
3. English PGCE
4. British Council / ESL teacher
5. Enhanced DBS
6. IELTS (International House)
7. Examiner (Summer, 2027)

*Her list replaces 3, 4, 6 and 7*, in her order: English PGCE, IELTS Prep Tutor, ESL teacher (British Council), I/GCSE Examiner.

*Ask her:* keep First-class BA (Hons), Cert TESOL and Enhanced DBS as well? Our default if she does not answer: keep them, after her four.

*Her questions, our answers:*
- **Drop-down?** No. Credentials are there to build trust at a glance; a closed drop-down hides them.
- **More aesthetic?** Yes: soft-cornered tiles (point 2), the role in small capitals, then each detail on its own short line, as she wrote them.
- **Redundant?** Nothing is redundant. The teaching credentials also help parents on Teach.

## 14. Home and About copy. **Clear** (Home, About travels) / **Ask her** (About placement and one phrase)

> On the home page: (below) change to: >>>>
>
> …a creator wanting your best ideas shaped into writing that
> reaches further, or an author looking to voice life into the written word -
> you're in the right place.'

*Screenshot:* [Home](screens-6/p14-home-audience.jpg): "Whether you're an English student finding your way through a text, a creator wanting your best ideas shaped into writing that reaches further, or an author or business looking to give new life and voice to the written word — you're in the right place."

*Change:* "or an author or business looking to give new life and voice to the written word" becomes "or an author looking to voice life into the written word". The opening clause and the dash (her original copy's em dash) stay.

> About page:
>
> I can help students and small business owners by either teaching them the grade to connect with their examiner, repurposing their voice to connect with their readers, or
> performing their words to connect with their listeners.'

*Screenshot:* [About](screens-6/p14-about-performing.jpg) shows the end of one sentence and the whole of the next: "…or performing them. Words have elevated people by allowing them to understand not only themselves, but the world around them, and have granted them real opportunities in their own lives."

*Ask her:*
- Does this replace the "Words have elevated people…" sentence, or go after it? Our default: it replaces it.
- "teaching them the grade to connect with their examiner": is that exactly as she wants it?

> About page:
>
> …my extensive travels have only ever deepened

*Screenshot:* [About](screens-6/p14-about-travels.jpg): "From America to Australia; Canada to Croatia; or Morocco to Malaysia - my extensive travels have only ever deep-rooted love for words, culture, and connection."

*Change:* "deep-rooted" becomes "deepened". The rest is unchanged.

---

## Questions for her (clarity only; none is answered elsewhere in her sheet or in feedback 5)

**Something to send**
1. Your main Instagram link.
2. Do you have videos for the Audiobook, Commercial, Health explainer or IVR samples? (We already have the videos for the software explainer, the charity film and the social ad.)
3. The "Hello Paris" YouTube video you sent last time: is that your voice, and would you like it on the Voice page?

**Something unclear**
4. Point 8 stops mid-sentence: "The long pieces of text on the 'about'…" What did you want to say?
5. Your new About sentence ("I can help students and small business owners…"): should it **replace** "Words have elevated people…", or go **after** it?
6. In that sentence, "teaching them the grade to connect with their examiner": is that the wording you want?
7. Your new credentials list has four entries. Should First-class BA, Cert TESOL and Enhanced DBS stay on as well?

## Decisions for Muhib

1. **Enquiry form service** (point 1): Web3Forms or Formspree (quick, free tier, needs one confirmation from the hello@ inbox), or Vercel Function plus Resend (needs an account, an API key and DNS records).
2. **Video hosting** (point 9): self-host compressed copies (recommended), or wait for YouTube. The "Hello Paris" video can be embedded from YouTube either way.
3. **YouTube channel**: her feedback 5 reminder 3 asked you to open it.
4. Removing Substack also retires the automatic Substack list built last round. She says the blog comes later.

---

*Verified 27 November 2026 by script against the PDF, the live site and the repo: 38 checks (the PDF's points and screenshots; each live text, section order and link quoted above; feedback 5 quotes; the domain's MX record; the Drive files' sizes). Two first-run failures were faults in the check, not the record: `texture-ruled` is in the shared stylesheet on every page but used only by the About masthead, and the footer already prints each platform name, but visually hidden.*
