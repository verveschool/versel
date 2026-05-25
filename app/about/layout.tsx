import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how VerveSchool evaluates early-career candidates, where we focus, and the principles behind our performance-first hiring model.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About",
    description:
      "Learn how VerveSchool evaluates early-career candidates, where we focus, and the principles behind our performance-first hiring model.",
    url: "/about",
  },
  twitter: {
    title: "About",
    description:
      "Learn how VerveSchool evaluates early-career candidates, where we focus, and the principles behind our performance-first hiring model.",
  },
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
