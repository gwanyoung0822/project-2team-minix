window.onload = function () {
  // 리뷰 스와이퍼
  var swReview = new Swiper(".sw-review", {
    slidesPerView: 3, // 한 번에 3개의 슬라이드 표시
    spaceBetween: 100, // 슬라이드 사이의 간격
    loop: true, // 슬라이드 반복 여부
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false, // 스크롤바 자동 숨김 비활성화
    },
  });

  // 스와이퍼 요소 선택
  var swiperElement = document.querySelector('.swiper-scrollbar');

  // opacity 변경
  swiperElement.style.opacity = '1';
};

// jQuery
$(document).ready(function () {});
