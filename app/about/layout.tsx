import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Candidates",
  description:
    "Apply for customer-facing roles with companies that value communication, ownership, and long-term growth.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Candidates | VerveSchool",
    description:
      "Apply for customer-facing roles with companies that value communication, ownership, and long-term growth.",
    url: "/about",
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
    title: "Candidates | VerveSchool",
    description:
      "Apply for customer-facing roles with companies that value communication, ownership, and long-term growth.",
    images: ["/social.png"],
  },
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
