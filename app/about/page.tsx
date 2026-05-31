"use client"

import { useEffect, useState } from "react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const sections = [
  {
    id: "how-it-works",
    label: "How it works",
    title: "How this actually works",
    body: "You speak with our Talent Scout first. Not a resume scanner. We look at how you communicate, how you think, and whether you show real ownership.",
  },
  {
    id: "fit",
    label: "Role fit",
    title: "We match you to the right partner",
    body: "If your signal is strong, we map you to the partner where you can win fastest. Scaler, Vedantu, PrepCA, Infinity Learn and other high-growth teams are actively hiring through us.",
  },
  {
    id: "support",
    label: "Support",
    title: "Selection is not the end",
    body: "Once you are selected, we stay in your corner. Role clarity, interview prep, onboarding support, early performance alignment. You are not left alone after offer rollout.",
  },
  {
    id: "roles",
    label: "Roles",
    title: "Roles, money, and growth",
    body: "Freshers usually start between 4 to 8 LPA fixed with uncapped incentives. Experienced candidates can go higher. Strong performers regularly touch 60K to 1L per month in total earnings within months.",
  },
  {
    id: "bar",
    label: "Hiring bar",
    title: "What we care about",
    body: "Clear spoken English. Serious intent. Consistency under pressure. If you are sincere, coachable, and willing to perform in-office, we will open doors most people never even see.",
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
            <h1 className="max-w-4xl font-semibold text-foreground">
              No resume games. We place serious people into real sales careers.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-foreground/68 md:text-xl md:leading-9">
              If you can communicate, stay sincere under pressure, and execute daily, we help you break into high-growth in-office roles with strong partners.
            </p>
          </section>

          <section data-section="how-it-works" className="mb-20 border-t border-white/10 pt-10">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Speak to a Talent Scout.",
                "Get evaluated on communication, intent, and consistency.",
                "Receive partner-role matching based on real fit.",
                "Interview with teams where you actually have upside.",
                "Get post-selection support once you join.",
                "Meet our in-office community that helps you settle in.",
              ].map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 p-5">
                  <p className="text-sm font-medium text-primary">{String(index + 1).padStart(2, "0")}</p>
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
                    <p className="mt-8 text-5xl font-semibold leading-none tracking-[-0.06em] text-foreground/10 md:text-6xl">
                      {String(index + 2).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="max-w-3xl">
                    <h2 className="font-semibold text-foreground">{section.title}</h2>
                    <p className="mt-6 text-lg leading-8 text-foreground/68">{section.body}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </main>

        <aside className="sticky top-20 hidden h-screen shrink-0 overflow-y-auto border-l border-white/10 px-6 py-20 md:block">
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
