import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const candidateFlow = [
  {
    title: "Apply and create your profile",
    benefit: "You are reviewed for relevant skills and intent, not just résumé polish.",
  },
  {
    title: "Complete a role-relevant simulation",
    benefit: "You can show how you think and communicate in work-like scenarios.",
  },
  {
    title: "Receive scoring and fit signals",
    benefit: "You get transparent feedback so strengths and gaps are clear.",
  },
  {
    title: "Get matched to partner companies",
    benefit: "You are introduced only where your profile aligns with real role needs.",
  },
  {
    title: "Interview where there is mutual fit",
    benefit: "Decisions are faster because both sides already have shared evidence.",
  },
]

export default function CandidatesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="yc-container py-14 md:py-20">
        <section className="max-w-4xl" aria-labelledby="how-it-works-candidates">
          <h1 id="how-it-works-candidates" className="text-4xl font-semibold tracking-[-0.04em] text-foreground md:text-5xl">
            How it works for candidates
          </h1>

          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {candidateFlow.map((step, index) => (
              <li key={step.title} className="rounded-xl border border-white/12 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/55">Step {index + 1}</p>
                <h2 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-foreground">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-foreground/70">{step.benefit}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
