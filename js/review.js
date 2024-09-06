window.onload = function () {
  // 리뷰 스와이퍼
  var swReview = new Swiper(".sw-review", {
    slidesPerView: 3, // 한 번에 3개의 슬라이드 표시
    spaceBetween: 100, // 슬라이드 사이의 간격
    loop: true, // 슬라이드 반복 여부
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false, // 스크롤바 자동 숨김 비활성화
      draggable: true, // 스크롤바를 드래그할 수 있도록 설정
      dragSize: 350, // 기본 드래그 사이즈
    },
    breakpoints: {
      1280: {
        slidesPerView: 3, // 1280px 이상일 때 한 번에 3개의 슬라이드 표시
        spaceBetween: 100, // 슬라이드 간격 100px
        scrollbar: {
          dragSize: 350,
        },
      },
      1024: {
        slidesPerView: 3, // 1024px 이상일 때 한 번에 3개의 슬라이드 표시
        spaceBetween: 60, // 슬라이드 간격 60px
        scrollbar: {
          dragSize: 300,
        },
      },
      768: {
        slidesPerView: 2.5, // 768px 이상일 때 한 번에 2.5개의 슬라이드 표시
        spaceBetween: 30, // 슬라이드 간격 30px
        scrollbar: {
          dragSize: 250,
        },
      },
      580: {
        slidesPerView: 2, // 580px 이상일 때 한 번에 2개의 슬라이드 표시
        spaceBetween: 20, // 슬라이드 간격 20px
        scrollbar: {
          dragSize: 200,
        },
      },
      410: {
        slidesPerView: 1.7, // 410px 이상일 때 한 번에 1.7개의 슬라이드 표시
        spaceBetween: 20, // 슬라이드 간격 15px
        scrollbar: {
          dragSize: 180,
        },
      },
      320: {
        slidesPerView: 1.2, // 320px 이상일 때 한 번에 1.2개의 슬라이드 표시
        spaceBetween: 15, // 슬라이드 간격 10px
        scrollbar: {
          dragSize: 150,
        },
      },
    },
  });
};


// jQuery
$(document).ready(function () {});
