/**
 * HƯỚNG DẪN KẾT NỐI GOOGLE SHEET LƯU ĐƠN HÀNG TỰ ĐỘNG (MIỄN PHÍ 100%)
 * 
 * BƯỚC 1: Mở Google Trang tính (Google Sheets) mới tại: https://sheets.google.com
 * BƯỚC 2: Đặt tiêu đề hàng 1 cho bảng tính gồm các cột:
 *         A: Thời Gian | B: Trạng Thái | C: Họ Tên | D: Số Điện Thoại | E: Email | F: Khóa Học | G: Số Tiền | H: Nội Dung CK
 * BƯỚC 3: Trên thanh menu, chọn: Tiện ích mở rộng (Extensions) -> Apps Script
 * BƯỚC 4: Xóa toàn bộ mã cũ và dán toàn bộ đoạn mã bên dưới vào.
 * BƯỚC 5: Bấm nút "Triển khai" (Deploy) ở góc trên bên phải -> "Tùy chọn triển khai mới" (New deployment)
 *         - Loại: Chọn biểu tượng bánh răng -> "Ứng dụng web" (Web app)
 *         - Mô tả: Nhan don VIP
 *         - Người có quyền truy cập (Who has access): Chọn "Bất kỳ ai" (Anyone)
 *         - Bấm "Triển khai" (Deploy) -> Cấp quyền truy cập nếu Google hỏi.
 * BƯỚC 6: Sao chép đường link "URL ứng dụng web" (Web app URL) nhận được.
 * BƯỚC 7: Mở file config.js và dán link vào biến webhookUrl:
 *         webhookUrl: "https://script.google.com/macros/s/AKfycb.../exec"
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Nếu bảng tính chưa có tiêu đề thì tự tạo tiêu đề
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời Gian", 
        "Sự Kiện", 
        "Họ Và Tên", 
        "Số Điện Thoại", 
        "Email", 
        "Khóa Học", 
        "Số Tiền", 
        "Nội Dung Chuyển Khoản"
      ]);
      // Định dạng dòng tiêu đề in đậm
      sheet.getRange(1, 1, 1, 8).setFontWeight("bold").setBackground("#e2e8f0");
    }
    
    var eventLabel = (data.event === "payment_confirmed") ? "✅ ĐÃ BẤM ĐÃ CHUYỂN KHOẢN" : "📝 ĐIỀN FORM LẤY QR";
    
    // Ghi dữ liệu khách hàng vào dòng mới
    sheet.appendRow([
      data.time || new Date().toLocaleString("vi-VN"),
      eventLabel,
      data.name || "",
      "'" + (data.phone || ""), // Thêm dấu ' để không bị mất số 0 đầu
      data.email || "",
      data.course || "",
      data.price || "",
      data.memo || ""
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Webhook Google Apps Script đang hoạt động tốt!");
}
