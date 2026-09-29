"use client";

import Link from "next/link";
import Telemetry from "@/components/Telemetry";
import Spectrogram from "@/components/Spectrogram";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import { useT } from "@/components/lang";
import { OWNER, APP } from "@/content/site";

const ORBIT_ICONS = ["subtitles", "translate", "style", "speed"];
const ORBIT_POS = [
  "top-6 left-1/2 -translate-x-1/2",
  "right-4 top-1/2 -translate-y-1/2",
  "bottom-6 left-1/2 -translate-x-1/2",
  "left-4 top-1/2 -translate-y-1/2",
];

export default function HomePage() {
  const t = useT();

  return (
    <>
      {/* Hero */}
      <section className="relative w-full overflow-hidden px-margin-mobile lg:px-margin pt-space-lg lg:pt-space-xl pb-space-xl">
        <div className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-36 right-10 w-80 h-80 rounded-full bg-primary/5 blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-wrap items-center gap-space-sm mb-space-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-secondary font-code-param text-code-param">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
              <span className="tracking-widest uppercase">{t.home.badge}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-code-param text-code-param">
              <span className="material-symbols-outlined text-[14px] text-secondary">mic</span>
              <span>ON_DEVICE_SPEECH // {APP.name.toUpperCase()} V1.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero tracking-tight text-primary text-balance">
                {t.home.heroTitle}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl text-balance">
                {t.app.description}
              </p>

              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <a
                  href="#screenshots"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-on-primary font-code-telemetry text-code-telemetry font-medium hover:bg-primary-fixed-dim transition-all glow-primary group"
                >
                  <span>{t.home.ctaPrimary}</span>
                  <span className="material-symbols-outlined ml-2 text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-surface-container-high text-primary font-code-telemetry text-code-telemetry font-medium hover:bg-surface-container-highest transition-all group"
                >
                  <span>{t.home.ctaSecondary}</span>
                  <span className="material-symbols-outlined ml-2 text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">
                    east
                  </span>
                </a>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant font-code-param text-code-param">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-primary font-semibold">100%</span>
                  <span>{t.home.statOffline}</span>
                </div>
              </div>

              <Telemetry />
            </div>

            {/* Radar reticle */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[420px] aspect-square rounded-2xl bg-surface-container-lowest p-6 shadow-2xl flex items-center justify-center">
                <div className="absolute inset-8 rounded-full bg-surface-container-low/40" />
                <div className="absolute inset-16 rounded-full bg-surface-container/60" />
                <div className="absolute inset-28 rounded-full bg-surface-container-high/80" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-[1px] bg-outline-variant/30" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-full w-[1px] bg-outline-variant/30" />
                </div>
                <div className="absolute inset-8 rounded-full overflow-hidden pointer-events-none animate-[spin_6s_linear_infinite]">
                  <div className="w-1/2 h-1/2 origin-bottom-right bg-gradient-to-tl from-secondary/35 via-secondary/10 to-transparent" />
                </div>

                <div className="relative z-10 w-24 h-24 rounded-full bg-surface-bright flex flex-col items-center justify-center text-center shadow-lg">
                  <span className="material-symbols-outlined text-secondary text-[26px]">
                    hearing
                  </span>
                  <span className="font-code-param text-[9px] tracking-widest text-primary font-bold">
                    {APP.name.toUpperCase()}
                  </span>
                </div>

                {t.home.orbit.map((name, i) => (
                  <div key={name} className={`absolute z-20 group cursor-default ${ORBIT_POS[i]}`}>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-high text-primary shadow-lg hover:scale-105 transition-transform">
                      <span
                        className={`material-symbols-outlined text-[14px] ${i % 2 === 0 ? "text-secondary" : "text-primary"}`}
                      >
                        {ORBIT_ICONS[i]}
                      </span>
                      <span className="font-code-param text-code-param font-bold">{name}</span>
                    </div>
                  </div>
                ))}
                <div className="absolute top-16 right-12 z-20 group cursor-default">
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-secondary shadow-lg hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[12px]">cloud_off</span>
                    <span className="font-code-param text-[9px] font-bold">{t.home.orbitOffline}</span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-code-param text-code-param text-on-surface-variant">
                  <span>{t.home.radarRate}</span>
                  <span className="text-secondary">{t.home.radarOk}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric ribbon */}
      <section className="w-full bg-surface-container-lowest py-space-sm px-margin-mobile lg:px-margin">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-space-md font-code-telemetry text-code-telemetry text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-primary font-medium">{APP.name.toUpperCase()}:</span>
            <span>{t.app.status}</span>
          </div>
          <div className="flex items-center gap-4">
            {t.app.metricLabels.map((label, i) => (
              <span key={label}>
                {label}: <span className="text-primary font-semibold">{APP.metrics[i]}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="w-full py-space-xl px-margin-mobile lg:px-margin">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="max-w-2xl">
              <div className="font-code-param text-code-param text-secondary uppercase tracking-widest mb-1">
                {t.home.shotsSub}
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight">
                {t.home.shotsTitle}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                {t.home.shotsDesc}
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-low font-code-param text-code-param text-on-surface-variant shrink-0">
              <span className="material-symbols-outlined text-secondary text-[16px]">
                phone_iphone
              </span>
              <span>{t.home.shotsBadge}</span>
            </div>
          </div>

          <ScreenshotGallery />
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="w-full py-space-xl px-margin-mobile lg:px-margin bg-surface-container-lowest"
      >
        <div className="max-w-[1280px] mx-auto flex flex-col gap-space-lg">
          <div>
            <div className="font-code-param text-code-param text-secondary uppercase tracking-widest mb-1">
              {t.home.featuresSub}
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight">
              {t.home.featuresTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {t.app.features.map(([title, body], i) => (
              <div
                key={title}
                className="flex flex-col gap-space-sm p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-[26px]">
                    {APP.featureIcons[i]}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary font-semibold">
                  {title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{body}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center pt-space-sm">
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-surface-container-low text-primary hover:bg-surface-container font-code-telemetry text-code-telemetry transition-all group"
            >
              <span>{t.home.fullSpecs}</span>
              <span className="material-symbols-outlined text-[18px] text-secondary group-hover:translate-x-1 transition-transform">
                east
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Spectrogram + benchmarks */}
      <section className="w-full py-space-xl px-margin-mobile lg:px-margin">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                  {t.home.specTitle}
                </span>
              </div>
              <span className="font-code-param text-code-param text-on-surface-variant">
                {t.home.specRate}
              </span>
            </div>
            <div className="relative w-full h-56 rounded-xl bg-surface-dim overflow-hidden shadow-inner p-3 flex flex-col justify-end">
              <Spectrogram />
              <div className="absolute top-3 left-4 flex gap-4 font-code-param text-code-param text-outline">
                <span>20 Hz</span>
                <span>250 Hz</span>
                <span>1 kHz</span>
                <span>4 kHz</span>
                <span>16 kHz</span>
              </div>
              <div className="absolute bottom-2 right-4 font-code-param text-code-param text-secondary">
                {t.home.specFormant}
              </div>
            </div>
            <p className="font-code-param text-code-param text-on-surface-variant">
              {t.home.specNote}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div>
              <span className="font-code-param text-code-param text-secondary uppercase tracking-widest">
                {t.home.benchSub}
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight">
                {t.home.benchTitle}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                {t.home.benchDesc}
              </p>
            </div>
            <div className="flex flex-col gap-space-sm">
              {t.home.benchmarks.map(([title, sub, value, unit]) => (
                <div
                  key={title}
                  className="p-3.5 rounded-lg bg-surface-container flex items-center justify-between"
                >
                  <div className="flex flex-col">
                    <span className="font-code-telemetry text-code-telemetry text-primary font-medium">
                      {title}
                    </span>
                    <span className="font-code-param text-code-param text-on-surface-variant">
                      {sub}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-code-telemetry text-code-telemetry text-secondary font-bold">
                      {value}
                    </span>
                    <div className="font-code-param text-[9px] text-outline">{unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="team" className="w-full py-space-xl px-margin-mobile lg:px-margin">
        <div className="max-w-[1280px] mx-auto">
          <div className="p-space-lg lg:p-space-xl rounded-2xl bg-surface-container-low shadow-2xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-10 font-code-telemetry text-[120px] font-bold text-surface-container-high/40 select-none pointer-events-none">
              MANIFESTO
            </div>
            <div className="relative z-10 max-w-3xl flex flex-col gap-space-md">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                <span className="font-code-param text-code-param text-secondary uppercase tracking-widest">
                  {t.home.manifestoLabel}
                </span>
              </div>
              <blockquote className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary tracking-tight font-medium">
                {t.home.manifestoQuote}
              </blockquote>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center font-code-telemetry text-code-telemetry font-bold text-primary">
                    {OWNER.monogram}
                  </div>
                  <div>
                    <div className="font-code-telemetry text-code-telemetry text-primary font-semibold">
                      {OWNER.name}
                    </div>
                    <div className="font-code-param text-code-param text-on-surface-variant">
                      {t.home.ownerRole}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-code-param text-code-param text-on-surface-variant">
                  <span>{t.home.pledges[0]}</span>
                  <span>•</span>
                  <span>{t.home.pledges[1]}</span>
                  <span>•</span>
                  <span className="text-secondary">{t.home.pledges[2]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
