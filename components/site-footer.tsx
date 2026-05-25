import Link from "next/link"

const quickLinks = [
  {
    heading: "Explore",
    links: [
      { href: "/about", label: "Candidates" },
      { href: "/partners", label: "Partners" },
      { href: "/people", label: "People" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/writing", label: "Essays" },
      { href: "/book", label: "Book" },
    ],
  },
]

const socialLinks = [
  {
    href: "https://wa.me/917065314693",
    label: "WhatsApp",
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(219,231,243,0.16)] bg-background">
      <div className="yc-container py-8 md:py-10">
        <div className="grid grid-cols-1 gap-8 text-[13px] text-foreground/65 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <section className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-foreground/45">Branding</p>
            <div className="space-y-2">
              <p className="text-base font-medium text-foreground">VerveSchool</p>
              <p>Building high-trust connections between candidates, partners, and people.</p>
            </div>
          </section>

          <section className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-foreground/45">Quick Links</p>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {quickLinks.map((group) => (
                <div key={group.heading} className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-foreground/45">{group.heading}</p>
                  <ul className="space-y-2">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="transition-colors hover:text-foreground">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-foreground/45">Contact</p>
            <div className="space-y-2">
              <a href="mailto:talent@verveschool.com" className="block transition-colors hover:text-foreground">
                talent@verveschool.com
              </a>
              <a
                href="https://wa.me/917065314693"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-foreground"
              >
                +91 70653 14693
              </a>
            </div>
          </section>

          <section className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-foreground/45">Social</p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-8 border-t border-[rgba(219,231,243,0.16)] pt-5 md:mt-10 md:pt-6">
          <div className="grid grid-cols-1 gap-4 text-[13px] text-foreground/65 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.14em] text-foreground/45">Newsletter</p>
              <p>Stay close to new essays, cohorts, and opportunities.</p>
            </div>
            <a
              href="mailto:talent@verveschool.com?subject=Join%20the%20newsletter"
              className="inline-flex w-fit items-center justify-center rounded-sm border border-[rgba(219,231,243,0.16)] px-4 py-2 text-[12px] uppercase tracking-[0.1em] text-foreground transition-colors hover:bg-white/5"
            >
              Join via Email
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-[rgba(219,231,243,0.16)] pt-4">
          <div className="flex flex-col gap-3 text-[12px] text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 VerveSchool</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <p className="text-foreground/50">All rights reserved.</p>
              <div className="h-3 w-px bg-[rgba(219,231,243,0.16)]" aria-hidden="true" />
              <Link href="/about" className="transition-colors hover:text-foreground">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
