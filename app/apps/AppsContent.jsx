"use client";

import ScreenshotGallery from "@/components/ScreenshotGallery";
import { useT } from "@/components/lang";
import { OWNER, APP } from "@/content/site";

export default function AppsContent() {
  const t = useT();

  return (
    <>
      <section className="relative w-full max-w-[1280px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
          <div className="max-w-3xl space-y-space-sm">
            <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded bg-surface-container-high text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
              <span className="font-code-param text-code-param tracking-widest font-semibold uppercase">
                {t.apps.badge} // {APP.name.toUpperCase()}
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold tracking-tight text-primary">
              {t.app.tagline}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {t.app.description}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-space-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-low">
              <span className="material-symbols-outlined text-secondary text-[16px]">
                verified_user
              </span>
              <span className="font-code-param text-code-param uppercase text-on-surface tracking-wider">
                {t.apps.onDevice}
              </span>
            </div>
            <span className="font-code-param text-code-param text-outline">
              {t.apps.updated}
            </span>
          </div>
        </div>

        {/* Hero card */}
        <article className="mt-space-xl bg-surface-container-low rounded-xl p-space-lg shadow-xl relative overflow-hidden group">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-surface-variant/20 blur-3xl pointer-events-none group-hover:bg-secondary/10 transition-all duration-700" />

          <div className="relative flex items-start justify-between gap-space-sm mb-space-lg flex-wrap">
            <div className="flex items-center gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary shadow-inner">
                <span className="material-symbols-outlined text-[26px]">hearing</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-headline-md text-headline-md font-bold text-primary">
                    {APP.name}
                  </h2>
                  <span className="px-2 py-0.5 rounded text-code-param font-code-param bg-secondary/10 text-secondary">
                    {t.app.status}
                  </span>
                </div>
                <p className="font-code-telemetry text-code-telemetry text-secondary font-medium mt-0.5">
                  {t.app.short}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {APP.platforms.map((p) => (
                <span
                  key={p}
                  className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-code-param text-code-param"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-space-md mb-space-lg">
            {t.app.metricLabels.map((label, i) => (
              <div key={label} className="p-space-md rounded-lg bg-surface-container-lowest">
                <div className="font-code-param text-code-param text-on-surface-variant uppercase tracking-wider">
                  {label}
                </div>
                <div className="font-headline-md text-headline-md font-bold text-primary mt-1">
                  {APP.metrics[i]}
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex flex-wrap gap-1.5 mb-space-lg">
            {APP.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-surface-container font-code-param text-code-param text-on-surface-variant"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="relative flex flex-wrap items-center gap-space-sm">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-on-primary font-code-telemetry text-code-telemetry font-medium hover:bg-primary-fixed-dim transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">file_download</span>
              <span>App Store</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high text-primary font-code-telemetry text-code-telemetry font-medium hover:bg-surface-bright transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">android</span>
              <span>Google Play</span>
            </a>
          </div>
        </article>
      </section>

      {/* Screenshots */}
      <section className="w-full max-w-[1280px] mx-auto px-margin-mobile lg:px-margin pb-space-xl">
        <div className="flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-code-param text-code-param text-secondary uppercase tracking-widest">
                {t.apps.shotsLabel}
              </span>
              <h3 className="font-headline-md text-headline-md font-bold text-primary mt-1">
                {t.apps.shotsTitle}
              </h3>
            </div>
            <div className="flex items-center gap-2 font-code-param text-code-param text-on-surface-variant bg-surface-container px-3 py-1.5 rounded">
              <span className="material-symbols-outlined text-[16px] text-secondary">zoom_in</span>
              <span>{t.apps.shotsHint}</span>
            </div>
          </div>
          <ScreenshotGallery />
        </div>
      </section>

      {/* Features */}
      <section className="w-full max-w-[1280px] mx-auto px-margin-mobile lg:px-margin pb-space-xl">
        <div className="bg-surface-container-low rounded-xl p-space-lg shadow-xl">
          <div className="mb-space-lg">
            <span className="font-code-param text-code-param text-secondary uppercase font-semibold">
              {t.apps.featuresLabel}
            </span>
            <h3 className="font-headline-md text-headline-md font-bold text-primary mt-1">
              {t.apps.featuresTitle}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {t.app.features.map(([title, body], i) => (
              <div key={title} className="p-space-md rounded-lg bg-surface-container flex gap-3">
                <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">
                  {APP.featureIcons[i]}
                </span>
                <div>
                  <div className="font-code-telemetry text-code-telemetry text-primary font-semibold">
                    {title}
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit */}
      <section className="w-full max-w-[1280px] mx-auto px-margin-mobile lg:px-margin pb-space-xl">
        <div className="bg-surface-container-low rounded-xl p-space-lg shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-lg">
            <div>
              <span className="font-code-param text-code-param text-secondary uppercase font-semibold">
                {t.apps.auditLabel}
              </span>
              <h3 className="font-headline-md text-headline-md font-bold text-primary mt-1">
                {t.apps.auditTitle}
              </h3>
            </div>
            <div className="flex items-center gap-2 font-code-param text-code-param text-on-surface-variant bg-surface-container px-3 py-1.5 rounded">
              <span className="material-symbols-outlined text-[16px] text-secondary">security</span>
              <span>{t.apps.auditBadge}</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-sm text-body-sm">
              <thead>
                <tr className="font-code-param text-code-param text-on-surface-variant uppercase bg-surface-container-high/60">
                  <th className="py-3 px-4 rounded-l">{t.apps.auditCol}</th>
                  <th className="py-3 px-4 rounded-r">{APP.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-variant/30">
                {t.apps.audit.map(([label, value, accent]) => (
                  <tr key={label} className="hover:bg-surface-container/50 transition-colors">
                    <td className="py-3.5 px-4 font-code-param text-code-param text-on-surface-variant uppercase">
                      {label}
                    </td>
                    <td
                      className={`py-3.5 px-4 font-code-telemetry text-code-telemetry font-medium ${
                        accent ? "text-secondary" : "text-primary"
                      }`}
                    >
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
