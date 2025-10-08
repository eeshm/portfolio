# Copilot Instructions

## Repo overview
- **Purpose:** Personal portfolio built with the Next.js App Router showcasing projects, skills, and contact info.
- **Tech stack:** Next.js 15, React 19, TypeScript (strict mode), Tailwind CSS 4 (class-based dark mode), Framer Motion & custom `BlurFade` animations, Radix UI primitives, and Three.js via `@react-three/fiber` when 3D scenes are needed.
- **Key folders:**
  - `app/` – App Router routes and global layout (`layout.tsx`, `page.tsx`).
  - `components/` – Reusable UI, including higher-level sections (`About`, `Projects`, `Skills`, `Navbar`, `Footer`) plus `ui/` atoms like `button`, `toggle-button`, `blur-fade`, `grid-background`.
  - `lib/` – Utility helpers (for formatting, constants, etc.).
  - `public/` – Static assets consumed via `next/image` or direct links.

## Build & run
- Install deps with `npm install` (project ships with `package-lock.json`; prefer npm unless asked otherwise).
- Available scripts:
  - `npm run dev` – Start local dev server.
  - `npm run build` – Production build.
  - `npm start` – Serve production build.
  - `npm run lint` – Run ESLint (Next.js config).
- Tailwind classes are compiled automatically through Next.js; no manual build step is needed beyond the usual `next dev/build` commands.

## Coding guidelines
- Keep TypeScript strictness (no implicit `any`). Type components explicitly when props exist; prefer discriminated unions and typed helper functions.
- Use functional React components, the App Router conventions (`"use client"` only where client-side hooks or browser APIs are required), and prefer server components for static content.
- Styling should use Tailwind utility classes or existing component APIs. Extend Tailwind via `tailwind.config.ts` instead of inline styles whenever feasible.
- Route-relative imports use the `@/` alias (see `tsconfig.json`). Maintain path casing to preserve Windows/macOS compatibility.
- Prefer `next/image` for local images from `public/`; set `width`/`height` or `fill` plus parent constraints. Use `next/link` for navigation.
- Follow existing motion patterns: leverage `BlurFade` and Framer Motion primitives for entrance animations rather than inventing new animation systems.
- Preserve accessibility: semantic HTML, descriptive alt text, focus states, and avoid motion that cannot be disabled.

## Feature patterns & data
- Section components (`About`, `Projects`, `Skills`) typically render structured arrays from local constants. When adding data-driven content, colocate arrays near the component or extract to `lib/` if shared.
- Project cards rely on fields `{ id, Title, Description, Tech[], liveLink, github, image }`. Keep shape consistent.
- Dark mode toggling is class-based with `next-themes`; new components should support both themes out of the box.

## Testing & quality
- Run `npm run lint` after significant changes; resolve warnings unless a documented exception exists.
- For visual or interactive additions, provide Storybook-style usage notes in component comments if behavior is non-obvious (Storybook itself is not configured).

## Documentation & copy
- Update `README.md` when adding substantial sections or commands.
- Keep user-facing copy concise and in the same voice as existing sections (professional, friendly, first-person).

## Pull request tips
- Describe high-level changes plus any new environment variables or external services.
- Include screenshots or screen captures for notable UI changes, especially animations or layout adjustments.

Use these instructions when generating or modifying code/content for this repo so suggestions align with the established patterns.
