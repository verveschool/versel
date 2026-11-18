import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.verveschool.com"),
  title: {
    default: "Verveschool",
    template: "%s | Verveschool",
  },
  description: "Verveschool partners with companies and educational institutions on workforce planning, talent identification, candidate assessment, hiring coordination and employee support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Verveschool",
    description:
      "Verveschool partners with companies and educational institutions on workforce planning, talent identification, candidate assessment, hiring coordination and employee support.",
    type: "website",
    url: "/",
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
    title: "Verveschool",
    description:
      "Verveschool partners with companies and educational institutions on workforce planning, talent identification, candidate assessment, hiring coordination and employee support.",
    images: ["/social.png"],
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
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Verveschool",
  url: "https://www.verveschool.com",
  logo: "https://www.verveschool.com/logo.png",
  email: "talent@verveschool.com",
  telephone: "+91 70428 73035",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 H 1A, Sector 63",
    addressLocality: "Noida",
    postalCode: "201301",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/verveschool",
    "https://wa.me/917042873035",
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Verveschool",
  url: "https://www.verveschool.com",
  publisher: {
    "@type": "Organization",
    name: organizationJsonLd.name,
    url: organizationJsonLd.url,
  },
  hasPart: [
    {
      "@type": "SiteNavigationElement",
      name: "Candidates",
      url: "https://www.verveschool.com/candidates",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Hiring partners",
      url: "https://www.verveschool.com/partners",
    },
    {
      "@type": "SiteNavigationElement",
      name: "People",
      url: "https://www.verveschool.com/people",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Essays",
      url: "https://www.verveschool.com/essays",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Book",
      url: "https://www.verveschool.com/book",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
