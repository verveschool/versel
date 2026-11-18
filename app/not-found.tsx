import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="yc-container py-20">
        <h1>Page not found</h1>
        <p className="mt-4 text-muted-foreground">The address may have changed.</p>
        <div className="upgrade-actions">
          <Link className="verve-primary upgrade-button" href="/">Return home</Link>
          <Link className="upgrade-text-link" href="/essays">Browse essays</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
