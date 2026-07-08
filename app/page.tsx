import type { Metadata } from "next"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const filterSteps = [
  "Source candidates through active talent scouts",
  "Filter for sincerity, communication, and role fit",
  "Align shortlisted candidates with partner requirements",
  "Provide replacement coverage if a hire does not work out",
]

export const metadata: Metadata = {
  title: "VerveSchool - Hire sincere talent that can connect and sell",
  description:
    "VerveSchool helps companies hire customer-facing talent through an active scout network. Fast sourcing, role fit matching, and 60-day replacement coverage.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VerveSchool - Hire sincere talent that can connect and sell",
    description:
      "VerveSchool helps companies hire customer-facing talent through an active scout network. Fast sourcing, role fit matching, and 60-day replacement coverage.",
    url: "/",
  },
  twitter: {
    title: "VerveSchool - Hire sincere talent that can connect and sell",
    description:
      "VerveSchool helps companies hire customer-facing talent through an active scout network. Fast sourcing, role fit matching, and 60-day replacement coverage.",
  },
}

const metrics = [
  { value: "10%", label: "Fee on CTC" },
  { value: "60", label: "Days of replacement coverage" },
  { value: "5+", label: "Candidates ready to interview" },
  { value: "₹0", label: "Upfront fees" },
]

const hiringPartners = [
  { name: "Prepca", src: "/logos/prepca.png", className: "h-10 w-auto" },
  { name: "Infinity Learn", src: "/logos/infinity-learn.png", className: "h-10 w-auto" },
  { name: "Vedantu", src: "/logos/vedantu.png", className: "h-10 w-auto" },
  { name: "AlmaBetter", src: "/logos/almabetter.png", className: "h-10 w-auto" },
  { name: "Crio.Do", src: "/logos/crio-do.png", className: "h-10 w-auto" },
  { name: "Scaler", src: "/logos/scaler.png", className: "h-10 w-auto" },
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
      "Hire customer-facing talent through an active scout network built for speed, role alignment, and replacement coverage.",
    cta: "Explore →",
  },
  {
    href: "/people",
    title: "People",
    description: "Meet the people building VerveSchool and the principles guiding every hiring decision.",
    cta: "Explore →",
  },
  {
    href: "/writing",
    title: "Essays",
    description: "Essays on hiring, sales, communication, and building organizations that last.",
    cta: "Read →",
  },
  {
    href: "/book",
    title: "Book",
    description:
      "An ongoing book capturing the philosophy behind communication, sales, hiring, and building exceptional customer-facing teams.",
    cta: "Read →",
  },
  {
    href: "https://wa.me/917042873035",
    title: "Talk to us",
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
            <h1 className="max-w-4xl font-semibold text-white">Hire talent that can sell.</h1>
            <p className="mt-6 max-w-3xl text-base text-muted-foreground md:text-lg">
              VerveSchool helps companies hire customer-facing talent through an active scout network built for speed and long-term fit.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/partners"
                className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-[13px] font-semibold tracking-normal text-black transition hover:opacity-90"
              >
                Hire sincere talent
              </Link>
              <a
                href="https://wa.me/917042873035"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-[13px] font-semibold tracking-normal text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Talk to us
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 md:p-8">
            <div className="space-y-5">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-end justify-between border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <span className="text-3xl font-semibold tracking-[-0.025em] text-white">{metric.value}</span>
                  <span className="max-w-36 text-right text-[12px] leading-5 text-white/52">{metric.label}</span>
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
                className="flex h-20 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.02] px-4 transition-colors hover:border-white/25"
              >
                <img
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  className={`w-auto max-w-full object-contain opacity-80 grayscale brightness-0 invert ${partner.className}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="yc-section grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 className="font-semibold text-white">How hiring works with VerveSchool</h2>
            <p className="mt-6 max-w-xl leading-8 text-white/65">
              Partners share role details and hiring constraints. Our team filters and aligns candidates who are serious and ready to join.
            </p>
          </div>

          <div className="space-y-4">
            {filterSteps.map((step, index) => (
              <div
                key={step}
                className="grid grid-cols-[64px_1fr] gap-5 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors hover:border-white/20"
              >
                <span className="font-mono text-sm text-primary">0{index + 1}</span>
                <p className="leading-8 text-white/75">{step}</p>
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
                "group flex min-h-44 flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.04] md:p-7"
              const content = (
                <>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 leading-8 text-white/65">{item.description}</p>
                  </div>
                  <span className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-primary/45 px-4 py-2 text-sm text-primary transition group-hover:translate-x-1 group-hover:border-primary group-hover:bg-primary group-hover:text-black">
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
