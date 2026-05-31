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
      <div className="yc-container py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 text-sm leading-relaxed text-foreground/70 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <section className="space-y-3">
                        <div className="space-y-2">
              <p className="text-base font-medium text-foreground">VerveSchool</p>
              <p>The world moves for those who do.</p>
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
                +91 70653 14693
              </a>
            </div>
          </section>

          <section className="space-y-4">
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
