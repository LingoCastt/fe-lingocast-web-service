"use client";

import { OWNER, APP } from "@/content/site";
import { useT } from "./lang";

const SOCIALS = [["code", "code"], ["cell_tower", "broadcast"], ["rss_feed", "rss"]];

export default function Footer() {
  const t = useT();

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-variant/40 mt-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin py-space-xl flex flex-col gap-space-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg border-b border-surface-variant/30 pb-space-lg">
          <div className="space-y-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-md text-headline-md font-semibold text-primary">
                {OWNER.name}
              </span>
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            </div>
            <p className="font-code-telemetry text-code-telemetry text-on-surface-variant max-w-lg">
              {t.footer.tagline}
            </p>
          </div>
          <div className="flex items-center gap-space-md">
            {SOCIALS.map(([icon, key]) => (
              <a
                key={icon}
                href="#"
                aria-label={t.footer[key]}
                className="w-9 h-9 rounded flex items-center justify-center bg-surface-container-low border border-outline-variant/40 text-on-surface-variant hover:text-primary hover:border-outline transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">{icon}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md font-code-param text-code-param text-on-surface-variant">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[14px]">terminal</span>
            <span>{t.footer.status}</span>
          </div>
          <div>
            © 2026 {OWNER.name} · {APP.name.toUpperCase()}
          </div>
        </div>
      </div>
    </footer>
  );
}
