# Ảnh demo LingoCast

Copy ảnh chụp màn hình từ điện thoại vào đúng thư mục này với tên:

- `01.jpg` — Trình nghe & transcript
- `02.jpg` — Sổ từ
- `03.jpg` — Thư viện ngoại tuyến

Không cần sửa code. Trang sẽ tự hiển thị; khi thiếu file, khung điện thoại
hiện ô gợi ý thay vì ảnh vỡ.

Thêm ảnh thứ 4 trở đi: thêm đường dẫn vào `SCREENSHOTS` trong `content/site.js`,
và thêm một cặp [tiêu đề, chú thích] vào `screenshots` trong `content/i18n.js`
(cả `vi` lẫn `en` — hai mảng phải cùng độ dài).

Ảnh nên là ảnh chụp màn hình dọc (tỉ lệ ~9:19.5). Đổi đuôi file (`.png`/`.jpg`)
thì sửa `SCREENSHOTS` trong `content/site.js` cho khớp.
