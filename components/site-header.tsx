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
          <Link href="/" className="inline-flex items-center transition-premium hover:opacity-75" aria-label="verveschool home">
            <img src="/logo.png" alt="VerveSchool logo" className="h-8 w-auto md:h-10" />
          </Link>

          <div className="hidden items-center gap-8 text-sm text-foreground/65 md:flex md:text-base">
            {navLinks.map((link) => {
              const active = isActivePath(pathname, link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-premium hover:text-foreground relative ${active ? "text-foreground" : "text-foreground/65"} after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-purple-accent after:transition-premium hover:after:w-full`}
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-white/20 bg-background/85 text-foreground transition-premium hover:bg-white/12 hover:border-white/40 hover:shadow-[0_0_12px_rgba(167,139,250,0.15)] active:scale-[0.97] active:bg-white/20"
            >
              <span className="sr-only">Open menu</span>
              <div className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-5 bg-current transition-transform duration-200 ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`h-0.5 w-5 bg-current transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`h-0.5 w-5 bg-current transition-transform duration-200 ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>

          <div
            id="mobile-nav-menu"
            className={`absolute right-0 top-full mt-3 w-60 border border-white/15 bg-background/90 p-3 shadow-2xl backdrop-blur-2xl transition-all duration-200 ease-out md:hidden ${
              mobileMenuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0"
            }`}
            aria-hidden={!mobileMenuOpen}
          >
            <div className="flex flex-col gap-1.5 border-l border-white/10 pl-2 text-sm">
              {navLinks.map((link) => {
                const active = isActivePath(pathname, link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex min-h-11 items-center px-3 text-foreground transition-all duration-150 hover:bg-white/12 active:scale-[0.99] active:bg-white/20 ${
                      active ? "border-l border-white/35 bg-white/12 text-foreground" : "text-foreground/75"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
