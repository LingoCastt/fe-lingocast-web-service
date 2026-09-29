"use client";

import { useState } from "react";

const FILTERS = ["tất cả", "dsp", "ml", "thuật toán", "hiệu năng", "devops"];

const FEATURED_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD6-BJ4zGm2lts3kOSf3_7fAsIIYllTaVcNZeXnP2ZE7daRtbsqhbZOBAreMVzOmtpfHGC4WItG3DR7nkeujf_CtPYiBuaM67k4_xNwwP-RkRScW58MBjNALxXM1_wYpquTAcymMS8yoIVIQ54AAg2sKLj6e4nwsGOjnIbYAsm6yt63-br-mCFFDtKCoMmVCTJG7SUF0fxcLRq48BwW7jcCOo3o14igeyGbSTBbmPUZTJLMBVkeeCI9ZzMeMMKCNd0jYA";

const CARD =
  "flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all group shadow-md hover:shadow-xl";
const TAG = "px-2 py-0.5 rounded bg-surface-container text-on-surface-variant uppercase";

/** Each card's inline instrument graphic — the visual signature of its subject. */
const VISUALS = {
  sonar: (
    <div className="w-full h-16 bg-surface-container-lowest rounded p-2 flex items-center justify-center overflow-hidden">
      <svg className="w-full h-full text-secondary" preserveAspectRatio="none" viewBox="0 0 200 40">
        <path
          d="M0,20 Q10,5 20,20 T40,20 T60,20 T80,20 T100,5 T120,35 T140,20 T160,20 T180,20 T200,20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          className="opacity-40"
          d="M0,20 Q10,23 20,20 T40,20 T60,20 T80,20 T100,20 T120,20 T140,20 T160,20 T180,20 T200,20"
          fill="none"
          stroke="currentColor"
          strokeDasharray="2,2"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  ),
  vectors: (
    <div className="w-full h-16 bg-surface-container-lowest rounded p-2 flex items-center justify-between gap-1 overflow-hidden">
      {[84, 38, 62, 95, 12, 48, 77, 29].map((h, i) => (
        <div key={i} className="h-full flex-1 bg-surface-container flex flex-col justify-end p-0.5">
          <div className="w-full bg-secondary" style={{ height: `${h}%` }} />
        </div>
      ))}
    </div>
  ),
  terminal: (
    <div className="w-full h-16 bg-surface-container-lowest rounded p-2 flex flex-col justify-center font-code-param text-code-param text-on-surface-variant/80">
      <span className="text-secondary">const analyser = ctx.createAnalyser();</span>
      <span>analyser.fftSize = 2048; // zero-copy</span>
      <span>gl.bindBuffer(gl.ARRAY_BUFFER, pbo);</span>
    </div>
  ),
  battery: (
    <div className="w-full h-16 bg-surface-container-lowest rounded p-2 flex items-center justify-center">
      <svg className="w-full h-full text-secondary" viewBox="0 0 200 40">
        <line stroke="currentColor" strokeWidth="1.5" x1="0" x2="200" y1="5" y2="35" />
        <circle cx="50" cy="12.5" fill="#4ae176" r="2.5" />
        <circle cx="100" cy="20" fill="#4ae176" r="2.5" />
        <circle cx="150" cy="27.5" fill="#4ae176" r="2.5" />
        <text className="font-code-param text-[8px]" fill="#8e9192" x="105" y="16">
          0.38% / hr
        </text>
      </svg>
    </div>
  ),
  pipeline: (
    <div className="w-full h-16 bg-surface-container-lowest rounded p-2 flex items-center justify-between px-4">
      {[
        ["commit", "TAG"],
        ["rule", "FASTLANE"],
        ["verified", "DUAL_RELEASE"],
      ].map(([icon, label], i) => (
        <span key={label} className="contents">
          {i > 0 && <span className="h-0.5 flex-1 bg-surface-container mx-2" />}
          <span className="flex flex-col items-center">
            <span className="material-symbols-outlined text-[16px] text-secondary">{icon}</span>
            <span className="font-code-param text-[8px] text-on-surface-variant">{label}</span>
          </span>
        </span>
      ))}
    </div>
  ),
};

const POSTS = [
  {
    ref: "BÀI #02 // ÂM HỌC",
    date: "2026-08-18 • 20 phút",
    title: "Dò ranh giới câu bằng đường bao năng lượng",
    visual: "sonar",
    abstract:
      "Khoảng lặng giữa hai câu ngắn hơn bạn tưởng. Cách LingoCast đặt ngưỡng trên đường bao RMS để cắt câu mà không cắt nhầm giữa từ.",
    tags: ["dsp", "âm học"],
    metric: "NGƯỠNG: -42 dB",
    categories: ["dsp"],
  },
  {
    ref: "BÀI #03 // NHẬN DẠNG",
    date: "2026-08-11 • 19 phút",
    title: "Chạy Whisper lượng tử hoá ngay trên điện thoại",
    visual: "vectors",
    abstract:
      "Nén mô hình nhận dạng giọng nói xuống int8 để chạy trên NPU, giữ 310 ms cho mỗi 30 giây audio mà không gửi gì lên máy chủ.",
    tags: ["ml", "hiệu năng"],
    metric: "310 ms / 30s AUDIO",
    categories: ["ml", "hiệu năng"],
  },
  {
    ref: "BÀI #04 // CĂN CHỈNH",
    date: "2026-08-04 • 18 phút",
    title: "Dynamic time warping để transcript khớp với tai người nghe",
    visual: "terminal",
    abstract:
      "Chia đều transcript theo thời lượng là cách sai. Ghi lại quá trình đưa sai số căn câu từ vài giây xuống 62 ms bằng DTW trên sóng âm.",
    tags: ["dsp", "thuật toán"],
    metric: "SAI SỐ: 62 ms",
    categories: ["dsp", "thuật toán"],
  },
  {
    ref: "BÀI #05 // PIN",
    date: "2026-07-27 • 19 phút",
    title: "Nghe podcast một tiếng tốn bao nhiêu pin",
    visual: "battery",
    abstract:
      "Bốn máy để trên bàn, tắt màn hình, đo năm tuần liền để biết nhận dạng giọng nói trên máy thực sự tốn bao nhiêu phần trăm pin mỗi giờ.",
    tags: ["hiệu năng", "đo đạc"],
    metric: "0.38% / GIỜ",
    categories: ["hiệu năng"],
  },
  {
    ref: "BÀI #06 // PHÁT HÀNH",
    date: "2026-07-18 • 18 phút",
    title: "Một người phát hành lên hai cửa hàng trong cùng một ngày",
    visual: "pipeline",
    abstract:
      "Quy trình dựng bản và nộp App Store lẫn Google Play cùng ngày khi chỉ có một người làm, kèm số liệu thời gian duyệt thực tế.",
    tags: ["mobile", "devops"],
    metric: "CHÊNH LỆCH: 4.8 GIỜ",
    categories: ["devops"],
  },
];

export default function Dispatches() {
  const [filter, setFilter] = useState("tất cả");
  const matches = (cats) => filter === "tất cả" || cats.includes(filter);
  const visible = POSTS.filter((p) => matches(p.categories));
  const featuredVisible = matches(["dsp", "thuật toán"]);

  return (
    <>
      <div className="mt-space-md flex flex-wrap items-center gap-space-xs">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={
              "px-space-md py-1.5 rounded-full font-code-telemetry text-code-telemetry font-medium transition-all capitalize " +
              (filter === f
                ? "bg-primary text-on-primary"
                : "bg-surface-container-high text-on-surface-variant hover:text-primary")
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Featured essay */}
      {featuredVisible && (
        <article className="mt-space-xl group relative overflow-hidden rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[440px] overflow-hidden bg-surface-container-lowest flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Biểu đồ phổ giọng nói dùng để căn chỉnh transcript"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-95 group-hover:scale-[1.02] transition-all duration-500"
                src={FEATURED_IMG}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-surface-container-low pointer-events-none" />
              <div className="absolute top-space-md left-space-md flex flex-col gap-1 bg-surface-container-lowest/80 backdrop-blur-md p-space-sm rounded font-code-param text-code-param text-on-surface-variant">
                <span className="flex items-center gap-1.5 text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                  MẪU ĐO: 5 PODCAST · 12 GIỜ
                </span>
                <span>CỬA SỔ: HANNING 512</span>
                <span>NỀN NHIỄU: -61.8 dB</span>
              </div>
              <div className="absolute bottom-space-md right-space-md hidden sm:block p-space-xs rounded bg-surface-container-lowest/85 backdrop-blur-md">
                <svg className="text-secondary/60" height="68" viewBox="0 0 68 68" width="68">
                  <circle
                    cx="34"
                    cy="34"
                    fill="none"
                    r="30"
                    stroke="currentColor"
                    strokeDasharray="2,3"
                    strokeWidth="0.75"
                  />
                  <circle
                    cx="34"
                    cy="34"
                    fill="none"
                    r="18"
                    stroke="currentColor"
                    strokeDasharray="1,2"
                    strokeWidth="0.75"
                  />
                  <line stroke="currentColor" strokeWidth="0.5" x1="34" x2="34" y1="4" y2="64" />
                  <line stroke="currentColor" strokeWidth="0.5" x1="4" x2="64" y1="34" y2="34" />
                  <circle cx="48" cy="24" fill="#4ae176" r="2.5" />
                </svg>
              </div>
            </div>

            <div className="lg:col-span-5 p-space-md lg:p-space-xl flex flex-col justify-between gap-space-lg">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between gap-space-sm font-code-param text-code-param">
                  <div className="flex items-center gap-2 text-secondary font-semibold">
                    <span className="material-symbols-outlined text-[15px]">biotech</span>
                    <span>BÀI NỔI BẬT #01</span>
                  </div>
                  <div className="text-on-surface-variant">2026-08-25 • 21 PHÚT</div>
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-semibold text-primary tracking-tight group-hover:text-secondary transition-colors">
                  Vì sao transcript tự động luôn lệch, và cách sửa
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant font-normal leading-relaxed">
                  Đo 12 giờ podcast trên năm thiết bị để tìm ra nguồn gốc độ lệch giữa transcript
                  và audio, rồi đưa sai số trung bình xuống còn 62 ms.
                </p>
                <div className="p-space-sm rounded bg-surface-container flex items-center justify-between font-code-param text-code-param">
                  {[
                    ["SAI SỐ TRUNG BÌNH:", "62 ms", false],
                    ["ĐỘ TIN CẬY:", "96.2%", false],
                    ["CÂU ĐÃ CĂN:", "12.4M", true],
                  ].map(([label, value, accent]) => (
                    <div key={label}>
                      <span className="text-on-surface-variant block">{label}</span>
                      <span
                        className={`font-code-telemetry text-code-telemetry font-semibold ${
                          accent ? "text-secondary" : "text-primary"
                        }`}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-space-md flex flex-wrap items-center justify-between gap-space-md">
                <div className="flex flex-wrap items-center gap-1.5">
                  {["dsp", "lingocast", "thuật toán"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-code-param text-code-param uppercase"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 font-code-telemetry text-code-telemetry font-semibold text-primary group-hover:text-secondary transition-colors"
                >
                  <span>Đọc bài</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* All papers */}
      <div className="mt-space-xl">
        <div className="flex items-center justify-between pb-space-md mb-space-lg">
          <div className="flex items-center gap-space-sm font-code-param text-code-param text-on-surface-variant">
            <span className="material-symbols-outlined text-secondary text-[16px]">folder_data</span>
            <span className="uppercase tracking-widest text-primary font-semibold">
              TẤT CẢ BÀI VIẾT
            </span>
          </div>
          <div className="font-code-param text-code-param text-on-surface-variant">
            SẮP XẾP: MỚI NHẤT
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {visible.map((post) => (
            <article key={post.ref} className={CARD}>
              <div className="space-y-space-md">
                <div className="flex items-center justify-between font-code-param text-code-param text-on-surface-variant">
                  <span className="text-secondary font-semibold">{post.ref}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-headline-md text-headline-md font-semibold text-primary group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                {VISUALS[post.visual]}
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {post.abstract}
                </p>
              </div>
              <div className="pt-space-lg space-y-space-md">
                <div className="flex flex-wrap items-center gap-1.5 font-code-param text-code-param">
                  {post.tags.map((tag) => (
                    <span key={tag} className={TAG}>
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-space-xs font-code-param text-code-param">
                  <span className="text-on-surface-variant">{post.metric}</span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-primary group-hover:text-secondary transition-colors font-medium"
                  >
                    <span>Đọc tiếp</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          ))}

          <div className="flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest/60 border border-outline-variant/30">
            <div className="space-y-space-sm">
              <div className="flex items-center gap-2 text-on-surface-variant font-code-param text-code-param">
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
                <span>MÃ NGUỒN MỞ</span>
              </div>
              <h4 className="font-headline-md text-headline-md font-semibold text-primary">
                Kho mã để tái lập kết quả
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every formula, Allan variance CSV data dump, and 19 kHz audio test loop is published
                to our GitHub mirrors under the Zero-Clause BSD license.
              </p>
            </div>
            <div className="pt-space-md flex items-center justify-between font-code-telemetry text-code-telemetry">
              <span className="text-secondary font-semibold">TÁI LẬP ĐƯỢC 100%</span>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-primary hover:text-secondary transition-colors"
              >
                <span>github.com/LingoCastt</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
