# MonstaTek M1 Field Guide

Production-ready Docusaurus source for the MonstaTek M1 end-user field guides.

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

The static site is written to `build/` and can be deployed to `docs.monstatek.com` using any static host.

## Content structure

- `docs/` — rewritten end-user guides in MDX
- `sidebars.ts` — guide categories and navigation order
- `src/pages/index.tsx` — documentation landing page
- `src/css/custom.css` — MonstaTek theme overrides

The main guides describe the current M1 menus and behavior. Historical firmware changes belong in the dedicated Release Notes section.
