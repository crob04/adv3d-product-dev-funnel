# Adv3D Product Development — Brand Direction

Advisory context for downstream workers (copywriter, coder, visual gate).
The binding contract for the build is `VISUAL_SPEC.md`. This file is
about voice, vocabulary, and judgment calls — read it before writing
any copy or making any UX decision.

---

## 1. Tone & Voice

- **Founder-to-founder technical credibility.** This audience has
  been burned by slow vendors, vague quotes, and NDA-light factories.
  Every line of copy should signal that we already understand that —
  without making them feel stupid for having tried the slow vendor
  first.
- **Smart, direct, materials-fluent, time-aware.** Talk like an
  experienced engineering peer reviewing a print file, not a sales
  rep quoting a lead time.
- **Workshop, not cleanroom.** The voice matches the photography —
  warm, hands-on, materials-fluent. We are not selling a process;
  we are the partner who reviews the part.
- **Reviews the part, not just the file.** That is the spine of the
  voice. We flag DFM issues, tolerance risks, and material
  mismatches before the machine starts. The reader should feel we
  are on their side of the table.
- **Specific beats hype.** "TPU at shore 85A, 0.2mm tolerance on
  the thread pitch" beats "high-quality flexible parts."

What we are NOT:
- Hobbyist register (drones, Warhammer, cosplay, tabletop minis) —
  wrong funnel; reserved for adv3d-hobbyist-funnel.vercel.app
- Clinical / sterile / "ISO-certified" string-of-acronyms register
  (the O&P pivot from the opservices.advanc3dinc.com reference)
- SaaS-y / "platform" / "ecosystem" / "leverage" / "stack"
- Hard-sell / urgency-bait / countdown timers
- Patronizing / "trust us, we're experts" — we earn trust by
  being one of them, not by claiming to be above them

## 2. Audience Vocabulary (echoing intake Q7, with design notes)

The audience speaks CAD and DFM. Use it confidently.

**Process & deliverables**
CAD file, STL, STEP, design-for-manufacturability (DFM),
design controls, prototype, functional prototype, pilot production,
short-run production, production-intent, end-use, additive
manufacturing, post-processing, tolerances, delamination, bench
testing, clinical validation, material selection, biocompatible,
production-grade, engineering-grade.

**Materials & processes (in-house)**
HP MJF (Multi Jet Fusion nylon), SLA (resin), FDM, TPU at
calibrated shore hardness, biocompatible-grade materials.

**Compliance & partnership**
FDA, ISO 13485, design controls, NDA-ready, NDA-first, quote in
24 hours, 3–7 business days, MOQ, US-based.

**Reader standards**
"holds tolerance", "doesn't delaminate", "documented for our
DHF", "passes bench testing", "we can iterate", "fits in the
design history file", "ready for clinical validation".

**Design-side notes for the copywriter**
- Assume the reader knows what STL and DFM are. Do NOT define
  them inline. A glossary section is a smell.
- Use the technical terms in body copy, not just in a compliance
  footnote. Show the reader we speak their language.
- Voice is second person ("you/your") for body copy. First person
  plural ("we/us") for Advanc3D. Third person only in specs.
- ISO 13485 / FDA / design controls are shorthand the reader uses
  daily. They earn their place — do not omit them out of caution,
  do not over-explain them.
- At least 5 of these Q7 terms must appear in rendered copy (the
  visual gate F21 check enforces this).

## 3. Use-Case Examples (mention at least 4 across the page)

The funnel should call out concrete, recognizable problems the
audience is actively solving. These are not exhaustive — pick
a spread that covers the four main reader buckets (device
companies, founders, engineering teams, prototyping services).

- **Wearable device prototypes** — TPU at calibrated shore,
  biocompatible-grade, ready for bench testing and clinical
  validation
- **Bench-top instrument enclosures** — SLA for fine-detail
  validation models, MJF for structural production-intent parts
- **Single-use surgical instrument handles** — DFM feedback on
  the first iteration, biocompatible material matched to patient
  contact, documented for the DHF
- **Investor-meeting demo parts** — short-run production, lead
  time compressed so the next prototype iteration lands before
  the deck refresh
- **Custom jigs and fixtures for clinical trials** — short-run
  production, FDA-conscious material selection, NDA-first
- **Pilot-production runs** — design controls, end-use material
  readiness, the same QA workflow whether 5 parts or 500
- **Bench-fixture and test-rig components** — tolerances held,
  post-processed, documented for the design history file

For imagery: see `research/VALIDATED_IMAGES.md` (when the
researcher lands it). Slots are defined in `VISUAL_SPEC.md`
SECTION E.

## 4. What Makes Us Distinct (the actual pitch)

1. **We review the part, not just the file.** DFM issues,
   tolerance risks, and material mismatches are flagged before
   the machine starts. The next version is better because we
   pushed back, not just because we sliced the file.
2. **Material flexibility matched to function, not to what's
   loaded in the machine.** HP MJF nylon for structural parts.
   TPU at calibrated shore for soft interfaces. SLA resin for
   fine-detail validation models. Biocompatible-grade materials
   for patient-contact applications.
3. **Short-run production with no tooling fees.** No MOQ. No
   gated quote process. One prototype or fifty pilot units —
   same quality-assured workflow. When the team is ready to
   scale, Advanc3D scales with them.
4. **24-hour quote, 3–7 day build, no black-box pricing.**
   Quoting takes 24 hours. Lead time is 3–7 business days.
   Progress updates are not silence.
5. **NDA-first, design-controls-aware.** NDA-ready by default.
   Material certificates and process documentation available
   for the design history file. We work as a partner, not a
   vendor.

Note for copywriter: the reader has been burned. They do not
need another "we're different, trust us" promise. They need
the first concrete proof point. Lead with the DFM call-back,
not the marketing tagline.

## 5. Words & Phrases to Avoid (additive to brief Q10)

Brief Q10 lists 14 forbidden phrases for this funnel. This list
is **additive** — use both.

**Q10 meta-rule (also forbidden)**
- Any framing that implies the reader is a "hobbyist" or "maker"
  — wrong funnel, wrong register. We don't pitch to people
  building Warhammer squads or drone parts here.

**Additional anti-vocab**
- "contract manufacturer" / "Tier 1 supplier" — that's the vendor
  we are explicitly NOT (per Q10; restated for emphasis)
- "production line" / "tooling fees" — Q10; restated
- "B2B" / "enterprise" / "professional" without context
- "solution" / "solutions" — the laziest verb in the language
- "stack" / "ecosystem" / "platform" / "leverage" — too SaaS
- "deliver" as a verb (except literal shipping)
- "synergy" / "stakeholder" / "deliverable"
- "amazing" / "incredible" / "awesome" as filler — be specific
- "world-class" / "next-level" / "game-changing" (Q10 — restated)
- "revolutionize" / "transform" (Q10 — restated)

**Anti-imagery**
- No cleanroom / lab coat / hardhat / sterile-OR photos
- No factory line / assembly robot / conveyor belt
- No clinical O&P imagery (the opservices.advanc3dinc.com
  frame is the wrong audience for this funnel)
- No abstract 3D renders (orange wave, blue grid, etc.)
- No hobbyist scenes (drones, cosplay props, Warhammer minis)
- No faces posing (we want hands holding the part, not a stock
  photo of someone smiling at a camera)

**Anti-style**
- No emoji in body copy (🎨 ✨ 🔥 are out — use SVG icons or
  nothing)
- No exclamation points unless the writer is genuinely excited
  (rare in this register)
- No "we <3 startups" / "we <3 makers" meme-speak — out of
  register

## 6. Headline Style

- **Outcome-first, time-specific.** Lead with what the reader
  gets AND when. The hero nameplates the entire funnel.
- **One line, declarative.** The hero is a single sentence —
  no subordinate clauses stacked in.
- **Materials-fluent.** When the subhead earns its place, it
  earns it with a real technical claim, not a generic adjective.
- **Read it aloud.** Does it sound like an experienced engineer
  talking to a peer? If not, rewrite.

Examples (for the copywriter to riff on, not to ship verbatim):

GOOD:
- "From CAD file to functional prototype — without the 6-week wait."
- "Your next iteration in your hands before the next investor meeting."
- "DFM feedback on your file in 24 hours. Parts in 3–7 days."

BAD (the O&P frame, do NOT use):
- "Industrial 3D printing services for the modern enterprise."
- "End-to-end additive manufacturing solutions."
- "Precision-engineered parts, certified to spec."
- "Manufacturer of high-quality prototypes."

The hero is the single hardest sentence on the page. Get it
right and the rest of the page flows. Get it wrong and no one
reads past it.

## 7. CTA Style

- **Action + outcome.** The button says what the user does AND
  what they get. No "Learn more", no "Get started".
- **Time-specific when possible.** "Quote in 24 hours" is a
  promise worth making on the button itself.
- **Voice active.** Subject = the user. "Book a discovery call"
  not "Schedule a call with our team".
- **Same primary style everywhere** (per VISUAL_SPEC.md).

Examples (verbatim per brief):
- `Book a Discovery Call`
- `Upload Your Project Files → Get a Quote in 24 Hours`
- `Upload Project Files`

Forbidden:
- "Learn more"
- "Get started"
- "Click here"
- "Submit"
- "Contact us"
- "Request a consultation"
- "Schedule a call"
- "Talk to sales"

## 8. Imagery Direction

**Vibe:** workshop, not cleanroom. Warm natural light, not
fluorescent. Hands-on materials, not sterile surfaces. Real
parts on a real bench, not a factory line.

**Subject matter (per brief Q11 + imaging direction table):**
- **Hero:** close-up of a functional engineering prototype —
  nylon or resin part in someone's hand next to a laptop
  showing CAD. Warm workshop lighting.
- **Bottleneck:** split visual — clean CAD render on the left,
  warped or failed print on a build plate on the right.
  Communicates the gap this service closes.
- **Materials:** macro shot of PA-CF or MJF nylon surface
  texture. Grid of 4 material samples with shore hardness or
  density callouts overlaid in type. The 4 in-house processes:
  HP MJF, SLA, FDM, TPU.
- **Process:** horizontal 4-step timeline or 2×2 grid: file
  upload → team review → machine running → finished part in a
  labeled output tray. Photographed, not illustrated.
- **CTA Bottom:** single clean part — ideally a wearable device
  component — on a desk beside calipers to signal precision.
  Warm natural light.

**Photography brief:** prioritize authentic product photography
consistent with the workshop aesthetic — real parts, real
surfaces, no staged stock imagery. For placeholder sourcing,
Midjourney prompt:
*"additive manufactured nylon medical device prototype on
engineer's desk, macro, natural light, Canon EOS R5 aesthetic"*

**Forbidden (additive to Section 5):**
- Cleanroom / lab / OR / sterile surface
- Hardhats / safety vests / factory floor
- Smiling people in suits
- Generic abstract 3D renders (orange wave, blue grid)
- Stock photos of hands shaking
- The same image reused across two sections

See `VISUAL_SPEC.md` SECTION E for the slot manifest and
`research/VALIDATED_IMAGES.md` (researcher-delivered) for the
final file mappings.

## 9. Page Personality (for the visual gate)

If a founder who has been burned by a slow contract manufacturer
landed on this page and read it top to bottom, they should leave
thinking "this is the partner who would have caught that
delamination issue before we paid for the build."

The vibe test: could the copy survive being read aloud at a
biomedical engineering standup without anyone cringing? If yes,
you're on the right side of the line. If it sounds like a press
release, you're on the wrong side.

The reference site (https://opservices.advanc3dinc.com/) is the
**visual polish bar** — its typography rhythm, section spacing,
and CTA styling are the floor we clear. Its **tone is the
opposite** of ours (it's clinical O&P). Steal the structure,
abandon the voice.