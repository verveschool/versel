import type { Metadata } from "next"
import { getAllWriting } from "@/lib/writing"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WritingFilter } from "@/components/writing-filter"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"

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
    images: [
      {
        url: "/social.png",
        width: 1200,
        height: 600,
        alt: "VerveSchool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Essays",
    description:
      "Read VerveSchool essays on sales hiring, early-career talent development, and practical operating notes for growth teams.",
    images: ["/social.png"],
  },
}
export default function EssaysPage() {
  const pieces = getAllWriting()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BreadcrumbJsonLd
        id="essays-breadcrumb-json-ld"
        items={[
          { name: "Home", url: "https://www.verveschool.com/" },
          { name: "Essays", url: "https://www.verveschool.com/essays" },
        ]}
      />
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

          <WritingFilter essays={pieces} />
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
