window.onload = function () {
  // 리뷰 스와이퍼
  var swReview = new Swiper(".sw-review", {
    slidesPerView: 3, // 한 번에 3개의 슬라이드 표시
    spaceBetween: 10, // 슬라이드 사이의 간격
    loop: true, // 슬라이드 반복 여부
    pagination: {
      // 하단의 페이징 설정
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      // 화살표 네비게이션 설정
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
// jQuery
$(document).ready(function () {});
