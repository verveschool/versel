import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const faqs = [
  {
    question: "Do I need previous experience?",
    answer:
      "No. We actively hire freshers. What matters is sincere intent, clear communication, and willingness to learn fast. Compensation and incentives depend on the role and employer. We discuss the available terms during matching.",
  },
  {
    question: "What about remote work?",
    answer:
      "Most roles are in-office or require regular office presence. Customer facing roles are usually structured this way. We can discuss flexibility during the process.",
  },
  {
    question: "Do you provide support after I join?",
    answer:
      "Yes. We stay in touch as you settle into your role, offering a human point of contact for role clarity and the transition. The support available depends on your situation and the role.",
  },
  {
    question: "What if a role does not work out?",
    answer:
      "Speak with your talent scout about what is not working. We can discuss your situation and relevant opportunities. Employer replacement coverage is a separate commercial arrangement; it is not a promise of another role.",
  },
]

const applyMessage = `Hi Verveschool,

I would like to apply for customer-facing roles.

Name:
City:
Current role:
Years of experience:
LinkedIn:
Resume:
Why do you think you would do well in a customer-facing role?`

const applyHref = `https://wa.me/917042873035?text=${encodeURIComponent(applyMessage)}`

const stages = [
  {
    title: "Application review",
    description: "Our talent team reviews your details against current hiring requirements. If there is a suitable match, a scout will contact you.",
  },
  {
    title: "Scout conversation",
    description: "Your scout discusses your expectations and looks at communication, consistency, and how your experience or interests fit the role.",
  },
  {
    title: "Employer introduction",
    description: "When there is a fit, we introduce you to the hiring team. The employer conducts interviews and makes the final decision. Timelines vary by role and employer.",
  },
]

export default function CandidatesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="upgrade-main candidate-page">
        <header className="candidate-intro">
          <h1>Find your next customer-facing role.</h1>
          <p className="page-lede">
            Explore opportunities in sales, business development, customer success, counselling, and support.
            We work with both freshers and experienced candidates.
          </p>
          <div className="upgrade-actions">
            <a className="verve-primary upgrade-button" href={applyHref}>Apply on WhatsApp <span aria-hidden="true">↗</span></a>
            <a className="upgrade-text-link" href="#after-applying">What happens next</a>
          </div>
        </header>

        <div className="candidate-overview upgrade-section">
          <section id="roles" aria-labelledby="who-we-look-for">
            <h2 id="who-we-look-for">Who these roles suit</h2>
            <p id="what-we-value">
              Clear English, composure under pressure, and willingness to learn matter in this work.
              Most opportunities involve regular office presence. Requirements, compensation, and incentives vary by employer and role.
            </p>
          </section>
          <section id="how-this-works" aria-labelledby="application-title">
            <h2 id="application-title">What to have ready</h2>
            <p>
              WhatsApp opens a draft you can review before sending. It prompts you for your name, city, current role,
              experience, LinkedIn profile, résumé, and a short note on why customer-facing work suits you.
            </p>
          </section>
        </div>

        <section id="after-applying" className="upgrade-section" aria-labelledby="after-title">
          <h2 id="after-title">After you apply</h2>
          <ol className="candidate-stages">
            {stages.map((stage) => (
              <li key={stage.title}>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </li>
            ))}
          </ol>
          <p className="candidate-followup">
            For a follow-up or correction, email{" "}
            <a className="text-primary underline underline-offset-4" href="mailto:talent@verveschool.com">talent@verveschool.com</a>.
            We may share relevant information with the organisation involved in your hiring process.
            See our{" "}<Link className="text-primary underline underline-offset-4" href="/privacy">Privacy Policy</Link>{" "}for details.
          </p>
        </section>

        <section id="faq" className="upgrade-section candidate-faq" aria-labelledby="faq-title">
          <h2 id="faq-title">Frequently asked questions</h2>
          <div>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
