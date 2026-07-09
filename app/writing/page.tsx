import type { Metadata } from "next"
import Link from "next/link"
import { formatWritingDate, getAllWriting } from "@/lib/writing"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WritingFilter } from "@/components/writing-filter"

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Read VerveSchool essays on sales hiring, early-career talent development, and practical operating notes for growth teams.",
  alternates: {
    canonical: "/writing",
  },
  openGraph: {
    title: "Writing",
    description:
      "Read VerveSchool essays on sales hiring, early-career talent development, and practical operating notes for growth teams.",
    url: "/writing",
  },
  twitter: {
    title: "Writing",
    description:
      "Read VerveSchool essays on sales hiring, early-career talent development, and practical operating notes for growth teams.",
  },
}

export default function WritingPage() {
  const pieces = getAllWriting()
  const featuredPiece = pieces[0]
  const remainingPieces = pieces.slice(1)
  
  // Extract unique tags from all essays
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

      <main className="yc-container py-24 md:py-32">
        <section className="mx-auto max-w-[760px]">
          <h1 className="mb-8 font-serif text-[clamp(1.76rem,1.35rem+1.49vw,2.48rem)] text-white">
            Long-form writing on talent, sales, and the work behind better hiring
          </h1>
          <p className="yc-text-block text-lg leading-8 text-white/70">
            Operating notes for founders, sales leaders, and ambitious early-career candidates. Start with the latest piece or browse the full archive below.
          </p>
        </section>

        {featuredPiece ? (
          <section className="mx-auto mt-24 max-w-[760px] md:mt-32">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Latest Essay
            </p>
            <Link href={`/writing/${featuredPiece.slug}`} className="group block">
              <h2 className="mb-5 font-serif text-2xl md:text-3xl text-white transition-colors group-hover:text-primary">
                {featuredPiece.title}
              </h2>
              <p className="mb-6 text-lg leading-8 text-white/70">
                {featuredPiece.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {(Array.isArray(featuredPiece.tags) ? featuredPiece.tags : [])?.map((tag) => (
                  <span key={tag} className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/25">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/50">
                {featuredPiece.category} · {featuredPiece.readingTime}
              </p>
            </Link>
          </section>
        ) : null}

        <WritingFilter essays={remainingPieces} allTags={allTags} />

        <section className="mx-auto mt-12 max-w-[760px] border-t border-primary/20 pt-24 pb-12 md:mt-16 md:pt-32">
          <h2 className="mb-6 font-serif text-2xl text-white">
            Building a longer canon
          </h2>
          <p className="mb-8 text-lg leading-8 text-white/70">
            The writing archive is the home for tactical notes. For a more structured reading path, visit the book page.
          </p>
          <Link href="/book" className="text-sm font-semibold uppercase tracking-[0.24em] text-primary transition-colors hover:text-white">
            view the book outline →
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
