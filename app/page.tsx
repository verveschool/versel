import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
const filterSteps = [
  "Source sincere early-career sales talent through active talent scouts",
  "Filter for sincerity, role fit, and intent to stay",
  "Align shortlisted candidates to partner role requirements",
  "Support replacement coverage when a hire does not work out",
]


const metrics = [
  { value: "10-14", label: "Days to shortlist" },
  { value: "90", label: "Day replacement window" },
  { value: "0", label: "Upfront candidate fees" },
  { value: "100%", label: "Replacement guarantee focus" },
]

const hiringPartners = ["Scaler", "Vedantu", "Crio.Do", "Infinity Learn", "AlmaBetter", "Prepca"]

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(127,139,153,0.2),_transparent_34%),radial-gradient(circle_at_80%_10%,_rgba(255,255,255,0.08),_transparent_24%),linear-gradient(180deg,_#050608_0%,_#0b0f14_54%,_#050608_100%)]" />
      <SiteHeader />

      <main className="yc-container">
        <section className="grid min-h-[78vh] items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
          <div>
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
              Hire sincere early-career sales talent without the noise.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 md:text-xl md:leading-9">
              VerveSchool runs an active talent scout network to filter and align sincere candidates for real entry sales roles. We offer replacement guarantee, not performance guarantee.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/partners"
                className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#c5d3e0]"
              >
                Hire sincere sales talent
              </Link>
              <a
                href="mailto:talent@verveschool.com"
                className="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/10"
              >
                Talk to us
              </a>
            </div>
          </div>

          <div className="border border-white/12 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="border border-white/10 bg-black/45 p-6">
              <p className="text-[12px] uppercase tracking-[0.3em] text-white/45">partner terms</p>
              <div className="mt-8 space-y-5">
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

        <section className="border-y border-white/10 py-12 md:py-16">
          <div className="flex flex-col gap-6">
            <p className="section-kicker">hiring partners</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {hiringPartners.map((partner) => (
                <div
                  key={partner}
                  className="flex h-20 items-center justify-center border border-white/15 bg-white/[0.02] px-4 text-center text-lg font-semibold tracking-wide text-white/75 grayscale"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-12 py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="section-kicker">the filter</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              we are a practical hiring filter, not a training program.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              Partners share role context, market, and expectations. Our active talent scouts filter and align sincere candidates who are ready for the role.
            </p>
          </div>
          <div className="space-y-4">
            {filterSteps.map((step, index) => (
              <div key={step} className="grid grid-cols-[64px_1fr] gap-5 border border-white/10 bg-white/[0.03] p-5">
                <span className="font-mono text-sm text-primary">0{index + 1}</span>
                <p className="text-lg leading-8 text-white/78">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div>
              <p className="section-kicker">replacement guarantee</p>
              <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] text-white md:text-7xl">
                if a hire does not work out, we provide a replacement.
              </h2>
            </div>
            <div className="border border-primary/40 bg-primary/10 p-7">
              <p className="text-xl leading-9 text-white/78">
                We do not promise performance outcomes. We stand behind fit with a replacement guarantee and keep hiring risk practical for partner teams.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20 border border-white/12 bg-white/[0.04] p-8 md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="section-kicker">partner CTA</p>
              <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-none tracking-[-0.06em] text-white md:text-7xl">
                share the role. we will send aligned, sincere candidates.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-white/70">
                If you are hiring entry sales talent, share role details and constraints. Our team will shortlist sincere candidates aligned to your requirement, with replacement coverage in place.
              </p>
              <Link
                href="/partners"
                className="mt-8 inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#c5d3e0]"
              >
                become a hiring partner
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
