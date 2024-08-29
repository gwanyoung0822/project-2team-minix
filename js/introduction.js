document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,  // 애니메이션 지속 시간 (밀리초)
    offset: 100,    // 애니메이션이 시작되는 오프셋
    once: true,     // 스크롤 시 애니메이션이 한 번만 발생하도록 설정
  });
});
