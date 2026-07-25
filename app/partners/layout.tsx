import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Partners",
  description:
    "See how VerveSchool supports hiring partners with mandate-led scouting, structured candidate filtering, and 60-day replacement coverage.",
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Partners | VerveSchool",
    description:
      "See how VerveSchool supports hiring partners with mandate-led scouting, structured candidate filtering, and 60-day replacement coverage.",
    url: "/partners",
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
    title: "Partners | VerveSchool",
    description:
      "See how VerveSchool supports hiring partners with mandate-led scouting, structured candidate filtering, and 60-day replacement coverage.",
    images: ["/social.png"],
  },
}

export default function PartnersLayout({ children }: { children: ReactNode }) {
  return children
}
