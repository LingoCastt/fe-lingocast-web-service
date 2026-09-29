"use client";

import { useState } from "react";
import { useT } from "./lang";

/**
 * <img> for files under public/. While the file is missing, shows a dashed
 * hint naming the exact path to drop it at, instead of a broken-image icon.
 */
export default function LocalImage({ src, alt, className = "", hint }) {
  const [failed, setFailed] = useState(false);
  const t = useT();

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-outline-variant/60 bg-surface-container-lowest p-4 text-center">
        <span className="material-symbols-outlined text-[28px] text-outline">image</span>
        <span className="font-code-param text-code-param uppercase tracking-widest text-outline">
          {t.gallery.missing}
        </span>
        <span className="font-code-param text-code-param leading-relaxed text-on-surface-variant/70">
          {t.gallery.drop}
          <br />
          <span className="text-secondary">public{src}</span>
        </span>
        {hint && (
          <span className="font-code-param text-code-param max-w-[22rem] leading-relaxed text-outline">
            {hint}
          </span>
        )}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} onError={() => setFailed(true)} className={className} />
  );
}
