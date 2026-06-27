# VISUAL_SPEC.md — Adv3D Product Development & Prototyping Funnel

Binding contract for `minimax-coder` (build) and `codex-design`
(visual gate). Every item in SECTION F is binary pass/fail — no
partial credit, no "looks fine to me."

Advisory context (tone, voice, why-we-do-what-we-do) lives in
`BRAND_DIRECTION.md`. This file is about measurable, verifiable
things.

---

## SECTION A — CSS Custom Properties (color tokens)

Define these in `app/globals.css`. Tailwind config maps them
so utility classes like `bg-brand-primary` work in JSX.

```css
:root {
  --brand-primary: #1e3a5f;         /* deep steel blue — precision, FDA register */
  --brand-primary-hover: #142640;   /* deeper */
  --brand-accent: #b45309;          /* warm copper — workshop warmth */
  --brand-accent-hover: #92400e;    /* deeper */
  --brand-bg: #f4f1ec;              /* warm parchment — workshop, not cleanroom */
  --brand-surface: #ffffff;         /* card surface */
  --brand-surface-2: #ebe7e0;       /* slightly darker, alternating rows */
  --brand-text: #1c1917;            /* near-black warm */
  --brand-muted: #6b6560;           /* warm gray */
  --brand-border: #d6d3ce;          /* warm taupe */
  --brand-success: #15803d;         /* green-700 */
  --brand-danger: #b91c1c;          /* red-700 */
}

:root.dark {
  --brand-primary: #5a89b8;         /* lighter steel for dark mode contrast */
  --brand-primary-hover: #7ba3cf;
  --brand-accent: #d97706;          /* warm amber */
  --brand-accent-hover: #ea850a;
  --brand-bg: #15130f;              /* warm near-black */
  --brand-surface: #1c1916;         /* zinc-900 */
  --brand-surface-2: #262420;       /* zinc-800 with warm tint */
  --brand-text: #e8e5e0;            /* warm white */
  --brand-muted: #8a857f;           /* warm gray */
  --brand-border: #2e2b27;          /* warm zinc */
  --brand-success: #4ade80;
  --brand-danger: #f87171;
}
```

### Tailwind config mapping (`tailwind.config.ts`)

```ts
extend: {
  colors: {
    'brand-primary': 'var(--brand-primary)',
    'brand-primary-hover': 'var(--brand-primary-hover)',
    'brand-accent': 'var(--brand-accent)',
    'brand-accent-hover': 'var(--brand-accent-hover)',
    'brand-bg': 'var(--brand-bg)',
    'brand-surface': 'var(--brand-surface)',
    'brand-surface-2': 'var(--brand-surface-2)',
    'brand-text': 'var(--brand-text)',
    'brand-muted': 'var(--brand-muted)',
    'brand-border': 'var(--brand-border)',
    'brand-success': 'var(--brand-success)',
    'brand-danger': 'var(--brand-danger)',
  },
  borderRadius: {
    'sm': '0.375rem',
    'md': '0.5rem',
    'lg': '0.75rem',
    'xl': '1rem',
    '2xl': '1.5rem',
  },
  spacing: {
    '18': '4.5rem',
    '22': '5.5rem',
  },
}
```

### Contrast (verified WCAG AA at minimum, AAA where noted)
- Primary CTA white-on-`--brand-primary` (#1e3a5f): ~10.5:1 ✓ (AAA)
- Body `--brand-text` (#1c1917) on `--brand-bg` (#f4f1ec): ~16:1 ✓ (AAA)
- Dark body `--brand-text` (#e8e5e0) on `--brand-bg` (#15130f): ~14:1 ✓ (AAA)
- Muted `--brand-muted` (#6b6560) on `--brand-bg` (#f4f1ec): ~5.8:1 ✓ (AA)
- Accent `--brand-accent` (#b45309) on `--brand-bg` (#f4f1ec): ~4.9:1 ✓ (AA)

---

## SECTION B — Fonts (Google Fonts)

Both fonts are available on Google Fonts. Load them in
`app/layout.tsx` `<head>` via `next/font/google` (preferred —
self-hosts the fonts and eliminates the render-blocking CDN hit)
OR via `<link>` tags in the head.

```ts
// app/layout.tsx — preferred (next/font)
import { Manrope, Inter } from 'next/font/google';

const display = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});
```

```html
<!-- alternative: <link> tags in <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet">
```

### Type roles
- **Display (Manrope):** H1, H2, H3, hero headline, section
  headlines, large stats. Modern engineering feel — geometric
  but warm. NOT used in body copy.
- **Body (Inter):** all body copy, buttons, nav, form labels.
  Rock-solid readability. NEVER use a system font fallback for
  the body — Inter is the brand.

### Type scale
- H1: `text-5xl md:text-6xl font-display font-bold tracking-tight`
- H2: `text-3xl md:text-4xl font-display font-semibold`
- H3: `text-2xl font-display font-semibold`
- Body: `text-base md:text-lg font-body font-normal leading-relaxed`
- Small: `text-sm text-brand-muted font-body`

No random sizes. No `text-[37px]`. Use the scale.

---

## SECTION C — Component Specs

### C.1 Primary CTA button

- Background: solid `bg-brand-primary`. No gradient. No border.
- Hover: `bg-brand-primary-hover`. NO scale transform.
- Text: `text-white font-body font-semibold text-base`.
- Padding: `px-6 py-3`. Radius: `rounded-lg`.
- Focus: visible ring (`focus-visible:ring-2 focus-visible:ring-brand-primary
  focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg`).
- Full string:
  `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-primary text-white font-semibold text-base hover:bg-brand-primary-hover focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-colors`

### C.2 Secondary / ghost button

- Background: `bg-transparent`. Border: `border border-brand-border`.
- Text: `text-brand-text font-semibold`.
- Hover: `bg-brand-surface-2`.
- Full string:
  `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-brand-border bg-transparent text-brand-text font-semibold hover:bg-brand-surface-2 transition-colors`

NEVER use a secondary button as the primary call-to-action on
any section. The hero, the final CTA, and every form's submit
button MUST be the primary style.

### C.3 Navigation bar

- Sticky: `sticky top-0 z-50`.
- Backdrop: `backdrop-blur-md bg-brand-bg/80 border-b border-brand-border`.
- On scroll past 100px, optionally add a shadow (`shadow-sm`).
  NOT required.
- Height: `h-16`. Content centered vertically.
- Structure: logo (left) → primary nav (center) → CTA + dark-mode
  toggle (right).
- Dark-mode toggle: a sun/moon icon button. No text label needed.
  `aria-label="Toggle dark mode"`.
- Mobile: hamburger menu at `<md`. Plain slide-down is fine — no
  drawer animation library required.

### C.4 Hero section

- **Layout: 2-column, 5/7 split (text left, image right) at
  `md+` viewport.** Single-column stacked on mobile (text first,
  image second).
- **NOT centered-everything.** Left-aligned text. Image right,
  aligned to the column edge (no decorative offset).
- Padding: `py-24 md:py-32`.
- Max content width: `max-w-7xl mx-auto px-6`.
- Headline: H1 size, left-aligned, `max-w-2xl` (wraps cleanly).
- Sub-headline: one short paragraph, `text-lg text-brand-muted
  max-w-xl`.
- CTA: primary button + secondary button, side by side,
  `mt-8 flex gap-4`.
- Trust line beneath CTAs: `text-sm text-brand-muted mt-4`.
- Image: 4:3 aspect ratio. Positioned in the right column.
- No full-bleed background. No gradient overlay. Solid
  `bg-brand-bg`.

### C.5 Section layouts

**3-column symmetric grid is FORBIDDEN.** Use one of these
patterns:

- **Asymmetric 2+1:** one large card spanning 2 columns + one
  small card spanning 1 column. (`md:grid-cols-3` with the first
  child `md:col-span-2`.)
- **Staggered:** alternating left/right 2-column rows. Each
  row: image + text. Alternate image-left / image-right every
  other row.
- **Full-width lead:** one full-width banner feature, then a
  2-column row of two smaller features below.
- **Split visual:** 2-column 1:1 split at `md+` (left side =
  ideal outcome, right side = current pain or failure state).

**BOTTLENECK (PROBLEM) section:** full-width intro paragraph +
**split visual** (clean CAD render on the left, warped / failed
print on the right). 2-column 1:1 split at `md+`. Stacks on
mobile. Communicates the gap this service closes — does NOT
pitch a feature, does NOT mention the solution by name.

**WHY US section:** **staggered** pattern (3 rows) for the 3
value pillars (Design Collaboration, Material Flexibility,
Short-Run Production). Each row: image on one side, headline
+ paragraph + 2-bullet list on the other; alternate
image-left / image-right each row. Below the pillars, a
**4-column grid** of in-house material samples (HP MJF, SLA,
FDM, TPU) — each cell is a 1:1 material photograph with a
shore-hardness or density callout overlaid in type. The 4
material cells are NOT a 3-column grid; they are exactly 4
equal cells (`grid-cols-2 md:grid-cols-4`).

**PROCESS (HOW IT WORKS) section:** 4 numbered steps in a
horizontal row at `md+`, 2×2 grid on mobile. Steps 1, 3, 4
get image slots (process-1, process-2, process-3); step 2
is text-only with an icon or numeral. Each step: number,
headline, paragraph.

### C.6 Card style

- Background: `bg-brand-surface`.
- Border: `border border-brand-border` (1px, NOT colored).
- Radius: `rounded-xl`.
- Shadow: `shadow-sm`. NOT colored shadow.
- Padding: `p-6`.
- **NO colored left-border accent** (no
  `border-l-4 border-l-{primary}`).
- **NO icon-in-colored-circle decoration** (no
  `bg-primary-100 rounded-full p-3` icon wrapper). Icons may
  appear inside cards, but as flat SVG, top-left or above the
  headline, no decorative background.

### C.7 Section spacing (varies — NOT all the same)

| Section | Padding |
|---|---|
| HERO | `py-24 md:py-32` |
| BOTTLENECK (PROBLEM) | `py-20 md:py-24` |
| WHY US | `py-16 md:py-20` (tighter — value pillars in compact rhythm) |
| PROCESS (HOW IT WORKS) | `py-16 md:py-20` (tighter — utility section) |
| FINAL CTA | `py-24 md:py-32` (large — landing) |

Hero and FINAL CTA get the most space. WHY US and PROCESS run
tighter. The visual rhythm MUST vary — same `py-20` everywhere
is a fail.

### C.8 Footer

- `bg-brand-surface-2 border-t border-brand-border`.
- Single-column layout (5-section page is lean; no need for
  4-column footer).
- Bottom row: copyright, small print, trust footer
  (`US-based | HP MJF + SLA + FDM + TPU | NDA-ready |
  Short-run & pilot production | Biocompatible materials
  available`).
- `py-12`.
- Social links are text-only — no colored icon circles.

---

## SECTION D — Section Order (locked, 5 sections)

The home page MUST render these 5 sections in this exact order.
Reordering, dropping, or inserting sections is a fail.

1. **HERO** — Outcome-first headline "From CAD File to
   Functional Prototype — Without the 6-Week Wait."
   Subhead (advanc3d is the additive manufacturing partner for
   medical device teams that need design iteration at the speed
   of a startup — supporting DFM, short-run production, and
   material selection from first concept to production-intent
   part). Primary CTA `Book a Discovery Call`. Secondary CTA
   `Upload Your Project Files → Get a Quote in 24 Hours`.
   Trust line `NDA-ready. US-based. HP MJF, SLA, FDM, and TPU
   in-house.`. Image: warm workshop, nylon/resin prototype in
   hand next to laptop showing CAD.
2. **BOTTLENECK (PROBLEM)** — Section label `THE BOTTLENECK`.
   Headline "Most Contract Manufacturers Are Built for Volume.
   Your Prototype Isn't." Agitates the pain: long quoting
   processes, MOQ requirements, material limitations, no design
   feedback (vendor prints exactly what was submitted even when
   a 2mm wall change would prevent delamination). Does NOT
   pitch a feature. Does NOT mention the solution by name.
   Split visual: clean CAD render on the left, warped / failed
   print on the right.
3. **WHY US** — Section label `WHY US`. Headline "Built for
   Iteration. Priced for Early Stage. Ready for Production."
   Three value pillars in staggered layout:
   - **Design Collaboration** — the team reviews the part, not
     just the file. DFM issues, tolerance risks, material
     mismatches flagged before the machine starts. Feedback
     makes the next version better, not just a print of what
     was submitted.
   - **Material Flexibility** — HP MJF nylon for structural
     components. TPU at calibrated shore hardness for soft
     interfaces. SLA resin for fine-detail validation models.
     Biocompatible-grade materials for patient-contact
     applications. Material matched to function, not to what's
     loaded in the machine.
   - **Short-Run Production** — no minimum order, no gated
     quote process, no tooling fees. One prototype or fifty
     pilot units — same quality-assured workflow. When the
     team is ready to scale, Advanc3D scales with them.
   Below the pillars, a 4-column grid of material samples
   (HP MJF, SLA, FDM, TPU) with shore hardness or density
   callouts overlaid in type.
4. **PROCESS (HOW IT WORKS)** — Section label `HOW IT WORKS`.
   Headline "Four Steps From Concept to Production-Intent
   Part." 4 numbered steps:
   1. **Upload files or a design brief** — STL, STEP, or a
      plain description of what the part needs to do. We meet
      teams where their design actually is. Image: process-1
      (file upload / laptop / CAD view).
   2. **Review and response within 24 hours** — DFM feedback,
      material recommendation, lead time, and quote. No
      black-box pricing. (Text-only step with numeral/icon.)
   3. **Approval and build** — Production runs in 3–7 business
      days depending on process and volume. Progress updates
      provided, not silence. Image: process-2 (machine
      running).
   4. **Parts arrive ready for testing** — Post-processed,
      finished, and documented. Ready for bench testing,
      clinical validation, or investor demonstration.
      Image: process-3 (finished part in labeled output
      tray).
5. **FINAL CTA** — Section label `CTA`. Headline "Your Next
   Iteration Shouldn't Take 6 Weeks." Subhead: "Tell us what
   you're building. We'll tell you what's possible — and when
   we can have it in your hands." Primary CTA
   `Book a Discovery Call` + secondary CTA `Upload Project
   Files`. Trust footer: `US-based | HP MJF + SLA + FDM + TPU
   | NDA-ready | Short-run & pilot production | Biocompatible
   materials available`. Image: single clean wearable device
   component on a desk beside calipers, warm natural light.

---

## SECTION E — Image Slot Manifest

The researcher (running in parallel or as T2 follow-up) will
populate `research/VALIDATED_IMAGES.md` with final filenames.
Until that lands, this is the slot manifest the coder must
wire up. **All 12 slots below are required** — 11 stock photos
+ 1 logo.

```
hero:                  research/images/hero.jpg               (4:3, warm workshop — nylon/resin prototype in hand next to laptop showing CAD)
problem-cad:           research/images/problem-cad.jpg        (1:1, clean CAD render on light background)
problem-warp:          research/images/problem-warp.jpg       (1:1, warped or failed print on a build plate)
materials-grid-1:      research/images/materials-grid-1.jpg   (1:1, HP MJF nylon sample / surface texture)
materials-grid-2:      research/images/materials-grid-2.jpg   (1:1, SLA resin sample / fine-detail surface)
materials-grid-3:      research/images/materials-grid-3.jpg   (1:1, FDM sample / layered surface)
materials-grid-4:      research/images/materials-grid-4.jpg   (1:1, TPU sample / flexible shore callout)
process-1:             research/images/process-1.jpg          (4:3, file upload — laptop, CAD view, hand on keyboard)
process-2:             research/images/process-2.jpg          (4:3, machine running — HP MJF or SLA build chamber in progress)
process-3:             research/images/process-3.jpg          (4:3, finished part in labeled output tray)
cta-wearable-calipers: research/images/cta-wearable-calipers.jpg (4:3, single clean wearable device component on desk beside calipers, warm natural light)
logo:                  research/images/logo.jpg                (Advanced3D jpg LogoSmall-CROP, supplied per brief Q11)
```

**Total slots: 12.**

**Researcher MUST supply downloadable assets.** minimax-coder
references `research/images/<slot>.<ext>` paths (local files,
downloaded by minimax-researcher from Pixabay/Pexels or
supplied directly by the operator). No hotlinking — period.

If a slot above is renumbered, renamed, or replaced by
`research/VALIDATED_IMAGES.md` (for example, the orchestrator
pre-stages `hero-01.jpg` instead of `hero.jpg`), update the
manifest in `research/VALIDATED_IMAGES.md` but keep the slot
COUNT (12) and SECTION mappings identical.

---

## SECTION F — Visual Gate Checklist (binary pass/fail)

Every item below is verified by `codex-design` at the visual
gate card. No partial passes. Any fail = FAIL verdict, and a
revision card goes back to `minimax-coder`.

**Color & style**
- [ ] **F1.** No gradient on any button or CTA background
      (`grep -r "bg-gradient" app/ components/` returns 0).
- [ ] **F2.** No 3-column symmetric feature grid in any
      section (no row of three `md:col-span-1` cards with
      identical content weight in WHY US or materials grid).
      The materials grid MUST be `grid-cols-2 md:grid-cols-4`
      (4 equal cells), NOT 3-column symmetric.
- [ ] **F3.** No icons in colored circle backgrounds anywhere
      (no `bg-brand-*-100` / `bg-*-100 rounded-full p-*` icon
      wrapper pattern).
- [ ] **F4.** No colored left-border accent on any card
      (no `border-l-4 border-l-brand-*`).
- [ ] **F5.** Tailwind config maps all `--brand-*` color tokens
      from SECTION A.
- [ ] **F6.** CSS custom properties for all brand colors are
      defined in `app/globals.css` for both `:root` and
      `:root.dark`.

**Fonts**
- [ ] **F7.** Google Fonts links (or `next/font/google`) for
      Manrope + Inter present in `app/layout.tsx` `<head>`.
- [ ] **F8.** Display font (Manrope) used on H1, H2, H3.
- [ ] **F9.** Body font (Inter) used on body, buttons, nav,
      forms.
- [ ] **F10.** No random font sizes outside the type scale
      (no `text-[37px]`, no `text-3.5xl`).

**Layout**
- [ ] **F11.** Hero is 2-column 5/7 (text left, image right)
      at `md+`, NOT centered-everything.
- [ ] **F12.** Section order matches SECTION D exactly
      (HERO → BOTTLENECK → WHY US → PROCESS → FINAL CTA).
- [ ] **F13.** Section padding varies per the table in C.7
      (NOT all `py-20`).
- [ ] **F14.** At least 2 sections use asymmetric layout
      (hero counts as one; WHY US staggered, BOTTLENECK
      split visual, or FINAL CTA full-bleed counts as the
      other).
- [ ] **F15.** Navigation is sticky (`sticky top-0`) and
      contains a dark-mode toggle.

**Theme**
- [ ] **F16.** Dark mode implemented (`.dark` class on
      `<html>` toggles the token set) and the toggle is wired
      up to actually flip the theme.

**Copy & content**
- [ ] **F17.** Hero headline is outcome-first AND time-specific
      (mentions a turnaround time or outcome the reader gets,
      NOT leading with "Industrial", "Additive",
      "Manufacturing", "Professional", "End-to-end", or
      "Precision").
- [ ] **F18.** Body copy is left-aligned (hero headline
      excepted, button text excepted, FINAL CTA headline may
      be centered if and only if the FINAL CTA is full-bleed
      with a single centered headline).
- [ ] **F19.** CTA button text is verbatim per brief and
      action + outcome (greppable, must contain the exact
      strings `Book a Discovery Call`,
      `Upload Your Project Files`, and `Upload Project Files`;
      must NOT contain `Learn more`, `Get started`,
      `Click here`, `Submit`, `Contact us`,
      `Request a consultation`, `Schedule a call`,
      `Talk to sales`).
- [ ] **F20.** No brief Q10 forbidden phrases appear anywhere
      on the page (`grep -rEi
      "industrial|aerospace|automotive|hobby|maker|drone|cosplay|warhammer|mass production|tooling fees|contract manufacturer|production line|tier 1"`
      app/ components/ returns 0).
- [ ] **F21.** At least 5 of Q7 vocabulary terms appear in
      rendered copy. Greppable list:
      `CAD file|DFM|STL|STEP|biocompatible|FDA|ISO 13485|design controls|MOQ|short-run|pilot production|HP MJF|TPU|SLA|FDM|post-processing|tolerances|delamination|bench testing|clinical validation|NDA-ready|24 hours|3.{0,3}7 business days`.
      Visual gate verifier counts distinct matches; ≥ 5 is
      a pass.
- [ ] **F22.** At least 8 of Q10 required terms appear in
      rendered copy. Greppable list:
      `production-grade|engineering-grade|end-use|biocompatible|FDA|ISO 13485|design controls|pilot production|NDA-ready|medical device|prototype|functional prototype|CAD file|additive manufacturing|DFM|design-for-manufacturability|production-intent|material selection`.
      Visual gate verifier counts distinct matches; ≥ 8 is
      a pass.
- [ ] **F23.** No hobbyist-funnel imagery or copy present
      (no drone, Warhammer, tabletop minis, cosplay, hobby,
      or maker references in alt text, body copy, or visible
      image labels).
- [ ] **F24.** No emoji in body copy (no 🎨 ✨ 🔥 🚀 💡 in
      rendered text).

**Image & asset**
- [ ] **F25.** All 12 image slots from SECTION E are filled
      with real assets from `research/images/` (no `src=""`,
      no broken `<img>` tags, no placeholder URLs, no
      `/public/assets/` paths referencing non-existent
      files).
- [ ] **F26.** `USE_MOCK_DATA=true` is set in `.env.local`
      exactly (not `True`, not `1`, not unset).

**Runtime**
- [ ] **F27.** Page loads with 0 console errors and 0
      image 404s in browser devtools (verifier opens `/` in
      headless browser and inspects).

---

## SECTION G — Reference Site (visual benchmark, NOT tone)

`https://opservices.advanc3dinc.com/` is the visual polish bar.

**Steal from the reference:**
- Typography rhythm (large headlines, generous line-height)
- Section spacing pattern (some sections breathe more than
  others)
- CTA styling cleanliness (solid color, no gradients, clear
  hover state)
- Card style (subtle border, modest radius, soft shadow)

**Do NOT copy from the reference:**
- Tone (it's clinical O&P — wrong audience; this funnel is
  founder-to-founder technical credibility, not clinician-
  to-clinician)
- Palette (it's muted/professional blues and greys — we
  borrow the structure but our palette is warmer: warm
  parchment background, deep steel-blue primary, warm
  copper accent)
- Imagery (it's clinical/medical — we use workshop
  photography, real parts on a real bench, not sterile
  surfaces)
- Copy vocabulary (it's B2B — wrong voice; we use
  founder-to-founder technical register)

The reference is for STRUCTURE and POLISH, not for voice or
palette.