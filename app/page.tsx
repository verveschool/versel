import type { Metadata } from "next"
import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

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

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(127,139,153,0.2),_transparent_34%),radial-gradient(circle_at_80%_10%,_rgba(255,255,255,0.08),_transparent_24%),linear-gradient(180deg,_#050608_0%,_#0b0f14_54%,_#050608_100%)]" />
      <SiteHeader />

      <main className="yc-container">
        <section className="min-h-[74vh] py-20 flex flex-col justify-center">
          <div className="mx-auto max-w-[760px] w-full">
            <h1 className="max-w-4xl text-[clamp(1.76rem,1.35rem+1.49vw,2.48rem)] font-semibold leading-[1.08] text-white">
              Hire talent that can sell.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65 md:text-xl md:leading-9">
              VerveSchool helps companies hire customer-facing talent through an active scout network built for speed and long-term fit.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/partners"
                className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold tracking-normal text-black transition hover:opacity-90"
              >
                Hire sincere talent
              </Link>
              <a
                href="https://wa.me/917042873035"
                className="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-[13px] font-semibold tracking-normal text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Talk to us
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-[760px] w-full">
            <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-4xl font-semibold tracking-[-0.04em] text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 max-w-[140px] text-sm leading-6 text-white/55">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 py-24 md:py-32">
          <div className="mx-auto max-w-[760px] w-full">
            <div className="grid grid-cols-2 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
              {hiringPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-14 items-center justify-center"
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
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[760px] w-full">
            <h2 className="text-white font-semibold text-2xl">
              How hiring works with VerveSchool
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/65">
              Partners share role details and hiring constraints. Our team filters and aligns candidates who are serious and ready to join.
            </p>
            
            <div className="mt-8">
              <ol className="space-y-8">
                {filterSteps.map((step, index) => (
                  <li key={step} className="flex gap-6">
                    <span className="w-8 shrink-0 font-medium text-primary">
                      {index + 1}.
                    </span>
                    <p className="leading-8 text-white/75">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="my-24 border-t border-white/10 pt-24 md:pt-32">
          <div className="mx-auto max-w-[760px] w-full">
            <h2 className="mb-12 font-semibold text-white text-2xl">
              Explore VerveSchool
            </h2>

            <div className="divide-y divide-white/10">
              <Link href="/about" className="group flex items-center justify-between py-10 transition-colors">
                <div className="max-w-2xl">
                  <h3 className="text-xl font-semibold text-white">Candidates</h3>
                  <p className="mt-3 leading-8 text-white/65">
                    Apply for customer-facing roles with companies that value communication, ownership, and long-term growth.
                  </p>
                </div>
                <span className="text-sm text-primary transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>

              <Link href="/partners" className="group flex items-center justify-between py-10 transition-colors">
                <div className="max-w-2xl">
                  <h3 className="text-xl font-semibold text-white">Hiring partners</h3>
                  <p className="mt-3 leading-8 text-white/65">
                    Hire customer-facing talent through an active scout network built for speed, role alignment, and replacement coverage.
                  </p>
                </div>
                <span className="text-sm text-primary transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>

              <Link href="/people" className="group flex items-center justify-between py-10 transition-colors">
                <div className="max-w-2xl">
                  <h3 className="text-xl font-semibold text-white">People</h3>
                  <p className="mt-3 leading-8 text-white/65">
                    Meet the people building VerveSchool and the principles guiding every hiring decision.
                  </p>
                </div>
                <span className="text-sm text-primary transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>

              <Link href="/writing" className="group flex items-center justify-between py-10 transition-colors">
                <div className="max-w-2xl">
                  <h3 className="text-xl font-semibold text-white">Essays</h3>
                  <p className="mt-3 leading-8 text-white/65">
                    Essays on hiring, sales, communication, and building organizations that last.
                  </p>
                </div>
                <span className="text-sm text-primary transition group-hover:translate-x-1">
                  Read →
                </span>
              </Link>

              <Link href="/book" className="group flex items-center justify-between py-10 transition-colors">
                <div className="max-w-2xl">
                  <h3 className="text-xl font-semibold text-white">Book</h3>
                  <p className="mt-3 leading-8 text-white/65">
                    An ongoing book capturing the philosophy behind communication, sales, hiring, and building exceptional customer-facing teams.
                  </p>
                </div>
                <span className="text-sm text-primary transition group-hover:translate-x-1">
                  Read →
                </span>
              </Link>

              <a href="https://wa.me/917042873035" className="group flex items-center justify-between py-10 transition-colors">
                <div className="max-w-2xl">
                  <h3 className="text-xl font-semibold text-white">Talk to us</h3>
                  <p className="mt-3 leading-8 text-white/65">
                    Questions about hiring, recruiting, or anything else? Reach out directly on WhatsApp.
                  </p>
                </div>
                <span className="text-sm text-primary transition group-hover:translate-x-1">
                  Contact →
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
