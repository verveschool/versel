import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
const filterSteps = [
  "Source candidates through active talent scouts",
  "Filter for sincerity, communication, and role fit",
  "Align shortlisted candidates with partner requirements",
  "Provide replacement coverage if a hire does not work out",
]

const metrics = [
  { value: "10%", label: "Placement fee on fixed CTC" },
  { value: "60", label: "Day replacement coverage" },
  { value: "5+", label: "Role-aligned candidates from Day 1" },
  { value: "₹0", label: "Upfront hiring fees" },
]

const hiringPartners = [
  { name: "Prepca", src: "/logos/prepca.png", className: "h-8" },
  { name: "Infinity Learn", src: "/logos/infinity-learn.png", className: "h-11" },
  { name: "Vedantu", src: "/logos/vedantu.png", className: "h-10" },
  { name: "AlmaBetter", src: "/logos/almabetter.png", className: "h-8" },
  { name: "Crio.Do", src: "/logos/crio-do.png", className: "h-10" },
  { name: "Scaler", src: "/logos/scaler.png", className: "h-7" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(127,139,153,0.2),_transparent_34%),radial-gradient(circle_at_80%_10%,_rgba(255,255,255,0.08),_transparent_24%),linear-gradient(180deg,_#050608_0%,_#0b0f14_54%,_#050608_100%)]" />
      <SiteHeader />

      <main className="yc-container">
        <section className="grid min-h-[72vh] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-22">
          <div>
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
              Hire sincere talent that can sell, connect, and stay.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl md:leading-9">
              VerveSchool helps companies hire frontline talent through an active scout network built for speed and long-term fit.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/partners"
                className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:opacity-90"
              >
                Hire sincere talent
              </Link>
              <a
                href="https://wa.me/917042873035"
                className="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Talk to us
              </a>
            </div>
          </div>

          <div className="border border-white/12 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="border border-white/10 bg-black/45 p-6">
              <div className="space-y-5">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex items-end justify-between border-b border-white/10 pb-5">
                    <span className="text-5xl font-semibold tracking-[-0.06em] text-white">{metric.value}</span>
                    <span className="max-w-36 text-right text-[12px] uppercase leading-5 tracking-[0.18em] text-white/52">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 py-16 md:py-24">
          <div className="flex flex-col gap-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {hiringPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-20 items-center justify-center border border-white/15 bg-white/[0.02] px-4"
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

        <section className="grid gap-12 py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              How hiring works with VerveSchool
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              Partners share role details and hiring constraints. Our team filters and aligns candidates who are serious and ready to join.
            </p>
          </div>
          <div className="space-y-4">
            {filterSteps.map((step, index) => (
              <div key={step} className="grid grid-cols-[64px_1fr] gap-5 border border-white/10 bg-white/[0.03] p-5">
                <span className="font-mono text-sm text-primary">0{index + 1}</span>
                <p className="text-lg leading-8 text-white/75">{step}</p>
              </div>
            ))}
          </div>
        </section>

<section className="mb-20 border border-white/12 bg-white/[0.04] px-8 py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
  <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">

    <div>
      <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
        Share the role. We will send aligned candidates.
      </h2>
    </div>

    <div>
      <p className="text-lg leading-8 text-white/65">
        If you are hiring for sales or business development roles, share your requirements with us. VerveSchool shortlists sincere candidates aligned with your role and provides replacement coverage if a hire does not work out.
      <Link
        href="/partners"
        className="mt-8 inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:opacity-90"
      >
        Become a hiring partner
      </Link>
    </div>

  </div>
</section>
      </main>
      <SiteFooter />
    </div>
  )
}
