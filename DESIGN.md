---
name: Robotics Collective Aachen
description: Two-tone Swiss-editorial system in viewport units, with one teal accent and numerals doing the structural work.
colors:
  dark: "#0d0d0d"
  dark-surface: "#161616"
  light: "#ebebeb"
  gray-mid: "#d8d8d8"
  gray-text: "#333333"
  gray-quiet: "#666666"
  brand-teal: "#47A8BD"
  brand-soft: "#47A8BD33"
  brand-glow: "#47A8BD66"
  white-60: "#ffffff99"
  white-30: "#ffffff4d"
  white-10: "#ffffff1a"
typography:
  display:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, min(9svh, 11vw), 6.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "normal"
  headline:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif"
    fontSize: "8svh"
    fontWeight: 700
    lineHeight: 1.05
  numeral:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif"
    fontSize: "40svh"
    fontWeight: 500
    lineHeight: 1
  title:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3svh"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2svh"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.8svh"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.3svh"
  button:
    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.6svh"
    fontWeight: 700
    letterSpacing: "0.5svh"
rounded:
  vh-sm: "1svh"
  vh-md: "3svh"
  vh-lg: "4svh"
  vh-pill: "5svh"
  full: "999px"
spacing:
  section-x: "5svh"
  section-y: "12svh"
  container: "150svh"
  gap-tight: "1svh"
  gap-default: "3svh"
  gap-loose: "6svh"
components:
  button-ghost:
    backgroundColor: "{colors.white-10}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.vh-sm}"
    padding: "2svh 5svh"
  button-ghost-hover:
    backgroundColor: "rgba(255, 255, 255, 0.15)"
    textColor: "#ffffff"
  button-solid-dark:
    backgroundColor: "{colors.dark}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.vh-sm}"
    padding: "2svh 5svh"
  button-outline-pill:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    typography: "{typography.body}"
    rounded: "2.5svh"
    padding: "0.6svh 2svh"
  button-outline-pill-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.dark}"
  button-outline-pill-dark:
    backgroundColor: "transparent"
    textColor: "{colors.dark}"
    typography: "{typography.body}"
    rounded: "2.5svh"
    padding: "0.6svh 2svh"
  button-outline-pill-dark-hover:
    backgroundColor: "{colors.dark}"
    textColor: "#ffffff"
  card-dark:
    backgroundColor: "{colors.dark}"
    textColor: "#ffffff"
    rounded: "{rounded.vh-md}"
    padding: "5svh"
  section-light:
    backgroundColor: "{colors.light}"
    textColor: "{colors.dark}"
    padding: "12svh 5svh"
  section-dark:
    backgroundColor: "{colors.dark}"
    textColor: "#ffffff"
    padding: "14svh 5svh"
---

# Design System: Robotics Collective Aachen

## Overview

**Creative North Star: "The Robotics Broadsheet"**

This is a Swiss editorial system and the lineage is literal rather than aspirational. It behaves like a printed broadsheet that happens to scroll. Sections are numbered like an index. Type carries the structure. Photography is always subordinated to a dark plate. There is exactly one chromatic value in the entire palette, and everything else is greyscale.

The defining move is that **scale is bound to the viewport, not to the page**. Type, radii, padding and the container itself are expressed in `svh`, so the composition holds its proportions on a laptop and a projector alike. The consequence is that this system has almost no breakpoints; it re-proportions continuously instead of stepping. Where mobile would otherwise collapse the hierarchy, `clamp()` supplies a `rem` floor rather than a media query.

The density is generous and confident. Sections are full-viewport with heavy vertical padding, headings are enormous, and the giant decorative numeral in each section's top-right corner is set at `40svh` and allowed to bleed. Nothing apologizes for its size. The register is plain and slightly scrappy — the organization it represents describes its own robots as held together by duct tape and optimism, and the design should never be more polished than that.

**Key Characteristics:**
- Two tones (`#0d0d0d`, `#ebebeb`) alternating section to section, with one teal accent
- Viewport-relative sizing throughout; `svh`, not `px`, not `vh`
- Numerals as structure: numbered nav, numbered eyebrows, giant corner figures
- Dark rounded plates that overlap their neighbors via negative margins
- Flat by default; depth comes from tone, not shadow
- `scale(1.03–1.05)` on hover as the only repeated interaction

## Colors

A greyscale system with a single chromatic voice: everything is `#0d0d0d`, `#ebebeb` or a step between, and one teal carries every accent in the product.

### Primary
- **Signal Teal** (`#47A8BD`): The only chromatic value in the system. Carries the emphasized word in a heading, the ESRA affiliation, link hovers, the events date, and the faint radial glows behind dark plates. Available as a 20%-alpha tint (`#47A8BD33`) for underlines and fills, and a 40%-alpha (`#47A8BD66`) for glow shadows.

### Neutral
- **Ink Black** (`#0d0d0d`): The dark ground. Section backgrounds, cards, plates, the mobile menu, and body text on light surfaces.
- **Raised Black** (`#161616`): Surfaces sitting on top of Ink Black — image plates, card interiors. The single step of tonal elevation this system owns.
- **Paper** (`#ebebeb`): The light ground. Alternating section backgrounds and the page's resting state.
- **Rule Grey** (`#d8d8d8`): Secondary surfaces on Paper, and the fill of the giant decorative numerals on light sections.
- **Body Grey** (`#333333`): Running body copy on light surfaces.
- **Quiet Grey** (`#666666`): Eyebrows, captions and metadata on light surfaces. Never used for a heading.
- **White 60 / 30 / 10** (`#ffffff99`, `#ffffff4d`, `#ffffff1a`): The dark-surface equivalents — muted text, hairline borders, and ghost fills respectively. Giant numerals on dark sections use `#ffffff14`.

### Named Rules

**The One Accent Rule.** Teal is the system's only color; treat it as a scarce resource. Current practice is roughly one accented element per section — a single emphasized word in the heading, or one status marker. A section with two teal moments is already over budget. *(Derived from the incumbent implementation; not yet ratified as intent.)*

**The Plate Rule.** Photography never touches the page directly. Every image sits inside a dark plate under a gradient (`linear-gradient(transparent 40%, #0d0d0de6 100%)` or equivalent), so text over it is always white on near-black. A light image used as a backdrop for white text is a defect, not a variation.

## Typography

**Display Font:** Satoshi Variable (300–900), self-hosted from `/public/fonts/`
**Body Font:** Satoshi Variable — the same face throughout
**Label/Mono Font:** none. This system has no monospace.

**Character:** A single geometric grotesk doing every job, separated purely by weight and scale. Satoshi's slightly squared bowls keep it from reading as generic Helvetica-adjacent sans, and its variable axis lets 400 and 800 sit in the same composition without a second family. The pairing discipline is: never add a face, only add a weight.

### Hierarchy
- **Display** (800, `clamp(3rem, min(9svh, 11vw), 6.5rem)`, 1.05): Hero headline only. One per page.
- **Headline** (700, `8svh`, 1.05): Section headings. Sentence case, never title case.
- **Numeral** (500, `40svh`, 1): The decorative section figure, absolutely positioned top-right, `#d8d8d8` on light and `#ffffff14` on dark. Decorative and `aria-hidden`.
- **Title** (500, `3svh`, 1.4): Card headings and plate captions.
- **Body** (400, `2svh`, 1.4): Running copy. Long-form measure caps around 65–75ch; the `150svh` container does this implicitly at most viewport sizes.
- **Label** (500, `1.8svh`, `0.3svh` tracking, uppercase): Section eyebrows in the form `XX · Section Name`, plus captions and metadata.
- **Button** (700, `1.6svh`, `0.5svh` tracking, uppercase): All button faces.

### Named Rules

**The svh Rule.** Type is sized in `svh`, never `px` and never `vh`. `svh` is load-bearing: plain `vh` re-resolves when mobile browser chrome collapses, which caused a real layout-jump bug on iOS. Where mobile would shrink type past legibility, wrap in `clamp()` with a `rem` floor — `clamp(1rem, 2svh, 1.4rem)` — rather than introducing a breakpoint.

**The One Face Rule.** Satoshi does every job. A second family is not a stylistic choice available to this system, and monospace in particular is banned as a signifier of "technical."

## Layout

One-page, anchor-based, with a small number of standalone routes (`/events`, `/privacy`, `/imprint`). The landing section IDs — `#about`, `#network`, `#projects`, `#faq`, `#team` — are a stable contract with the navbar and must not be renamed.

Sections are `min-height: 100svh` with `12svh–14svh` vertical and `5svh` horizontal padding. Inner content is centered in a `150svh` max-width container (widening to `170svh–180svh` for map and grid sections). Vertical rhythm inside a section runs eyebrow → `4svh` → heading → `6svh` → content.

Backgrounds alternate dark and light down the page. Dark sections are frequently pulled into their neighbors with negative margins (`marginTop: -7svh` paired with a `7svh` radius) so the plate reads as a rounded slab overlapping the page rather than a band abutting it.

Responsive behavior is continuous rather than stepped: `svh` sizing re-proportions everything, and Tailwind's `md` (768px) and `lg` (1024px) appear only where a layout must genuinely reflow from column to row. Mobile-critical type uses `clamp()` floors instead of breakpoints. Expensive desktop-only content (the ~6k-node dotted network map, the hero video) is gated behind a media query and dynamic import rather than merely hidden.

## Elevation & Depth

**This system is flat.** Depth is tonal, not cast. A dark plate on a light ground reads as forward because of contrast and radius; a `3svh` corner and a negative margin do the work a shadow would do elsewhere. Most surfaces in the product have no `box-shadow` at all.

Three exceptions exist, all functional rather than decorative:

### Shadow Vocabulary
- **Nav lift** (`box-shadow: 0 1px 2px rgba(0,0,0,0.06)`): Separates the scrolled desktop navbar from content passing beneath it. Barely perceptible by design.
- **Floating pill** (`box-shadow: 0 2px 12px rgba(0,0,0,0.08)` on light, `0 2px 14px rgba(0,0,0,0.25)` on dark): The mobile navigation pill, which genuinely floats over content.
- **Hero plate glow** (`box-shadow: inset 0 0 0 1px #ffffff14, 0 0 80px -20px #47A8BD33`): A wide, heavily-offset teal bloom under the hero video plate. The only decorative shadow in the system and the only place brand glow appears.

### Named Rules

**The Flat Ground Rule.** Surfaces are flat at rest. If a new element needs to feel raised, change its tone (`#0d0d0d` → `#161616`) or give it a radius, not a shadow. A shadow is only justified when the element physically floats over scrolling content.

## Shapes

Generous, consistent rounding with no sharp corners anywhere. The radius scale is viewport-relative like everything else: `1svh` for small controls, `3svh` for cards and plates, `4svh` for the hero bubble, `5svh`–`7svh` for full-section slabs, and `999px` for true pills.

The system's signature silhouette is the **rounded slab**: a full-bleed dark section whose corners are rounded on the edges that meet a light neighbor, then pulled into that neighbor with a negative margin. The hero rounds only its bottom corners; the network section rounds all four and overlaps both directions.

Borders are hairlines and always translucent rather than solid grey — `#ffffff1f` on dark, `#0d0d0d1f` on light. Buttons are the exception, carrying a deliberate 2px outline.

## Components

### Buttons
- **Shape:** Small radius on solid buttons (`1svh`); true pills for navigation (`2.5svh`, or `999px` on mobile).
- **Ghost (primary on dark):** White text on a 10%-white fill, `2svh 5svh` padding, uppercase at `1.6svh`/700 with `0.5svh` tracking. Hover raises the fill to 15% and scales to `1.05`.
- **Solid dark (primary on light):** White on `#0d0d0d`, same metrics. Hover scales to `1.05` with no color change.
- **Outline pill:** 2px border, transparent fill, `2svh`/500 — sentence case, not uppercase. Hover **inverts** completely: border color becomes the fill, text flips to the opposite tone, and it scales to `1.03`. Both a light-ground and dark-ground variant exist.
- **Focus:** Currently browser-default. This is a known gap, not a decision.

### Cards / Containers
- **Corner Style:** `3svh` for standard cards, `4svh` for hero-scale bubbles.
- **Background:** `#0d0d0d` for plates on light grounds; `#161616` where a surface sits on an already-dark ground.
- **Shadow Strategy:** None. See Elevation & Depth.
- **Border:** None on solid plates. Translucent hairline (`#ffffff1f`) on ghost surfaces.
- **Internal Padding:** `3svh`–`5svh`.
- **Hover:** `scale(1.02–1.03)` when the card is a link. No shadow, no border change.

### Navigation
Transparent over the hero, then swaps to an opaque white pill after 10px of scroll — logo included, which switches from the light to the dark mark. Desktop links are outline pills prefixed with their section number (`01 About`). Mobile collapses to a floating blurred pill that hides on scroll-down and returns on scroll-up, opening into a full-screen `#0d0d0d` overlay with links at `2.25rem`/600.

Route links (`/events`) sit outside the numbered set, alongside the "Join us" action — numbering belongs to landing-page sections only.

### Section Eyebrow & Giant Numeral
The system's signature pairing, present on every landing section. A `1.8svh` uppercase eyebrow in the form `XX · Section Name` with `0.3svh` tracking, set in Quiet Grey on light or White-60 on dark. Behind it, absolutely positioned top-right at `5svh` inset, the same number at `40svh` in Rule Grey (light) or `#ffffff14` (dark), `aria-hidden` and allowed to clip at the section edge.

### Events Timetable Row
The upcoming-event entry beneath the hero. Deliberately built as an editorial listing rather than a card: a hairline top rule, an `UPCOMING` eyebrow opposite an `ALL EVENTS →` action, then a `~8svh` tabular-numeral date (`13.08`) set against a two-line title. No container, no fill, no badge. Establishes that a timetable/index pattern is available to this system alongside cards.

## Do's and Don'ts

### Do:
- **Do** size type, radii and spacing in `svh`, with `clamp()` and a `rem` floor where mobile legibility demands it.
- **Do** keep teal to roughly one moment per section.
- **Do** put every photograph inside a dark plate under a gradient overlay.
- **Do** convey elevation with tone (`#0d0d0d` → `#161616`) and radius rather than shadow.
- **Do** use `scale(1.03–1.05)` at 200ms as the hover response; it is the system's single interaction idiom.
- **Do** stagger in-view list entries at 40ms with `cubic-bezier(0.23, 1, 0.32, 1)`.
- **Do** set section headings in sentence case at `8svh`/700.
- **Do** treat the landing section IDs as a fixed contract.

### Don't:
- **Don't** reach for the generic startup-SaaS register: gradient text, floating glass cards, three-up icon-and-heading feature grids, or hero-metric stat rows. This is the system's primary anti-reference.
- **Don't** go neon-cyberpunk — electric glow, circuit motifs, HUD framing, monospace as a "technical" costume. The subject is robotics; the design must not illustrate it literally.
- **Don't** go consumer-app-playful: pastel blobs, emoji as icons, illustration, or bouncy spring motion.
- **Don't** introduce a second typeface, or any monospace.
- **Don't** introduce a second accent color. Green appears in exactly one place (a `#22c55e` "you are here" dot in the network list) and should not be generalized into a semantic palette.
- **Don't** use plain `vh` — it re-resolves when mobile browser chrome moves and causes visible layout jumps. `svh` only.
- **Don't** add `box-shadow` to a surface that does not physically float over scrolling content.
- **Don't** add breakpoints where `clamp()` or `svh` re-proportioning would do the job.
- **Don't** number anything outside the landing page's `01`–`05` sequence; the numbers carry index meaning, not decoration.
