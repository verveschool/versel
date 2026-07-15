import type { Metadata } from "next"
import { getAllWriting } from "@/lib/writing"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WritingFilter } from "@/components/writing-filter"

export const metadata: Metadata = {
  title: "Essays",
  description:
    "Read VerveSchool essays on sales hiring, early-career talent development, and practical operating notes for growth teams.",
  alternates: {
    canonical: "/essays",
  },
  openGraph: {
    title: "Essays",
    description:
      "Read VerveSchool essays on sales hiring, early-career talent development, and practical operating notes for growth teams.",
    url: "/essays",
  },
  twitter: {
    title: "Essays",
    description:
      "Read VerveSchool essays on sales hiring, early-career talent development, and practical operating notes for growth teams.",
  },
}

export default function EssaysPage() {
  const pieces = getAllWriting()

  const tagsSet = new Set<string>()
  pieces.forEach((piece) => {
    if (piece.tags && Array.isArray(piece.tags)) {
      piece.tags.forEach((tag) => tagsSet.add(tag))
    }
  })
  const allTags = Array.from(tagsSet).sort()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(127,139,153,0.18),_transparent_32%),linear-gradient(180deg,_#050608_0%,_#0b0f14_52%,_#050608_100%)]" />
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1200px] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[760px]">
          <section className="mb-16">
            <h1 className="mb-8 font-serif text-[clamp(1.76rem,1.35rem+1.49vw,2.48rem)] text-white">
              Essays
            </h1>
            <p className="text-lg leading-8 text-white/70">
              Operating notes for founders, sales leaders, and anyone who wants to think more deeply about hiring, sales, and the work behind them.
            </p>
          </section>

          <WritingFilter essays={pieces} allTags={allTags} />
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
