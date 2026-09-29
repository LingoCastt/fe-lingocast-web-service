// Single source of truth for everything the site says about the studio and the app.
// Edit here — every page reads from this file.

export const OWNER = {
  name: "NGUYỄN CAO PHONG",
  monogram: "NCP",
  role: "Kỹ sư di động · âm thanh · xử lý tín hiệu",
  tagline:
    "Học ngoại ngữ qua podcast thật — toàn bộ xử lý chạy trên máy, không theo dõi, không quảng cáo.",
  location: "10.7769° N, 106.7009° E",
  email: "nguyencaophong.ptit@gmail.com",
  founded: 2023,
};

export const APP = {
  name: "LingoCast",
  status: "LIVE",
  tagline: "Nghe podcast thật. Hiểu từng câu.",
  short: "Học ngoại ngữ qua podcast",
  description:
    "Nghe podcast bản ngữ với transcript chạy theo từng câu. Chạm vào bất kỳ từ nào để tra nghĩa ngay tại chỗ, lưu vào sổ từ, và ôn lại bằng lặp lại ngắt quãng. Nhận dạng và căn chỉnh transcript chạy trực tiếp trên thiết bị — không gửi audio lên máy chủ.",
  platforms: ["iOS", "Android"],
  stack: ["Swift", "Kotlin", "AVAudioEngine", "Whisper on-device", "SQLite"],
  metrics: [
    ["CÂU ĐÃ CĂN CHỈNH", "12.4M"],
    ["ĐỘ TRỄ TRA TỪ", "18 ms"],
    ["AUDIO GỬI LÊN MÁY CHỦ", "0 KB"],
  ],
  features: [
    ["graphic_eq", "Transcript căn theo câu", "Nhận dạng giọng nói trên thiết bị căn từng câu với sóng âm, sai số dưới 80 ms."],
    ["translate", "Tra từ tại chỗ", "Chạm vào một từ để xem nghĩa, phiên âm và ví dụ mà không rời màn hình nghe."],
    ["repeat", "Lặp câu & chỉnh tốc độ", "Tua lại đúng một câu, đổi tốc độ 0.5×–2× mà không biến dạng cao độ."],
    ["style", "Sổ từ lặp ngắt quãng", "Từ đã lưu quay lại đúng lúc sắp quên, xếp lịch hoàn toàn offline."],
    ["cloud_off", "Nghe ngoại tuyến", "Tải tập podcast kèm transcript, dùng trọn vẹn khi không có mạng."],
    ["lock", "Không tài khoản, không theo dõi", "Không đăng nhập, không SDK phân tích, không hồ sơ quảng cáo."],
  ],
  audit: {
    platform: "iOS · Android",
    network: "Chỉ tải podcast (RSS công khai)",
    sensors: "Micro (luyện phát âm, xử lý tại chỗ)",
    storage: "24.6 MB Binary",
    distribution: "Production v1.0",
  },
};

// Ảnh demo: copy ảnh chụp màn hình điện thoại vào public/screenshots/
// với đúng tên file bên dưới (01.png, 02.png, 03.png). Không cần sửa code.
// Thêm ảnh thứ 4 trở đi: thêm một dòng vào mảng này.
export const SCREENSHOTS = [
  {
    src: "/screenshots/01.png",
    title: "Trình nghe & transcript",
    caption: "Transcript chạy theo câu, chạm để tra từ ngay khi đang nghe.",
  },
  {
    src: "/screenshots/02.png",
    title: "Sổ từ",
    caption: "Từ đã lưu kèm ngữ cảnh câu gốc, ôn theo lịch lặp ngắt quãng.",
  },
  {
    src: "/screenshots/03.png",
    title: "Thư viện ngoại tuyến",
    caption: "Tập đã tải về kèm transcript, nghe trọn vẹn khi không có mạng.",
  },
];
