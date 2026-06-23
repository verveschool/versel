"use client"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { useState, useEffect } from "react"

export default function PartnersPage() {
  const [activeSection, setActiveSection] = useState("")
  const [headerOffset, setHeaderOffset] = useState(96)

  const sections = [
    "growth-needs-people",
    "how-we-help",
    "who-we-work-with",
    "how-hiring-works",
    "what-partners-can-expect",
    "commercial-terms",
    "next-steps",
  ]

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

    return () => {
      window.removeEventListener("resize", updateOffset)
    }
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
      },
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [headerOffset])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <SiteHeader />

      <div className="flex flex-col md:flex-row">
        <main className="yc-container flex-1 py-16 md:py-24">
          <div className="mb-24">
            <h1 className="mb-4 font-semibold">
              Hire customer-facing talent fast with replacement coverage.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Helping growing companies hire sales, business development, counselling, and support talent through a
              sourcing model designed for speed and consistency.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="rounded-full border border-border px-4 py-2">
                Reduced sourcing burden
              </span>
              <span className="rounded-full border border-border px-4 py-2">
                Faster access to role-aligned candidates
              </span>
              <span className="rounded-full border border-border px-4 py-2">
                60-day replacement coverage
              </span>
            </div>
          </div>

          <div className="mb-10 rounded-md border border-border bg-card/70 p-4 md:hidden">
            <details>
              <summary className="cursor-pointer list-none text-base font-medium text-foreground [&::-webkit-details-marker]:hidden">
                Page sections
              </summary>
              <ul className="mt-4 space-y-2">
                {sections.map((section) => (
                  <li key={`mobile-${section}`}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`w-full rounded-sm px-2 py-2 text-left text-sm transition-colors ${
                        activeSection === section
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {section.replace(/-/g, " ")}
                    </button>
                  </li>
                ))}
              </ul>
            </details>
          </div>

          {/* Growth Needs People */}
          <section
            data-section="growth-needs-people"
            className="yc-section"
            style={{ scrollMarginTop: `${headerOffset + 20}px` }}
          >
            <h2>Growth needs people</h2>
            <div className="yc-text-block mb-8">
              <p>
                As hiring demand increases, internal teams often struggle to keep up with sourcing and screening
                requirements.
              </p>
              <p className="mb-6">
                Open roles stay open longer. Hiring teams spend more time searching for candidates. Hiring momentum
                becomes harder to maintain.
              </p>
              <p>
                VerveSchool helps companies maintain a consistent flow of role-aligned candidates by acting as an
                extension of their hiring function.
              </p>
            </div>
          </section>

          {/* How We Help */}
          <section
            data-section="how-we-help"
            className="yc-section"
            style={{ scrollMarginTop: `${headerOffset + 20}px` }}
          >
            <h2>How VerveSchool helps</h2>
            <div className="yc-text-block mb-8">
              <p className="mb-6">
                Our scout network actively identifies, engages, and qualifies candidates before they enter your hiring
                process.
              </p>
              <p className="mb-6">
                Instead of spending internal bandwidth sourcing large volumes of candidates, your team receives
                role-aligned profiles that are ready for evaluation.
              </p>
              <p>You spend less time searching, more time hiring.</p>
            </div>
          </section>

          {/* Who We Work With */}
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

          {/* How Hiring Works */}
          <section
            data-section="how-hiring-works"
            className="yc-section"
            style={{ scrollMarginTop: `${headerOffset + 20}px` }}
          >
            <h2>How hiring works</h2>
            <div className="yc-text-block mb-8">
              <h2>1. Share role details</h2>
              <p>
                Share role details, compensation, location, hiring targets, and expectations.
              </p>

              <h2>2. Candidate identification</h2>
              <p>
                Relevant candidates are identified and engaged across the market.
              </p>

              <h2>3. Screening</h2>
              <p>
                Candidates are screened for communication, coachability, and role fit.
              </p>

              <h2>4. Interview shortlist</h2>
              <p>
                Interview shortlisted candidates and assess fit for the role.
              </p>

              <h2>5. Hiring decision</h2>
              <p>
                Make hiring decisions and continue building your team.
              </p>
            </div>
          </section>

          {/* What Partners Can Expect */}
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

          {/* Commercial Terms */}
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

          {/* Next Steps */}
          <section
            data-section="next-steps"
            className="yc-section"
            style={{ scrollMarginTop: `${headerOffset + 20}px` }}
          >
            <h2>The world moves for those who do.</h2>
            <div className="yc-text-block mb-12">
              <p className="mb-6">
                If you are hiring for sales, business development, counselling, customer success, or support roles,
                share your hiring requirements with us.
              </p>
              <a
                href="https://wa.me/917042873035"
                className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:opacity-90"
              >
                Talk to us
              </a>
            </div>
          </section>
        </main>

        {/* Table of Contents */}
        <aside className="hidden md:block sticky top-20 pt-20 pb-20 px-8 h-screen overflow-y-auto flex-shrink-0 border-l border-border">
          <ul className="space-y-1.5">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`w-full rounded-sm px-2 py-1.5 text-left text-[13px] capitalize transition-colors ${
                    activeSection === section
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {section.replace(/-/g, " ")}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <SiteFooter />
    </div>
  )
}
