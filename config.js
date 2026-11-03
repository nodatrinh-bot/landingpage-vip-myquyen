// ==========================================
// CẤU HÌNH THÔNG TIN TRANG VIP LANDING PAGE
// Dễ dàng thay đổi thông tin theo nhu cầu của bạn
// ==========================================

const SITE_CONFIG = {
  // Thông tin chương trình & Giảng viên
  authorName: "Annie Mỹ Quyên",
  courseName: "Thử Thách 30 Triệu",
  pageTitle: "Nâng Cấp Trải Nghiệm VIP - Cùng Annie Mỹ Quyên",
  
  // Giá bán
  originalPrice: "13.797.000",
  vipPrice: "79.000",
  rawVipPrice: 79000,
  currency: "VNĐ",

  // Cấu hình thanh toán VietQR & Ngân hàng
  bankInfo: {
    bankId: "MB", // Mã ngân hàng VietQR: MB, VCB, TCB, ACB, VPB, TPB, BIDV, VIETINBANK,...
    bankName: "MBBank", // Tên hiển thị của ngân hàng
    accountNumber: "039139396868", // Số tài khoản của BẠN
    accountHolder: "NGO MY QUYEN", // Tên chủ tài khoản viết hoa không dấu
    transferPrefix: "VIP" // Cú pháp nội dung CK: VIP <Số điện thoại khách>
  },

  // Cấu hình thời gian đếm ngược (phút)
  countdownMinutes: 15,

  // Link liên hệ / hỗ trợ
  supportZalo: "https://zalo.me",
  supportPhone: "0988.xxx.xxx",
  
  // Webhook lưu thông tin khách hàng (tùy chọn: Google Sheets / Make.com / Telegram Bot / n8n)
  webhookUrl: "" 
};
