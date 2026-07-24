# Robotics Collective Aachen

[![Netlify Status](https://api.netlify.com/api/v1/badges/e307b1b0-0632-4eea-9f87-295defcc6ffd/deploy-status)](https://app.netlify.com/projects/roboticscollective/deploys)

One-page marketing site for **Robotics Collective Aachen**, a non-profit student robotics organization in Aachen, Germany and founding member of **ESRA** (European Student Robotics Association).

Built with Next.js 15. All content is static. No external data sources. 

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [Yarn](https://classic.yarnpkg.com/) (Classic, v1.x - see `packageManager` in `package.json`)

## Getting Started

```bash
git clone git@github.com:openroboticmetaverse/rc-web.git
cd rc-web/rc-website
yarn install
yarn dev
```

The dev server runs at `http://localhost:3000`.

### Available Commands

- **`yarn dev`**: Start the development server
- **`yarn build`**: Create an optimized production build
- **`yarn start`**: Start the production server (requires `yarn build` first)
- **`yarn lint`**: Run ESLint

## Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS with shadcn / Radix UI primitives
- **Animations**: Motion (Framer Motion successor)
- **Font**: Satoshi (self-hosted via `next/font/local`)
- **Analytics**: GA4 with opt-in cookie consent
- **Deployment**: Netlify

## Editing Content

All copy and data lives in TypeScript files inside `rc-website/src/`. No admin panel needed.

- Team / partners: `src/lib/team.ts`
- FAQ: `src/components/FAQSection.tsx`
- Hero / About / Vision copy: inline at the top of each section component in `src/components/`
- Images: `rc-website/public/` (`team/`, `projects/`, `partners/`, etc.)

See **`PROJECT.md`** for the full landing-page structure and **`STYLE.md`** for the design-token reference.

## Deployment

Pushes to `main` deploy automatically to Netlify. The build command is `yarn build` and the publish directory is the standard Next.js output.

---

For questions, issues, or requests, contact **xerico12345@gmail.com**.
