"use client"

import { useEffect, useMemo, useState } from "react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

type Section = {
  id: string
  label: string
  title: string
  body: string
}

type FaqItem = {
  question: string
  answer: string
}

const sections: Section[] = [
  {
    id: "why-verveschool",
    label: "Why VerveSchool",
    title: "Why candidates choose VerveSchool",
    body:
      "We are not a job board. We are a curated process for people who want customer facing roles, steady growth, and support that continues after selection. Every candidate is matched for fit, not just availability.",
  },
  {
    id: "who-we-look-for",
    label: "Who we look for",
    title: "What kind of people thrive here",
    body:
      "We look for sincere, ambitious people who can speak with customers, handle pressure, and want to move fast. Clear English, serious intent, and willingness to work in office matter more than years of experience.",
  },
  {
    id: "what-we-value",
    label: "What we value",
    title: "Qualities VerveSchool values",
    body:
      "Communication over credentials. Consistency under pressure. Ownership of outcomes. Coachability. If you can speak clearly, stay composed when things get hard, and keep your word, you already have the base we care about.",
  },
  {
    id: "hiring-process",
    label: "Hiring process",
    title: "What the hiring process looks like",
    body:
      "You start with a scout call focused on how you communicate and think. We assess your intent and consistency. If there is a fit, we match you with the right partner company. Then you interview directly with them. If selected, we stay with you through onboarding.",
  },
  {
    id: "roles",
    label: "Roles",
    title: "What kinds of customer facing roles are available",
    body:
      "Sales, business development, customer success, counselling, and support roles across high growth companies. We work with companies like Scaler, Vedantu, PrepCA, and Infinity Learn. Roles range from entry level for freshers to experienced positions paying 60K to 1L+ per month.",
  },
  {
    id: "after-apply",
    label: "After applying",
    title: "What happens after applying",
    body:
      "Every application is reviewed within 24 hours. Shortlisted candidates get a call from our talent scout within 2 to 3 business days. We assess your communication and fit, then match you with relevant partner companies. The process from application to first company interview usually takes 5 to 7 days.",
  },
]

const faqs: FaqItem[] = [
  {
    question: "Do I need previous experience?",
    answer:
      "No. We actively hire freshers. What matters is sincere intent, clear communication, and willingness to learn fast. Freshers usually start between 4 and 8 LPA, with uncapped incentives.",
  },
  {
    question: "What about remote work?",
    answer:
      "Most roles are in office or require regular office presence. Customer facing roles are usually structured this way. We can discuss flexibility during the process.",
  },
  {
    question: "How long does the hiring process take?",
    answer:
      "From application to first company interview: 5 to 7 days. From interview to offer: depends on the company, usually 3 to 5 days. We keep things moving fast.",
  },
  {
    question: "Do you provide support after I join?",
    answer:
      "Yes. We stay connected through your first 60 days. Role clarity, interview prep, onboarding support, and early performance alignment are all part of what we do.",
  },
  {
    question: "What if a role does not work out?",
    answer:
      "We provide 60 day replacement coverage. If you are not a fit, we find you something better, at no additional cost to you or the company.",
  },
  {
    question: "How do you select candidates?",
    answer:
      "We assess communication skills, intent, consistency, and coachability through a scout call. It is not about resume keywords. It is about whether you are serious and ready to grow.",
  },
]

const navItems = [
  { id: "how-it-works", label: "How it works" },
  ...sections.map(({ id, label }) => ({ id, label })),
  { id: "faq", label: "FAQ" },
] as const

const applyMessage = `Hi VerveSchool,

I would like to apply for customer facing roles.

Name:
City:
Current role:
Years of experience:
LinkedIn:
Resume:
Why do you think you would do well in a customer facing role?`

const applyHref = `https://wa.me/917042873035?text=${encodeURIComponent(applyMessage)}`

function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "")

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.querySelector<HTMLElement>(`[data-section="${id}"]`))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target instanceof HTMLElement) {
          setActiveSection(visible.target.dataset.section ?? sectionIds[0] ?? "")
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

export default function CandidatesPage() {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])
  const activeSection = useActiveSection(sectionIds)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_0%,rgba(219,231,243,0.12),transparent_30%),linear-gradient(180deg,#050608_0%,#0b0f14_54%,#050608_100%)]" />

      <SiteHeader />

      <main className="mx-auto w-full max-w-[1200px] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[760px]">
          <section className="mb-24">
            <h1 className="max-w-4xl font-semibold text-foreground">
              If you can communicate, stay composed under pressure, and keep your word, we would like to meet you.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl md:leading-9">
              VerveSchool connects sincere, ambitious people with high growth companies building strong customer facing teams.
              We handle matching, support, and replacement coverage so you can focus on doing great work.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={applyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold tracking-normal text-black transition hover:opacity-90"
              >
                Apply now
              </a>
              <a
                href="https://wa.me/917042873035"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-[13px] font-semibold tracking-normal text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Talk to us
              </a>
            </div>
          </section>

          <section data-section="how-it-works" className="border-t border-white/10 pt-16">
            <h2 className="mb-8 font-semibold text-foreground">How this works</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Speak to a talent scout",
                "Get evaluated on communication, intent, and consistency",
                "Receive partner role matching based on real fit",
                "Interview with teams where you have upside",
                "Get post selection support once you join",
                "Meet our in office community that helps you settle in",
              ].map((step, index) => (
                <div key={step} className="border border-white/10 p-5 transition hover:border-white/20">
                  <p className="text-sm font-medium text-primary">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-3 text-base text-foreground/75">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-20">
            {sections.map((section, index) => (
              <section key={section.id} data-section={section.id} className="border-t border-white/10 pt-16">
                <div className="grid gap-8 lg:grid-cols-[0.25fr_0.75fr]">
                  <p className="text-4xl font-semibold leading-none tracking-[-0.06em] text-foreground/10 md:text-5xl">
                    {String(index + 2).padStart(2, "0")}
                  </p>
                  <div className="max-w-3xl">
                    <h2 className="font-semibold text-foreground">{section.title}</h2>
                    <p className="mt-6 text-lg leading-8 text-foreground/68">{section.body}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <section
            data-section="faq"
            className="mt-24 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-8 md:px-8 md:py-10"
          >
            <h2 className="mb-12 font-semibold text-foreground">Frequently asked questions</h2>

            <div className="grid max-w-3xl gap-6">
              {faqs.map((faq) => (
                <details key={faq.question} className="group cursor-pointer">
                  <summary className="flex list-none items-center justify-between border-b border-white/10 py-4 font-medium text-foreground transition hover:border-white/20">
                    <span>{faq.question}</span>
                    <svg
                      className="h-5 w-5 text-primary transition group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </summary>
                  <p className="mt-4 pb-4 leading-7 text-foreground/68">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-24 border-t border-white/10 pt-16">
            <div className="max-w-5xl">
              <h2 className="max-w-2xl font-semibold text-white">The world moves for those who do</h2>
              <div className="mt-8 max-w-2xl">
                <p className="leading-8 text-white/65">
                  If you communicate well, keep your word, and want to build a career in customer facing work, we would like
                  to meet you. The companies we work with are hiring now. Apply today and you could be speaking with us within days.
                </p>
                <a
                  href={applyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold tracking-normal text-black transition hover:opacity-90"
                >
                  Apply now
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
