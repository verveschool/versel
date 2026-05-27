import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import "./globals.css"
export const metadata: Metadata = {
  metadataBase: new URL("https://www.verveschool.com"),
  title: {
    default: "VerveSchool",
    template: "%s | VerveSchool",
  },
  description: "VerveSchool filters, tests, and backs early-career sales talent for hiring partners who need sharper signal, faster shortlists, and replacement-backed confidence.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VerveSchool",
    description:
      "VerveSchool filters, tests, and backs early-career sales talent for hiring partners who need sharper signal, faster shortlists, and replacement-backed confidence.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "VerveSchool logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VerveSchool",
    description:
      "VerveSchool filters, tests, and backs early-career sales talent for hiring partners who need sharper signal, faster shortlists, and replacement-backed confidence.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/verveschool-logo.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
}



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VerveSchool",
  url: "https://www.verveschool.com",
  logo: "https://www.verveschool.com/verveschool-logo.svg",
  email: "talent@verveschool.com",
  telephone: "+91 81304 30683",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 H 1A, Sector 63",
    addressLocality: "Noida",
    postalCode: "201301",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/verveschool",
    "https://wa.me/917065314693",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
