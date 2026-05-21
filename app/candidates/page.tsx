"use client"

import { useEffect, useState } from "react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const sections = [
  {
    id: "signal",
    label: "Signal",
    kicker: "Why It Matters",
    title: "Faster signal beats résumé keyword matching.",
    body: "Most hiring funnels reward formatting and buzzwords. Our process is built to surface how you actually think, communicate, and execute under realistic pressure so strong candidates are visible faster.",
  },
  {
    id: "criteria",
    label: "Criteria",
    kicker: "Clarity",
    title: "Transparent criteria make progress measurable.",
    body: "You see what is being evaluated and why. Instead of vague interview feedback, you get clear standards around preparation, communication, recovery, and coachability so you can improve deliberately.",
  },
  {
    id: "opportunities",
    label: "Opportunities",
    kicker: "Outcomes",
    title: "Opportunities follow demonstrated performance.",
    body: "Partner companies are introduced to candidates based on observed performance in the work, not just brand names or credentials. If you can do the job, you get considered for roles that match that proof.",
  },
]

export const metadata = {
  title: "Candidates | VerveSchool",
  description:
    "Learn how VerveSchool helps candidates get faster signal, transparent evaluation criteria, and opportunities based on demonstrated performance.",
}

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
              Get seen for what you can actually do.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/68 md:text-xl md:leading-9">
              VerveSchool helps candidates stand out through demonstrated performance, not résumé keyword matching.
            </p>
          </section>

          <div className="space-y-20">
            {sections.map((section, index) => (
              <section key={section.id} data-section={section.id} className="border-t border-white/10 pt-10">
                <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
                  <div>
                    <p className="section-kicker">{section.kicker}</p>
                    <p className="mt-8 text-7xl font-semibold leading-none tracking-[-0.08em] text-foreground/10 md:text-8xl">
                      {String(index + 1).padStart(2, "0")}
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
