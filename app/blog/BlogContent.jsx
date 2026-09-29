"use client";

import Dispatches from "./Dispatches";
import SubscribeForm from "./SubscribeForm";
import { useT } from "@/components/lang";

const FEEDS = [
  ["cell_tower", "RSS 2.0 XML"],
  ["data_object", "ATOM FEED"],
  ["terminal", "JSON FEED"],
];

export default function BlogContent() {
  const t = useT();

  return (
    <>
      <section className="relative w-full overflow-hidden pb-space-xl">
        {/* coordinate graticule ground */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full text-outline-variant">
            <defs>
              <pattern height="48" id="grid-pattern" patternUnits="userSpaceOnUse" width="48">
                <path
                  d="M 48 0 L 0 0 0 48"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="2,6"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect fill="url(#grid-pattern)" height="100%" width="100%" />
          </svg>
        </div>

        <div className="relative max-w-[1280px] mx-auto px-margin-mobile lg:px-margin pt-space-lg lg:pt-space-xl">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-high text-secondary font-code-param text-code-param uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                {t.blog.badge}
              </span>
              <span className="font-code-param text-code-param text-on-surface-variant/60">
                {t.blog.rev}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
              <div className="lg:col-span-8 flex flex-col gap-space-xs">
                <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-primary tracking-tight font-semibold">
                  {t.blog.title}
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
                  {t.blog.desc}
                </p>
              </div>

              <div className="lg:col-span-4 bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between gap-space-sm shadow-md">
                <div className="flex items-center justify-between">
                  <span className="font-code-param text-code-param text-on-surface-variant uppercase tracking-wider">
                    {t.blog.indexed}
                  </span>
                  <span className="font-code-telemetry text-code-telemetry text-secondary font-bold">
                    {t.blog.verified}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-space-xs text-center pt-space-xs">
                  {t.blog.stats.map(([label, value]) => (
                    <div key={label} className="p-1 rounded bg-surface-container">
                      <div className="font-code-param text-code-param text-on-surface-variant">
                        {label}
                      </div>
                      <div className="font-code-telemetry text-code-telemetry text-primary font-semibold">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Dispatches />
          </div>
        </div>
      </section>

      {/* Syndication console */}
      <section className="w-full pb-space-xl">
        <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg lg:p-space-xl shadow-xl">
            <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-7 space-y-space-sm">
                <div className="flex items-center gap-2 font-code-param text-code-param text-secondary">
                  <span className="material-symbols-outlined text-[16px]">rss_feed</span>
                  <span className="uppercase tracking-widest font-semibold">
                    {t.blog.subLabel}
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-semibold text-primary tracking-tight">
                  {t.blog.subTitle}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                  {t.blog.subDesc}
                </p>
                <div className="flex items-center gap-space-md pt-space-xs font-code-param text-code-param text-on-surface-variant">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>{t.blog.subFreq}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
                    <span>{t.blog.subPrivacy}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <SubscribeForm />
                <div className="flex items-center gap-space-sm pt-space-xs">
                  {FEEDS.map(([icon, label]) => (
                    <a
                      key={label}
                      href="#"
                      className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors font-code-param text-code-param text-on-surface-variant hover:text-primary flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-[14px]">{icon}</span>
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
