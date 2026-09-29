"use client";

import { useState } from "react";

const SKILLS = [
  ["Swift / SwiftUI", "Giao diện khai báo, không tốn runtime, gắn thẳng vào luồng audio qua Combine."],
  ["Kotlin / Compose", "Cùng một kiến trúc trên Android, luồng sự kiện audio dựa trên coroutine."],
  ["Xử lý tín hiệu số", "Lọc FIR/IIR và tích chập thời gian thực chạy ở tốc độ vector SIMD."],
  ["Nhận dạng giọng nói", "Whisper lượng tử hoá chạy trên NPU, không gửi audio lên máy chủ."],
  ["Căn chỉnh transcript", "Dynamic time warping ghép văn bản với sóng âm, sai số dưới 80 ms."],
  ["Âm học", "Đo mức SPL dBA, tách formant và ước lượng nền nhiễu theo thời gian thực."],
  ["Lặp ngắt quãng", "Lịch ôn tập SM-2 tính hoàn toàn offline trong SQLite."],
  ["Từ điển offline", "Chỉ mục nén dựng sẵn cho tra cứu dưới 20 ms khi không có mạng."],
  ["Kiến trúc offline-first", "Đồng bộ nội dung có thể gián đoạn, mọi tính năng dùng được khi mất mạng."],
];

export default function SkillPills() {
  const [active, setActive] = useState(null);
  const detail = SKILLS.find(([name]) => name === active)?.[1];

  return (
    <div className="space-y-space-xs pt-space-xs">
      <div className="flex items-center justify-between">
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
          NĂNG LỰC KỸ THUẬT (CHẠM ĐỂ XEM)
        </span>
        <span className="font-code-param text-code-param text-secondary">
          {detail ? `// ${detail}` : "Chạm vào một kỹ năng để xem chi tiết"}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 pt-1">
        {SKILLS.map(([name]) => (
          <button
            key={name}
            type="button"
            onClick={() => setActive(name)}
            className={
              "px-3 py-1.5 rounded font-code-telemetry text-code-telemetry transition-all cursor-pointer " +
              (active === name
                ? "bg-primary text-on-primary"
                : "bg-surface-container-high text-on-surface hover:bg-surface-bright")
            }
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
