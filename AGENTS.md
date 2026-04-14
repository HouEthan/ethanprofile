# Repository Guidelines

## Project Structure & Module Organization
This repository is an Astro site. Keep application code in `src/` and static public files in `public/`.

- `src/pages/`: route files, including collection indexes and dynamic routes such as `projects/[slug].astro`
- `src/components/`: shared UI building blocks like `SiteShell.astro` and `CardGrid.astro`
- `src/data/site.ts`: typed content and page data used across routes
- `src/assets/`: bundled assets imported by Astro
- `dist/`: build output; do not edit manually

Prefer adding new pages through file-based routing and centralizing reusable content shapes in `src/data/site.ts`.

## Build, Test, and Development Commands
Run commands from the repository root:

- `npm install`: install dependencies
- `npm run dev`: start the local Astro dev server
- `npm run build`: generate the production build in `dist/`
- `npm run preview`: serve the built site locally for verification
- `npx astro check`: run Astro and TypeScript checks before opening a PR

Use Node `>=22.12.0` as declared in `package.json`.

## Coding Style & Naming Conventions
Follow the existing code style:

- Use 2-space indentation in `.astro`, TypeScript, and JSON files
- Name Astro components in `PascalCase` (`HeroSection.astro`)
- Use lowercase route folders and files, with Astro dynamic params in brackets (`food/[slug].astro`)
- Keep shared data typed and exported from `src/data/site.ts`
- Prefer small, composable components over large page-local markup blocks

Match the repository’s existing semicolon usage and double-quoted strings in TypeScript.

## Testing Guidelines
There is no dedicated test framework configured yet. Until one is added, treat `npm run build` and `npx astro check` as the minimum validation for every change. If you add tests later, place them near the feature or under a dedicated `tests/` directory and name them after the feature they cover.

## Commit & Pull Request Guidelines
The current history is minimal (`Initial commit from Astro`), so use short, imperative commit subjects such as `Add project detail route` or `Refine home page hero`. Keep commits focused.

PRs should include a clear summary, note any route or content-model changes, and attach screenshots for UI updates. Link related issues when applicable and mention the verification steps you ran.
