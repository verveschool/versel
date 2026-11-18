"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main-content" tabIndex={-1} className="yc-container py-20">
      <h1>This page could not load</h1>
      <p className="mt-4 text-muted-foreground">Try loading it again or return to the homepage.</p>
      <div className="upgrade-actions">
        <button className="verve-primary upgrade-button" type="button" onClick={reset}>Try again</button>
        <Link className="upgrade-text-link" href="/">Return home</Link>
      </div>
    </main>
  );
}
