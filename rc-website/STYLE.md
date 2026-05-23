# Style Guide (TL;DR)

Two-tone, viewport-relative, no breakpoints. Satoshi everywhere. Numbered sections.

## Tokens

| Token         | Value       | Use                                  |
|---------------|-------------|--------------------------------------|
| `dark`        | `#212121`   | Dark bg, text on light               |
| `light`       | `#ebebeb`   | Light bg                             |
| `gray-mid`    | `#d8d8d8`   | Secondary surfaces                   |
| `gray-text`   | `#333333`   | Body text on light                   |
| `white-60`    | `#ffffff99` | Muted text on dark                   |
| `white-30`    | `#ffffff4d` | Hairline borders, hover              |
| `white-10`    | `#ffffff1a` | Ghost fills                          |

## Sizing

Everything in `vh` / `vw`. Never `px` for layout or type.

| Token       | Value | Use                          |
|-------------|-------|------------------------------|
| `vh-sm`     | `1vh` | Small radius (chips, inputs) |
| `vh-md`     | `3vh` | Card radius                  |
| `vh-lg`     | `4vh` | Hero/bubble radius           |
| `vh-pill`   | `5vh` | Full pill                    |
| section pad | `5vh` | Section padding              |
| container   | `150vh` max-width | Inner content        |

## Type scale (vh)

| Class            | Size | Weight | Use                       |
|------------------|------|--------|---------------------------|
| hero             | `9vh`  | 700  | Hero h1                   |
| h2               | `8vh`  | 700  | Section heading           |
| section number   | `40vh` | 500  | Giant decorative `01`–`05`|
| card title       | `3vh`  | 500  | Card headings             |
| sub / hero sub   | `2.5vh`| 400  | Lead paragraphs           |
| body / nav       | `2vh`  | 400-500 | Default text           |
| eyebrow / small  | `1.8vh`| 500  | Section numbers, captions |
| button           | `1.6vh`| 700  | Letter-spacing `0.5vh`    |

Font: **Satoshi** variable (300-900), self-hosted from `/public/fonts/`.

## Sections

One-page layout, anchor-based. Sections alternate dark/light. Each has:

- Eyebrow: `XX — Section Name`, uppercase, `0.3vh` letter-spacing, `white-60`
- Heading: `8vh` / 700 / line-height `1.05`
- Decorative `XX` number: `40vh` absolute top-right (`#d8d8d8` on light, `#ffffff14` on dark)

| # | ID         | Bg    |
|---|------------|-------|
| — | `#hero`    | dark  |
| 01| `#about`   | light |
| 02| `#network` | dark  |
| 03| `#projects`| light |
| 04| `#faq`     | light |
| 05| `#team`    | dark  |

## Buttons

| Class                   | Use                          |
|-------------------------|------------------------------|
| `.btn-ghost`            | Primary on dark              |
| `.btn-solid-dark`       | Primary on light             |
| `.btn-outline-pill`     | Pill on dark (nav, CTAs)     |
| `.btn-outline-pill-dark`| Pill on light (scrolled nav) |

All buttons: `transform: scale(1.03-1.05)` on hover, `200ms ease-out`. No other micro-interactions.

## Cards & overlays

- Full-bleed images sit behind `linear-gradient(#000000c4, #000000c4)` (or `#212121d9` for warmer).
- Card radius `3vh`; hero bubble `4vh`.

## Motion

- **Hero grid pattern**: continuous fade + relocate of random squares (`AnimatedGridPattern`).
- **In-view stagger** for list entries: 30-50ms between items, once, `cubic-bezier(0.23, 1, 0.32, 1)`.
- **Hover** is the only repeated interaction: `scale(1.03-1.05)`, no shadows/glows.
- No keyboard-action animation, no entry from `scale(0)`, nothing under 100ms or over 300ms for UI.

## Conventions

- Section components: `src/components/SectionName.tsx`, exported as named + default.
- Content data inline at top of section file, or in `src/lib/*.ts` for shared lists.
- Inline `style={{ fontSize: "Xvh" }}` for one-off `vh` sizing; Tailwind utilities for the rest.
- Navbar is `position: fixed`, transparent over hero, swaps to white/blur after 10px scroll.
- Anchor scrolling only on the landing page (no client routing).
