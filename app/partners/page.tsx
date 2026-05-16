"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

type PartnerVisualVariant = "risk" | "signal" | "filter" | "process" | "guarantee" | "focus"

const visualDetails: Record<PartnerVisualVariant, { eyebrow: string; title: string; metric: string }> = {
  risk: { eyebrow: "Risk Map", title: "Missed Target Compounds", metric: "90d" },
  signal: { eyebrow: "Signal Gap", title: "Confidence Is Not Conversion", metric: "4x" },
  filter: { eyebrow: "Candidate Filter", title: "Signal Before Polish", metric: "1:8" },
  process: { eyebrow: "Selection Pressure", title: "Tasks Reveal Floor Readiness", metric: "5" },
  guarantee: { eyebrow: "Aligned Incentive", title: "Replacement Risk Monitored", metric: "net 30" },
  focus: { eyebrow: "Partner Fit", title: "Fewer Interviews, More Signal", metric: "tier 1" },
}

function PartnerVisual({ variant }: { variant: PartnerVisualVariant }) {
  const detail = visualDetails[variant]

  return (
    <div
      aria-label={`${detail.eyebrow}: ${detail.title}`}
      role="img"
      className="relative mb-8 h-[400px] w-full overflow-hidden border border-border bg-card"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(255,59,31,0.38),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(255,176,0,0.28),transparent_24%),linear-gradient(135deg,rgba(255,122,24,0.18),transparent_45%),#080808]" />
      <div className="absolute inset-x-8 top-8 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/60">
        <span>{detail.eyebrow}</span>
        <span>{detail.metric}</span>
      </div>
      <div className="absolute inset-x-8 bottom-8 z-10 max-w-[520px]">
        <div className="mb-5 h-px w-24 bg-primary" />
        <p className="text-[clamp(1.8rem,4vw,4.4rem)] font-extrabold leading-[0.9] tracking-[-0.06em] text-foreground">
          {detail.title}
        </p>
      </div>
      <div className="absolute left-[10%] top-[34%] h-36 w-20 rounded-t-full border border-foreground/15 bg-background/70 shadow-[0_0_80px_rgba(255,59,31,0.22)]" />
      <div className="absolute left-[26%] top-[42%] h-44 w-24 rounded-t-full border border-foreground/10 bg-background/45" />
      <div className="absolute right-[10%] top-[30%] h-52 w-28 rounded-t-full border border-primary/30 bg-primary/15 shadow-[0_0_110px_rgba(255,122,24,0.32)]" />
      <div className="absolute inset-y-0 right-1/3 w-px bg-foreground/10" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-foreground/10" />
      <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
    </div>
  )
}

export default function PartnersPage() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]")
      let current = ""
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionName = section.getAttribute("data-section")
        if (rect.top < 200 && sectionName) {
          current = sectionName
        }
      })
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sections = [
    "hiring-risk",
    "bad-hires",
    "signal-filtering",
    "selection-pressure",
    "replacement-guarantee",
    "partner-fit",
    "next-steps",
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-40">
        <div className="yc-container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-[15px] font-medium">
              verveschool
            </Link>
            <Link href="/partners" className="text-[13px] font-medium md:hidden">
              Partners
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row">
        {/* Main content */}
        <main className="yc-container py-20 flex-1 md:py-20 md:pt-20 pt-8">
          {/* Header */}
          <div className="mb-24">
            <h1 className="mb-4">A Filtered Sales-Talent Pipeline with a Replacement Guarantee</h1>
            <p className="text-[14px]">verveschool.com/partners</p>
          </div>

          {/* Hiring Risk */}
          <section data-section="hiring-risk" className="yc-section">
            <h2>Sales Hiring Is Risk Transfer</h2>
            <div className="grid grid-cols-2 gap-16 mb-12">
              <div className="yc-text-block">
                <p className="mb-6">every sales hire looks cheaper before they miss target.</p>
                <p className="mb-6">
                  the real cost is not salary. it is lost pipeline, manager attention, damaged follow up, and the months
                  you spend discovering what the interview could not show.
                </p>
                <p>
                  verveschool exists to absorb that uncertainty before a candidate reaches your floor. we filter for
                  sales signal first, then stay accountable after joining.
                </p>
              </div>
              <PartnerVisual variant="risk" />
            </div>
          </section>

          {/* Bad Hires */}
          <section data-section="bad-hires" className="yc-section">
            <h2>Bad Sales Hires Hide in Plain Sight</h2>
            <div className="yc-text-block mb-12">
              <p className="mb-6">they interview well. they sound confident. they understand the role on paper.</p>
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
            <PartnerVisual variant="signal" />
          </section>

          {/* Signal Filtering */}
          <section data-section="signal-filtering" className="yc-section">
            <h2>We Filter for Signal Before Polish</h2>
            <div className="yc-text-block mb-12">
              <p className="mb-6">we source english fluent gen z sales talent for specific partner mandates.</p>
              <p className="mb-6">
                resumes are not the product. filtered signal is. we screen for hunger, focus, listening quality,
                feedback absorption, recovery after rejection, and the ability to stay precise under pressure.
              </p>
              <p className="mb-6">
                candidates who only perform confidence do not make it through. candidates who improve quickly, ask
                sharper questions, and keep standards under stress move forward.
              </p>
              <p>you see a smaller pool because the weak signal has already been removed.</p>
            </div>
            <PartnerVisual variant="filter" />
          </section>

          {/* Selection Pressure */}
          <section data-section="selection-pressure" className="yc-section">
            <h2>Selection Pressure Creates the Shortlist</h2>
            <div className="yc-text-block mb-8">
              <h3 className="mb-8">1. Mandate-Led Scouting</h3>
              <p className="mb-12">
                we do not hand you a generic bench. we hunt against your role, city, compensation, language needs, and
                sales motion.
              </p>

              <h3 className="mb-8">2. Founder Screen</h3>
              <p className="mb-12">
                faraz arif (co-founder, 9+ years exp) personally screens every candidate for the traits interviews
                usually miss: persistence, clarity, humility, and recovery.
              </p>

              <h3 className="mb-8">3. Pressure Tasks</h3>
              <p className="mb-12">
                candidates are tested through realistic sales situations: objection handling, follow up discipline,
                call thinking, and response to direct feedback.
              </p>

              <h3 className="mb-8">4. Partner Calibration</h3>
              <p className="mb-12">
                we map the final shortlist to your product, buyer, targets, and floor reality so you are choosing from
                candidates who fit the actual job, not a generic sales profile.
              </p>

              <h3 className="mb-8">5. Post-Joining Support</h3>
              <p>
                training and coaching are operational support for the guarantee. once a hire starts, we review calls,
                tighten talk tracks, and identify replacement risk early.
              </p>
            </div>
            <PartnerVisual variant="process" />
          </section>

          {/* Replacement Guarantee */}
          <section data-section="replacement-guarantee" className="yc-section">
            <h2>The Replacement Guarantee Changes the Incentive</h2>
            <div className="grid grid-cols-2 gap-16 mb-12">
              <div className="yc-text-block">
                <h3>90-Day Replacement Guarantee</h3>
                <p className="mt-4">
                  if the hire does not perform, we replace them. the pipeline is accountable after the offer letter, not
                  just before it.
                </p>
              </div>
              <div>
                <h3>Aligned Payment Terms</h3>
                <p className="mt-4">net 30 terms keep incentives tied to real partner outcomes, not resume delivery.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-16 mb-12">
              <div className="yc-text-block">
                <h3>Risk Monitoring</h3>
                <p className="mt-4">
                  we look for early warning signs in activity, call quality, follow up habits, and feedback response.
                </p>
              </div>
              <div>
                <h3>Targeted Coaching</h3>
                <p className="mt-4">
                  coaching exists to protect the guarantee: sharper scripts, better questions, cleaner pacing, and faster
                  correction when performance drifts.
                </p>
              </div>
            </div>
            <PartnerVisual variant="guarantee" />
          </section>

          {/* Partner Fit */}
          <section data-section="partner-fit" className="yc-section">
            <h2>Built for Partners Who Cannot Afford Mis-Hires</h2>
            <div className="yc-text-block mb-12">
              <p className="mb-6">we work best where one wrong sales hire has a visible cost.</p>
              <p className="mb-6">
                if your team needs dependable frontline salespeople in tier 1 cities, and you want fewer interviews with
                more signal, we can build the pipeline around your hiring bar.
              </p>
              <p>
                you bring the mandate. we bring filtered candidates, selection pressure, post-joining support, and a
                replacement guarantee.
              </p>
            </div>
            <PartnerVisual variant="focus" />
          </section>

          {/* Next Steps */}
          <section data-section="next-steps" className="yc-section">
            <h2>Partner with Verveschool</h2>
            <div className="yc-text-block mb-12">
              <p className="mb-6">
                if you want a tighter sales hiring funnel with accountability after joining, send us the role and the
                target profile. we will tell you if we can build the pipeline.
              </p>
              <ul className="space-y-4">
                <li className="font-medium">phone: +91 81304 30683</li>
                <li className="font-medium">email: ayush@verveschool.com</li>
                <li className="font-medium">address: 20 h 1a, sector 63, noida 201301</li>
              </ul>
            </div>
          </section>

          <div className="mt-20 pt-12 border-t border-border text-[13px]">
            <p>© 2025 verveschool </p>
          </div>
        </main>

        {/* Table of Contents */}
        <aside className="hidden md:block sticky top-20 pt-20 pb-20 px-6 h-screen overflow-y-auto flex-shrink-0 border-l border-border">
          <div className="text-[12px] font-medium text-muted-foreground mb-4">On This Page</div>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => {
                    const element = document.querySelector(`[data-section="${section}"]`)
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={`text-[13px] text-left hover:text-primary transition-colors ${
                    activeSection === section ? "font-bold text-primary" : "text-foreground"
                  }`}
                >
                  {section
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (letter) => letter.toUpperCase())}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Common Footer */}
      <footer className="border-t border-border mt-16">
        <div className="yc-container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[13px] text-foreground">
            <p>© 2025 verveschool</p>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-muted-foreground">
                About
              </Link>
              <Link href="/partners" className="hover:text-muted-foreground">
                Partners
              </Link>
              <Link href="/writing" className="hover:text-muted-foreground">
                Writing
              </Link>
              <a href="mailto:ayush@verveschool.com" className="hover:text-muted-foreground">
                Contact
              </a>
              <a href="https://wa.me/917065314693" className="hover:text-muted-foreground">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
