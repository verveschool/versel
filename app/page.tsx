import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HiringProcess } from "@/components/hiring-process";
import { supportedFunctions } from "@/lib/hiring";

const description =
  "Verveschool partners with companies and educational institutions on workforce planning, talent sourcing, candidate assessment, hiring coordination and employee support.";
export const metadata: Metadata = {
  title: { absolute: "Verveschool | Build a committed team" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Verveschool | Build a committed team",
    description,
    url: "/",
    images: ["/social.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verveschool | Build a committed team",
    description,
    images: ["/social.png"],
  },
};

const exploreLinks = [
  {
    href: "/candidates",
    title: "Candidates",
    description:
      "Apply for customer-facing roles with companies that value communication, ownership, and long-term growth.",
    cta: "Explore →",
  },
  {
    href: "/partners",
    title: "Hiring partners",
    description:
      "Everything you need to know before hiring through Verveschool.",
    cta: "Explore →",
  },
  {
    href: "/people",
    title: "People",
    description:
      "Meet the people building Verveschool and the principles guiding every hiring decision.",
    cta: "Explore →",
  },
  {
    href: "/essays",
    title: "Essays",
    description:
      "Read essays on hiring, sales, communication, and building organizations.",
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
    description:
      "Questions about hiring, recruiting, or anything else? Reach out directly on WhatsApp.",
    cta: "Contact →",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="upgrade-main">
        <section className="home-intro">
          <p className="brand-statement">The world moves for those who do.</p>
          <h1>
            Build a committed team.
          </h1>
          <div className="home-intro-detail">
            <p>
              Verveschool helps companies and educational institutions plan their workforce and find the right people.
            </p>
            <p>
              We source and assess talent for customer-facing, business and academic roles, and stay in touch after people join.
            </p>
            <div className="upgrade-actions">
              <Link className="verve-primary upgrade-button" href="/partners">
                Explore hiring services <span aria-hidden="true">→</span>
              </Link>
              <Link className="upgrade-text-link" href="/candidates">
                Find your next role <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="upgrade-section home-functions" aria-labelledby="functions-title">
          <div className="section-intro">
            <h2 id="functions-title">People who move the work forward.</h2>
            <p>
              From teams speaking to customers to people shaping the classroom,
              we start with the work your organisation needs to do.
            </p>
          </div>
          <p className="supported-functions">
            {supportedFunctions.join(" · ")}
          </p>
          <Link className="upgrade-text-link" href="/partners#who-we-work-with">
            See who we work with <span aria-hidden="true">→</span>
          </Link>
        </section>
        <section className="upgrade-section" aria-labelledby="process-title">
          <div className="section-intro">
            <h2 id="process-title">Before the search. Beyond the hire.</h2>
            <p>
              A thoughtful hiring process starts before the search and continues
              beyond the introduction.
            </p>
          </div>
          <HiringProcess compact />
          <Link className="upgrade-text-link" href="/partners#how-hiring-works">
            Explore our five-stage process <span aria-hidden="true">→</span>
          </Link>
        </section>
        <section className="upgrade-section home-support">
          <h2>The relationship continues after joining.</h2>
          <div>
            <p>
              We stay in touch with employees as they settle into their roles.
              We also work with organisations to understand retention challenges
              and make better people decisions.
            </p>
            <p>
              Human judgment, clear expectations and continuing conversations
              are part of the work.
            </p>
            <a className="upgrade-text-link" href="https://wa.me/917042873035">
              Discuss your workforce needs <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <section className="upgrade-section" aria-labelledby="explore-title">
          <h2 id="explore-title">Explore Verveschool</h2>
          <div className="explore-grid">
            {exploreLinks.map((item) => (
              <Link key={item.href} href={item.href} className="explore-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="upgrade-text-link">{item.cta}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
