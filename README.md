# fe-lingocast-web-service

Trang giới thiệu **LingoCast** — ứng dụng học ngoại ngữ qua podcast, xử lý hoàn toàn trên thiết bị.

Next.js (App Router) + Tailwind CSS v4. Thiết kế theo hệ "Obsidian Telemetry" trong `docs/`.

## Chạy

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # bản production
```

## Sửa nội dung

Toàn bộ chữ về chủ sở hữu và ứng dụng nằm ở **`content/site.js`** — sửa một chỗ, cả 5 trang đổi theo.

## Ảnh demo

Copy ảnh chụp màn hình điện thoại vào `public/screenshots/` với tên `01.png`, `02.png`, `03.png`.
Không cần sửa code. Khi thiếu file, khung điện thoại hiện ô gợi ý thay vì ảnh vỡ.
Thêm ảnh thứ 4 trở đi: thêm một dòng vào mảng `SCREENSHOTS` trong `content/site.js`.

## Trang

| Route | Nội dung |
|-------|----------|
| `/` | Hero, ảnh demo, tính năng, benchmark, nguyên tắc |
| `/apps` | Thông số kỹ thuật LingoCast, ảnh demo, bảng kiểm chứng |
| `/lab` | Phổ giọng nói chạy thật trong trình duyệt (có thể bật micro) |
| `/about` | Giới thiệu, năng lực, dòng thời gian, liên hệ |
| `/blog` | Ghi chép kỹ thuật |
