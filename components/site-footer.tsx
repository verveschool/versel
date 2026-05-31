import Link from "next/link"

const sitemapGroups = [
  {
    heading: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "Candidates" },
      { href: "/partners", label: "Hiring partners" },
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
  {
    heading: "Legal",
    links: [
      { href: "/terms", label: "Terms" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
]

const contactOptions = [
  {
    href: "mailto:talent@verveschool.com",
    label: "Email",
    value: "talent@verveschool.com",
  },
  {
    href: "https://wa.me/917065314693",
    label: "WhatsApp",
    value: "+91 70653 14693",
    external: true,
  },
]

const footerAddress = "1st Floor, H-20, Sector 63, Noida, UP 201301"

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(219,231,243,0.16)] bg-background">
      <div className="yc-container py-10 md:py-12">
        <div className="grid grid-cols-1 gap-10 text-[13px] leading-6 text-foreground/62 md:grid-cols-[1.1fr_1.8fr] lg:grid-cols-[1.05fr_2fr_1fr]">
          <section className="max-w-xs space-y-3">
            <p className="text-base font-medium leading-6 text-foreground">VerveSchool</p>
            <p className="text-sm leading-6 text-foreground/60">The world moves for those who do.</p>
          </section>

          <nav aria-label="Footer sitemap" className="grid gap-8 sm:grid-cols-3">
            {sitemapGroups.map((group) => (
              <div key={group.heading} className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/40">
                  {group.heading}
                </p>
                <div className="flex flex-col items-start gap-2.5">
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <section className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/40">Contact</p>
            <div className="flex flex-col items-start gap-3 text-xs leading-5 text-foreground/58">
              {contactOptions.map((option) => (
                <a
                  key={option.href}
                  href={option.href}
                  target={option.external ? "_blank" : undefined}
                  rel={option.external ? "noopener noreferrer" : undefined}
                  className="group transition-colors hover:text-foreground"
                >
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/35 group-hover:text-foreground/55">
                    {option.label}
                  </span>
                  <span className="block">{option.value}</span>
                </a>
              ))}
              <address className="not-italic">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/35">
                  Address
                </span>
                <span className="block">{footerAddress}</span>
              </address>
            </div>
          </section>
        </div>

        <div className="mt-8 border-t border-[rgba(219,231,243,0.16)] pt-4">
          <div className="flex flex-col gap-3 text-xs leading-5 text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 VerveSchool</p>
            <p>Built for sharper hiring signal.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
