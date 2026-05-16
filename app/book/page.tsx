import type { Metadata } from "next"
import Link from "next/link"
import { getAllEssays } from "@/lib/essays"

export const metadata: Metadata = {
  title: "Book | verveschool",
  description: "A structured long-form reading path from verveschool on sales talent, hiring filters, and ramp systems.",
  alternates: {
    canonical: "/book",
  },
}

const chapters = [
  "the talent market before the resume",
  "signals that survive pressure",
  "simulations, scorecards, and partner-specific filters",
  "the ninety-day ramp as a feedback system",
]

export default function BookPage() {
  const essays = getAllEssays()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(215,178,103,0.16),_transparent_30%),linear-gradient(180deg,_#070707_0%,_#0d0b08_52%,_#050505_100%)]" />

      <nav className="border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="yc-container py-5">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="text-[15px] font-semibold tracking-[0.22em] text-white uppercase">
              verveschool
            </Link>
            <div className="flex items-center gap-6 text-[13px] text-white/70">
              <Link href="/about" className="transition-colors hover:text-white">
                about
              </Link>
              <Link href="/partners" className="transition-colors hover:text-white">
                partners
              </Link>
              <Link href="/essays" className="transition-colors hover:text-white">
                essays
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="yc-container py-20">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="section-kicker mb-6">book</p>
            <h1 className="mb-8 max-w-3xl font-serif text-5xl leading-[1.04] tracking-[-0.045em] text-white md:text-7xl">
              a working outline for the verveschool talent canon.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/70">
              This page collects the long-form themes that will become a more durable guide to early-career sales talent: how to find it, test it, train it, and keep learning from it.
            </p>
          </div>
          <div className="border border-primary/30 bg-primary/10 p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-primary">current status</p>
            <p className="text-2xl font-serif text-white">open notes, published as essays first.</p>
          </div>
        </section>

        <section className="my-20 grid gap-4 md:grid-cols-2">
          {chapters.map((chapter, index) => (
            <div key={chapter} className="border border-white/10 bg-white/[0.03] p-8">
              <p className="mb-5 text-sm text-primary">chapter {String(index + 1).padStart(2, "0")}</p>
              <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-white">{chapter}</h2>
            </div>
          ))}
        </section>

        <section className="border-t border-white/10 pt-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="section-kicker mb-4">source material</p>
              <h2 className="font-serif text-4xl tracking-[-0.03em] text-white">latest essays</h2>
            </div>
            <Link href="/essays" className="hidden text-sm uppercase tracking-[0.22em] text-primary transition-colors hover:text-white md:block">
              all essays →
            </Link>
          </div>
          <div className="grid gap-4">
            {essays.map((essay) => (
              <Link key={essay.slug} href={`/essays/${essay.slug}`} className="group flex flex-col justify-between gap-3 border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-primary/60 md:flex-row md:items-center">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/45">{essay.category}</p>
                  <h3 className="font-serif text-2xl tracking-[-0.02em] text-white transition-colors group-hover:text-primary">{essay.title}</h3>
                </div>
                <span className="text-sm text-primary">read →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
