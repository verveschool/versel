import type { Metadata } from "next"
import Link from "next/link"
import { getAllBookChapters, getBookLanding } from "@/lib/book"
import { MarkdownContent } from "@/lib/markdown"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
export const metadata: Metadata = {
  title: "Book",
  description:
    "Read the VerveSchool field guide on selling better, published as a chapter-by-chapter web experience for founders and revenue teams.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book",
    description:
      "Read the VerveSchool field guide on selling better, published as a chapter-by-chapter web experience for founders and revenue teams.",
    url: "/book",
  },
  twitter: {
    title: "Book",
    description:
      "Read the VerveSchool field guide on selling better, published as a chapter-by-chapter web experience for founders and revenue teams.",
  },
}

export default function BookPage() {
  const book = getBookLanding()
  const chapters = getAllBookChapters()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(127,139,153,0.16),_transparent_30%),linear-gradient(180deg,_#050608_0%,_#0b0f14_52%,_#050608_100%)]" />
      <SiteHeader />

      <main className="yc-container py-20">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="section-kicker mb-6">serialized book</p>
            <h1 className="mb-6 max-w-4xl font-serif text-white">
              {book.title}
            </h1>
            <p className="mb-8 max-w-2xl text-2xl font-serif leading-9 text-primary">{book.subtitle}</p>
            <p className="max-w-2xl text-lg leading-8 text-white/70">{book.description}</p>
          </div>
          <div className="border border-primary/30 bg-primary/10 p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-primary">web edition</p>
            <p className="text-2xl font-serif text-white">80 pages translated into a chapter-by-chapter reading path.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-primary/20 pt-6 text-sm text-white/65">
              <span>{chapters.length} chapters</span>
              <span>by {book.author}</span>
            </div>
          </div>
        </section>

        <section className="my-20 grid gap-12 border-y border-white/10 py-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker mb-4">introduction</p>
            <h2 className="font-serif text-white">Read as a field guide, not a stack of posts.</h2>
          </div>
          <MarkdownContent content={book.introduction} className="book-prose" />
        </section>

        <section>
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="section-kicker mb-4">chapters</p>
              <h2 className="font-serif text-white">Start the serial.</h2>
            </div>
            {chapters[0] ? (
              <Link href={`/book/${chapters[0].slug}`} className="hidden text-sm uppercase tracking-[0.22em] text-primary transition-colors hover:text-white md:block">
                begin reading →
              </Link>
            ) : null}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {chapters.map((chapter) => (
              <Link key={chapter.slug} href={`/book/${chapter.slug}`} className="group border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-primary/60">
                <div className="mb-8 flex items-center justify-between gap-4 text-sm text-white/45">
                  <span className="text-primary">chapter {chapter.chapterNumber}</span>
                  <span>{chapter.readingTime}</span>
                </div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/45">{chapter.part}</p>
                <h3 className="mb-5 font-serif text-white transition-colors group-hover:text-primary">
                  {chapter.title}
                </h3>
                <p className="mb-8 text-white/65">{chapter.description}</p>
                <span className="text-sm text-primary">read chapter →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20 border border-primary/30 bg-primary/10 p-8">
          <p className="section-kicker mb-4">for teams</p>
          <h2 className="mb-4 font-serif text-white">Turn the reading into a better sales conversation.</h2>
          <p className="mb-6 max-w-2xl text-white/70">
            If the book maps to a problem inside your revenue team, use the partner page to start a more specific conversation about selling better.
          </p>
          <Link href="/partners" className="text-sm font-semibold uppercase tracking-[0.24em] text-primary transition-colors hover:text-white">
            start a sales conversation →
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
