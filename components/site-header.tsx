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
      <div className="yc-container py-4">
        <nav className="flex items-center justify-between gap-6" aria-label="Primary navigation">
          <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-75" aria-label="verveschool home">
            <img src="/verveschool-logo.svg" alt="verveschool" className="h-8 w-auto" />
          </Link>

          <div className="hidden items-center gap-6 text-[13px] text-foreground/62 md:flex">
            {navLinks.map((link) => {
              const active = isActivePath(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-foreground ${active ? "text-foreground" : "text-foreground/62"}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-4 text-[12px] text-foreground/68 md:hidden">
            {navLinks.slice(0, 4).map((link) => {
              const active = isActivePath(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-foreground ${active ? "text-foreground" : "text-foreground/68"}`}
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
