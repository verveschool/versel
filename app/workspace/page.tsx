import type { Metadata } from "next"
import Image from "next/image"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const description = "VerveSchool Workspace is the internal product designed to support hiring and the operations that follow."

export const metadata: Metadata = {
  title: "VerveSchool Workspace",
  description,
  alternates: { canonical: "/workspace" },
  openGraph: { title: "VerveSchool Workspace", description, url: "/workspace" },
}

const capabilities = [
  {
    title: "Hiring and introductions",
    description: "Keep hiring requirements, candidate introductions, interview outcomes, and placements connected.",
  },
  {
    title: "Partner relationships",
    description: "Maintain the context behind each hiring relationship, from current requirements to agreements and follow-ups.",
  },
  {
    title: "Financial operations",
    description: "Track obligations arising from placements, along with invoices, collections, and the follow-ups they require.",
  },
  {
    title: "Ownership and history",
    description: "Record who owns the next action, what was decided, and the evidence behind changes.",
  },
]

export default function WorkspacePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="upgrade-main">
        <header className="workspace-intro">
          <h1>VerveSchool Workspace</h1>
          <p className="page-lede">{description}</p>
          <div className="upgrade-actions">
            <a className="verve-primary upgrade-button" href="#workspace-access">Workspace access</a>
            <a className="upgrade-text-link" href="https://susanoo.verveschool.com/">Open the design demo <span aria-hidden="true">↗</span></a>
          </div>
        </header>

        <figure className="workspace-preview">
          <Image
            src="/workspace-demo.webp"
            alt="Workspace requirements view showing a role alongside its partner, owner, and review status"
            width={1140}
            height={640}
            sizes="(max-width: 1200px) 88vw, 1060px"
          />
          <figcaption>Requirements view from the design demo. All records shown are synthetic.</figcaption>
        </figure>

        <section className="upgrade-section" aria-labelledby="workspace-purpose">
          <h2 id="workspace-purpose">What Workspace is designed to support</h2>
          <div className="workspace-capabilities">
            {capabilities.map((capability) => (
              <div key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="workspace-access" className="upgrade-section workspace-access" aria-labelledby="access-title">
          <h2 id="access-title">Authorized access</h2>
          <p>Operational access is reserved for authorized users. Production sign-in is pending. The current design demo uses synthetic records and resets changes on refresh.</p>
          <div className="upgrade-actions">
            <a className="upgrade-text-link" href="mailto:talent@verveschool.com?subject=VerveSchool%20Workspace%20access">Contact VerveSchool about access</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
