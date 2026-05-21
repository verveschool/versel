"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/people", label: "People" },
  { href: "/writing", label: "Essays" },
  { href: "/book", label: "Book" },
]

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-xl">
      <div className="yc-container py-4 md:py-5">
        <nav className="flex items-center justify-between gap-10" aria-label="Primary navigation">
          
          <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-75" aria-label="verveschool home">
            <img src="/logo.png" alt="VerveSchool logo" className="h-8 w-auto md:h-10" />
          </Link>

          {/* Navigation links */}
          <div className="hidden items-center gap-8 text-sm md:text-base text-foreground/65 md:flex">
            {navLinks.map((link) => {
              const active = isActivePath(pathname, link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-foreground ${active ? "text-foreground" : "text-foreground/65"}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile navigation */}
          <div className="flex items-center gap-4 text-xs md:hidden">
            {navLinks.slice(0, 3).map((link) => {
              const active = isActivePath(pathname, link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-foreground ${active ? "text-foreground" : "text-foreground/65"}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
