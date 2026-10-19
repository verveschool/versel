import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Partners",
  description:
    "See how Verveschool supports hiring partners with mandate-led scouting, structured candidate filtering, and 60-day replacement coverage.",
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Partners | Verveschool",
    description:
      "See how Verveschool supports hiring partners with mandate-led scouting, structured candidate filtering, and 60-day replacement coverage.",
    url: "/partners",
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
    title: "Partners | Verveschool",
    description:
      "See how Verveschool supports hiring partners with mandate-led scouting, structured candidate filtering, and 60-day replacement coverage.",
    images: ["/social.png"],
  },
}

export default function PartnersLayout({ children }: { children: ReactNode }) {
  return children
}
