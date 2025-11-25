# Robotics Collective Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/e307b1b0-0632-4eea-9f87-295defcc6ffd/deploy-status)](https://app.netlify.com/projects/roboticscollective/deploys)

The official Robotics Collective website built with Next.js 15 and Sanity CMS.

## Architecture

This repository contains two main components:

- **`rc-website/`** - The main Next.js website application
- **`studio-website/`** - Sanity Studio CMS for content management

The website uses Sanity CMS for all dynamic content including team members, projects, positions, and blog posts.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)

## Getting Started

### Clone the Repository

```bash
git clone git@github.com:openroboticmetaverse/rc-web.git
cd rc-web
```

### Website Development

Navigate to the website directory and install dependencies:

```bash
cd rc-website
yarn install
```

### Available Commands

- **`yarn dev`** - Start the development server at `http://localhost:3000`
- **`yarn build`** - Create an optimized production build
- **`yarn start`** - Start the production server (requires build first)
- **`yarn lint`** - Run ESLint to check code quality

### Sanity Studio (Content Management)

To manage website content, navigate to the studio directory:

```bash
cd studio-website
yarn install
yarn dev
```

The Sanity Studio will be available at `http://localhost:3333` for content editing.

## Development Workflow

1. **Content Updates**: Use Sanity Studio (`studio-website/`) to manage team members, projects, positions, and other content
2. **Website Development**: Work in the `rc-website/` directory for UI/UX changes and new features
3. **Testing**: Run `yarn build` to ensure everything compiles correctly before committing

## Tech Stack

- **Frontend**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **CMS**: Sanity Studio
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion
- **Deployment**: Netlify

---

For questions or issues, please create an issue in the repository or contact the maintainers.
