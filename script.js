// 頁面載入後執行的程式
document.addEventListener("DOMContentLoaded", () => {
  // 設定版權年份自動顯示
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 簡易的表單送出監聽 (範例)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // 停止表單預設送出動作
      
      // 獲取表單資訊
      const nameValue = document.getElementById("name").value.trim();
      const emailValue = document.getElementById("email").value.trim();
      const messageValue = document.getElementById("message").value.trim();

      // 可以在此進行更多驗證或處理
      if (!nameValue || !emailValue) {
        alert("請填寫姓名與 Email！");
        return;
      }

      // 簡易彈出訊息示意 (實際應改以後端 API 送出郵件或寫入資料庫)
      alert(
        `感謝您的留言！\n\n姓名：${nameValue}\nEmail：${emailValue}\n留言內容：${messageValue}`
      );

      // 清空表單
      contactForm.reset();
    });
  }
});
