document.addEventListener("DOMContentLoaded", function () {
  AOS.init({});

  $(".scroll_btn").click(function () {
    // sec1_copy_wrap 요소를 선택합니다.
    const sec1CopyWrap = document.querySelector(".sec1_copy_wrap");

    // sec1_copy_wrap 요소의 최상단 위치를 계산합니다.
    const sec1CopyWrapTop = sec1CopyWrap.offsetTop;

    // sec1_copy_wrap 요소의 최상단으로 부드럽게 스크롤합니다.
    window.scrollTo({
      top: sec1CopyWrapTop,
      behavior: "smooth",
    });
  });
});
