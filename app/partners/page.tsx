"use client"

import { useEffect, useState } from "react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const sectionNav = [
  { id: "growth-needs-people", label: "Growth needs people" },
  { id: "how-we-help", label: "How we help" },
  { id: "who-we-work-with", label: "Who we work with" },
  { id: "how-hiring-works", label: "How hiring works" },
  { id: "what-partners-can-expect", label: "What partners can expect" },
  { id: "commercial-terms", label: "Commercial terms" },
  { id: "next-steps", label: "Next steps" },
] as const

export default function PartnersPage() {
  const [activeSection, setActiveSection] = useState("")
  const [headerOffset, setHeaderOffset] = useState(96)

  const scrollToSection = (section: string) => {
    const element = document.querySelector(`[data-section="${section}"]`) as HTMLElement | null
    if (!element) return

    const top = element.getBoundingClientRect().top + window.scrollY - headerOffset - 16
    window.scrollTo({ top, behavior: "smooth" })
  }

  useEffect(() => {
    const header = document.querySelector("header")

    const updateOffset = () => {
      const height = header?.getBoundingClientRect().height
      setHeaderOffset(height ? Math.round(height) : 96)
    }

    updateOffset()
    window.addEventListener("resize", updateOffset)

    return () => window.removeEventListener("resize", updateOffset)
  }, [])

  useEffect(() => {
    const sectionElements = Array.from(document.querySelectorAll("[data-section]")) as HTMLElement[]
    if (!sectionElements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (!visibleEntries.length) return

        const nextActive = visibleEntries[0].target.getAttribute("data-section") ?? ""
        setActiveSection(nextActive)
      },
      {
        rootMargin: `-${headerOffset + 20}px 0px -45% 0px`,
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [headerOffset])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_0%,rgba(219,231,243,0.12),transparent_30%),linear-gradient(180deg,#050608_0%,#0b0f14_54%,#050608_100%)]" />

      <SiteHeader />

      <main className="mx-auto w-full max-w-[1200px] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[760px]">
          <section className="mb-24">
            <h1 className="mb-4 font-semibold">
              Hire customer-facing talent through an active scout network.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              VerveSchool extends your hiring team through an active scout network built for speed and long-term fit.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="rounded-full border border-border px-4 py-2">Reduced sourcing burden</span>
              <span className="rounded-full border border-border px-4 py-2">
                Faster access to role-aligned candidates
              </span>
              <span className="rounded-full border border-border px-4 py-2">60-day replacement coverage</span>
            </div>
          </section>

          <div className="mb-14 rounded-md border border-border bg-card/70 p-4 md:hidden">
            <details>
              <summary className="cursor-pointer list-none text-base font-medium text-foreground [&::-webkit-details-marker]:hidden">
                Page sections
              </summary>
              <ul className="mt-4 space-y-2">
                {sectionNav.map((section) => (
                  <li key={`mobile-${section.id}`}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full rounded-sm px-2 py-2 text-left text-sm transition-colors ${
                        activeSection === section.id
                          ? "font-semibold text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </details>
          </div>

          <section
            data-section="growth-needs-people"
            className="yc-section"
            style={{ scrollMarginTop: `${headerOffset + 20}px` }}
          >
            <h2>Growth needs people</h2>
            <div className="yc-text-block mb-8">
              <p>
                As hiring demand increases, internal teams often struggle to keep up with sourcing and screening requirements.
              </p>
              <p className="mb-6">
                Open roles stay open longer. Hiring teams spend more time searching for candidates. Hiring momentum becomes harder to maintain.
              </p>
              <p>
                VerveSchool helps companies maintain a consistent flow of role-aligned candidates by acting as an extension of their hiring function.
              </p>
            </div>
          </section>

          <section
            data-section="how-we-help"
            className="yc-section"
            style={{ scrollMarginTop: `${headerOffset + 20}px` }}
          >
            <h2>How VerveSchool helps</h2>
            <div className="yc-text-block mb-8">
              <p className="mb-6">
                Our scout network actively identifies, engages, and qualifies candidates before they enter your hiring process.
              </p>
              <p className="mb-6">
                Instead of spending internal bandwidth sourcing large volumes of candidates, your team receives role-aligned profiles that are ready for evaluation.
              </p>
              <p>You spend less time searching, more time hiring.</p>
            </div>
          </section>

          <section
            data-section="who-we-work-with"
            className="yc-section"
            style={{ scrollMarginTop: `${headerOffset + 20}px` }}
          >
            <h2>Who we work with</h2>
            <div className="yc-text-block mb-8">
              <ul className="space-y-3">
                <li>Growth-stage companies building frontline teams</li>
                <li>Talent acquisition teams managing hiring targets</li>
                <li>High-volume hiring teams scaling operations</li>
                <li>Founders building customer-facing functions</li>
                <li>Business leaders scaling revenue teams</li>
              </ul>
            </div>
          </section>

          <section
            data-section="how-hiring-works"
            className="yc-section"
            style={{ scrollMarginTop: `${headerOffset + 20}px` }}
          >
            <h2>How hiring works</h2>
            <div className="yc-text-block mb-8">
              <h3>1. Share role details</h3>
              <p>Share role details, compensation, location, hiring targets, and expectations.</p>

              <h3>2. Identify candidates</h3>
              <p>Relevant candidates are identified and engaged across the market.</p>

              <h3>3. Evaluate candidates</h3>
              <p>Candidates are screened for communication, coachability, and role fit.</p>

              <h3>4. Interview shortlisted candidates</h3>
              <p>Interview shortlisted candidates and assess fit for the role.</p>

              <h3>5. Make the hiring decision</h3>
              <p>Make hiring decisions and continue building your team.</p>
            </div>
          </section>

          <section
            data-section="what-partners-can-expect"
            className="yc-section"
            style={{ scrollMarginTop: `${headerOffset + 20}px` }}
          >
            <h2>What partners can expect</h2>
            <div className="yc-text-block mb-8">
              <ul className="space-y-3">
                <li>Faster hiring cycles</li>
                <li>Role-aligned candidates</li>
                <li>Reduced sourcing burden</li>
                <li>Support for high-volume hiring</li>
                <li>Replacement coverage included</li>
              </ul>
            </div>
          </section>

          <section
            data-section="commercial-terms"
            className="yc-section"
            style={{ scrollMarginTop: `${headerOffset + 20}px` }}
          >
            <h2>Commercial terms</h2>
            <div className="yc-text-block mb-8">
              <ul className="space-y-3">
                <li>10% fee on fixed annual CTC</li>
                <li>₹0 upfront hiring fees</li>
                <li>Net 30 + 7 payment terms</li>
                <li>60-day replacement coverage</li>
              </ul>
            </div>
          </section>

          <section
            data-section="next-steps"
            className="yc-section"
            style={{ scrollMarginTop: `${headerOffset + 20}px` }}
          >
            <h2>The world moves for those who do.</h2>

            <div className="yc-text-block mb-6">
              <p className="mb-10">
                If you are hiring for sales, business development, counselling, customer success, or support roles, share your hiring requirements with us.
              </p>

              <a
                href="https://wa.me/917042873035"
                className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold tracking-normal text-black transition hover:opacity-90"
              >
                Talk to us
              </a>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
