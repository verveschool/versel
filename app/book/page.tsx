import type { Metadata } from "next"
import Link from "next/link"
import { getAllBookChapters, getBookLanding } from "@/lib/book"
import { SiteHeader } from "@/components/site-header"
import { MarkdownRenderer } from "@/lib/markdown"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Hope Is the Enemy by A. Duggal",
  description: "Learn how to move people from no to yes without performing like a desperate salesperson.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
  title: "Hope Is the Enemy by A. Duggal",
  description: "Learn how to move people from no to yes without performing like a desperate salesperson.",
    url: "/book",
    images: [
      {
        url: "/social.png",
        width: 1200,
        height: 600,
        alt: "Verveschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Hope Is the Enemy by A. Duggal",
  description: "Learn how to move people from no to yes without performing like a desperate salesperson.",
    images: ["/social.png"],
  },
}

export default function BookPage() {
  const book = getBookLanding()
  const chapters = getAllBookChapters() || []

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="yc-container py-24 md:py-32">
        <section className="mx-auto max-w-[760px]">
          <h1 className="mb-6 font-serif text-[clamp(1.76rem,1.35rem+1.49vw,2.48rem)] text-white">
            {book?.title || "Book"}
          </h1>
          <p className="mb-4 text-sm text-muted-foreground">by {book.author}</p>
          <p className="mb-8 text-lg leading-8 text-primary">{book?.subtitle}</p>
          <p className="text-lg leading-8 text-white/70">{book?.description}</p>
          {chapters[0] && (
            <Link href={`/book/${chapters[0].slug}`} className="verve-primary upgrade-button mt-6">Start reading</Link>
          )}
          <div className="mt-10 border-t border-white/10 pt-8"><MarkdownRenderer content={book.introduction} /></div>
        </section>

        <section className="mx-auto mt-16 max-w-[760px] md:mt-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-serif text-2xl text-white">Chapters</h2>
          </div>

          <div className="grid gap-4 border-t border-primary/25">
            {chapters.map((chapter) => (
              <Link 
                key={chapter.slug} 
                href={`/book/${chapter.slug}`} 
                className="editorial-link group px-6 py-8"
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
