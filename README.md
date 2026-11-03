# HƯỚNG DẪN TRIỂN KHAI TOÀN BỘ WEBSITE MIỄN PHÍ 100% (0 ĐỒNG CHI PHÍ)

Bạn hoàn toàn **không cần trả bất kỳ chi phí nào** (không phí thuê nền tảng hàng tháng như LadiPage/GoHighLevel, không phí cổng thanh toán, không phí server lưu trữ):

| Thành phần | Giải pháp 0 đồng | Mô tả |
| :--- | :--- | :--- |
| **Giao diện & Mã nguồn** | Mã HTML + Tailwind CSS có sẵn | Tải siêu nhanh, chuẩn Mobile & Desktop |
| **Lưu thông tin khách hàng** | Google Sheets (Google Drive) | Tự động ghi nhận họ tên, SĐT, email vào Excel |
| **Cổng thanh toán** | VietQR tự động | Quét mã trả tiền thẳng vào tài khoản ngân hàng của bạn |
| **Hosting đưa web lên mạng** | Netlify / Cloudflare Pages / Vercel | Miễn phí vĩnh viễn, tặng kèm bảo mật SSL (HTTPS) |

---

## BƯỚC 1: Cấu hình thông tin cá nhân của bạn (1 phút)
Mở file `config.js` và chỉnh sửa lại:
* Số tài khoản ngân hàng (`accountNumber`)
* Tên ngân hàng (`bankId`: `MB`, `VCB`, `TCB`, `ACB`,...)
* Tên chủ tài khoản (`accountHolder`)
* Giá tiền bạn muốn bán (mặc định đang để `79.000 VNĐ`)

---

## BƯỚC 2: Kết nối Google Sheet để nhận đơn tự động (Miễn phí)
1. Tạo một trang tính mới tại [Google Sheets](https://sheets.google.com).
2. Bấm vào menu **Tiện ích mở rộng (Extensions)** -> chọn **Apps Script**.
3. Mở file [**`google_sheet_code.gs`**](file:///d:/Antigravity/google_sheet_code.gs) trong thư mục này, copy toàn bộ nội dung và dán đè vào Apps Script.
4. Bấm nút **Triển khai (Deploy)** ở góc trên bên phải -> chọn **Tùy chọn triển khai mới (New deployment)**.
5. Chọn loại **Ứng dụng web (Web app)**:
   * **Ai có quyền truy cập (Who has access):** Chọn **Bất kỳ ai (Anyone)**.
6. Bấm **Triển khai (Deploy)** -> Cấp quyền cho Google Tài khoản -> Copy đường link URL nhận được.
7. Dán link vừa copy vào dòng `webhookUrl: "..."` trong file `config.js`.

*Xong! Từ nay mỗi khi khách điền số điện thoại hoặc bấm "Tôi đã chuyển khoản xong", toàn bộ thông tin sẽ tự động nhảy vào Google Sheet của bạn ngay tức thì.*

---

## BƯỚC 3: Đưa website lên Internet miễn phí (Chỉ mất 1 phút)

### Cách đơn giản nhất: Dùng Netlify Drop (Không cần tạo tài khoản phức tạp)
1. Mở trình duyệt vào trang: **https://app.netlify.com/drop**
2. Kéo thả toàn bộ thư mục `D:\Antigravity` vào ô tải lên của Netlify.
3. Trong vòng 5 giây, trang web của bạn sẽ hoạt động trực tuyến với đường link dạng: `https://ten-ngau-nhien.netlify.app`.
4. Bạn có thể vào phần *Site settings* để đổi tên link theo ý muốn (ví dụ: `https://vip-anniemiquyen.netlify.app`), hoặc gắn tên miền riêng miễn phí bất kỳ lúc nào!

### Cách thay thế: Dùng Cloudflare Pages hoặc Vercel
* [Cloudflare Pages](https://pages.cloudflare.com): Băng thông không giới hạn, máy chủ cực nhanh tại Việt Nam.
* [Vercel](https://vercel.com): Tốc độ tải trang cao cấp thế giới.
