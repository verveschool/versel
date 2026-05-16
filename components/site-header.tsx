"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/partners", label: "Partners" },
  { href: "/people", label: "People" },
  { href: "/writing", label: "Writing" },
  { href: "/book", label: "Book" },
  { href: "/about", label: "About" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-40">
      <div className="yc-container py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="text-[15px] font-medium hover:text-primary transition-colors">
            verveschool
          </Link>

          <div className="flex flex-wrap items-center justify-end gap-4 text-[13px] font-medium md:gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    isActive ? "text-primary" : "text-foreground hover:text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
