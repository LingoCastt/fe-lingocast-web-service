// Cấu hình KHÔNG phụ thuộc ngôn ngữ (tên riêng, đường dẫn, thông số kỹ thuật).
// Mọi câu chữ nằm ở content/i18n.js.

export const OWNER = {
  name: "NGUYỄN CAO PHONG",
  monogram: "NCP",
  email: "nguyencaophong.ptit@gmail.com",
  location: "10.7769° N, 106.7009° E",
  github: "github.com/LingoCastt",
  founded: 2023,
};

export const APP = {
  name: "LingoCast",
  version: "v1.0",
  platforms: ["iOS", "Android"],
  stack: ["Swift", "Kotlin", "AVAudioEngine", "Whisper on-device", "SQLite"],
  // Số đo dùng chung cho mọi ngôn ngữ; nhãn nằm ở i18n.
  metrics: ["12.4M", "18 ms", "0 KB"],
  featureIcons: ["graphic_eq", "translate", "repeat", "style", "cloud_off", "lock"],
};

// Ảnh chụp màn hình điện thoại — copy file vào public/screenshots/
// (xem public/screenshots/README.md). Chú thích nằm ở i18n.js.
export const SCREENSHOTS = [
  "/screenshots/01.png",
  "/screenshots/02.png",
  "/screenshots/03.png",
];

// Ảnh minh hoạ từng trang — copy file vào public/images/<trang>/
// (xem public/images/README.md). Alt text nằm ở i18n.js.
export const IMAGES = {
  labHero: "/images/lab/hero.png",
  aboutHero: "/images/about/hero.png",
  blogFeatured: "/images/blog/featured.png",
};
