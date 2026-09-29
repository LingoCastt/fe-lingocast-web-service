"use client";

import { useState } from "react";
import { SCREENSHOTS } from "@/content/site";

/** Phone bezel. Renders the shot, or a drop-file hint while the file is absent. */
function PhoneFrame({ shot, index, onOpen }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="flex flex-col gap-space-sm group">
      <div className="relative mx-auto w-full max-w-[280px]">
        {/* device shell */}
        <div className="relative rounded-[2rem] bg-surface-container-high p-2 shadow-2xl ring-1 ring-outline-variant/40 transition-transform duration-500 group-hover:-translate-y-1">
          <div className="absolute left-1/2 top-3 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-surface-container-lowest" />
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.6rem] bg-surface-container-lowest">
            {failed ? (
              <button
                type="button"
                className="flex h-full w-full cursor-default flex-col items-center justify-center gap-2 border border-dashed border-outline-variant/60 p-4 text-center"
              >
                <span className="material-symbols-outlined text-[28px] text-outline">
                  add_photo_alternate
                </span>
                <span className="font-code-param text-code-param uppercase tracking-widest text-outline">
                  CHƯA CÓ ẢNH
                </span>
                <span className="font-code-param text-code-param leading-relaxed text-on-surface-variant/70">
                  Copy ảnh vào
                  <br />
                  <span className="text-secondary">public{shot.src}</span>
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onOpen(index)}
                className="block h-full w-full cursor-zoom-in"
                aria-label={`Phóng to: ${shot.title}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.title}
                  onError={() => setFailed(true)}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            )}
          </div>
        </div>

        <span className="absolute -left-2 top-8 rounded bg-surface-container-highest px-1.5 py-0.5 font-code-param text-code-param font-bold text-secondary shadow-lg">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <figcaption className="space-y-1 px-1 text-center">
        <div className="font-code-telemetry text-code-telemetry font-semibold text-primary">
          {shot.title}
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{shot.caption}</p>
      </figcaption>
    </figure>
  );
}

export default function ScreenshotGallery() {
  const [open, setOpen] = useState(null);
  const shot = open === null ? null : SCREENSHOTS[open];

  const step = (delta) =>
    setOpen((i) => (i + delta + SCREENSHOTS.length) % SCREENSHOTS.length);

  return (
    <>
      <div className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-3">
        {SCREENSHOTS.map((s, i) => (
          <PhoneFrame key={s.src} shot={s} index={i} onOpen={setOpen} />
        ))}
      </div>

      {shot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shot.title}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-surface-container-lowest/90 p-margin-mobile backdrop-blur-xl lg:p-margin"
        >
          <button
            type="button"
            aria-label="Đóng"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high text-primary transition-colors hover:bg-surface-bright"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {SCREENSHOTS.length > 1 &&
            [
              ["chevron_left", -1, "left-4", "Ảnh trước"],
              ["chevron_right", 1, "right-4", "Ảnh sau"],
            ].map(([icon, delta, pos, label]) => (
              <button
                key={icon}
                type="button"
                aria-label={label}
                onClick={(e) => {
                  e.stopPropagation();
                  step(delta);
                }}
                className={`absolute ${pos} top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface-container-high text-primary transition-colors hover:bg-surface-bright`}
              >
                <span className="material-symbols-outlined text-[20px]">{icon}</span>
              </button>
            ))}

          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full flex-col items-center gap-space-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shot.src}
              alt={shot.title}
              className="max-h-[75vh] rounded-2xl object-contain shadow-2xl ring-1 ring-outline-variant/40"
            />
            <figcaption className="max-w-md text-center">
              <div className="font-code-telemetry text-code-telemetry font-semibold text-primary">
                {shot.title}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{shot.caption}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
