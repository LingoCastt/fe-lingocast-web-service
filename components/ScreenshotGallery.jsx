"use client";

import { forwardRef, useCallback, useLayoutEffect, useRef, useState } from "react";
import { SCREENSHOTS } from "@/content/site";
import { useT } from "./lang";

// Fixed so the track's centring padding (calc(50% - CARD_WIDTH/2)) is exact —
// keep this in sync with the width classes on the card below.
const CARD_WIDTH = 240;

/** Phone bezel. Renders the shot, or a drop-file hint while the file is absent. */
const PhoneFrame = forwardRef(function PhoneFrame(
  { src, title, caption, index, active, onOpen },
  ref,
) {
  const [failed, setFailed] = useState(false);
  const t = useT();

  return (
    <figure
      ref={ref}
      data-index={index}
      className="group flex w-[240px] shrink-0 snap-center flex-col gap-space-sm"
    >
      <div
        className={
          "card-scale relative mx-auto w-full transition-[transform,opacity] duration-300 ease-out will-change-transform " +
          (active ? "scale-100 opacity-100" : "scale-[0.86] opacity-45")
        }
      >
        <div className="relative rounded-[2rem] bg-surface-container-high p-2 shadow-2xl ring-1 ring-outline-variant/40">
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
                  {t.gallery.missing}
                </span>
                <span className="font-code-param text-code-param leading-relaxed text-on-surface-variant/70">
                  {t.gallery.drop}
                  <br />
                  <span className="text-secondary">public{src}</span>
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onOpen(index)}
                className="block h-full w-full cursor-zoom-in"
                aria-label={`${t.gallery.zoom}: ${title}`}
                tabIndex={active ? 0 : -1}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={title}
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

      <figcaption
        className={
          "space-y-1 px-1 text-center transition-opacity duration-300 " +
          (active ? "opacity-100" : "opacity-0")
        }
      >
        <div className="font-code-telemetry text-code-telemetry font-semibold text-primary">
          {title}
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{caption}</p>
      </figcaption>
    </figure>
  );
});

export default function ScreenshotGallery() {
  const t = useT();
  const [open, setOpen] = useState(null);
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const activeRef = useRef(0);
  const rafRef = useRef(null);

  const shot =
    open === null ? null : { src: SCREENSHOTS[open], caption: t.screenshots[open] };

  // The single source of truth for "which card is centred": measure real
  // geometry every animation frame while scrolling, rather than trusting
  // IntersectionObserver's crossed-threshold callbacks (those can skip the
  // newly-centred card during a fast swipe and leave `active` stuck).
  const measure = useCallback(() => {
    rafRef.current = null;
    const track = trackRef.current;
    if (!track) return;
    const trackRect = track.getBoundingClientRect();
    const center = trackRect.left + trackRect.width / 2;
    const halfTrack = trackRect.width / 2 || 1;

    let nearest = 0;
    let nearestDist = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const scaler = card.querySelector(".card-scale");
      const r = card.getBoundingClientRect();
      const dist = Math.abs(r.left + r.width / 2 - center);
      const norm = Math.min(dist / halfTrack, 1);
      if (scaler) {
        scaler.style.transform = `scale(${1 - norm * 0.24})`;
        scaler.style.opacity = String(1 - norm * 0.55);
      }
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = i;
      }
    });

    if (nearest !== activeRef.current) {
      activeRef.current = nearest;
      setActive(nearest);
    }
  }, []);

  const requestMeasure = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(measure);
  }, [measure]);

  // Layout effect: runs synchronously after DOM layout but before the
  // browser paints, so the first frame already has card 0 scaled up — no
  // flash from "unscaled" to "scaled".
  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", requestMeasure);
    return () => {
      window.removeEventListener("resize", requestMeasure);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [measure, requestMeasure]);

  const scrollToIndex = useCallback((i) => {
    cardRefs.current[i]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  const step = (delta) =>
    setOpen((i) => (i + delta + SCREENSHOTS.length) % SCREENSHOTS.length);

  return (
    <>
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={requestMeasure}
          className="flex snap-x snap-mandatory gap-space-lg overflow-x-auto scroll-smooth py-space-sm"
          style={{
            paddingInline: `calc(50% - ${CARD_WIDTH / 2}px)`,
            scrollbarWidth: "none",
          }}
        >
          {SCREENSHOTS.map((src, i) => (
            <PhoneFrame
              key={src}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              src={src}
              title={t.screenshots[i][0]}
              caption={t.screenshots[i][1]}
              index={i}
              active={i === active}
              onOpen={setOpen}
            />
          ))}
        </div>

        {SCREENSHOTS.length > 1 && (
          <>
            <button
              type="button"
              aria-label={t.gallery.prev}
              onClick={() => scrollToIndex((active - 1 + SCREENSHOTS.length) % SCREENSHOTS.length)}
              className="absolute left-0 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-surface-container-high/90 p-2 text-primary shadow-lg backdrop-blur transition-all hover:bg-surface-bright sm:flex"
            >
              <span className="material-symbols-outlined text-[22px]">chevron_left</span>
            </button>
            <button
              type="button"
              aria-label={t.gallery.next}
              onClick={() => scrollToIndex((active + 1) % SCREENSHOTS.length)}
              className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-surface-container-high/90 p-2 text-primary shadow-lg backdrop-blur transition-all hover:bg-surface-bright sm:flex"
            >
              <span className="material-symbols-outlined text-[22px]">chevron_right</span>
            </button>
          </>
        )}
      </div>

      {SCREENSHOTS.length > 1 && (
        <div className="mt-space-md flex items-center justify-center gap-2">
          {SCREENSHOTS.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={
                "h-1.5 rounded-full transition-all duration-300 " +
                (i === active ? "w-6 bg-secondary" : "w-1.5 bg-outline-variant hover:bg-outline")
              }
            />
          ))}
        </div>
      )}

      {shot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shot.caption[0]}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-surface-container-lowest/90 p-margin-mobile backdrop-blur-xl lg:p-margin"
        >
          <button
            type="button"
            aria-label={t.gallery.close}
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high text-primary transition-colors hover:bg-surface-bright"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {SCREENSHOTS.length > 1 &&
            [
              ["chevron_left", -1, "left-4", t.gallery.prev],
              ["chevron_right", 1, "right-4", t.gallery.next],
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
              alt={shot.caption[0]}
              className="max-h-[75vh] rounded-2xl object-contain shadow-2xl ring-1 ring-outline-variant/40"
            />
            <figcaption className="max-w-md text-center">
              <div className="font-code-telemetry text-code-telemetry font-semibold text-primary">
                {shot.caption[0]}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {shot.caption[1]}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
