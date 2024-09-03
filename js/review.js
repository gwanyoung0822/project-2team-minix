window.onload = function () {
  // 리뷰 스와이퍼
  var swReview = new Swiper(".sw-review", {
    slidesPerView: 3, // 한 번에 3개의 슬라이드 표시
    spaceBetween: 100, // 슬라이드 사이의 간격
    breakpoints: {
      1280: {
        spaceBetween: 100,
        slidesPerView: 3,
        scrollbar: {
          dragSize: 350, // dragSize를 210으로 설정
        },
      },
      1024: {
        spaceBetween: 60,
        slidesPerView: 3,
        scrollbar: {
          dragSize: 300, // dragSize를 210으로 설정
        },
      },
      768: {
        spaceBetween: 27,
        slidesPerView: 3,
        scrollbar: {
          dragSize: 250, // dragSize를 210으로 설정
        },
      },
      560: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      320: {
        spaceBetween: 20,
        slidesPerView: 1.5,
      },
    }, // 슬라이드 사이의 간격
    loop: true, // 슬라이드 반복 여부
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false, // 스크롤바 자동 숨김 비활성화
      draggable: true, // 스크롤바를 드래그할 수 있도록 설정
      dragSize: 350, // 드래그 가능한 스크롤바의 width 설정
    },
  });
};

// jQuery
$(document).ready(function () {});
