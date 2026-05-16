import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
export const metadata: Metadata = {
  title: "Sales Talent Filter | verveschool",
  description: "Verveschool filters, tests, and backs early-career sales talent for hiring partners who need sharper signal, faster shortlists, and replacement-backed confidence.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)", type: "image/png", sizes: "32x32" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
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
