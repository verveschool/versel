"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
  { href: "/about", label: "Candidates" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-xl">
      <div className="yc-container py-4 md:py-5">
        <nav className="relative flex items-center justify-between gap-10" aria-label="Primary navigation">
          <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-75" aria-label="verveschool home">
            <img src="/logo.png" alt="VerveSchool logo" className="h-8 w-auto md:h-10" />
          </Link>

          <div className="hidden items-center gap-8 text-sm text-foreground/65 md:flex md:text-base">
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

          <div className="md:hidden">
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-background/80 text-foreground transition-colors hover:bg-white/10"
            >
              <span className="sr-only">Open menu</span>
              <div className="flex flex-col gap-1.5">
                <span className={`h-0.5 w-5 bg-current transition-transform ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 w-5 bg-current transition-opacity ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`h-0.5 w-5 bg-current transition-transform ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>

          {mobileMenuOpen && (
            <div
              id="mobile-nav-menu"
              className="absolute right-0 top-full mt-3 w-56 rounded-xl border border-white/10 bg-background/95 p-3 shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-1 text-sm">
                {navLinks.map((link) => {
                  const active = isActivePath(pathname, link.href)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`rounded-md px-3 py-2 transition-colors hover:bg-white/10 hover:text-foreground ${
                        active ? "bg-white/10 text-foreground" : "text-foreground/75"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
