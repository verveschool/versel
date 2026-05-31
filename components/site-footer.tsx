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

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(219,231,243,0.16)] bg-background">
      <div className="yc-container py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 text-sm leading-relaxed text-foreground/70 md:grid-cols-3">
          <section className="space-y-3">
            <div className="space-y-2">
              <p className="text-base font-medium text-foreground">VerveSchool</p>
              <p>Building high-trust connections between candidates, partners, and people.</p>
            </div>
          </section>

          <section className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {quickLinks.map((group) => (
                <div key={group.heading} className="space-y-2">
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
                WhatsApp: +91 70653 14693
              </a>
            </div>
          </section>
        </div>

        <div className="mt-8 border-t border-[rgba(219,231,243,0.16)] pt-5 md:mt-10 md:pt-6">
          <div className="grid grid-cols-1 gap-4 text-[13px] text-foreground/65 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="space-y-2">
              <p>Stay close to new essays, cohorts, and opportunities.</p>
            </div>
            <a
              href="mailto:talent@verveschool.com?subject=Join%20the%20newsletter"
              className="inline-flex w-fit items-center justify-center rounded-sm border border-[rgba(219,231,243,0.16)] px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
            >
              Join via Email
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-[rgba(219,231,243,0.16)] pt-4">
          <div className="flex flex-col gap-3 text-[12px] text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 VerveSchool</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
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
