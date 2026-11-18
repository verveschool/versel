import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hiring Partners",
  description:
    "See how Verveschool supports hiring partners with workforce planning, talent sourcing, candidate assessment, hiring coordination and continuing employee support.",
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Hiring Partners | Verveschool",
    description:
      "See how Verveschool supports hiring partners with workforce planning, talent sourcing, candidate assessment, hiring coordination and continuing employee support.",
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
    title: "Hiring Partners | Verveschool",
    description:
      "See how Verveschool supports hiring partners with workforce planning, talent sourcing, candidate assessment, hiring coordination and continuing employee support.",
    images: ["/social.png"],
  },
}

export default function PartnersLayout({ children }: { children: ReactNode }) {
  return children
}
