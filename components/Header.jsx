"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang, useT } from "./lang";
import { useTheme } from "./theme";
import { OWNER, APP } from "@/content/site";

const NAV = [["/", "home"], ["/apps", "apps"], ["/lab", "lab"], ["/about", "about"], ["/blog", "blog"]];

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const t = useT();
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-xl border-b border-surface-variant/40">
      <div className="h-16 max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
        <div className="flex items-center gap-gutter">
          <Link href="/" className="flex items-center gap-space-sm group focus:outline-none">
            <span className="flex items-center justify-center w-8 h-8 rounded bg-surface-container-high border border-outline-variant/60 font-code-param text-code-param text-primary font-bold tracking-widest group-hover:border-secondary transition-colors">
              {OWNER.monogram}
            </span>
            <span className="font-headline-md text-headline-md font-semibold tracking-tight text-primary whitespace-nowrap">
              {OWNER.name}
            </span>
            <span className="hidden lg:inline-flex items-center px-space-xs py-0.5 rounded text-code-param font-code-param bg-surface-container-high text-secondary border border-secondary/20">
              {APP.name}
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-space-lg">
            {NAV.map(([href, key]) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "transition-colors py-1 text-primary font-semibold border-b-2 border-secondary"
                      : "font-code-telemetry text-code-telemetry text-on-surface-variant hover:text-on-surface transition-colors py-1"
                  }
                >
                  {t.nav[key]}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-space-md">
          <div className="flex items-center p-0.5 rounded-full bg-surface-container-low border border-outline-variant/40">
            {["en", "vi"].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={
                  lang === code
                    ? "px-2 py-0.5 rounded-full font-code-param text-code-param font-semibold bg-surface-container-highest text-primary transition-all"
                    : "px-2 py-0.5 rounded-full font-code-param text-code-param text-on-surface-variant hover:text-on-surface transition-all"
                }
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label={theme === "dark" ? t.header.toLight : t.header.toDark}
            onClick={toggle}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container-low border border-outline-variant/40 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">
              {theme === "dark" ? "dark_mode" : "light_mode"}
            </span>
          </button>
          <Link
            href="/about"
            className="hidden sm:inline-flex items-center justify-center px-space-md py-1.5 rounded-full bg-primary text-on-primary font-code-telemetry text-code-telemetry font-medium hover:bg-primary-fixed-dim transition-all glow-primary"
          >
            {t.header.contact}
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
