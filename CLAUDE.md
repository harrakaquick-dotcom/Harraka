# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```
npm run dev       # start Vite dev server with HMR
npm run build     # type-check (tsc -b) then production build via vite build
npm run lint      # eslint .
npm run preview   # serve the production build locally
```

There is no test suite configured in this repo (no test script, runner, or test files).

## Architecture

This is a Vite + React 19 + TypeScript app, currently the marketing/landing site for "Harraka." It is still close to the default `npm create vite` scaffold — `src/App.tsx` is largely boilerplate — with the real project-specific work so far concentrated in styling and static assets rather than component structure:

- **Entry point**: `src/main.tsx` mounts `<App />` and imports `src/tailwind.css` globally (Tailwind CSS v4 via `@tailwindcss/vite`, configured in `vite.config.ts` — no separate `tailwind.config.js`).
- **Theming** (`src/tailwind.css`): all design tokens are declared in a single `@theme` block — brand colors, ink opacity scale, on-dark color variants, type (`--font-*`), and radii. Colors are commented as matching an existing Flutter mobile app's palette (hex values annotated with their `Color(0xFF...)` equivalents), so this web project shares a brand with a separate Flutter app — keep values in sync with that source of truth rather than inventing new ones here.
- **Fonts**: self-hosted, not loaded from Google Fonts/CDN. Font files live under `public/fonts/` and are wired up via `@font-face` rules at the top of `src/tailwind.css`, mapped to theme variables: `--font-display` (Montserrat Alternates, the default body font), `--font-heading` (Notable), `--font-script` (Caveat), `--font-mono` (IBM Plex Mono, not self-hosted). When adding a new self-hosted font, add its `@font-face` rule(s) next to the existing ones and expose it as a `--font-*` variable rather than referencing the family name directly in components.
- **Static assets**: `public/` is served at the site root (e.g. `public/icons.svg` is referenced in JSX as `/icons.svg#<id>`, `public/favicon.svg` as the favicon). `src/assets/` holds assets imported directly into components (e.g. `heroImg` in `App.tsx`).
- **No routing, state management, or backend integration yet** — the app is a single top-level component tree.
- **TypeScript**: project-references setup (`tsconfig.json` → `tsconfig.app.json` for `src/`, `tsconfig.node.json` for Vite config). No path aliases configured; use relative imports.
