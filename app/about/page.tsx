"use client"

import { useEffect, useMemo, useState } from "react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

type FaqItem = {
  question: string
  answer: string
}

const sectionNav = [
  { id: "how-this-works", label: "How this works" },
  { id: "who-we-look-for", label: "Who we look for" },
  { id: "what-we-value", label: "What we value" },
  { id: "roles", label: "Roles" },
  { id: "after-applying", label: "After applying" },
  { id: "faq", label: "FAQ" },
] as const

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
  const sectionIds = useMemo(() => sectionNav.map((item) => item.id), [])
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
                className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-[13px] font-semibold tracking-normal text-primary-foreground shadow-[0_12px_34px_rgba(139,109,255,0.22)] transition hover:shadow-[0_16px_48px_rgba(139,109,255,0.34)] hover:brightness-110"
              >
                Apply now
              </a>
              <a
                href="https://wa.me/917042873035"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-[13px] font-semibold tracking-normal text-white transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                Talk to us
              </a>
            </div>
          </section>

          <div className="space-y-20">
            <section data-section="how-this-works" className="border-t border-white/10 pt-16">
              <h2 className="font-semibold text-foreground">How this works</h2>
              <div className="mt-8 space-y-4 text-lg leading-8 text-foreground/68">
                <p>Speak to a talent scout.</p>
                <p>Get evaluated on communication, intent, and consistency.</p>
                <p>Receive partner role matching based on real fit.</p>
                <p>Interview with teams where you have upside.</p>
                <p>Get post selection support once you join.</p>
                <p>Meet our in office community that helps you settle in.</p>
              </div>
            </section>

            <section data-section="who-we-look-for" className="border-t border-white/10 pt-16">
              <h2 className="font-semibold text-foreground">Who we look for</h2>
              <div className="mt-8 space-y-4 text-lg leading-8 text-foreground/68">
                <p>
                  We look for sincere, ambitious people who can speak with customers, handle pressure, and want to move fast.
                  Clear English, serious intent, and willingness to work in office matter more than years of experience.
                </p>
              </div>
            </section>

            <section data-section="what-we-value" className="border-t border-white/10 pt-16">
              <h2 className="font-semibold text-foreground">What we value</h2>
              <div className="mt-8 space-y-4 text-lg leading-8 text-foreground/68">
                <p>
                  Communication over credentials. Consistency under pressure. Ownership of outcomes. Coachability.
                  If you can speak clearly, stay composed when things get hard, and keep your word, you already have the base we care about.
                </p>
              </div>
            </section>

            <section data-section="roles" className="border-t border-white/10 pt-16">
              <h2 className="font-semibold text-foreground">Roles</h2>
              <div className="mt-8 space-y-4 text-lg leading-8 text-foreground/68">
                <p>
                  Sales, business development, customer success, counselling, and support roles across high growth companies.
                  We work with companies like Scaler, Vedantu, PrepCA, and Infinity Learn. Roles range from entry level for freshers
                  to experienced positions paying 60K to 1L+ per month.
                </p>
              </div>
            </section>

            <section data-section="after-applying" className="border-t border-white/10 pt-16">
              <h2 className="font-semibold text-foreground">After applying</h2>
              <div className="mt-8 space-y-4 text-lg leading-8 text-foreground/68">
                <p>
                  Every application is reviewed within 24 hours. Shortlisted candidates get a call from our talent scout within 2 to 3 business days.
                  We assess your communication and fit, then match you with relevant partner companies. The process from application to first company
                  interview usually takes 5 to 7 days.
                </p>
              </div>
            </section>
          </div>

          <section
            data-section="faq"
            className="mt-24 rounded-2xl border border-primary/30 bg-primary/[0.06] px-6 py-8 shadow-[0_8px_32px_rgba(139,109,255,0.12)] md:px-8 md:py-10"
          >
            <h2 className="mb-12 font-semibold text-foreground">Frequently asked questions</h2>

            <div className="grid max-w-3xl gap-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group cursor-pointer">
                  <summary className="flex list-none items-center justify-between rounded-lg border border-primary/20 bg-primary/[0.03] px-4 py-4 font-medium text-foreground shadow-[0_2px_8px_rgba(139,109,255,0.06)] transition hover:border-primary/40 hover:bg-primary/[0.08] hover:shadow-[0_6px_20px_rgba(139,109,255,0.12)]">
                    <span>{faq.question}</span>
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-primary transition group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </summary>
                  <p className="mt-3 pb-3 ml-4 pl-2 border-l border-primary/20 leading-7 text-foreground/75">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-24 border-t border-primary/20 pt-16">
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
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-[13px] font-semibold tracking-normal text-primary-foreground shadow-[0_12px_34px_rgba(139,109,255,0.22)] transition hover:shadow-[0_16px_48px_rgba(139,109,255,0.34)] hover:brightness-110"
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
