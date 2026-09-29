"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <form
        className="flex flex-col sm:flex-row gap-space-xs"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div className="relative flex-1">
          <input
            type="email"
            required
            placeholder="engineer@domain.tld"
            aria-label="Địa chỉ email"
            className="w-full h-11 px-space-md rounded-lg bg-surface-container text-primary placeholder-on-surface-variant font-code-telemetry text-code-telemetry focus:outline-none focus:ring-1 focus:ring-secondary transition-all"
          />
        </div>
        <button
          type="submit"
          className="h-11 px-space-lg rounded-lg bg-primary text-on-primary font-code-telemetry text-code-telemetry font-semibold hover:bg-primary-fixed-dim transition-all shadow-md flex items-center justify-center gap-1.5 shrink-0"
        >
          <span>Đăng ký</span>
          <span className="material-symbols-outlined text-[16px]">bolt</span>
        </button>
      </form>

      {sent && (
        <div className="p-2 rounded bg-surface-container font-code-param text-code-param text-secondary flex items-center gap-2">
          <span className="material-symbols-outlined text-[14px]">check_circle</span>
          <span>ĐÃ GHI NHẬN // BẠN SẼ NHẬN BÀI MỚI.</span>
        </div>
      )}
    </>
  );
}
