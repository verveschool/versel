import { SiteHeader } from "@/components/site-header"
import type { Metadata } from "next"
import Link from "next/link"
import { formatWritingDate, getAllWriting } from "@/lib/writing"

export const metadata: Metadata = {
  title: "Writing | verveschool",
  description: "Long-form notes from verveschool on sales hiring, early-career talent, ramp, and partner operating systems.",
  alternates: {
    canonical: "/writing",
  },
}

export default function WritingPage() {
  const pieces = getAllWriting()
  const featuredPiece = pieces[0]
  const remainingPieces = pieces.slice(1)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(215,178,103,0.18),_transparent_32%),linear-gradient(180deg,_#070707_0%,_#0d0b08_52%,_#050505_100%)]" />

      <SiteHeader />

      <main className="yc-container py-20">
        <section className="max-w-4xl">
          <p className="section-kicker mb-6">writing</p>
          <h1 className="mb-8 max-w-3xl font-serif text-5xl leading-[1.05] tracking-[-0.04em] text-white md:text-7xl">
            long-form writing on talent, sales, and the work behind better hiring.
          </h1>
          <p className="yc-text-block text-lg leading-8 text-white/70">
            Operating notes for founders, sales leaders, and ambitious early-career candidates. Start with the latest piece or browse the full archive below.
          </p>
        </section>

        {featuredPiece ? (
          <section className="my-20 border-y border-white/10 py-12">
            <Link href={`/writing/${featuredPiece.slug}`} className="group grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="section-kicker mb-4">latest</p>
                <p className="text-sm text-white/50">
                  {formatWritingDate(featuredPiece.date)} · {featuredPiece.category} · {featuredPiece.readingTime}
                </p>
              </div>
              <div>
                <h2 className="mb-5 font-serif text-4xl leading-tight tracking-[-0.03em] text-white transition-colors group-hover:text-primary md:text-5xl">
                  {featuredPiece.title}
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-white/70">{featuredPiece.description}</p>
              </div>
            </Link>
          </section>
        ) : null}

        <section className="grid gap-6 md:grid-cols-2">
          {remainingPieces.map((piece) => (
            <Link key={piece.slug} href={`/writing/${piece.slug}`} className="group border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-primary/60">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">{piece.category}</p>
              <h2 className="mb-4 font-serif text-3xl leading-tight tracking-[-0.02em] text-white transition-colors group-hover:text-primary">
                {piece.title}
              </h2>
              <p className="mb-8 text-white/65">{piece.description}</p>
              <p className="text-sm text-white/45">
                {formatWritingDate(piece.date)} · {piece.readingTime} · by {piece.author}
              </p>
            </Link>
          ))}
        </section>

        <section className="mt-20 border border-primary/30 bg-primary/10 p-8">
          <p className="section-kicker mb-4">next</p>
          <h2 className="mb-4 font-serif text-3xl tracking-[-0.02em] text-white">building a longer canon</h2>
          <p className="mb-6 max-w-2xl text-white/70">
            The writing archive is the home for tactical notes. For a more structured reading path, visit the book page.
          </p>
          <Link href="/book" className="text-sm font-semibold uppercase tracking-[0.24em] text-primary transition-colors hover:text-white">
            view the book outline →
          </Link>
        </section>
      </main>
    </div>
  )
}
