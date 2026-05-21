"use client"

import { useEffect, useState } from "react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const sections = [
  {
    id: "how-it-works",
    label: "How it works",
    kicker: "Candidate Flow",
    title: "How it works for candidates",
    body: "Create your profile, complete role-relevant evaluation, and get matched based on demonstrated performance. The goal is faster, clearer signal than resume-only filtering.",
  },
  {
    id: "for",
    label: "Who it's for",
    kicker: "Best Fit",
    title: "Who this is for",
    body: "Candidates open to measurable evaluation, sales and execution-focused roles, and environments where outcomes matter more than polished interview theater.",
  },
  {
    id: "not-for",
    label: "Who it's not for",
    kicker: "Not a Fit",
    title: "Who this is not for",
    body: "People who only want title-based placement, do not want structured assessments, or are avoiding performance-accountable roles should likely look elsewhere.",
  },
  {
    id: "partners",
    label: "Partnered companies",
    kicker: "Selection Standard",
    title: "Why we partner with specific companies",
    body: "We choose partners with role clarity, fair interview processes, timely feedback loops, and compensation structures that reward real contribution. Partnership quality protects candidate outcomes.",
  },
  {
    id: "incentives",
    label: "Sales incentives",
    kicker: "Compensation",
    title: "Performance-based incentives in sales",
    body: "Most sales roles include base pay plus variable pay. High performers can earn meaningful upside, but candidates should verify quota realism, payout mechanics, and the exact metrics that drive compensation.",
  },
]

export default function CandidatesPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id)

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id

      for (const section of document.querySelectorAll<HTMLElement>("[data-section]")) {
        if (section.getBoundingClientRect().top < 220) {
          current = section.dataset.section ?? current
        }
      }

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_0%,rgba(219,231,243,0.12),transparent_30%),linear-gradient(180deg,#050608_0%,#0b0f14_54%,#050608_100%)]" />
      <SiteHeader />

      <div className="flex flex-col md:flex-row">
        <main className="yc-container flex-1 py-16 md:py-24">
          <section className="mb-20 max-w-5xl">
            <p className="section-kicker mb-6">Candidates</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-foreground md:text-7xl">
              Get hired for what you can do, not just how your resume looks.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/68 md:text-xl md:leading-9">
              This page is for candidates who want transparent evaluation, clear fit signals, and access to partnered companies that value performance in real sales environments.
            </p>
          </section>

          <section data-section="how-it-works" className="mb-20 border-t border-white/10 pt-10">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Create your candidate profile with role preferences.",
                "Complete a role-relevant evaluation.",
                "Receive performance-based fit signals.",
                "Get matched with partnered companies.",
                "Interview where there is stronger two-way fit.",
              ].map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 p-5">
                  <p className="section-kicker">Step {index + 1}</p>
                  <p className="mt-2 text-base text-foreground/75">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-20">
            {sections.slice(1).map((section, index) => (
              <section key={section.id} data-section={section.id} className="border-t border-white/10 pt-10">
                <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
                  <div>
                    <p className="section-kicker">{section.kicker}</p>
                    <p className="mt-8 text-7xl font-semibold leading-none tracking-[-0.08em] text-foreground/10 md:text-8xl">
                      {String(index + 2).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="max-w-3xl">
                    <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] text-foreground md:text-5xl">
                      {section.title}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-foreground/68">{section.body}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </main>

        <aside className="sticky top-20 hidden h-screen shrink-0 overflow-y-auto border-l border-white/10 px-6 py-20 md:block">
          <div className="mb-4 text-[12px] font-medium text-muted-foreground">On this page</div>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => document.querySelector(`[data-section="${section.id}"]`)?.scrollIntoView({ behavior: "smooth" })}
                  className={`text-left text-[13px] transition-colors hover:text-foreground ${
                    activeSection === section.id ? "text-foreground" : "text-foreground/52"
                  }`}
                >
                  {section.label}
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
