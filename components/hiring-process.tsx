import { hiringStages } from "@/lib/hiring";

export function HiringProcess({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`hiring-process ${compact ? "hiring-process-compact" : ""}`}>
      {hiringStages.map((stage, index) => (
        <li key={stage.title} className="hiring-stage">
          <span className="stage-number" aria-label={`Stage ${index + 1}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{stage.title}</h3>
          {!compact && (
            <>
              <p>{stage.description}</p>
              <ul className="stage-activities">
                {stage.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ol>
  );
}
