import Link from "next/link"

const companyLinks = [
  { href: "/about", label: "Candidates" },
  { href: "/partners", label: "Partners" },
  { href: "/people", label: "People" },
]

const resourceLinks = [
  { href: "/essays", label: "Essays" },
  { href: "/book", label: "Hope Is the Enemy" },
]

const contactLinks = [
  { href: "mailto:talent@verveschool.com", label: "talent@verveschool.com" },
  { href: "https://wa.me/917042873035", label: "+91 70653 14693", external: true },
]

const legalLinks = [
  { href: "/terms", label: "Terms of Use" },
  { href: "/privacy", label: "Privacy Policy" },
]

const footerAddress = "20, H-1/A, Sec 63, Noida 201301"

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(219,231,243,0.16)] bg-background">
      <div className="yc-container py-10 md:py-12">
        <div className="grid grid-cols-1 gap-10 text-[13px] leading-6 text-foreground/62 md:grid-cols-2 lg:grid-cols-4">
          <section className="space-y-3">
            <p className="text-base font-medium leading-6 text-foreground">VerveSchool</p>
            <p className="text-sm leading-6 text-foreground/60">
              The world moves for those who do.
            </p>
          </section>

          <nav aria-label="Company links" className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60">
              Company
            </p>
            <div className="flex flex-col items-start gap-2.5">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Resource links" className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60">
              Resources
            </p>
            <div className="flex flex-col items-start gap-2.5">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <section className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60">
              Contact
            </p>
            <div className="flex flex-col items-start gap-2.5">
              {contactLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <address className="not-italic text-foreground/58">
                {footerAddress}
              </address>
            </div>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[rgba(219,231,243,0.16)] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-foreground/50">
            © 2026 JIRAIYA EDUCATION LLP
          </p>

          <div className="flex items-center gap-4 text-xs leading-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/50 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
