"use client"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { useState, useEffect } from "react"

export default function PartnersPage() {
  const [activeSection, setActiveSection] = useState("")
  const [headerOffset, setHeaderOffset] = useState(96)

  const sections = [
    "hiring-risk",
    "bad-hires",
    "signal-filtering",
    "selection-pressure",
    "replacement-guarantee",
    "partner-fit",
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
        <main className="yc-container flex-1 py-14 md:py-20">
          <div className="mb-16 max-w-3xl">
            <h1 className="mb-4 font-semibold">
              A Filtered Sales-Talent Pipeline With a Replacement Guarantee
            </h1>
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

          {/* Hiring Risk */}
          <section data-section="hiring-risk" className="yc-section" style={{ scrollMarginTop: `${headerOffset + 20}px` }}>
            <h2>Sales hiring is risk transfer</h2>
            <div className="yc-text-block mb-8">
              <p>Every sales hire looks cheaper before they miss target.</p>
              <p className="mb-6">
                the real cost is not salary. it is lost pipeline, manager attention, damaged follow up, and the months
                you spend discovering what interviews alone could not show.
              </p>
              <p>
                verveschool exists to absorb that uncertainty before a candidate reaches your floor. we filter for
                sales signal first, then stay accountable after joining.
              </p>
            </div>
          </section>

          {/* Bad Hires */}
          <section data-section="bad-hires" className="yc-section" style={{ scrollMarginTop: `${headerOffset + 20}px` }}>
            <h2>Bad sales hires hide in plain sight</h2>
            <div className="yc-text-block mb-8">
              <p className="mb-6">They interview well. They sound confident. They understand the role on paper.</p>
              <p className="mb-6">
                then rejection compounds. discipline drops. notes get thin. follow ups slip. the manager becomes the
                safety net for work the hire should own.
              </p>
              <p className="mb-6">
                most hiring processes overvalue presentation and undervalue repetition, coachability, recovery speed,
                and willingness to do unglamorous selling work every day.
              </p>
              <p>that is the gap we are built to close.</p>
            </div>
          </section>

          {/* Signal Filtering */}
          <section data-section="signal-filtering" className="yc-section" style={{ scrollMarginTop: `${headerOffset + 20}px` }}>
            <h2>We filter for signal before polish</h2>
            <div className="yc-text-block mb-8">
              <p className="mb-6">We source English-fluent Gen Z sales talent for specific partner mandates.</p>
              <p className="mb-6">
                Resumes are not the product. Filtered signal is. We screen for hunger, focus, listening quality,
                feedback absorption, recovery after rejection, and the ability to stay precise under pressure.
              </p>
              <p className="mb-6">
                candidates who only perform confidence do not make it through. candidates who improve quickly, ask
                sharper questions, and keep standards under stress move forward.
              </p>
              <p>you see a smaller pool because the weak signal has already been removed.</p>
            </div>
          </section>

          {/* Selection Pressure */}
          <section data-section="selection-pressure" className="yc-section" style={{ scrollMarginTop: `${headerOffset + 20}px` }}>
            <h2>Selection pressure creates the shortlist</h2>
            <div className="yc-text-block mb-8">
              <h3>1. Mandate-led scouting</h3>
              <p>
                We do not hand you a generic bench. We hunt against your role, city, compensation, language needs, and
                sales motion.
              </p>

              <h3>2. Founder screen</h3>
              <p>
                Faraz Arif (co-founder, 9+ years exp) personally screens every candidate for traits that deserve deeper validation: persistence, clarity, humility, and recovery.
              </p>

              <h3>3. Pressure tasks</h3>
              <p>
                candidates are tested through realistic sales situations: objection handling, follow up discipline,
                call thinking, and response to direct feedback.
              </p>

              <h3>4. Partner calibration</h3>
              <p>
                We map the final shortlist to your product, buyer, targets, and floor reality so you are choosing from
                candidates who fit the actual job, not a generic sales profile.
              </p>

              <h3>5. Post-joining support</h3>
              <p>
                Training and coaching are operational support for the guarantee. Once a hire starts, we review calls,
                tighten talk tracks, and identify replacement risk early.
              </p>
            </div>
          </section>

          {/* Replacement Guarantee */}
          <section data-section="replacement-guarantee" className="yc-section" style={{ scrollMarginTop: `${headerOffset + 20}px` }}>
            <h2>The replacement guarantee changes the incentive</h2>
            <div className="yc-text-block mb-8">
              <h3>90-day replacement guarantee</h3>
              <p className="mt-4 mb-8">
                If the hire does not perform, we replace them. The pipeline is accountable after the offer letter, not
                just before it.
              </p>

              <h3>Aligned payment terms</h3>
              <p className="mt-4">Net 30 terms keep incentives tied to real partner outcomes, not resume delivery.</p>
            </div>
            <div className="yc-text-block mb-8">
              <h3>Risk monitoring</h3>
              <p className="mt-4 mb-8">
                We look for early warning signs in activity, call quality, follow-up habits, and feedback response.
              </p>

              <h3>Targeted coaching</h3>
              <p className="mt-4">
                Coaching exists to protect the guarantee: sharper scripts, better questions, cleaner pacing, and faster
                correction when performance drifts.
              </p>
            </div>
          </section>

          {/* Partner Fit */}
          <section data-section="partner-fit" className="yc-section" style={{ scrollMarginTop: `${headerOffset + 20}px` }}>
            <h2>Built for partners who cannot afford mis-hires</h2>
            <div className="yc-text-block mb-8">
              <p className="mb-6">We work best where one wrong sales hire has a visible cost.</p>
              <p className="mb-6">
                if your team needs dependable frontline salespeople in tier 1 cities, and you want interviews supported by
                stronger signal, we can build the pipeline around your hiring bar.
              </p>
              <p>
                You bring the mandate. We bring filtered candidates, selection pressure, post-joining support, and a
                replacement guarantee.
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <section data-section="next-steps" className="yc-section" style={{ scrollMarginTop: `${headerOffset + 20}px` }}>
            <h2>Partner with Verveschool</h2>
            <div className="yc-text-block mb-12">
              <p className="mb-6">
                If you want a tighter sales hiring funnel with accountability after joining, send us the role and the
                target profile. We will tell you if we can build the pipeline.
              </p>
              <ul className="space-y-4">
                <li className="font-medium">phone: +91 81304 30683</li>
                <li className="font-medium">email: ayush@verveschool.com</li>
                <li className="font-medium">address: 20 h 1a, sector 63, noida 201301</li>
              </ul>
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
