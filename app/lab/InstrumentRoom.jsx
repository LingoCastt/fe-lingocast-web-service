"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/components/lang";

const MAX_ROWS = 70;
const BINS = 64;

/** Synthetic spectral frame so the waterfall shows signal before mic consent. */
function simulatedFrequencies(t) {
  const arr = new Uint8Array(BINS);
  for (let i = 0; i < BINS; i++) {
    const chirp1 = Math.sin(t * 0.05 + i * 0.18) * 128 + 128;
    const chirp2 = Math.cos(t * 0.02 - i * 0.08) * 64 + 64;
    arr[i] = Math.min(255, Math.floor(chirp1 * 0.5 + chirp2 * 0.4 + Math.random() * 25));
  }
  return arr;
}

export default function InstrumentRoom() {
  const t = useT();
  const canvasRef = useRef(null);
  const audioRef = useRef({ ctx: null, analyser: null, data: null, active: false });
  const [micOn, setMicOn] = useState(false);
  const [micState, setMicState] = useState("idle");

  const [spectral, setSpectral] = useState({
    peak: "1,024.4 Hz",
    laeq: "42.8 dB",
    thd: "0.0082%",
    phase: "+12.4°",
  });
  const [imu, setImu] = useState({ roll: "128.4 Hz", pitch: "612.8 Hz", yaw: "1844.2 Hz", deg: 4.5 });
  const [baro, setBaro] = useState({ pres: "-18.42 dB", alt: "-61.8 dB" });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const history = [];
    let tick = 0;
    let raf;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      tick++;
      const { analyser, data, active } = audioRef.current;
      let slice;
      if (active && analyser && data) {
        analyser.getByteFrequencyData(data);
        slice = data.slice(0, BINS);
      } else {
        slice = simulatedFrequencies(tick);
      }

      history.unshift(slice);
      if (history.length > MAX_ROWS) history.pop();

      const surface =
        getComputedStyle(canvas).getPropertyValue("--viz-surface").trim() || "#131313";
      ctx.fillStyle = surface;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const rowHeight = canvas.height / MAX_ROWS;
      for (let r = 0; r < history.length; r++) {
        const row = history[r];
        const colWidth = canvas.width / row.length;
        const alpha = 1 - r / MAX_ROWS;
        for (let c = 0; c < row.length; c++) {
          const val = row[c];
          if (val <= 15) continue;
          const green = Math.floor((val / 255) * 225 + 30);
          ctx.fillStyle = `rgba(74, ${green}, 118, ${alpha * (val / 255)})`;
          ctx.fillRect(c * colWidth, r * rowHeight, colWidth + 0.5, rowHeight + 0.5);
        }
      }

      if (tick % 15 === 0) {
        const deg = Number((Math.sin(tick * 0.08) * 8.5).toFixed(1));
        setSpectral({
          peak: (980 + Math.sin(tick) * 120).toFixed(1) + " Hz",
          laeq: (41.2 + Math.abs(Math.sin(tick * 0.1) * 8.4)).toFixed(1) + " dB",
          thd: (0.007 + Math.random() * 0.003).toFixed(4) + "%",
          phase: (Math.sin(tick * 0.05) * 24).toFixed(1) + "°",
        });
        setImu({
          deg,
          roll: (128.4 + Math.sin(tick * 0.08) * 9.2).toFixed(1) + " Hz",
          pitch: (612.8 + Math.cos(tick * 0.05) * 48).toFixed(1) + " Hz",
          yaw: (1844.2 + Math.sin(tick * 0.02) * 96).toFixed(1) + " Hz",
        });
        setBaro({
          pres: (-18.4 + Math.sin(tick * 0.03) * 2.6).toFixed(2) + " dB",
          alt: (-61.8 + Math.sin(tick * 0.07) * 1.4).toFixed(2) + " dB",
        });
      }
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      audioRef.current.ctx?.close();
    };
  }, []);

  function stopMic() {
    audioRef.current.ctx?.close();
    audioRef.current = { ctx: null, analyser: null, data: null, active: false };
    setMicOn(false);
    setMicState("idle");
  }

  async function toggleMic() {
    if (micOn) return stopMic();
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 128;
      ctx.createMediaStreamSource(stream).connect(analyser);
      audioRef.current = {
        ctx,
        analyser,
        data: new Uint8Array(analyser.frequencyBinCount),
        active: true,
      };
      setMicOn(true);
      setMicState("on");
    } catch {
      // Mic denied or unavailable — the simulation keeps the instrument alive.
      setMicState("fail");
    }
  }

  return (
    <>
      {/* Instrument 01 — spectrogram waterfall */}
      <section className="flex flex-col gap-space-md p-space-lg rounded-xl bg-surface-container-low shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div className="space-y-space-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                {t.lab.i1Label}
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md font-bold text-primary">
              {t.lab.i1Title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t.lab.i1Desc}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-code-param text-code-param">
              20 Hz – 20 kHz
            </span>
            <button
              type="button"
              onClick={stopMic}
              className="px-4 py-1.5 rounded-full bg-surface-container-high text-primary hover:bg-surface-container-highest transition-all font-code-telemetry text-code-telemetry flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px] text-secondary">insights</span>
              <span>{t.lab.simulate}</span>
            </button>
            <button
              type="button"
              onClick={toggleMic}
              className={
                "px-5 py-1.5 rounded-full font-code-telemetry text-code-telemetry font-semibold transition-all glow-primary flex items-center gap-2 " +
                (micOn
                  ? "bg-secondary text-on-secondary"
                  : "bg-primary text-on-primary hover:bg-primary-fixed-dim")
              }
            >
              <span className="material-symbols-outlined text-[18px]">mic</span>
              <span>{micState === "on" ? t.lab.micStop : micState === "fail" ? t.lab.micFail : t.lab.micStart}</span>
            </button>
          </div>
        </div>

        <div className="relative w-full rounded-lg bg-surface-container-lowest p-space-sm overflow-hidden flex flex-col gap-space-sm shadow-inner">
          <div className="w-full flex justify-between font-code-param text-code-param text-on-surface-variant px-2 select-none">
            {["20 Hz", "125 Hz", "500 Hz", "2 kHz", "8 kHz", "20 kHz"].map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>

          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded bg-surface">
            <canvas ref={canvasRef} className="viz w-full h-full block" />
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-3">
              <div className="flex justify-between items-center text-on-surface-variant/40 font-code-param text-code-param">
                <span>dBFS: -0.0</span>
                <span className="text-secondary/70 font-semibold">NYQUIST FREQ: 24,000 Hz</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant/40 font-code-param text-code-param">
                <span>dBFS: -48.0</span>
                <span>WINDOW: HANNING (512pt)</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant/40 font-code-param text-code-param">
                <span>dBFS: -96.0</span>
                <span className="text-primary font-code-telemetry text-code-telemetry">60.0 FPS</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
            {[
              [t.lab.spectralLabels[0], spectral.peak, false],
              [t.lab.spectralLabels[1], spectral.laeq, true],
              [t.lab.spectralLabels[2], spectral.thd, false],
              [t.lab.spectralLabels[3], spectral.phase, false],
            ].map(([label, value, accent]) => (
              <div key={label} className="p-2 rounded bg-surface-container flex flex-col">
                <span className="font-code-param text-code-param text-on-surface-variant">
                  {label}
                </span>
                <span
                  className={`font-code-telemetry text-code-telemetry font-bold ${
                    accent ? "text-secondary" : "text-primary"
                  }`}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instruments 02 & 03 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
        <section className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-low shadow-lg">
          <div className="space-y-space-xs mb-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  {t.lab.i2Label}
                </span>
              </div>
              <span className="font-code-param text-code-param text-secondary">{t.lab.i2Meta}</span>
            </div>
            <h2 className="font-headline-md text-headline-md font-bold text-primary">
              {t.lab.i2Title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t.lab.i2Desc}
            </p>
          </div>

          <div className="relative w-full h-48 rounded-lg bg-surface-container-lowest p-space-sm flex flex-col justify-between overflow-hidden shadow-inner">
            <div className="flex justify-between items-center text-on-surface-variant font-code-param text-code-param">
              <span>{t.lab.envelope}</span>
              <span className="text-secondary font-bold">{t.lab.threshold}</span>
            </div>
            <svg
              className="w-full h-28 text-secondary overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 400 120"
            >
              <defs>
                <linearGradient id="baro-grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#4ae176" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#4ae176" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0,90 Q 50,75 100,82 T 200,45 T 300,50 T 400,20 L 400,120 L 0,120 Z"
                fill="url(#baro-grad)"
              />
              <path
                d="M 0,90 Q 50,75 100,82 T 200,45 T 300,50 T 400,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              <circle className="animate-pulse" cx="400" cy="20" fill="#ffffff" r="4" />
            </svg>
            <div className="flex justify-between items-center text-on-surface-variant font-code-param text-code-param">
              <span>-10.0s</span>
              <span>-5.0s</span>
              <span>{t.lab.now}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-space-sm mt-space-md">
            {[
              [t.lab.i2Params[0], baro.pres, false],
              [t.lab.i2Params[1], baro.alt, false],
              [t.lab.i2Params[2], t.lab.sentencesFound, true],
            ].map(([label, value, accent]) => (
              <div key={label} className="p-3 rounded-lg bg-surface-container flex flex-col">
                <span className="font-code-param text-code-param text-on-surface-variant">
                  {label}
                </span>
                <span
                  className={`font-code-telemetry text-code-telemetry font-bold mt-1 ${
                    accent ? "text-secondary" : "text-primary"
                  }`}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-low shadow-lg">
          <div className="space-y-space-xs mb-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  {t.lab.i3Label}
                </span>
              </div>
              <span className="font-code-param text-code-param text-secondary">{t.lab.i3Meta}</span>
            </div>
            <h2 className="font-headline-md text-headline-md font-bold text-primary">
              {t.lab.i3Title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t.lab.i3Desc}
            </p>
          </div>

          <div className="relative w-full h-48 rounded-lg bg-surface-container-lowest p-space-sm flex items-center justify-center overflow-hidden shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <div className="w-40 h-40 rounded-full border border-primary" />
              <div className="w-24 h-24 rounded-full border border-primary" />
            </div>
            <svg className="w-36 h-36" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                fill="none"
                r="70"
                stroke="#353534"
                strokeDasharray="2,6"
                strokeWidth="2"
              />
              <line stroke="#8e9192" strokeWidth="1.5" x1="60" x2="100" y1="65" y2="65" />
              <line stroke="#4ae176" strokeWidth="2" x1="50" x2="110" y1="80" y2="80" />
              <line stroke="#8e9192" strokeWidth="1.5" x1="60" x2="100" y1="95" y2="95" />
              <g
                className="transition-transform duration-75 origin-center"
                transform={`rotate(${imu.deg} 80 80)`}
              >
                <circle cx="80" cy="80" fill="#ffffff" r="3" />
                <line stroke="#ffffff" strokeWidth="2" x1="30" x2="70" y1="80" y2="80" />
                <line stroke="#ffffff" strokeWidth="2" x1="90" x2="130" y1="80" y2="80" />
                <polyline fill="none" points="75,80 80,72 85,80" stroke="#ffffff" strokeWidth="2" />
              </g>
            </svg>
            <div className="absolute bottom-2 left-3 font-code-param text-code-param text-on-surface-variant">
              {t.lab.drift} <span className="text-secondary">±12 Hz</span>
            </div>
            <div className="absolute bottom-2 right-3 font-code-param text-code-param text-on-surface-variant">
              {t.lab.vad}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-space-sm mt-space-md">
            {[
              [t.lab.i3Params[0], imu.roll, false],
              [t.lab.i3Params[1], imu.pitch, false],
              [t.lab.i3Params[2], imu.yaw, true],
            ].map(([label, value, accent]) => (
              <div key={label} className="p-3 rounded-lg bg-surface-container flex flex-col">
                <span className="font-code-param text-code-param text-on-surface-variant">
                  {label}
                </span>
                <span
                  className={`font-code-telemetry text-code-telemetry font-bold mt-1 ${
                    accent ? "text-secondary" : "text-primary"
                  }`}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
