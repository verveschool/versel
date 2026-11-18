"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRef, useState } from "react"

const navLinks = [
  { href: "/candidates", label: "Candidates" },
  { href: "/partners", label: "Hiring Partners" },
  { href: "/people", label: "People" },
  { href: "/essays", label: "Essays" },
  { href: "/book", label: "Book" },
]

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  return (
    <header onKeyDown={(event) => { if (event.key === "Escape" && mobileMenuOpen) { setMobileMenuOpen(false); menuButton.current?.focus() } }} className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="yc-container py-4 md:py-5">
        <nav className="relative flex items-center justify-between gap-10" aria-label="Primary navigation">
          <Link href="/" className="inline-flex min-h-11 min-w-11 items-center justify-center transition-opacity hover:opacity-75" aria-label="Verveschool home">
            <img src="/logo.png" alt="Verveschool logo" className="h-8 w-auto md:h-10" />
          </Link>

          <div className="hidden items-center gap-8 text-sm text-foreground/65 md:flex md:text-base">
            {navLinks.map((link) => {
              const active = isActivePath(pathname, link.href)
              return (
                <Link
                  key={link.href}
                  aria-current={active ? "page" : undefined}
                  href={link.href}
                  className={`relative inline-flex min-h-11 items-center transition-colors after:absolute after:bottom-1 after:left-0 after:h-px after:bg-primary hover:text-primary hover:after:w-full ${active ? "text-primary after:w-full" : "text-foreground/65 after:w-0"}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="md:hidden">
            <button
              ref={menuButton}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-input bg-card text-foreground hover:bg-accent"
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
            className={`absolute right-0 top-full mt-3 w-60 rounded-xl border border-border bg-popover p-3 shadow-[var(--verve-overlay-shadow)] transition duration-150 ease-out md:hidden ${
              mobileMenuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "invisible pointer-events-none -translate-y-1 opacity-0"
            }`}
            aria-hidden={!mobileMenuOpen}
          >
            <div className="flex flex-col gap-1.5 border-l border-white/10 pl-2 text-sm">
              {navLinks.map((link) => {
                const active = isActivePath(pathname, link.href)
                return (
                  <Link
                    key={link.href}
                    aria-current={active ? "page" : undefined}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex min-h-11 items-center px-3 text-foreground transition-all duration-150 hover:bg-white/12 active:scale-[0.99] active:bg-white/20 ${
                      active ? "border-l border-primary bg-accent text-primary" : "text-foreground/75"
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
