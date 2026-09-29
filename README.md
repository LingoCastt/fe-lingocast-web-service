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

| File | Chứa gì |
|------|---------|
| `content/i18n.js` | **Toàn bộ câu chữ**, cả `vi` và `en`. Sửa một chỗ, cả 5 trang đổi theo. |
| `content/site.js` | Cấu hình không phụ thuộc ngôn ngữ: tên riêng, email, đường dẫn ảnh, stack. |

Hai từ điển `vi` và `en` phải luôn cùng cấu trúc (cùng khoá, mảng cùng độ dài).

## Giao diện sáng / tối

Nút trên header chuyển sáng ↔ tối và ghi nhớ trong `localStorage`. Lần đầu vào,
trang theo thiết lập hệ thống. Bảng màu tối lấy nguyên từ `docs/`; bảng sáng nằm
ở `:root` trong `app/globals.css`.

## Ngôn ngữ

Nút `VI` / `EN` trên header, lựa chọn được ghi nhớ trong `localStorage`.

## Ảnh

| Thư mục | Dùng cho |
|---------|----------|
| `public/screenshots/` | Ảnh chụp màn hình điện thoại (`01.jpg`, `02.jpg`, `03.jpg`) |
| `public/images/lab/` | Ảnh lớn đầu trang `/lab` |
| `public/images/about/` | Ảnh lớn đầu trang `/about` |
| `public/images/blog/` | Ảnh bài nổi bật trang `/blog` |

Cứ copy file vào đúng đường dẫn — không cần sửa code. Khi thiếu file, chỗ đó hiện
ô gạch đứt ghi rõ đường dẫn cần copy vào, thay vì ảnh vỡ. Chi tiết ở README trong
từng thư mục.

## Trang

| Route | Nội dung |
|-------|----------|
| `/` | Hero, ảnh demo, tính năng, benchmark, nguyên tắc |
| `/apps` | Thông số kỹ thuật LingoCast, ảnh demo, bảng kiểm chứng |
| `/lab` | Phổ giọng nói chạy thật trong trình duyệt (có thể bật micro) |
| `/about` | Giới thiệu, năng lực, dòng thời gian, liên hệ |
| `/blog` | Ghi chép kỹ thuật |
