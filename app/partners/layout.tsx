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
    title: "Partners",
    description:
      "See how VerveSchool supports hiring partners with mandate-led scouting, structured candidate filtering, and 60-day replacement coverage.",
    url: "/partners",
  },
  twitter: {
    title: "Partners",
    description:
      "See how VerveSchool supports hiring partners with mandate-led scouting, structured candidate filtering, and 60-day replacement coverage.",
  },
}

export default function PartnersLayout({ children }: { children: ReactNode }) {
  return children
}
