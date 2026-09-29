"use client";

import { useState } from "react";
import { useT } from "@/components/lang";

export default function SkillPills() {
  const t = useT();
  const [active, setActive] = useState(null);
  const detail = t.about.skills.find(([name]) => name === active)?.[1];

  return (
    <div className="space-y-space-xs pt-space-xs">
      <div className="flex items-center justify-between">
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
          {t.about.skillsLabel}
        </span>
        <span className="font-code-param text-code-param text-secondary">
          {detail ? `// ${detail}` : t.about.skillsHint}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 pt-1">
        {t.about.skills.map(([name]) => (
          <button
            key={name}
            type="button"
            onClick={() => setActive(name)}
            className={
              "px-3 py-1.5 rounded font-code-telemetry text-code-telemetry transition-all cursor-pointer " +
              (active === name
                ? "bg-primary text-on-primary"
                : "bg-surface-container-high text-on-surface hover:bg-surface-bright")
            }
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
