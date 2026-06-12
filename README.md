# VerveSchool website

VerveSchool helps companies hire sincere frontline sales talent through scout-led sourcing, role-fit filtering, and replacement-backed hiring confidence. This repository contains the public marketing site for candidates, hiring partners, the VerveSchool team, essays, and the serialized Selling Better field guide.

The app is built with Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui conventions, and Vercel Analytics. It is intended to run as a static-friendly marketing site on Vercel while keeping long-form content in Markdown files inside the repository.

## Site map

- `/` — homepage for the hiring proposition, partner logos, process overview, and calls to action.
- `/about` — candidate-facing explanation of how VerveSchool matching and selection works.
- `/partners` — employer-facing hiring details, commercial model, and partner contact paths.
- `/people` — VerveSchool team, operators, and extended network profiles.
- `/writing` — essay index powered by Markdown files in `content/essays`.
- `/writing/[slug]` — individual essay pages.
- `/book` — landing page for the serialized Selling Better field guide.
- `/book/[slug]` — individual book chapter pages when chapter Markdown files are present.
- `/privacy` and `/terms` — legal pages.

> Note: `app/essays` exists as a legacy route alongside `app/writing`. Prefer adding and linking new public essays through `/writing` unless the route convention intentionally changes.

## Local development

Use pnpm, which matches the committed `pnpm-lock.yaml` file.

```bash
pnpm install
pnpm dev
```

The development server starts the Next.js app locally, typically at `http://localhost:3000`.

Useful commands:

```bash
pnpm dev      # Start the local development server
pnpm lint     # Run ESLint across the project
pnpm build    # Create a production Next.js build
pnpm start    # Start the production server after building
```

The scripts are defined in `package.json` and should stay aligned with the project package manager and deployment target.

## Build and deploy notes

- Production builds run with `next build`.
- Vercel is the expected hosting target for this Next.js site.
- `next.config.mjs` currently allows TypeScript build errors to be ignored and serves images as unoptimized assets. Revisit those settings before enabling stricter production checks or image optimization.
- Static assets such as logos, favicons, and people photos live in `public` and are referenced by root-relative paths like `/logo.png`.
- Vercel Analytics is initialized in the root layout, so deployed traffic can be measured without adding page-level analytics code.

## Content structure

```text
app/                 Route segments, page components, layouts, and global styles
components/          Shared UI such as the site header, footer, and theme provider
content/book/        Book landing Markdown and optional chapter Markdown files
content/essays/      Essay Markdown files used by the writing pages
lib/                 Markdown, frontmatter, book, and writing utilities
public/              Static images, logos, icons, and people photos
styles/              Additional global stylesheet entry point
```

### Writing essays

Add essays as Markdown files in `content/essays`. Each file name becomes the public slug, and each essay must include frontmatter with:

```yaml
---
title: "Essay title"
description: "Short summary for listings and metadata"
date: "YYYY-MM-DD"
category: "Category name"
author: "verveschool"
---
```

The writing utilities sort essays by date descending and calculate reading time from the Markdown body.

### Book content

The book landing page reads `content/book/landing.md`, which must include:

```yaml
---
title: "Book title"
subtitle: "Short subtitle"
description: "Book description"
author: "verveschool"
---
```

Book chapters are read from `content/book/chapters` when that directory exists. Chapter files should use numeric `order` values so the book pages can sort chapters and generate adjacent chapter navigation.

## Editing guidance

- Keep route-level copy in the relevant `app/**/page.tsx` file.
- Keep reusable navigation and layout elements in `components`.
- Put long-form editorial content in `content` instead of hard-coding it into pages.
- When adding public images, place them in `public` and reference them with root-relative URLs.
