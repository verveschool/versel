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
            <h1 className="mb-4 font-semibold">Hiring Partners</h1>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              VerveSchool helps companies hire for sales, business development, counselling, customer success, support, and other customer-facing roles. We extend your hiring team by sourcing, screening, and presenting role-aligned candidates, so your team spends less time searching and more time hiring.
            </p>
          </section>

          <div className="mb-14 rounded-lg border border-primary/25 bg-primary/[0.05] p-4 shadow-[0_2px_8px_rgba(139,109,255,0.06)] md:hidden">
            <details>
              <summary className="cursor-pointer list-none text-base font-medium text-foreground [&::-webkit-details-marker]:hidden flex items-center justify-between">
                <span>Page sections</span>
                <svg className="h-5 w-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <ul className="mt-4 space-y-2 border-t border-primary/15 pt-4">
                {sectionNav.map((section) => (
                  <li key={`mobile-${section.id}`}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        activeSection === section.id
                          ? "font-semibold bg-primary/15 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
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
              
              <h3>2. Receive shortlisted candidates</h3>
              <p>Receive role aligned candidates sourced and screened for the role.</p>

              <h3>3. Interview shortlisted candidates</h3>
              <p>Interview shortlisted candidates and assess their fit for the role.</p>

              <h3>4. Make the hiring decision</h3>
              <p>Select the candidate who best fits your team.</p>

              <h3>5. Onboard your new hire</h3>
              <p>Complete onboarding and welcome your new team member.</p>
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
                <li>Replacement guarantee</li>
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
                <li>No upfront hiring fee</li>
                <li>10% on fixed annual CTC</li>
                <li>Net 30 payment terms</li>
                <li>90-day replacement guarantee</li>
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
                className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-[13px] font-semibold tracking-normal text-primary-foreground shadow-[0_12px_34px_rgba(139,109,255,0.22)] transition hover:shadow-[0_16px_48px_rgba(139,109,255,0.34)] hover:brightness-110"
              >
                Chat with Duggal
              </a>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
