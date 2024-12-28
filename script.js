document.addEventListener("DOMContentLoaded", () => {
  // 自動更新頁尾年份
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 表單送出事件
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // 阻止預設送出

      const nameValue = document.getElementById("name").value.trim();
      const emailValue = document.getElementById("email").value.trim();
      const messageValue = document.getElementById("message").value.trim();

      // 簡易驗證
      if (!nameValue || !emailValue) {
        alert("請填寫姓名與 Email！");
        return;
      }

      alert(
        `感謝您的留言！\n\n姓名：${nameValue}\nEmail：${emailValue}\n留言內容：${messageValue}`
      );

      // 清空表單
      contactForm.reset();
    });
  }
});
