import type { Metadata } from "next"
import Link from "next/link"
import { formatWritingDate, getAllWriting } from "@/lib/writing"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

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
              <p className="text-sm text-white/50">
                {formatWritingDate(featuredPiece.date)} · {featuredPiece.category} · {featuredPiece.readingTime}
              </p>
            </Link>
          </section>
        ) : null}

        <section className="mx-auto mt-24 max-w-[760px] border-t border-white/10 md:mt-32">
          <div className="divide-y divide-white/10">
            {remainingPieces.map((piece) => (
              <Link 
                key={piece.slug} 
                href={`/writing/${piece.slug}`} 
                className="group flex flex-col justify-between gap-6 py-12 transition-colors md:flex-row md:items-center"
              >
                <div className="max-w-2xl">
                  <h2 className="mb-4 font-serif text-xl text-white transition-colors group-hover:text-primary">
                    {piece.title}
                  </h2>
                  <p className="mb-6 leading-8 text-white/70">
                    {piece.description}
                  </p>
                  <p className="text-sm text-white/50">
                    {formatWritingDate(piece.date)} · {piece.readingTime} · by {piece.author}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-primary transition group-hover:translate-x-1">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-[760px] border-t border-white/10 pt-24 pb-12 md:mt-16 md:pt-32">
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
