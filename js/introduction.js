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

let swiper; // Swiper 인스턴스를 저장할 변수

// Swiper 초기화 함수 업데이트
const initSwiper = () => {
  // 화면 크기가 768px 이하이고, Swiper 인스턴스가 없을 때 초기화
  if (window.innerWidth <= 768 && !swiper) {
    swiper = new Swiper(".swiper.sw-gallery", {
      slidesPerView: 1, // 한 번에 보여줄 슬라이드 수
      spaceBetween: 100, // 슬라이드 간의 간격
      loop: true, // 슬라이드가 끝나면 처음으로 돌아감
      pagination: {
        el: ".swiper-pagination", // 페이지네이션 요소
        clickable: true, // 페이지네이션 클릭 가능
      },
      navigation: {
        nextEl: ".swiper-button-next", // 다음 버튼 요소
        prevEl: ".swiper-button-prev", // 이전 버튼 요소
      },
      autoplay: {
        delay: 3000, // 자동 슬라이드 전환 지연 시간 (밀리초)
      },
      on: {
        slideChange: () => {
          // 슬라이드가 변경될 때 텍스트 업데이트
          const activeIndex = swiper.realIndex; // 현재 활성화된 슬라이드의 실제 인덱스
          updateActiveSubText(activeIndex); // 텍스트 업데이트 함수 호출
        },
      },
    });
  }
};

// Swiper 파괴 함수
const destroySwiper = () => {
  // Swiper 인스턴스가 있을 경우 파괴
  if (swiper) {
    swiper.destroy(true, true); // Swiper 인스턴스 파괴
    swiper = null; // 인스턴스 변수 초기화
  }
};

// 화면 크기 변화에 따른 Swiper 초기화 또는 파괴 (업데이트)
const handleResize = () => {
  const screenWidth = window.innerWidth; // 현재 화면 너비

  // 768px 이하일 경우 스와이퍼를 초기화, 이상일 경우 파괴
  if (screenWidth <= 768 && !swiper) {
    initSwiper(); // Swiper 초기화
  } else if (screenWidth > 768 && swiper) {
    destroySwiper(); // Swiper 파괴
  }
};

// 서브텍스트 클릭 시 해당 슬라이드로 이동 및 텍스트 업데이트
const setupSubTextClick = () => {
  document.querySelectorAll(".pp-det-txtwrap2 div").forEach((element, index) => {
    element.addEventListener("click", () => {
      swiper.slideTo(index); // 클릭한 서브텍스트에 해당하는 슬라이드로 이동
      updateActiveSubText(index); // 텍스트 업데이트 함수 호출
    });
  });
};

// 갤러리 아이템 초기화
const resetGalleryItems = () => {
  // 갤러리 아이템과 텍스트 아이템의 클래스 초기화
  galleryItems.forEach((item) => item.classList.remove("open", "paused"));
  textItems.forEach((item) => item.classList.remove("open-text", "shrink-text"));
};

// 갤러리 아이템에 마우스 오버 이벤트 추가
const setupGalleryHover = () => {
  galleryItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      resetGalleryItems(); // 모든 아이템 초기화
      const index = Array.from(galleryItems).indexOf(this); // 현재 마우스 오버된 아이템의 인덱스
      this.classList.add("open"); // 해당 아이템에 "open" 클래스 추가
      if (textItems[index]) {
        textItems[index].classList.add("open-text"); // 해당 텍스트 아이템에 "open-text" 클래스 추가
      }
      textItems.forEach((textItem, idx) => {
        if (idx !== index) textItem.classList.add("shrink-text"); // 다른 텍스트 아이템에 "shrink-text" 클래스 추가
      });
      galleryItems.forEach((i) => i.classList.add("paused")); // 모든 아이템에 "paused" 클래스 추가
      this.classList.remove("paused"); // 현재 아이템의 "paused" 클래스 제거
    });

    // 마우스 아웃 시 모든 아이템 초기화
    item.addEventListener("mouseout", resetGalleryItems);
  });
};

// 초기화 함수
const initEventListeners = () => {
  window.addEventListener("resize", handleResize); // 화면 크기 변화 이벤트 리스너 추가
  handleResize(); // 초기 호출로 Swiper 초기화
  setupSubTextClick(); // 서브텍스트 클릭 이벤트 설정
  setupGalleryHover(); // 갤러리 아이템 호버 이벤트 설정
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
    // 요소가 화면에 보이는 비율을 계산하는 함수
    const calculateVisibility = (element) => {
      var windowHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
      var elementOffset = $(element).offset().top;
      var elementHeight = $(element).outerHeight();

      // 요소가 화면에 보이는 비율 계산
      var visiblePart = Math.max(0, Math.min(elementHeight, scrollTop + windowHeight - elementOffset));
      return visiblePart / elementHeight;
    };

    // 텍스트 색상을 업데이트하는 함수
    const updateTextColor = () => {
      var scrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height();

      // 각 구역의 시작 위치 및 높이 계산
      var mainCopyStart = $('.main_copy').offset().top;
      var bbtnContainerStart = $('.footer').offset().top;

      // main_copy와 bbtn-container의 가시성을 계산
      var mainCopyVisibility = calculateVisibility('.main_copy');
      var bbtnVisibility = calculateVisibility('.footer');

      // 이벤트 참여 텍스트 요소
      var tooltipText = $('.tooltip-text');

      // .bbtn-container에 도달했을 때 흰색으로 변경
      if (scrollPosition + windowHeight >= bbtnContainerStart) {
        tooltipText.css('color', 'white');
      } 
      // .main_copy 영역에서는 검정색으로 변경
      else if (mainCopyVisibility > 0) {
        tooltipText.css('color', 'black');
      } 
      // 그 외는 기본적으로 흰색 유지
      else {
        tooltipText.css('color', 'white');
      }
    };

    // 스크롤 및 창 크기 변경 시 텍스트 색상 업데이트
    $(window).on('scroll resize', function () {
      updateTextColor();
    });

    // 페이지 로드 시 한 번 실행
    updateTextColor();
  });
});
