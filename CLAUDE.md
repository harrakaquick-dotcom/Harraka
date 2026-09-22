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

This is a Vite + React 19 + TypeScript app: the marketing/landing site for "Harraka." Only the Home page is built so far.

- **Routing & layout**: `src/App.tsx` creates a `react-router-dom` browser router; every page renders inside `src/layout/Applayout.tsx` (`Header` + `<main>` + `Footer`, footer pinned to the bottom on short pages). Add pages under `src/pages/` and register them as children of the layout route. Links use `<Link>` with absolute paths (`/shop`, `/about#riders`); header/footer link lists live in `src/Data/navigation.ts`, business details (address, phone, email) in `src/Data/Appdata.ts`.
- **Components**: `src/components/Home/` holds the Home page sections (`Hero`, `HowItWorks`, `CoverageSection`, …) plus their shared pieces (`Section`, `SectionHeader`, `Reveal`); all of their copy/figures are in `Home/data.ts`, so the components are layout only. `src/pages/Home.tsx` just composes them. `src/components/Button/` holds the buttons: `Button` (outline "wipe"), `GetButton` (red "liquid" fill), `LinkButton` (variants of the wipe animation for CTAs) and `MenuButton`, sharing `ButtonLabel` and `button.css`.
- **Prettier**: config in `.prettierrc`, ignore list in `.prettierignore`.

- **Entry point**: `src/main.tsx` mounts `<App />` and imports `src/tailwind.css` globally (Tailwind CSS v4 via `@tailwindcss/vite`, configured in `vite.config.ts` — no separate `tailwind.config.js`).
- **Theming** (`src/tailwind.css`): all design tokens are declared in a single `@theme` block — brand colors, ink opacity scale, on-dark color variants, type (`--font-*`), and radii. Colors are commented as matching an existing Flutter mobile app's palette (hex values annotated with their `Color(0xFF...)` equivalents), so this web project shares a brand with a separate Flutter app — keep values in sync with that source of truth rather than inventing new ones here.
- **Fonts**: self-hosted, not loaded from Google Fonts/CDN. Font files live under `public/fonts/` and are wired up via `@font-face` rules at the top of `src/tailwind.css`, mapped to theme variables: `--font-display` (Montserrat Alternates, the default body font), `--font-heading` (Notable), `--font-script` (Caveat), `--font-mono` (IBM Plex Mono, not self-hosted). When adding a new self-hosted font, add its `@font-face` rule(s) next to the existing ones and expose it as a `--font-*` variable rather than referencing the family name directly in components.
- **Static assets**: `public/` is served at the site root — logos and app icons in `public/icons/` (referenced in JSX as `./icons/<file>.png`, the favicon is `harraka_app_splash.png`), and the standalone Leaflet coverage map at `public/coverage-map.html`, which the Home coverage section embeds in an iframe.
- **No state management or backend integration yet** — state is local `useState` only (e.g. the fake live delivery clock in `useDeliveryClock`).
- **TypeScript**: project-references setup (`tsconfig.json` → `tsconfig.app.json` for `src/`, `tsconfig.node.json` for Vite config). No path aliases configured; use relative imports.
