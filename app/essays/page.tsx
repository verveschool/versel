import type { Metadata } from "next"
import { getAllWriting } from "@/lib/writing"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WritingFilter } from "@/components/writing-filter"

export const metadata: Metadata = {
  title: "Essays",
  description:
    "Read Verveschool essays on sales hiring, early-career talent development, and practical operating notes for growth teams.",
  alternates: {
    canonical: "/essays",
  },
  openGraph: {
    title: "Essays",
    description:
      "Read Verveschool essays on sales hiring, early-career talent development, and practical operating notes for growth teams.",
    url: "/essays",
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
    title: "Essays",
    description:
      "Read Verveschool essays on sales hiring, early-career talent development, and practical operating notes for growth teams.",
    images: ["/social.png"],
  },
}
export default function EssaysPage() {
  const pieces = getAllWriting()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="standard-main">
        <div className="w-full">
          <section className="mb-16">
            <h1 className="mb-8 font-serif text-[clamp(1.76rem,1.35rem+1.49vw,2.48rem)] text-white">
              Essays
            </h1>
            <p className="text-lg leading-8 text-white/70">
              Operating notes for founders, sales leaders, and anyone who wants to think more deeply about hiring, sales, and the work behind them.
            </p>
          </section>

          <WritingFilter essays={pieces} />
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
