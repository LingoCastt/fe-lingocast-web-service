"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useT } from "./lang";

const KEYS = ["wpm", "lufs", "align", "conf", "pitch", "lookup"];
const ACCENT = 2;

/** Demo stream for the speech-alignment readout. Runs entirely in the browser. */
function simulate(now) {
  return {
    wpm: (148 + Math.sin(now * 0.7) * 12).toFixed(0),
    lufs: (-18.4 + Math.sin(now * 2.1) * 1.6).toFixed(1),
    align: (62 + Math.sin(now * 1.3) * 14).toFixed(0),
    conf: (96.2 + Math.sin(now * 0.9) * 2.1).toFixed(1),
    pitch: (128 + Math.sin(now * 3.4) * 22).toFixed(0),
    lookup: (18 + Math.abs(Math.sin(now * 1.7)) * 5).toFixed(0),
  };
}

export default function Telemetry() {
  const t = useT();
  const [values, setValues] = useState(() => simulate(0));

  useEffect(() => {
    const id = setInterval(() => setValues(simulate(Date.now() / 1000)), 50);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-space-md p-space-md rounded-xl bg-surface-container-low shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between pb-space-sm mb-space-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-[16px]">graphic_eq</span>
          <span className="font-label-caps text-label-caps text-primary tracking-wider uppercase">
            {t.telemetry.label}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-code-param text-code-param text-secondary flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            {t.telemetry.stream}
          </span>
          <Link
            href="/lab"
            className="px-2.5 py-1 rounded bg-surface-container-highest text-primary font-code-param text-code-param hover:bg-surface-bright transition-colors"
          >
            {t.telemetry.openLab}
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
        {t.telemetry.params.map((tag, i) => (
          <div
            key={KEYS[i]}
            className="p-2 rounded bg-surface-container-lowest flex flex-col items-center justify-center"
          >
            <span className="font-code-param text-code-param text-outline">{tag}</span>
            <span
              className={
                "font-code-telemetry text-code-telemetry font-semibold mt-0.5 " +
                (i === ACCENT ? "text-secondary" : "text-primary")
              }
            >
              {values[KEYS[i]]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
