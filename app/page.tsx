import type { Metadata } from "next"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const filterSteps = [
  "Actively identify qualified candidates",
  "Assess communication, sincerity, and role fit",
  "Align shortlisted candidates with partner requirements",
  "Provide replacement coverage if a hire does not work out",
]

export const metadata: Metadata = {
  title: "VerveSchool | Hire better customer facing talent",
  description:
    "VerveSchool helps companies hire better customer facing talent by introducing qualified, pre-screened candidates matched to their hiring requirements.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VerveSchool | Hire better customer facing talent",
    description:
      "VerveSchool helps companies hire better customer facing talent by introducing qualified, pre-screened candidates matched to their hiring requirements.",
    url: "/",
    images: [
      {
        url: "/social.png",
        width: 1200,
        height: 600,
        alt: "VerveSchool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VerveSchool | Hire better customer facing talent",
    description:
      "VerveSchool helps companies hire better customer facing talent by introducing qualified, pre-screened candidates matched to their hiring requirements.",
    images: ["/social.png"],
  },
}

const metrics = [
  { value: "₹0", label: "Upfront fees" },
  { value: "10%", label: "Fee on annual CTC" },
  { value: "90 Day", label: "Replacement guarantee" },
]
  
const hiringPartners = [
  { name: "Vedantu", src: "/logos/vedantu.png", className: "h-10 w-auto" },
  { name: "Infinity Learn", src: "/logos/infinity-learn.png", className: "h-10 w-auto" },
  { name: "BrightCHAMPS", src: "/logos/brightchamps.png", className: "h-10 w-auto" },
  { name: "Career Launcher", src: "/logos/career-launcher.png", className: "h-10 w-auto" },
  { name: "Prepca", src: "/logos/prepca.png", className: "h-10 w-auto" },
  { name: "Academically Global", src: "/logos/academically-global.png", className: "h-10 w-auto" },
  { name: "Scaler", src: "/logos/scaler.png", className: "h-10 w-auto" },
  { name: "AlmaBetter", src: "/logos/almabetter.png", className: "h-10 w-auto" },
  { name: "Crio.Do", src: "/logos/crio-do.png", className: "h-10 w-auto" },
  { name: "SkilloVilla", src: "/logos/skillovilla.png", className: "h-10 w-auto" },
  { name: "AccioJob", src: "/logos/acciojob.png", className: "h-10 w-auto" },
  { name: "Interview Lift", src: "/logos/interview-lift.png", className: "h-10 w-auto" },
  { name: "Leverage Careers", src: "/logos/leverage-edu.png", className: "h-10 w-auto" },
  { name: "UC Global Study", src: "/logos/uc-global-study.png", className: "h-10 w-auto" },
  { name: "University Living", src: "/logos/university-living.png", className: "h-10 w-auto" },
  { name: "Project Studio", src: "/logos/project-studio.png", className: "h-10 w-auto" },
  { name: "Karma Miles", src: "/logos/karma-miles.png", className: "h-10 w-auto" },
]

const exploreLinks = [
  {
    href: "/about",
    title: "Candidates",
    description: "Apply for customer-facing roles with companies that value communication, ownership, and long-term growth.",
    cta: "Explore →",
  },
  {
    href: "/partners",
    title: "Hiring partners",
    description:
      "Everything you need to know before hiring through VerveSchool.",
    cta: "Explore →",
  },
  {
    href: "/people",
    title: "People",
    description: "Meet the people building VerveSchool and the principles guiding every hiring decision.",
    cta: "Explore →",
  },
  {
    href: "/essays",
    title: "Essays",
    description: "Read essays on hiring, sales, communication, and building organizations.",
    cta: "Read →",
  },
  {
    href: "/book",
    title: "Hope Is the Enemy",
    description:
      "How to sell, persuade, and communicate without begging, hoping, or chasing people.",
    cta: "Read →",
  },
  {
    href: "https://wa.me/917042873035",
    title: "Chat with Duggal",
    description: "Questions about hiring, recruiting, or anything else? Reach out directly on WhatsApp.",
    cta: "Contact →",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(127,139,153,0.2),_transparent_34%),radial-gradient(circle_at_80%_10%,_rgba(255,255,255,0.08),_transparent_24%),linear-gradient(180deg,_#050608_0%,_#0b0f14_54%,_#050608_100%)]" />
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1200px] px-6 py-16 md:px-10 md:py-24">
        <section className="mb-24 grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr]">
          <div>
            <h1 className="max-w-4xl font-semibold text-white">Hire better customer facing talent.</h1>
            <p className="mt-6 max-w-3xl text-base text-muted-foreground md:text-lg">
              We don't wait for applications. We actively identify, assess, and introduce candidates matched to your hiring requirements.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/partners"
                className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-[13px] font-semibold tracking-normal text-primary-foreground shadow-[0_12px_34px_rgba(139,109,255,0.22)] transition hover:shadow-[0_16px_48px_rgba(139,109,255,0.34)] hover:brightness-110"
              >
                Hire sincere talent
              </Link>
              <a
                href="https://wa.me/917042873035"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-[13px] font-semibold tracking-normal text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Chat with Duggal
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-primary/30 bg-primary/[0.06] p-6 shadow-[0_8px_32px_rgba(139,109,255,0.12)] transition-all hover:border-primary/50 hover:bg-primary/[0.1] hover:shadow-[0_12px_48px_rgba(139,109,255,0.18)] md:p-8">
            <div className="space-y-5">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-end justify-between border-b border-primary/15 pb-5 last:border-b-0 last:pb-0"
                >
                  <span className="text-4xl font-semibold tracking-[-0.025em] text-white">{metric.value}</span>
                  <span className="max-w-36 text-right text-[12px] leading-5 text-white/60">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="yc-section">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {hiringPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-20 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.04] px-4 shadow-[0_2px_8px_rgba(139,109,255,0.06)] transition-all hover:border-primary/40 hover:bg-primary/[0.08] hover:shadow-[0_6px_20px_rgba(139,109,255,0.12)]"
              >
                <img
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  className={`w-auto max-w-full object-contain opacity-85 grayscale brightness-0 invert transition-opacity group-hover:opacity-100 ${partner.className}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="yc-section grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 className="font-semibold text-white">How VerveSchool Works</h2>
            <p className="mt-6 max-w-xl leading-8 text-white/65">
              Share your hiring requirements. We take it from there.
            </p>
          </div>

          <div className="space-y-4">
            {filterSteps.map((step, index) => (
              <div
                key={step}
                className="grid grid-cols-[64px_1fr] gap-5 rounded-2xl border border-primary/25 bg-primary/[0.05] px-5 py-4 shadow-[0_2px_8px_rgba(139,109,255,0.06)] transition-all hover:border-primary/50 hover:bg-primary/[0.1] hover:shadow-[0_8px_24px_rgba(139,109,255,0.12)]"
              >
                <span className="font-mono text-sm font-semibold text-primary">0{index + 1}</span>
                <p className="leading-8 text-white/80">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="yc-section mb-0">
          <h2 className="mb-8 font-semibold text-white">Explore VerveSchool</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {exploreLinks.map((item) => {
              const isExternal = item.href.startsWith("http")
              const className =
                "group flex min-h-44 flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 shadow-[0_4px_16px_rgba(139,109,255,0.08)] transition-all duration-200 hover:-translate-y-2 hover:border-primary/60 hover:bg-primary/[0.08] hover:shadow-[0_12px_48px_rgba(139,109,255,0.16)] md:p-7"
              const content = (
                <>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 leading-8 text-white/65">{item.description}</p>
                  </div>
                  <span className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-primary/60 bg-primary/10 px-4 py-2 text-sm text-primary transition group-hover:translate-x-1 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(139,109,255,0.26)]">
                    {item.cta}
                  </span>
                </>
              )

              if (isExternal) {
                return (
                  <a key={item.href} href={item.href} className={className}>
                    {content}
                  </a>
                )
              }

              return (
                <Link key={item.href} href={item.href} className={className}>
                  {content}
                </Link>
              )
            })}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
