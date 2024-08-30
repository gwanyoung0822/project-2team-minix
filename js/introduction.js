document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
  }); 
  // 다음 섹션 이동
  $(".scroll_btn").click(function () {
    window.scrollTo({
      top: 2100,
      behavior: "smooth",
    });
  });
});
