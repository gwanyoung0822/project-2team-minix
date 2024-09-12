document.addEventListener("DOMContentLoaded", function () {
    AOS.init({});
      const bubbles = document.querySelector('.bubbles');
      const updateGap = () => {
          const width = bubbles.offsetWidth;
          const gap = width * 0.02; // 너비의 2%를 간격으로 설정
          bubbles.style.gap = `${gap}px`;
      };
      updateGap();
      window.addEventListener('resize', updateGap); // 창 크기 변경 시 간격 업데이트
    $(".scroll_btn").click(function () {
      // sec1_copy_wrap 요소를 선택합니다.
      const sec1CopyWrap = document.querySelector(".sec1_copy_wrap");
  
      // ec1_copy_wrap 요소의 최상단 위치를 계산합니다.
      const sec1CopyWrapTop = sec1CopyWrap.offsetTop;
      // sec1_copy_wrap 요소의 최상단으로 부드럽게 스크롤합니다.
      window.scrollTo({
        top: sec1CopyWrapTop,
        behavior: "smooth",
      });
    });
  });
  