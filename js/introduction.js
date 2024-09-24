document.addEventListener("DOMContentLoaded", function () {
  AOS.init({});
  const galleryItems = document.querySelectorAll(".gallery li");
  const textItems = document.querySelectorAll(".pp-det-txtwrap > div");
  const bubbles = document.querySelector(".bubbles");
  const updateGap = () => {
    const width = bubbles.offsetWidth;
    const gap = width * 0.02; // 너비의 2%를 간격으로 설정
    bubbles.style.gap = `${gap}px`;
  };
  updateGap();
  window.addEventListener("resize", updateGap); // 창 크기 변경 시 간격 업데이트
  $(".next-sec-btn2").click(function () {
    const compareWrap = document.querySelector(".main_copy");
    const compareWrapTop = compareWrap.offsetTop;
    window.scrollTo({
      top: compareWrapTop,
      behavior: "smooth",
    });
  });
  // =================================== 갤러리 ====================================================
  let swiper;
  // Swiper 초기화 함수 업데이트
  const initSwiper = () => {
    if (window.innerWidth <= 768 && !swiper) {
      swiper = new Swiper(".swiper.sw-gallery", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
        },
        on: {
          slideChange: () => {
            const activeIndex = swiper.realIndex; // 슬라이드가 변경될 때 실제 인덱스
            updateActiveSubText(activeIndex); // 슬라이드에 맞는 텍스트 활성화
          },
        },
      });
    }
  };
  
  // 활성화된 서브텍스트 업데이트 함수
  const updateActiveSubText = (currentIndex) => {
    const subTextElements = document.querySelectorAll(".pp-det-txtwrap2 div");
    subTextElements.forEach((txt, index) => {
      txt.classList.toggle("active", index === currentIndex);
      txt.classList.toggle("inactive", index !== currentIndex);
    });
  };
  
  // Swiper 파괴 함수
  const destroySwiper = () => {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  };
  
  // 화면 크기 변화에 따른 Swiper 초기화 또는 파괴
  const handleResize = () => {
    const screenWidth = window.innerWidth;
  
    // 768px 이하일 경우 스와이퍼를 초기화, 이상일 경우 파괴
    if (screenWidth <= 768 && !swiper) {
      initSwiper();
    } else if (screenWidth > 768 && swiper) {
      destroySwiper();
    }
  };
  
  // 서브텍스트 클릭 시 해당 슬라이드로 이동 및 텍스트 업데이트
  const setupSubTextClick = () => {
    const subTextElements = document.querySelectorAll(".pp-det-txtwrap2 div");
    subTextElements.forEach((element, index) => {
      element.addEventListener("click", () => {
        swiper.slideTo(index); // 클릭한 서브텍스트의 인덱스로 슬라이드 이동
        updateActiveSubText(index); // 활성화된 텍스트 업데이트
      });
  };
  
  // 갤러리 아이템 초기화
  const resetGalleryItems = () => {
    galleryItems.forEach((item) => item.classList.remove("open", "paused"));
    textItems.forEach((item) =>
      item.classList.remove("open-text", "shrink-text")
    );
  };
  
  // 초기화 함수
  const initEventListeners = () => {
    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 호출
    setupSubTextClick();
  };
  
  // 이벤트 리스너 초기화
  initEventListeners();
  
  // =================================== 갤러리 ====================================================

  /**
   * 숫자 애니메이션 함수
   * @param {HTMLElement} element - 애니메이션을 적용할 요소
   * @param {number} start - 시작 값
   * @param {number} end - 종료 값
   * @param {number} duration - 애니메이션 지속 시간 (밀리초)
   * @param {number} decimals - 소수점 자릿수
   */
  function animateValue(element, start, end, duration, decimals = 0) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      let value = progress * (end - start) + start;
      if (decimals > 0) {
        value = value.toFixed(decimals);
      } else {
        value = Math.floor(value);
      }
      element.innerText = parseFloat(value).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  /**
   * 반복적으로 숫자 카운터 애니메이션을 적용하는 함수
   * @param {HTMLElement} element - 애니메이션을 적용할 요소
   * @param {number} max - 최대값 (종료 값)
   */
  function counter(element, max) {
    let now = max;

    const handle = setInterval(() => {
      element.innerHTML = Math.ceil(max - now).toLocaleString();

      // 목표수치에 도달하면 정지
      if (now < 1) {
        clearInterval(handle);
      }

      // 증가되는 값이 계속하여 작아짐
      const step = now / 10;

      // 값을 적용시키면서 다음 차례에 영향을 끼침
      now -= step;
    }, 60);
  }

  /**
   * 모든 숫자 요소에 애니메이션 적용
   */
  function startAnimations() {
    // 누적 판매량 애니메이션
    const salesElement = document.querySelector(".det2-main1-1 .number");
    animateValue(salesElement, 0, 125000, 2000);

    // 판매율 애니메이션 (예: 17)
    const rateElement = document.querySelector(".det2-main1-2 .number");
    animateValue(rateElement, 10, 17, 2000);

    // 누적 리뷰수 애니메이션
    const reviewsElement = document.querySelector(".det2-main2-1 .number");
    animateValue(reviewsElement, 0, 38344, 2000);

    // 네이버 고객 만족도 애니메이션 (예: 4.9)
    const satisfactionElement = document.querySelector(".det2-main2-2 .number");
    animateValue(satisfactionElement, 1.4, 4.9, 2000, 1);

    // 추가적으로 counter 함수 적용 예시
    const counterElement1 = document.querySelector(".det2-main1-1 .number");
    counter(counterElement1, 125000);

    const counterElement2 = document.querySelector(".det2-main1-2 .number");
    counter(counterElement2, 17);

    const counterElement3 = document.querySelector(".det2-main2-1 .number");
    counter(counterElement3, 38344);

    const counterElement4 = document.querySelector(".det2-main2-2 .number");
    counter(counterElement4, 4.9);
  }

  window.onload = function () {
    startAnimations();
    // 애니메이션을 10초 간격으로 반복 실행
    setInterval(startAnimations, 10000);
  };
   $(document).ready(function () {
    $(window).on('scroll', function () {
      // 현재 스크롤 위치 가져오기
      var scrollPosition = $(window).scrollTop();

      // .main_copy의 시작 위치 계산
      var mainCopyStart = $('.main_copy').offset().top;

      // 이벤트 참여 텍스트 요소 가져오기
      var tooltipText = $('.tooltip-text');

      // 스크롤 위치가 main_copy 구역에 도달하기 전까지는 흰색, 이후로는 검정색
      if (scrollPosition < mainCopyStart) {
        tooltipText.css('color', 'white'); // 흰색으로 변경
      } else {
        tooltipText.css('color', 'black'); // 검정색으로 변경
      }
    });
  });
});
