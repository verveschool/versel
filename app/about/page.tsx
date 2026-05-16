"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const editorialPanels = {
  movement: {
    eyebrow: "philosophy",
    headline: "the world moves for those who do",
    body: "most people wait to be picked. the dangerous ones create motion before permission arrives.",
    metric: "1",
    label: "bias: action",
  },
  interviews: {
    eyebrow: "false polish",
    headline: "perfect answers collapse under pressure",
    body: "rehearsed confidence sounds good for ten minutes. real work exposes whether someone can think, listen, and move.",
    metric: "0",
    label: "theater needed",
  },
  resumes: {
    eyebrow: "weak signal",
    headline: "resumes describe the past. movement predicts the future.",
    body: "a cv can show credentials. it cannot show urgency, judgment, recovery speed, or how someone behaves when the room gets uncomfortable.",
    metric: "48h",
    label: "signal window",
  },
  filters: {
    eyebrow: "what we filter for",
    headline: "hunger, clarity, stamina, teachability",
    body: "verveschool is built around the rare traits companies actually need but standard hiring rarely measures.",
    metric: "4",
    label: "core traits",
  },
  replacement: {
    eyebrow: "the guarantee logic",
    headline: "replacement confidence changes the standard",
    body: "when we stand behind a candidate, the bar has to be sharper than interest. we need evidence that they can become useful fast.",
    metric: "100%",
    label: "skin in the game",
  },
  companies: {
    eyebrow: "partner lens",
    headline: "companies need sharper signal, not more applicants",
    body: "more profiles create more noise. better signal creates conviction, speed, and fewer expensive mistakes.",
    metric: "less",
    label: "noise",
  },
};

type EditorialPanelKey = keyof typeof editorialPanels;

function EditorialPanel({ panel }: { panel: EditorialPanelKey }) {
  const content = editorialPanels[panel];

  return (
    <div className="mb-24 overflow-hidden border border-border bg-card">
      <div className="relative min-h-[360px] p-6 sm:p-8 md:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(219,231,243,0.28),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(127,139,153,0.2),transparent_24%),linear-gradient(135deg,rgba(244,247,251,0.08),transparent_38%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,rgba(5,6,8,0.92))]" />
        <div className="absolute left-[10%] top-[22%] h-44 w-24 rounded-t-full bg-foreground/10 blur-[1px]" />
        <div className="absolute left-[13%] top-[17%] h-12 w-12 rounded-full bg-foreground/15" />
        <div className="absolute bottom-10 right-[12%] h-52 w-32 rounded-t-full border border-foreground/15 bg-background/45 shadow-[0_0_80px_rgba(219,231,243,0.14)]" />
        <div className="absolute bottom-28 right-[16%] h-16 w-16 rounded-full border border-foreground/20 bg-background/70" />
        <div className="absolute inset-y-8 left-1/2 hidden w-px bg-foreground/10 md:block" />
        <div className="absolute left-8 right-8 top-1/2 h-px bg-foreground/10" />

        <div className="relative z-10 grid min-h-[280px] gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div className="max-w-xl self-start">
            <p className="section-kicker mb-6">{content.eyebrow}</p>
            <p className="max-w-[680px] text-[40px] font-extrabold leading-[0.95] tracking-[-0.06em] text-foreground sm:text-[56px] md:text-[72px]">
              {content.headline}
            </p>
          </div>
          <div className="flex flex-col gap-8 md:items-end md:text-right">
            <div>
              <p className="text-[64px] font-extrabold leading-none tracking-[-0.08em] text-primary sm:text-[88px]">
                {content.metric}
              </p>
              <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
                {content.label}
              </p>
            </div>
            <p className="max-w-sm text-[17px] leading-[1.55] text-foreground/85">
              {content.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const sections = [
  "the-world-moves",
  "polished-interviews-fail",
  "resumes-are-weak-signal",
  "movement",
  "what-we-filter-for",
  "replacement-confidence",
  "sharper-signal",
  "contact",
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const pageSections = document.querySelectorAll("[data-section]");
      let current = "";
      pageSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < 200) {
          current = section.getAttribute("data-section") ?? "";
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="yc-container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-[15px] font-medium">
              verveschool
            </Link>
            <Link href="/about" className="text-[13px] font-medium md:hidden">
              about
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row">
        {/* Main content */}
        <main className="yc-container flex-1 py-20 pt-8 md:py-20 md:pt-20">
          {/* Header */}
          <div className="mb-24">
            <p className="section-kicker mb-6">verveschool philosophy</p>
            <h1 className="mb-6 max-w-5xl">
              the world moves for those who do.
            </h1>
            <p className="max-w-3xl text-[19px] leading-[1.55] text-foreground/80">
              verveschool is not a content product. it is a signal engine for
              people and companies who are done mistaking polish for proof.
            </p>
          </div>

          {/* The World Moves */}
          <section className="yc-section" data-section="the-world-moves">
            <h2>1. the world moves for those who do</h2>
            <div className="grid gap-12 md:grid-cols-2 md:gap-20">
              <div>
                <p className="mb-6">
                  most candidates wait for someone to notice potential. they
                  wait for a shortlist, a referral, a better market, a kinder
                  interviewer, a perfect opening. while they wait, the world
                  keeps rewarding the person who creates motion with imperfect
                  information.
                </p>
                <p>
                  movement is not noise. movement is a decision made under
                  uncertainty, followed by a visible attempt, followed by fast
                  correction.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  the people we care about are not always the loudest, most
                  credentialed, or most polished. they are the ones who hear a
                  hard truth, change their behavior, and return sharper the same
                  day.
                </p>
                <p className="font-bold">
                  the market does not owe anyone momentum. it responds to proof
                  of motion.
                </p>
              </div>
            </div>
          </section>

          <EditorialPanel panel="movement" />

          {/* Polished Interviews Fail */}
          <section className="yc-section" data-section="polished-interviews-fail">
            <h2>2. why polished interviews fail</h2>
            <div className="grid gap-12 md:grid-cols-2 md:gap-20">
              <div>
                <p className="mb-6">
                  polished interviews reward people who can perform certainty
                  for thirty minutes. that is useful if the job is to sound
                  employable. it is weak if the job requires judgment when a
                  buyer pushes back, a manager changes direction, or a target
                  starts slipping.
                </p>
                <p>
                  the problem is not confidence. the problem is confidence that
                  has never been tested by friction.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  the best signal often appears after the neat answer breaks.
                  does the candidate listen or defend? do they get curious or
                  freeze? can they recover status without pretending? can they
                  ask the next useful question?
                </p>
                <p className="font-bold">
                  pressure reveals what preparation can hide.
                </p>
              </div>
            </div>
          </section>

          <EditorialPanel panel="interviews" />

          {/* Resumes */}
          <section className="yc-section" data-section="resumes-are-weak-signal">
            <h2>3. why resumes are weak signal</h2>
            <div className="grid gap-12 md:grid-cols-2 md:gap-20">
              <div>
                <p className="mb-6">
                  resumes compress a person into institutions, dates, projects,
                  and claims. they are convenient for sorting. they are terrible
                  at predicting who will absorb feedback, survive ambiguity,
                  build trust, and become useful fast.
                </p>
                <p>
                  a resume can say someone led a project. it cannot show what
                  they do when their first approach fails.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  companies already have enough documents. what they lack is a
                  sharper read on pace, hunger, clarity, and behavior under
                  pressure. those signals do not live cleanly on a pdf.
                </p>
                <p className="font-bold">
                  the future employee is easier to see in motion than on paper.
                </p>
              </div>
            </div>
          </section>

          <EditorialPanel panel="resumes" />

          {/* Movement */}
          <section className="yc-section" data-section="movement">
            <h2>4. what movement looks like</h2>
            <div className="space-y-16">
              <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                <div>
                  <h3>they act before the room is comfortable</h3>
                  <p>
                    they do not need perfect certainty before taking the next
                    step. they can make a call, send the note, ask the direct
                    question, and expose themselves to feedback while others are
                    still arranging their confidence.
                  </p>
                </div>
                <div>
                  <h3>they turn feedback into behavior</h3>
                  <p>
                    they do not collect advice as motivation. they change the
                    next attempt. if the opening was weak, the next opening is
                    tighter. if they missed a cue, the next conversation shows
                    better listening.
                  </p>
                </div>
              </div>
              <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                <div>
                  <h3>they stay honest under pressure</h3>
                  <p>
                    they can admit what they do not know without collapsing.
                    they do not bluff to protect ego. they hold composure, ask
                    cleaner questions, and keep moving toward the truth.
                  </p>
                </div>
                <div>
                  <h3>they create evidence quickly</h3>
                  <p>
                    movement leaves artifacts: a sharper conversation, a better
                    follow-up, a cleaner diagnosis, a faster recovery, a manager
                    saying this person is improving faster than expected.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Filters */}
          <section className="yc-section" data-section="what-we-filter-for">
            <h2>5. what verveschool filters for</h2>
            <div className="space-y-16">
              <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                <div>
                  <h3>hunger without entitlement</h3>
                  <p>
                    ambition matters only when it comes with ownership. we look
                    for people who want more and understand that wanting more is
                    not the same as deserving it.
                  </p>
                </div>
                <div>
                  <h3>clarity under discomfort</h3>
                  <p>
                    when the conversation gets direct, vague people hide behind
                    personality. sharp people simplify. they can say what they
                    want, why it matters, and what they are willing to do next.
                  </p>
                </div>
              </div>
              <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                <div>
                  <h3>speed of correction</h3>
                  <p>
                    everyone makes mistakes. the differentiator is the gap
                    between feedback and changed behavior. short gap, strong
                    signal. long gap, expensive risk.
                  </p>
                </div>
                <div>
                  <h3>stamina after the first no</h3>
                  <p>
                    the work gets uncomfortable quickly. we filter for people
                    who can stay engaged after rejection without becoming
                    resentful, passive, or sloppy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <EditorialPanel panel="filters" />

          {/* Replacement Confidence */}
          <section className="yc-section" data-section="replacement-confidence">
            <h2>6. why replacement confidence matters</h2>
            <div className="grid gap-12 md:grid-cols-2 md:gap-20">
              <div>
                <p className="mb-6">
                  a guarantee changes the moral weight of selection. if a
                  company trusts our signal, we cannot pass along someone simply
                  because they are interested, available, or pleasant on a call.
                </p>
                <p>
                  we need replacement confidence: the belief that if this hire
                  does not work, we can stand behind the decision, diagnose what
                  broke, and make the partner whole.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  that confidence does not come from optimism. it comes from a
                  strict read on behavior, plus internal infrastructure that
                  helps selected candidates ramp faster after they enter the
                  company.
                </p>
                <p className="font-bold">
                  the guarantee is not marketing. it is a forcing function for
                  sharper judgment.
                </p>
              </div>
            </div>
          </section>

          <EditorialPanel panel="replacement" />

          {/* Sharper Signal */}
          <section className="yc-section" data-section="sharper-signal">
            <h2>7. companies need sharper signal, not more applicants</h2>
            <div className="grid gap-12 md:grid-cols-2 md:gap-20">
              <div>
                <p className="mb-6">
                  hiring teams are not suffering from a shortage of inbound
                  interest. they are suffering from the cost of telling real
                  signal apart from performance, desperation, and credential
                  theater.
                </p>
                <p>
                  more applicants create more screening, more interviews, more
                  delays, and more ways for the wrong person to look good long
                  enough to get hired.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  sharper signal means fewer profiles with more conviction. it
                  means seeing how someone thinks before the offer, how quickly
                  they correct, and whether their ambition turns into useful
                  behavior when the job becomes real.
                </p>
                <p className="font-bold">
                  verveschool exists to make motion visible before companies bet
                  on it.
                </p>
              </div>
            </div>
          </section>

          <EditorialPanel panel="companies" />

          {/* Contact */}
          <section className="yc-section" data-section="contact">
            <h2>contact</h2>
            <div className="yc-text-block">
              <p>for inquiries: contact@verveschool.com</p>
            </div>
          </section>
        </main>

        <aside className="sticky top-20 hidden h-screen flex-shrink-0 overflow-y-auto border-l border-border px-6 pb-20 pt-20 md:block">
          <div className="mb-4 text-[12px] font-medium text-muted-foreground">
            on this page
          </div>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => {
                    const element = document.querySelector(
                      `[data-section="${section}"]`,
                    );
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-left text-[13px] transition-colors hover:text-primary ${
                    activeSection === section
                      ? "font-bold text-primary"
                      : "text-foreground"
                  }`}
                >
                  {section.replace(/-/g, " ")}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-border">
        <div className="yc-container py-8">
          <div className="flex flex-col items-start justify-between gap-4 text-[13px] text-foreground md:flex-row md:items-center">
            <p>© 2025 verveschool</p>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-muted-foreground">
                about
              </Link>
              <Link href="/partners" className="hover:text-muted-foreground">
                partners
              </Link>
              <Link href="/writing" className="hover:text-muted-foreground">
                writing
              </Link>
              <a
                href="mailto:ayush@verveschool.com"
                className="hover:text-muted-foreground"
              >
                contact
              </a>
              <a
                href="https://wa.me/917065314693"
                className="hover:text-muted-foreground"
              >
                whatsapp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
