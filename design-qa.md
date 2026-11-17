# Website design and interaction QA

Source visual truth: the approved Hiring Partners architecture artwork, recovered from the existing local design project (`verveschool_service_architecture 17.18.25.png`, 4800 × 4800).

Implementation: production build of this branch at `http://localhost:4173/partners`.

## Comparison evidence

- Full composition: [reference and implementation together](docs/review/reference-comparison.jpg).
- Focused five-stage review: the delivery's `process-comparison.jpg` compares the source's process crop with the rendered process at the same 1184-pixel content width.
- Final desktop capture: [service architecture](docs/review/service-process-desktop.jpg).
- Delivery also contains full desktop, 768-pixel tablet and 390-pixel mobile captures, plus Home, Candidates, People, Essays and Book evidence.

Source artwork is a square communication graphic, not a browser frame. It was normalized to the web content width for comparison; the browser's header, anchor navigation and preserved supporting sections are intentional additions. The source crop is approximately 529 pixels high at 1184 pixels wide; the compact web process is approximately 430 pixels high. No unequal-density pixel comparison was used to claim a literal screenshot clone.

Browser viewports: 1280 × 900, 1024 × 900, 768 × 1024 and 390 × 844 CSS pixels. Saved browser captures are 1 image pixel per CSS pixel. Full-page desktop is 1280 × 2885, tablet 768 × 4407, mobile 390 × 5417. State: default black theme, all stages visible, additional partner logos collapsed unless testing the disclosure.

## Fidelity surfaces

- **Typography:** existing Inter/system sans-serif stack retained. White headings, muted descriptions, purple stage numerals. Desktop stage headings align; descriptions start together and activity dividers share a baseline. Body text is 16 pixels on the main desktop and mobile process. Small-desktop adaptation uses 15-pixel descriptions. No truncation.
- **Spacing and layout:** five equal desktop tracks, purple top rules, thin vertical separators, descriptions, horizontal dividers and three activities each. Stacked stages at 768 pixels and below. The web version reduces the source graphic's long column tails. Commercial terms remain a restrained three-column definition list on desktop and stack on phones.
- **Colors:** existing #050608 background, #ffffff foreground, #a8aaa7 secondary text and #8b6dff primary retained. New primary buttons use dark text for contrast. Reading metadata contrast improved. Focus outlines are visible.
- **Assets:** original approved logo files reused. The reference's eight logos appear first in the same order. Sixteen additional approved references remain accessible in the disclosure; all 24 appear on Home. Existing portraits, brand assets and editorial assets are unchanged.
- **Copy:** all five stage names, descriptions and 15 activities match the brief. AI screening followed by human assessment was confirmed by the owner. Commercial wording intentionally retains 10% of fixed annual CTC, Net 30 and 90-day replacement coverage, as confirmed by the owner, rather than the artwork's ambiguous invoice wording.

## Findings and corrections

1. [P2, resolved] A global mobile `.grid` override forced every grid to one column. Removed the override and verified intentional grids, including two-column People profiles and partner logos, at phone width.
2. [P2, resolved] Closed mobile navigation and chapter-sidebar links could remain keyboard-accessible. Closed header links now leave the tab order; the closed chapter sidebar is invisible. Escape closes each menu and returns focus to its trigger. Skip links focus each page's main element.
3. [P1, resolved] Expanded essay search initially assumed tags were arrays. Existing frontmatter includes text tag fields. Removed the unsafe assumption, preserved the existing search fields and retested matching, category combinations, no results and reset.
4. [P2, resolved] Stale 60-day employer wording in metadata and conflated candidate replacement language conflicted with the current offer. Metadata is current; candidate support and employer coverage are distinct. Unverified fixed compensation and turnaround promises are omitted.

Post-fix evidence: final browser session passed search (`hiring`: 5 of 17), Hiring category (5), empty result (0), reset (17); final console had no application errors. The local Vercel Analytics script is unavailable outside Vercel, producing an expected analytics log. Chapter menu/Escape, ArrowRight from Preface to chapter 02 and Home back to contents passed. All chapter previous/next links were also checked through rendered HTML.

No actionable P0/P1/P2 fidelity or interaction findings remain in the inspected states.

## Verification boundaries

Manual browser and route checks are not a formal WCAG certification or Lighthouse performance audit. Application and WhatsApp destinations were inspected without sending an application or message. External profile URLs were preserved; their third-party account states were not independently audited. Hosting preview access depends on the existing Vercel team's permissions.

final result: passed
