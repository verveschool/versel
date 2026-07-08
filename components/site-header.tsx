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
    <header className="sticky top-0 z-50 border-b border-primary/15 bg-background/85 shadow-[0_1px_24px_rgba(124,92,255,0.08)] backdrop-blur-xl">
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
                  className={`relative transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-primary after:shadow-[0_0_14px_rgba(139,109,255,0.65)] after:transition-all after:duration-200 after:ease-out hover:text-primary hover:after:w-full ${active ? "text-primary after:w-full" : "text-foreground/65 after:w-0"}`}
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-white/20 bg-background/85 text-foreground transition-all duration-200 hover:bg-white/12 active:scale-[0.97] active:bg-white/20"
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
                      active ? "border-l border-primary/70 bg-primary/10 text-primary shadow-[inset_10px_0_24px_rgba(124,92,255,0.08)]" : "text-foreground/75"
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
