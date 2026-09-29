# Ảnh của trang

Mỗi trang có thư mục riêng. Copy ảnh vào đúng đường dẫn dưới đây — không cần
sửa code. Khi thiếu file, chỗ đó hiện ô gạch đứt ghi rõ đường dẫn cần copy vào,
thay vì ảnh vỡ.

| Đường dẫn | Dùng ở | Tỉ lệ nên dùng |
|-----------|--------|----------------|
| `public/images/lab/hero.png`   | `/lab` — ảnh lớn đầu trang | ngang, ~1.83:1 |
| `public/images/about/hero.png` | `/about` — ảnh lớn đầu trang | ngang, ~16:9 |
| `public/images/blog/featured.png` | `/blog` — ảnh bài nổi bật | ngang, ~4:3 |

Ảnh chụp màn hình điện thoại của ứng dụng nằm riêng ở `public/screenshots/`.

Đổi đường dẫn: sửa `IMAGES` trong `content/site.js`.
Đổi alt text / gợi ý tỉ lệ: sửa `images` trong `content/i18n.js` (cả `vi` và `en`).
`.jpg`/`.webp` đều được — chỉ cần đổi đuôi trong `content/site.js` cho khớp.
