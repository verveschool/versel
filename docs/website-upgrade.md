# Verveschool website upgrade — delivery and validation

## Verified source

Repository: [verveschool/versel](https://github.com/verveschool/versel), production branch `main`, baseline `f76c8ac37f5f3994cce9116ab54e307d3b8527c2`.

Development branch: `codex/complete-website-upgrade`.

The formerly identified `verveschool/v0-verveschool` contains the older `/apply`, `/talent`, `/team` and `/library` architecture. Its last main commit is from May 2026. It was inspected and left unchanged.

The verified source matches the live homepage copy, current routes, partner assets, People records, essay library and 19-chapter book. GitHub records the baseline as a successful Production deployment: deployment 7213216767, Vercel project `v0-talent-fund` in `ayush-duggals-projects`. The connected Vercel account cannot inspect that team (403), so project settings and domains were left untouched.

Framework: Next.js 16.0.10 App Router, React 19.2.0, TypeScript and Tailwind 4. Existing runtime dependencies and deployment configuration are retained.

## Implemented

- Home now presents workforce planning and talent work across business and academic functions, retains customer-facing specificity, the brand tagline, all 24 partner logos and all six Explore destinations.
- Hiring Partners follows the supplied five-stage architecture with exact stage sequence and content, reusable static components, native anchor navigation, responsive stages and restrained commercial terms. Existing section anchors and useful employer explanations remain.
- The reference's eight partner logos appear first; 16 additional approved references remain in a native disclosure. No partnerships were added.
- Candidates retains the WhatsApp application mechanism, prefilled application information, scout journey and human character. Grammar is corrected; fixed salary/review/interview promises are replaced with role-dependent wording, and candidate support is distinguished from employer replacement coverage.
- People retains The Unit, The Alliance, all 27 profiles, titles, portraits and external links. Mobile grids, accessible link names and image dimensions/loading are improved.
- Essays retains all 17 articles and URLs. Search remains functional, a category filter and accessible result count are added, metadata presentation is corrected and reading metadata contrast is improved.
- Hope Is the Enemy retains all 19 chapters, order, content, formatting and controls. The existing book introduction is now displayed verbatim; author/subtitle remain. Mobile chapter navigation and final contact destination are corrected.
- Shared navigation gains current-page semantics, keyboard handling, reliable skip links and closed-menu focus behavior. Footer details and contact links remain. Structured organization contact information is synchronized to the public footer.
- Lint tooling is installed/configured. TypeScript errors can no longer be ignored by production builds. No new runtime dependency was introduced.

## Protected content

Git comparison against the baseline confirms no changes to any file in `content/` or `public/`. Profile data arrays are byte-for-byte identical. No public route was deleted or renamed. Existing `/about`, `/writing` and `/writing/[slug]` redirects remain, as do legal routes, robots and sitemap behavior.

## Validation

| Check | Result |
| --- | --- |
| `npm run lint` | Pass |
| `node node_modules/typescript/bin/tsc --noEmit` | Pass |
| `npm run build` | Pass; 50 generated pages |
| Rendered-route audit | 48 routes, no issues |
| Editorial routes | All 19 chapters and 17 essays return successfully |
| Book adjacency | Previous/next destinations checked for every chapter |
| Images | 52 rendered image assets respond successfully |
| Internal links/anchors/canonicals | Pass |
| Protected source content/assets | Unchanged |
| Responsive browser checks | 390, 768, 1024 and 1280 CSS-pixel widths; no overflow in inspected pages |
| Interactions | Header menu, Escape/focus return, skip link, partner disclosure, candidate FAQ, essay search/filter/reset, reading links, chapter menu/shortcuts |
| Final browser application errors | None; local analytics-unavailable log only |

The build reports an existing stale `baseline-browser-mapping` dataset warning; this does not fail compilation. Local dependency installation skipped the optional sharp build script; the site retains its existing unoptimized-image configuration and the production build passes.

## Business decisions

The owner confirmed retaining the current commercial offer: 10% of fixed annual CTC, Net 30 payment terms and a 90-day replacement guarantee, subject to each agreement. No delayed-invoicing commitment was added.

The owner confirmed AI for screening and humans for assessment. The stage presents this accurately without elevating AI above human judgment.

No unresolved business decision blocks review. Specific salary bands and service turnaround guarantees should only be restored if separately verified.

## Review evidence and remaining limits

- [Desktop service process](review/service-process-desktop.jpg)
- [Reference comparison](review/reference-comparison.jpg)
- [Design QA](../design-qa.md)
- Local preview: `http://localhost:4173/`

The delivery folder contains additional desktop, tablet and mobile captures and the full JSON route audit. A hosted Vercel preview must use the existing Git integration and its access rules; no environment variables, domains, production settings or access protections were changed. This branch is for review only and must not be merged without explicit approval.
