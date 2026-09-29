"use client";

import InstrumentRoom from "./InstrumentRoom";
import LocalImage from "@/components/LocalImage";
import { useT } from "@/components/lang";
import { APP, IMAGES } from "@/content/site";

const RAW_STREAM = [
  ["[0.0012]", "RMS_IN:", "-18.42 dBFS", false],
  ["[0.0012]", "PEAK:", "-6.10 dBFS", false],
  ["[0.0014]", "F0_PITCH:", "128.4 Hz", false],
  ["[0.0014]", "F1_FORMANT:", "612.8 Hz", false],
  ["[0.0016]", "F2_FORMANT:", "1844.2 Hz", false],
  ["[0.0016]", "VAD_STATE:", "SPEECH", false],
  ["[0.0018]", "ALIGN_ERR:", "62 ms", true],
];
const BENCH_ICONS = ["graphic_eq", "mic", "subtitles"];

export default function LabContent() {
  const t = useT();

  return (
    <div className="relative w-full max-w-[1280px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-xl flex flex-col gap-space-xl">
      <div className="absolute -top-10 left-1/4 w-[480px] h-[320px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-96 right-10 w-[420px] h-[420px] bg-surface-container-highest/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <header className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
        <div className="space-y-space-sm max-w-2xl">
          <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded bg-surface-container-high text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-caps text-label-caps tracking-widest uppercase">
              {t.lab.badge}
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold text-primary tracking-tight">
            {t.lab.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {t.lab.desc}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-low shadow-sm">
          <div className="flex items-center gap-space-xs px-2.5 py-1 rounded bg-surface-container-high text-secondary">
            <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(74,225,118,0.8)]" />
            <span className="font-code-param text-code-param">{t.lab.micReady}</span>
          </div>
          <span className="font-code-telemetry text-code-telemetry text-on-surface-variant">
            {t.lab.dspClock}
          </span>
        </div>
      </header>

      <section
        aria-label="Runtime Latency Benchmarks"
        className="grid grid-cols-2 md:grid-cols-4 gap-space-md"
      >
        {t.lab.benchmarks.map(([label, value, unit, note], i) => (
          <div
            key={label}
            className="flex flex-col p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all"
          >
            <div className="flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant">
              <span>{label}</span>
              <span className="material-symbols-outlined text-[16px] text-secondary">{BENCH_ICONS[i]}</span>
            </div>
            <div className="mt-space-sm font-headline-md text-headline-md font-bold text-primary flex items-baseline gap-1">
              <span>{value}</span>
              <span className="font-code-param text-code-param text-on-surface-variant">{unit}</span>
            </div>
            <p className="font-code-param text-code-param text-on-surface-variant mt-1">{note}</p>
          </div>
        ))}
        <div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-high shadow-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping" />
            <span className="font-label-caps text-label-caps text-primary tracking-wider uppercase">
              {t.lab.localRuntime}
            </span>
          </div>
          <div className="mt-2">
            <div className="font-code-telemetry text-code-telemetry text-primary font-semibold">
              {t.lab.ranHere}
            </div>
            <div className="font-code-param text-code-param text-secondary mt-0.5">
              {t.lab.noPackets}
            </div>
          </div>
        </div>
      </section>

      {/* Calibration rig hero */}
      <div className="relative w-full rounded-xl overflow-hidden bg-surface-container-lowest shadow-xl">
        <div className="aspect-[1.83] w-full max-h-[460px] overflow-hidden relative">
          <LocalImage
            src={IMAGES.labHero}
            alt={t.images.labHero[0]}
            hint={t.images.labHero[1]}
            className="w-full h-full object-cover object-center filter contrast-125 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-transparent to-surface/80" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
            <div className="max-w-xl">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                {t.lab.rigLabel}
              </span>
              <h2 className="font-headline-md text-headline-md text-primary font-bold">
                {t.lab.rigTitle}
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {t.lab.rigDesc}
              </p>
            </div>
            <div className="flex items-center gap-space-sm bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
              <span className="font-code-telemetry text-code-telemetry text-primary">
                {t.lab.rigBadge}
              </span>
            </div>
          </div>
        </div>
      </div>

      <InstrumentRoom />

      {/* Raw stream + pipeline source */}
      <section className="flex flex-col gap-space-md p-space-lg rounded-xl bg-surface-container-low shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[20px]">terminal</span>
            <h2 className="font-headline-md text-headline-md font-bold text-primary">
              {t.lab.streamTitle}
            </h2>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-code-param text-code-param text-on-surface-variant">
              {t.lab.bus}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
          <div className="lg:col-span-5 p-space-md rounded-lg bg-surface-container-lowest font-code-telemetry text-code-telemetry text-on-surface flex flex-col justify-between gap-space-sm shadow-inner overflow-hidden">
            <div className="flex justify-between items-center text-on-surface-variant font-code-param text-code-param pb-2 border-b border-surface-variant/40">
              <span>{t.lab.rawLabel}</span>
              <span>HEX PACKET #88AF</span>
            </div>
            <div className="space-y-1.5 font-code-telemetry text-code-telemetry">
              {RAW_STREAM.map(([ts, key, value, accent], i) => (
                <div key={i} className="text-on-surface-variant">
                  <span className="text-secondary">{ts}</span> {key}{" "}
                  <span className={accent ? "text-secondary font-bold" : "text-primary font-bold"}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-surface-variant/30 flex items-center justify-between text-on-surface-variant font-code-param text-code-param">
              <span>{t.lab.window}</span>
              <span className="text-secondary">{t.lab.integrity}</span>
            </div>
          </div>

          <div className="lg:col-span-7 p-space-md rounded-lg bg-surface-container-lowest font-code-telemetry text-code-telemetry flex flex-col justify-between shadow-inner overflow-x-auto">
            <div className="flex justify-between items-center text-on-surface-variant font-code-param text-code-param pb-2 border-b border-surface-variant/40">
              <span>{t.lab.pipeline}</span>
              <span className="text-primary">ES2024 / SIMD</span>
            </div>
            <pre className="mt-2 text-on-surface-variant leading-relaxed text-body-sm overflow-x-auto">
              <code>
                <span className="text-secondary">
                  {t.lab.codeComment1}
                </span>
                {"\n"}
                <span className="text-primary">const</span>
                {" audioCtx = "}
                <span className="text-primary">new</span>
                {" AudioContext({ latencyHint: "}
                <span className="text-secondary">{"'interactive'"}</span>
                {" });\n"}
                <span className="text-primary">const</span>
                {" analyser = audioCtx.createAnalyser();\nanalyser.fftSize = "}
                <span className="text-secondary">512</span>
                {";\nanalyser.smoothingTimeConstant = "}
                <span className="text-secondary">0.78</span>
                {";\n\n"}
                <span className="text-primary">processor</span>
                {".addEventListener("}
                <span className="text-secondary">{"'audioprocess'"}</span>
                {", ({ inputBuffer }) => {\n  "}
                <span className="text-on-surface-variant">
                  {t.lab.codeComment2}
                </span>
                {"\n  lingoAligner.push(inputBuffer, performance.now());\n});"}
              </code>
            </pre>
            <div className="mt-4 flex items-center justify-between font-code-param text-code-param pt-2 border-t border-surface-variant/30 text-on-surface-variant">
              <span>{t.lab.memory}</span>
              <span className="text-primary">{t.lab.noRelay}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
