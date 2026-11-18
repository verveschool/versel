import { hiringPartners } from "@/lib/hiring";

const featuredNames = [
  "Scaler",
  "Vedantu",
  "Infinity Learn",
  "BrightCHAMPS",
  "Leverage Edu",
  "University Living",
  "Crio.Do",
  "AlmaBetter",
];
const featuredPartners = featuredNames.map((name) =>
  hiringPartners.find((partner) => partner.name === name)!,
);
const additionalPartners = hiringPartners.filter(
  (partner) => !featuredNames.includes(partner.name),
);

function LogoList({ partners }: { partners: typeof hiringPartners }) {
  return (
    <ul
      className="partner-logos"
      aria-label="Organisations we have worked with"
    >
      {partners.map((partner) => (
        <li key={partner.name}>
          <img
            src={partner.src}
            alt={`${partner.name} logo`}
            width={160}
            height={56}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
}

export function PartnerLogos() {
  return (
    <>
      <LogoList partners={featuredPartners} />
      <details className="additional-partners">
        <summary>
          More organisations we’ve worked with{" "}
          <span>({additionalPartners.length})</span>
        </summary>
        <LogoList partners={additionalPartners} />
      </details>
    </>
  );
}
