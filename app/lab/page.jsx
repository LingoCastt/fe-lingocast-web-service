import InstrumentRoom from "./InstrumentRoom";
import { OWNER, APP } from "@/content/site";

export const metadata = {
  title: `Phòng lab — ${OWNER.name}`,
  description:
    "Sóng âm giọng nói, phân tích formant và luồng tín hiệu — chạy hoàn toàn trong trình duyệt của bạn.",
};

const BENCHMARKS = [
  ["FFT-256", "graphic_eq", "1.9", "ms", "Cửa sổ phân tích phổ"],
  ["NHẬN DẠNG", "mic", "310", "ms", "Mỗi 30s audio, chạy trên NPU"],
  ["CĂN CÂU", "subtitles", "62", "ms", "Sai số trung bình DTW"],
];

const RAW_STREAM = [
  ["[0.0012]", "RMS_IN:", "-18.42 dBFS", false],
  ["[0.0012]", "PEAK:", "-6.10 dBFS", false],
  ["[0.0014]", "F0_PITCH:", "128.4 Hz", false],
  ["[0.0014]", "F1_FORMANT:", "612.8 Hz", false],
  ["[0.0016]", "F2_FORMANT:", "1844.2 Hz", false],
  ["[0.0016]", "VAD_STATE:", "SPEECH", false],
  ["[0.0018]", "ALIGN_ERR:", "62 ms", true],
];

const LAB_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB6BJzi5lr4M33pXckEPJb4LlNidDZbj4rRcHCZm-8L7IAjEz2VbF8agsuLivNgOb0WoFjTrRuXD7fXB6aoeJ2oaf41eISPrplWf2v6LwaMf58Zbgj6DPlLfmmvSwIJHEE-3qVST0vjaFpepGTmIDGuzi0SpZaaLz76CaojyEEeJnHnWIUGmfyW3gbi543xxJTOMfuP_CyXSkWxSEB1VxIeJ-L8tpOjwWPjdbmj8Ie1CJSlOKvSr3vnndFM0DcQyoxxjg";

export default function LabPage() {
  return (
    <div className="relative w-full max-w-[1280px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-xl flex flex-col gap-space-xl">
      <div className="absolute -top-10 left-1/4 w-[480px] h-[320px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-96 right-10 w-[420px] h-[420px] bg-surface-container-highest/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <header className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
        <div className="space-y-space-sm max-w-2xl">
          <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded bg-surface-container-high text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-caps text-label-caps tracking-widest uppercase">
              PHÒNG LAB // BẢN 1.0
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold text-primary tracking-tight">
            Thử ngay trong trình duyệt.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Sóng âm giọng nói theo thời gian, phân tích formant và luồng tín hiệu thô — đúng những
            thuật toán {APP.name} dùng để căn transcript, chạy hoàn toàn trong trình duyệt. Không
            gửi audio đi đâu cả.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-low shadow-sm">
          <div className="flex items-center gap-space-xs px-2.5 py-1 rounded bg-surface-container-high text-secondary">
            <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(74,225,118,0.8)]" />
            <span className="font-code-param text-code-param">MICRO SẴN SÀNG</span>
          </div>
          <span className="font-code-telemetry text-code-telemetry text-on-surface-variant">
            Xung DSP: 48,000 Hz / SIMD bật
          </span>
        </div>
      </header>

      <section
        aria-label="Runtime Latency Benchmarks"
        className="grid grid-cols-2 md:grid-cols-4 gap-space-md"
      >
        {BENCHMARKS.map(([label, icon, value, unit, note]) => (
          <div
            key={label}
            className="flex flex-col p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all"
          >
            <div className="flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant">
              <span>{label}</span>
              <span className="material-symbols-outlined text-[16px] text-secondary">{icon}</span>
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
              CHẠY TẠI MÁY
            </span>
          </div>
          <div className="mt-2">
            <div className="font-code-telemetry text-code-telemetry text-primary font-semibold">
              Chạy trên máy bạn
            </div>
            <div className="font-code-param text-code-param text-secondary mt-0.5">
              Không gói tin nào gửi đi
            </div>
          </div>
        </div>
      </section>

      {/* Calibration rig hero */}
      <div className="relative w-full rounded-xl overflow-hidden bg-surface-container-lowest shadow-xl">
        <div className="aspect-[1.83] w-full max-h-[460px] overflow-hidden relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Màn hình đo phổ giọng nói dùng khi phát triển LingoCast"
            className="w-full h-full object-cover object-center filter contrast-125 brightness-90"
            src={LAB_HERO}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-transparent to-surface/80" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
            <div className="max-w-xl">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                HIỆU CHUẨN TRÊN MÁY THẬT
              </span>
              <h2 className="font-headline-md text-headline-md text-primary font-bold">
                Đo trên nhiều đời điện thoại
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Độ chính xác căn câu, độ trễ tra từ và mức hao pin được đo lại trên từng dòng máy
                trước mỗi bản phát hành.
              </p>
            </div>
            <div className="flex items-center gap-space-sm bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
              <span className="font-code-telemetry text-code-telemetry text-primary">
                ĐO TRÊN 6 DÒNG MÁY
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
              Luồng tín hiệu thô &amp; mã nguồn xử lý
            </h2>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-code-param text-code-param text-on-surface-variant">
              BUS: WebAudio API
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
          <div className="lg:col-span-5 p-space-md rounded-lg bg-surface-container-lowest font-code-telemetry text-code-telemetry text-on-surface flex flex-col justify-between gap-space-sm shadow-inner overflow-hidden">
            <div className="flex justify-between items-center text-on-surface-variant font-code-param text-code-param pb-2 border-b border-surface-variant/40">
              <span>LUỒNG TÍN HIỆU THÔ</span>
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
              <span>CỬA SỔ: HANNING 512</span>
              <span className="text-secondary">TOÀN VẸN 100%</span>
            </div>
          </div>

          <div className="lg:col-span-7 p-space-md rounded-lg bg-surface-container-lowest font-code-telemetry text-code-telemetry flex flex-col justify-between shadow-inner overflow-x-auto">
            <div className="flex justify-between items-center text-on-surface-variant font-code-param text-code-param pb-2 border-b border-surface-variant/40">
              <span>XỬ LÝ // LINGOCAST_DSP.TS</span>
              <span className="text-primary">ES2024 / SIMD</span>
            </div>
            <pre className="mt-2 text-on-surface-variant leading-relaxed text-body-sm overflow-x-auto">
              <code>
                <span className="text-secondary">
                  {"// Đọc thẳng luồng audio từ phần cứng"}
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
                  {"// Ghép transcript với sóng âm bằng DTW"}
                </span>
                {"\n  lingoAligner.push(inputBuffer, performance.now());\n});"}
              </code>
            </pre>
            <div className="mt-4 flex items-center justify-between font-code-param text-code-param pt-2 border-t border-surface-variant/30 text-on-surface-variant">
              <span>BỘ NHỚ: 8.4 MB</span>
              <span className="text-primary">TRẠNG THÁI: KHÔNG GỬI RA NGOÀI</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
