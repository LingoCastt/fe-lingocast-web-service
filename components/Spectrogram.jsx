"use client";

import { useEffect, useRef } from "react";

const BAR_COUNT = 48;

/** Home-page FFT bar rasteriser — Canvas2D, no audio input, no network. */
export default function Spectrogram() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const bars = new Array(BAR_COUNT).fill(0.1);
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      const barWidth = width / BAR_COUNT;
      const time = Date.now() / 300;
      const css = getComputedStyle(canvas);
      const accent = css.getPropertyValue("--viz-accent").trim() || "#4ae176";
      const bar = css.getPropertyValue("--viz-bar").trim() || "rgba(255,255,255,0.22)";
      for (let i = 0; i < BAR_COUNT; i++) {
        const harmonic =
          Math.sin(time + i * 0.28) * 0.4 + Math.cos(time * 0.8 + i * 0.12) * 0.3;
        bars[i] = Math.max(
          0.08,
          Math.min(0.95, bars[i] * 0.7 + (Math.abs(harmonic) + 0.15) * 0.3),
        );
        const barHeight = bars[i] * (height - 30);
        // highlight the primary resonant peak
        ctx.fillStyle = i >= 18 && i <= 22 ? accent : bar;
        ctx.fillRect(i * barWidth + 1, height - barHeight, barWidth - 2, barHeight);
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="viz w-full h-full block" />;
}
