"use client"

import { useEffect, useState } from "react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const sections = [
  {
    id: "movement",
    label: "Movement",
    kicker: "Philosophy",
    title: "The World Moves for Those Who Do",
    body: "Most people wait to be chosen. Verveschool is built for the ones who create motion before permission arrives: the person who follows up, studies the room, asks the sharper question, and moves the conversation forward when everyone else freezes.",
  },
  {
    id: "polish",
    label: "Polish",
    kicker: "False Signal",
    title: "Polish is easy to fake. Movement is not.",
    body: "Interviews and resumes are useful starting points, but the real question is what someone does after pressure, rejection, ambiguity, and feedback. That is where useful signal begins.",
  },
  {
    id: "filter",
    label: "Filter",
    kicker: "The Standard",
    title: "We filter for behavior, not performance theatre.",
    body: "We look for hunger, clarity, stamina, listening quality, recovery speed, and the ability to turn feedback into visible change. The goal is not to find the loudest candidate. The goal is to find the one who compounds fastest once the work becomes real.",
  },
  {
    id: "companies",
    label: "Companies",
    kicker: "Partner Lens",
    title: "Companies do not need more applicants. They need sharper signal.",
    body: "More profiles create more noise. Better signal creates conviction. Verveschool exists to reduce the distance between a hiring team and the few people who can actually survive the floor, learn the motion, and become useful fast.",
  },
  {
    id: "guarantee",
    label: "Guarantee",
    kicker: "Skin in the Game",
    title: "Replacement confidence forces a higher bar.",
    body: "If we stand behind someone, selection cannot be casual. The guarantee is not a marketing line. It is a forcing function. It makes the filter stricter, the feedback loop tighter, and the standard clearer for everyone involved.",
  },
  {
    id: "candidates",
    label: "Candidates",
    kicker: "For Candidates",
    title: "If you move, you get seen.",
    body: "The system is not built for people who want a certificate, a script, or permission to begin. It is built for people who want a room where effort becomes visible and the next door opens because they made themselves undeniable.",
  },
]

export default function AboutPage() {
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
            <p className="section-kicker mb-6">About Verveschool</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-foreground md:text-7xl">
              We are a filter for people who move before the world agrees with them.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/68 md:text-xl md:leading-9">
              Verveschool is a selection system for early-career sales talent and the hiring partners who need conviction before they make another expensive bet.
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
