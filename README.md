# Mutasim Abbas — Portfolio

High-end single-page portfolio, designed and built as a working proof of skill.

**▶ Live: https://mutasim-abbas-portfolio.vercel.app**

## Stack

Next.js 14 (App Router, static export) · TypeScript (strict) · Tailwind CSS ·
Framer Motion · lucide-react. Self-hosted fonts via `@fontsource` (Plus Jakarta
Sans, Inter Variable, Instrument Serif, JetBrains Mono). Single dark theme,
code-green accent, liquid-glass surfaces, canvas particle field, reduced-motion
fallbacks throughout.

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server → http://localhost:3000
npm run build     # type-check + static export to out/
npm run lint      # ESLint
npm run typecheck # tsc --noEmit
```

## Deployment

Pushes to `main` deploy automatically to Vercel, which type-checks and builds
from `next.config.mjs`'s static export. No environment variables, no server, no
secrets.

Vercel is the only target. This also deployed to GitHub Pages as a project site
until 2026-08-07, which meant a `basePath` of `/mutasim-abbas-portfolio` on that
copy; both the second copy and the prefix are gone. The Pages copy was retired
because its deploy job had been timing out inside GitHub's Pages backend since
2026-07-22 while the build job kept passing, so it silently served a two-week-old
build with nothing reporting a failure that mattered.

## Structure

- `app/` — layout (fonts + metadata + OG image), page, globals.css (design
  tokens + glass recipe), 404, favicon.
- `components/` — Nav (focus-trapped mobile overlay), Hero (+ HeroField
  particles), Magnet, Marquee, About, Skills, Projects (sticky-stack), Footer.
- `lib/content.ts` — single source of truth for all content and links.
- `lib/motion.ts` — shared Framer Motion tokens.
- `docs/` — project brief and design system the site was built from.
