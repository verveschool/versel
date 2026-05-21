import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const candidateFlow = [
  {
    step: "Apply and create your profile",
    benefit: "Your skills and goals are reviewed first, not just brand names on a resume.",
  },
  {
    step: "Complete a role-relevant evaluation",
    benefit: "You demonstrate how you work in realistic tasks, not only in interview talk.",
  },
  {
    step: "Receive scoring and fit signals",
    benefit: "You get clear feedback on strengths and gaps so next steps are concrete.",
  },
  {
    step: "Get matched to partner companies",
    benefit: "You are introduced to teams where your profile aligns with the actual role needs.",
  },
  {
    step: "Interview where there is mutual fit",
    benefit: "Conversations move faster because both sides already have evidence to work from.",
  },
]

export default function CandidatesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="yc-container py-14 md:py-20">
        <section className="max-w-4xl space-y-4">
          <p className="section-kicker">Candidates</p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-foreground md:text-5xl">How it works for candidates</h1>
          <p className="max-w-3xl text-base text-foreground/70 md:text-lg">
            A straightforward process focused on skills, clear signals, and faster decisions.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="candidate-flow">
          <h2 id="candidate-flow" className="sr-only">
            How it works for candidates
          </h2>
          <ol className="grid gap-4 md:grid-cols-2">
            {candidateFlow.map((item, index) => (
              <li key={item.step} className="rounded-xl border border-white/12 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/55">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-foreground">{item.step}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/70">{item.benefit}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
