import type { Metadata } from "next"
import Link from "next/link"
import { getAllBookChapters, getBookLanding } from "@/lib/book"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Book",
  description: "Read Hope Is the Enemy, A. Duggal’s VerveSchool field guide on closing with certainty, integrity, and operator-level execution.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book",
    description: "Read Hope Is the Enemy, A. Duggal’s VerveSchool field guide on closing with certainty, integrity, and operator-level execution.",
    url: "/book",
  },
  twitter: {
    title: "Book",
    description: "Read Hope Is the Enemy, A. Duggal’s VerveSchool field guide on closing with certainty, integrity, and operator-level execution.",
  },
}

export default function BookPage() {
  const book = getBookLanding()
  const chapters = getAllBookChapters() || []

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(127,139,153,0.16),_transparent_30%),linear-gradient(180deg,_#050608_0%,_#0b0f14_52%,_#050608_100%)]" />
      <SiteHeader />

      <main className="yc-container py-24 md:py-32">
        <section className="mx-auto max-w-[760px]">
          <h1 className="mb-6 font-serif text-[clamp(1.76rem,1.35rem+1.49vw,2.48rem)] text-white">
            {book?.title || "Book"}
          </h1>
          <p className="mb-8 text-lg leading-8 text-primary">{book?.subtitle}</p>
          <p className="text-lg leading-8 text-white/70">{book?.description}</p>
        </section>

        <section className="mx-auto mt-16 max-w-[760px] md:mt-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-serif text-2xl text-white">Start the book.</h2>
            {chapters.length > 0 && chapters[0]?.slug && (
              <Link href={`/book/${chapters[0].slug}`} className="hidden text-sm uppercase tracking-[0.22em] text-primary transition-colors hover:text-white md:block">
                begin reading {"->"}
              </Link>
            )}
          </div>

          <div className="grid gap-4 border-t border-primary/25">
            {chapters.map((chapter) => (
              <Link 
                key={chapter.slug} 
                href={`/book/${chapter.slug}`} 
                className="group rounded-lg border border-primary/25 bg-primary/[0.05] px-6 py-8 shadow-[0_2px_8px_rgba(139,109,255,0.06)] transition-all hover:border-primary/50 hover:bg-primary/[0.1] hover:shadow-[0_8px_24px_rgba(139,109,255,0.12)]"
              >
                <p className="mb-3 text-sm font-semibold text-primary">Chapter {chapter.chapterNumber}</p>
                <h3 className="mb-4 font-serif text-2xl text-white transition-colors group-hover:text-primary">
                  {chapter.title}
                </h3>
                <p className="mb-6 text-lg leading-8 text-white/70">
                  {chapter.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">{chapter.readingTime}</span>
                  <span className="text-primary transition group-hover:translate-x-1">
                    Read {"->"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}
