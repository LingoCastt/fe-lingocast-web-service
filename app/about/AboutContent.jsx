"use client";

import SkillPills from "./SkillPills";
import LocalImage from "@/components/LocalImage";
import { useT } from "@/components/lang";
import { OWNER, APP, IMAGES } from "@/content/site";

const PRINCIPLE_ICONS = ["cloud_off", "graphic_eq", "battery_charging_full"];

export default function AboutContent() {
  const t = useT();

  return (
    <div className="relative w-full max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
      {/* Meta strip */}
      <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xl pb-space-md">
        <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-secondary tracking-widest uppercase">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
          <span>{t.about.index}</span>
        </div>
        <div className="font-code-param text-code-param text-on-surface-variant flex items-center gap-space-sm bg-surface-container-low px-3 py-1 rounded-full">
          <span>{`LOC: ${OWNER.location}`}</span>
          <span className="w-1 h-1 rounded-full bg-outline-variant" />
          <span className="text-secondary font-semibold">{t.about.online}</span>
        </div>
      </div>

      {/* Editorial header */}
      <section className="relative pt-space-md pb-space-xl flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
        <div className="max-w-3xl space-y-space-sm">
          <span className="px-2 py-0.5 rounded text-code-param font-code-param bg-surface-container-high text-secondary">
            {t.about.badge}
          </span>
          <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-semibold tracking-tight text-primary">
            {t.about.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            {t.about.desc}
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-space-xs bg-surface-container-low p-space-md rounded-lg shadow-sm">
          <span className="font-code-param text-code-param text-on-surface-variant uppercase tracking-wider">
            {t.about.deployments}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-headline-md text-headline-md text-primary font-bold">
              {t.about.appCount}
            </span>
            <span className="font-code-param text-code-param text-secondary font-medium">
              {t.about.platforms}
            </span>
          </div>
          <span className="font-code-telemetry text-code-telemetry text-on-surface-variant text-right">
            {`${APP.name} · ${t.app.status}`}
          </span>
        </div>
      </section>

      {/* Lab hero */}
      <section className="relative w-full rounded-xl overflow-hidden shadow-xl bg-surface-container-lowest">
        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[480px]">
          <LocalImage
            src={IMAGES.aboutHero}
            alt={t.images.aboutHero[0]}
            hint={t.images.aboutHero[1]}
            className="w-full h-full object-cover opacity-85 hover:scale-[1.01] transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-transparent to-surface/80" />
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-space-sm bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-code-param text-code-param text-primary font-medium tracking-wide">
              {t.about.rigBadge}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-end justify-between gap-space-md">
            <div className="max-w-lg space-y-1">
              <span className="font-code-param text-code-param text-secondary tracking-widest uppercase">
                {t.about.rigLabel}
              </span>
              <p className="font-body-md text-body-md text-on-surface">
                {t.about.rigDesc}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-4 font-code-param text-code-param text-on-surface-variant bg-surface-container-lowest/80 px-3 py-2 rounded backdrop-blur">
              <div>
                {t.about.sampling} <span className="text-primary font-bold">48 kHz / 16b</span>
              </div>
              <div>
                {t.about.lookup} <span className="text-secondary font-bold">&lt; 20ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder + roster */}
      <section className="pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-lg pb-space-md">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-lg bg-surface-container-highest flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
                <svg
                  className="w-full h-full text-primary/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 120 120"
                >
                  <circle
                    cx="60"
                    cy="45"
                    r="22"
                    stroke="currentColor"
                    strokeDasharray="2 2"
                    strokeWidth="1.2"
                  />
                  <ellipse cx="60" cy="45" opacity="0.6" rx="14" ry="22" strokeWidth="1" />
                  <ellipse cx="60" cy="45" opacity="0.6" rx="22" ry="10" strokeWidth="1" />
                  <path d="M60 23 V67" strokeDasharray="1 3" strokeWidth="1" />
                  <path d="M38 45 H82" strokeDasharray="1 3" strokeWidth="1" />
                  <path
                    d="M26 102 C30 82 45 74 60 74 C75 74 90 82 94 102"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M34 102 C38 88 48 81 60 81 C72 81 82 88 86 102"
                    opacity="0.5"
                    strokeWidth="0.8"
                  />
                  <path
                    d="M44 102 C46 94 52 89 60 89 C68 89 74 94 76 102"
                    opacity="0.3"
                    strokeWidth="0.8"
                  />
                  <circle cx="60" cy="45" fill="#4ae176" r="2.5" />
                </svg>
                <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-surface text-code-param font-code-param text-secondary text-[9px]">
                  ID: {OWNER.monogram}-01
                </div>
              </div>
              <div className="space-y-space-xs">
                <div className="flex items-center gap-2">
                  <span className="font-headline-md text-headline-md text-primary font-bold">
                    {OWNER.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-full font-code-param text-code-param bg-secondary/10 text-secondary font-semibold">
                    {t.about.lead}
                  </span>
                </div>
                <p className="font-code-telemetry text-code-telemetry text-secondary">
                  {t.about.role}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant pt-1 leading-normal">
                  {t.about.roleDesc}
                </p>
              </div>
            </div>

            <div className="bg-surface-container rounded-lg p-space-md my-space-md">
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                {t.about.bio}
              </p>
            </div>

            <SkillPills />
          </div>

          <div className="lg:col-span-5 bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between shadow-md">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
                  {t.about.rosterLabel}
                </span>
                <span className="font-code-param text-code-param text-on-surface-variant">
                  {t.about.rosterMeta}
                </span>
              </div>

              <div className="space-y-3">
                {t.about.roster.map(([role, detail, status], i) => (
                  <div
                    key={role}
                    className="p-3 rounded-lg bg-surface-container flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center font-code-param text-code-param text-primary font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="font-headline-md text-body-lg font-semibold text-primary">
                          {role}
                        </div>
                        <div className="font-code-param text-code-param text-on-surface-variant">
                          {detail}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`font-code-param text-code-param px-2 py-0.5 rounded ${
                        i === 0
                          ? "text-secondary bg-secondary/10"
                          : "text-on-surface-variant bg-surface-container-high"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-surface-container-lowest mt-4 space-y-2">
                <div className="flex items-center justify-between font-code-param text-code-param">
                  <span className="text-on-surface-variant">{t.about.dspLabel}</span>
                  <span className="text-secondary flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> {t.about.fps} SYNC
                  </span>
                </div>
                <svg className="w-full h-24" fill="none" viewBox="0 0 320 80">
                  {[20, 40, 60].map((y) => (
                    <line
                      key={y}
                      className="text-surface-variant"
                      stroke="currentColor"
                      strokeDasharray="2 4"
                      strokeWidth="0.75"
                      x1="0"
                      x2="320"
                      y1={y}
                      y2={y}
                    />
                  ))}
                  <path
                    className="text-outline"
                    d="M0,40 Q20,10 40,40 T80,40 T120,40 T160,20 T200,60 T240,30 T280,50 T320,40"
                    fill="none"
                    opacity="0.4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M0,40 Q25,65 50,40 T100,20 T150,55 T200,35 T250,45 T300,30 T320,40"
                    fill="none"
                    stroke="#4ae176"
                    strokeWidth="1.8"
                  />
                  <circle cx="100" cy="20" fill="#4ae176" r="3" />
                  <circle cx="200" cy="35" fill="#ffffff" r="3" />
                  <circle cx="250" cy="45" fill="#4ae176" r="3" />
                </svg>
                <div className="flex justify-between font-code-param text-code-param text-on-surface-variant">
                  <span>0 Hz</span>
                  <span>{t.about.formantMid}</span>
                  <span>24 kHz</span>
                </div>
              </div>
            </div>

            <div className="pt-space-md border-t border-surface-variant/20 flex items-center justify-between text-code-param font-code-param">
              <span className="text-on-surface-variant">{t.about.contactPipeline}</span>
              <span className="text-primary">{OWNER.email}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
          <div className="space-y-space-xs">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
              {t.about.ethos}
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-semibold text-primary">
              {t.about.ethosTitle}
            </h2>
          </div>
          <p className="font-code-telemetry text-code-telemetry text-on-surface-variant max-w-md">
            {t.about.ethosDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {t.about.principles.map(([title, body, metricLabel, metricValue], i) => (
            <div
              key={title}
              className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between shadow-md hover:bg-surface-container transition-all group"
            >
              <div className="space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-code-telemetry text-code-telemetry font-bold text-secondary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[22px]">
                    {PRINCIPLE_ICONS[i]}
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md font-semibold text-primary mb-2">
                    {title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-md border-t border-surface-variant/20 flex items-center justify-between font-code-param text-code-param text-secondary">
                <span>{metricLabel}</span>
                <span>{metricValue}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-space-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm mb-space-lg">
          <div>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
              {t.about.timelineLabel}
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-semibold text-primary">
              {t.about.timelineTitle}
            </h2>
          </div>
          <div className="font-code-param text-code-param text-on-surface-variant flex items-center gap-2">
            <span>{t.about.epoch}</span>
            <span className="text-secondary">→</span>
            <span>{t.about.present}</span>
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {t.about.timeline.map(([year, tag, title, body, milestone]) => (
            <div
              key={year}
              className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-md relative overflow-hidden"
            >
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md font-bold text-primary">
                    {year}
                  </span>
                  <span className="px-2 py-0.5 rounded text-code-param font-code-param bg-surface-container-high text-on-surface-variant">
                    {tag}
                  </span>
                </div>
                <div className="font-code-telemetry text-code-telemetry text-secondary font-semibold">
                  {title}
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">{body}</p>
              </div>
              <div className="pt-space-md text-code-param font-code-param text-on-surface-variant">
                <span>{t.about.milestone}</span> {milestone}
              </div>
            </div>
          ))}

          <div className="bg-surface-container-high rounded-xl p-space-md flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-headline-md text-headline-md font-bold text-secondary">
                  2026
                </span>
                <span className="px-2 py-0.5 rounded text-code-param font-code-param bg-secondary text-on-secondary font-bold">
                  {t.about.current}
                </span>
              </div>
              <div className="font-code-telemetry text-code-telemetry text-primary font-semibold">
                {t.about.currentTitle}
              </div>
              <p className="font-body-md text-body-md text-on-surface">
                {t.about.currentDesc}
              </p>
            </div>
            <div className="pt-space-md text-code-param font-code-param text-secondary font-semibold flex items-center justify-between">
              <span>{t.about.currentStage}</span>
              <span className="w-2 h-2 rounded-full bg-secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-space-xl">
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
          <div className="space-y-space-xs max-w-xl">
            <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              <span>{t.about.contactLabel}</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-semibold">
              {t.about.contactTitle}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t.about.contactDesc}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full lg:w-auto">
            <div className="bg-surface-container px-space-md py-3 rounded-lg flex flex-col justify-center">
              <span className="font-code-param text-code-param text-on-surface-variant">
                {t.about.emailLabel}
              </span>
              <span className="font-code-telemetry text-code-telemetry text-primary">
                {OWNER.email}
              </span>
            </div>
            <a
              href={`mailto:${OWNER.email}`}
              className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-primary text-on-primary font-code-telemetry text-code-telemetry font-medium hover:bg-primary-fixed-dim transition-all shadow-md"
            >
              <span>{t.about.sendEmail}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
