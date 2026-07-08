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
]

const legalLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy Policy" },
]

const contactOptions = [
  {
    href: "mailto:talent@verveschool.com",
    label: "Email",
    value: "talent@verveschool.com",
  },
  {
    href: "https://wa.me/917042873035",
    label: "WhatsApp",
    value: "+91 70653 14693",
    external: true,
  },
]

const footerAddress = "20, H-1/A, Sector 63, Noida, UP 201301"

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
                    <Link key={link.href} href={link.href} className="transition-premium hover:text-foreground hover:text-purple-accent relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-purple-accent after:transition-premium hover:after:w-full">
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
                  className="group transition-premium hover:text-purple-accent"
                >
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/35 transition-premium group-hover:text-purple-accent">
                    {option.label}
                  </span>
                  <span className="block transition-premium group-hover:text-purple-accent">{option.value}</span>
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
          <div className="flex flex-col gap-4 text-xs leading-5 text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 JIRAIYA EDUCATION LLP</p>
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-premium hover:text-purple-accent relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-purple-accent after:transition-premium hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
