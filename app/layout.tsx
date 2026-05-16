import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
export const metadata: Metadata = {
  title: "VerveSchool",
  description: "VerveSchool filters, tests, and backs early-career sales talent for hiring partners who need sharper signal, faster shortlists, and replacement-backed confidence.",
  icons: {
    icon: [
      { url: "/verveschool-logo.svg", type: "image/svg+xml" },
      { url: "/verveschool-logo.png", media: "(prefers-color-scheme: light)", type: "image/png", sizes: "32x32" },
      { url: "/verveschool-logo.png", media: "(prefers-color-scheme: dark)", type: "image/png", sizes: "32x32" },
    ],
    apple: "/verveschool-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
