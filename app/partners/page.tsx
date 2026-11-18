import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PartnerLogos } from "@/components/partner-logos";
import { HiringProcess } from "@/components/hiring-process";
import { CommercialTerms } from "@/components/commercial-terms";
import { supportedFunctions } from "@/lib/hiring";

const sections = [
  ["how-hiring-works", "The process"],
  ["growth-needs-people", "How we help"],
  ["who-we-work-with", "Who we work with"],
  ["commercial-terms", "Commercial terms"],
  ["next-steps", "Start a conversation"],
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="upgrade-main partners-main">
        <section className="partners-intro">
          <h1>Hiring Partners</h1>
          <p className="partners-lede">
            From defining talent requirements to finding, evaluating and hiring
            the right people, we work with organisations across business and
            academic functions.
          </p>
          <p className="supported-functions">
            {supportedFunctions.join(" · ")}
          </p>
          <PartnerLogos featured />
        </section>
        <nav className="section-links" aria-label="Hiring Partners sections">
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <section
          id="how-hiring-works"
          className="process-section"
          aria-labelledby="hiring-process-title"
        >
          <h2 id="hiring-process-title" className="sr-only">
            Our five-stage hiring process
          </h2>
          <HiringProcess />
        </section>
        <CommercialTerms />
        <section
          id="growth-needs-people"
          className="upgrade-section partner-context"
        >
          <div id="how-we-help">
            <h2>Growth needs people</h2>
            <p>
              As hiring demand increases, internal teams often struggle to keep
              up with sourcing and screening requirements. Open roles stay open
              longer. Hiring teams spend more time searching for candidates.
            </p>
            <p>
              Our scout network actively identifies, engages and qualifies
              candidates before they enter your hiring process. We act as an
              extension of your hiring function, so your team spends less time
              searching and more time hiring.
            </p>
          </div>
          <div id="who-we-work-with">
            <h2>Who we work with</h2>
            <ul>
              <li>
                Companies and educational institutions building business and
                academic teams
              </li>
              <li>Talent acquisition teams managing hiring targets</li>
              <li>High-volume hiring teams scaling operations</li>
              <li>Founders building customer-facing functions</li>
              <li>Business leaders scaling revenue teams</li>
            </ul>
          </div>
          <div id="what-partners-can-expect">
            <h2>What partners can expect</h2>
            <p>
              Role-aligned candidates, reduced sourcing burden, support for
              high-volume hiring and replacement coverage under your agreement.
            </p>
            <p>
              We help clarify workforce requirements and retention challenges.
              Your team conducts interviews, makes the final selection and
              completes onboarding. We stay in touch with employees through the
              transition.
            </p>
          </div>
        </section>
        <section id="next-steps" className="upgrade-section partner-cta">
          <h2>The world moves for those who do.</h2>
          <p>
            Tell us about the roles, capabilities and people your organisation
            needs. We’ll begin by understanding the work.
          </p>
          <a className="upgrade-button" href="https://wa.me/917042873035">
            Chat with Duggal <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
