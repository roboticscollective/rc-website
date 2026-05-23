# Robotics Collective Aachen — Website

One-page marketing site for **Robotics Collective Aachen**, a non-profit student robotics organization in Aachen, Germany. Founding member of **ESRA** (European Student Robotics Association).

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** + shadcn/Radix primitives (`src/components/ui/`)
- **Satoshi** variable font (self-hosted, `next/font/local`)
- **MagicUI** components (open-source, copied locally) — `AnimatedGridPattern`, `InteractiveGridPattern`, `DottedMap`
- **motion** (framer-motion successor) for grid animations
- **dotted-map** (npm) for the SVG dotted Europe map in section 02
- **GA4** + cookie consent (Google Analytics, opt-in)

No CMS. No video. No external image CDN. Static content lives in TypeScript files.

## Routes

| Route       | Purpose                       |
|-------------|-------------------------------|
| `/`         | One-page landing              |
| `/privacy`  | Privacy policy (DE/EN)        |
| `/imprint`  | Legal notice (German TMG §5)  |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | Standard SEO files |

The landing page is anchor-based — `#about`, `#network`, `#projects`, `#faq`, `#team`. Section IDs are stable contract for the navbar.

## Landing-page structure (`src/app/page.tsx`)

| #   | ID         | Component                                | Background | Notes                                  |
|-----|------------|------------------------------------------|------------|----------------------------------------|
| —   | `#hero`    | `HeroSection`                            | Dark       | Edge-to-edge dark bubble with rounded bottom corners; AnimatedGridPattern bg (tilted 12°). |
| 01  | `#about`   | `AboutSection`                           | Light      | Two-column: dark image card + text. No stats. |
| 02  | `#network` | `VisionSection` (file kept, content = ESRA) | Dark    | DottedMap with single Aachen marker (German-flag pill); founding members as 2-col chip grid (RC Aachen highlighted). |
| 03  | `#projects`| `ProjectsSection`                        | Light      | 2×2 image mosaic. No links/captions. Placeholders in `/public/projects/`. |
| 04  | `#faq`     | `FAQSection`                             | Light      | Radix accordion. Q&As hardcoded at top of file. |
| 05  | `#team`    | `TeamSection`                            | Dark       | Leadership grid (3 founders) + Partners logo grid. |

`Navbar` + `Footer` wrap the page in `src/app/layout.tsx`.

## Design system

Three files own the visual language:

- **`src/app/globals.css`** — typography scale (`.text-hero`, `.text-h1`–`.text-h5`, `.text-card-title`…), button components (`.btn-ghost`, `.btn-solid-dark`, `.btn-outline-pill`, `.btn-outline-pill-dark`), section helpers, HSL CSS variables.
- **`tailwind.config.ts`** — color tokens (`dark` `#212121`, `light` `#ebebeb`, `gray-mid`, `white-10/30/60`), viewport-relative `borderRadius` tokens (`vh-sm/md/lg/pill`), `satoshi` font family.
- **`src/app/layout.tsx`** — Satoshi font wired via `next/font/local` from `public/fonts/`.

See **`STYLE.md`** for the TL;DR token/scale reference.

### Principles (from ETH Robotics Club style guide)

- **All viewport units** — sizes in `vh`/`vw`, no px breakpoints.
- **Two-tone** — `#212121` dark and `#ebebeb` light alternate between sections. No teal, red, yellow.
- **Rounded cards** — `3vh`–`4vh` radius gives softness.
- **Numbered everything** — nav links + sections + decorative giant `01`–`05` corner numbers.
- **Scale on hover** (`transform: scale(1.03–1.05)`) is the only interaction feedback.
- **Image overlays** — full-bleed photos always sit behind a dark gradient.
- **Anchor scrolling** — no client-side routing on the landing page.

## Content / data files

All editable content lives in **`src/lib/`**:

- **`src/lib/team.ts`** — `leadership[]` (3 co-founders: Amine Kharrat, Karim Siala, Jan Strehl), `partners[]` (6 placeholder logos). Swap photos in `/public/team/` and `/public/partners/`.
- **`src/components/VisionSection.tsx`** — `markers[]` (single Aachen pin with flag/label overlay) and `orgList[]` (founding-member chip list) inline at top of file.
- **`src/components/FAQSection.tsx`** — `defaultItems[]` inline at top.
- **`src/components/HeroSection.tsx`** — hero copy inline.
- **`src/components/AboutSection.tsx`** — about copy inline.

Image assets in `/public/`:
- `logo.svg`, `logo.png`, `logotext.svg` — brand marks
- `fonts/Satoshi-Variable.ttf`, `Satoshi-VariableItalic.ttf`
- `team/`, `projects/`, `partners/` — to be filled in

## Component organization

- **`src/components/*.tsx`** — page sections (one file per section)
- **`src/components/ui/`** — shadcn primitives + MagicUI components (`interactive-grid-pattern.tsx`, `animated-grid-pattern.tsx`, `dotted-map.tsx`)
- **`src/contexts/ConsentContext.tsx`** — GDPR consent state
- **`src/lib/`** — analytics + content data + `cn` util

## Conventions

- Section components live in `src/components/SectionName.tsx`, exported both as named and default
- Section number eyebrows always follow the format: `XX — Section Name` in uppercase with `0.3vh` letter-spacing
- Section headings: `8vh`, weight 700, line-height 1.05, sentence case
- Decorative giant section number sits absolutely in the top-right at `40vh` / `#d8d8d8` (light bg) or `#ffffff14` (dark bg)
- Inline styles are used liberally for one-off `vh`-based sizing; Tailwind utilities cover the rest

## Brand naming

- **Public brand**: "Robotics Collective Aachen"
- **Legal entity** (imprint only): "open robotic metaverse e.V." (legacy registered name in Aachen, VR6426)
- **ESRA**: "European Student Robotics Association" — Robotics Collective Aachen is a founding member

## Known scaffolding to replace

- `/public/team/*.jpg` — leadership photos
- `/public/projects/placeholder-1.jpg`…`-4.jpg` — project images
- `/public/partners/*.svg` — partner logos
- Group photo for `AboutSection`'s dark card (currently references `/team-placeholder.jpg`, missing)
- Real org list for ESRA section if any orgs are added/removed
