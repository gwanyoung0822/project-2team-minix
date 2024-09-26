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

  // Swiper 슬라이더 설정
  const swswiper = new Swiper(".swiper.sw-gallery", {
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
      delay: 2000, // 자동 슬라이드 전환 지연 시간 (밀리초)
    },
    // 768px 이하일 때만 Swiper가 작동
    breakpoints: {
      768: {
        slidesPerView: 1, // 한 번에 1개 슬라이드
        spaceBetween: 20, // 간격을 더 줄임
        loop: true, // 루프 유지
      },
    },
  });

  // 갤러리 아이템 및 텍스트 아이템의 DOM 요소를 가져오기
  const galleryItems1 = document.querySelectorAll(".gallery li");
  const textItems1 = document.querySelectorAll(".pp-det-txtwrap");

  // 서브텍스트 클릭 시 해당 슬라이드로 이동 및 텍스트 업데이트
  const setupSubTextClick = () => {
    document.querySelectorAll(".pp-det-txtwrap2 div").forEach((element, index) => {
      element.addEventListener("click", () => {
        swswiper.slideTo(index); // 클릭한 서브텍스트에 해당하는 슬라이드로 이동
        updateActiveSubText(index); // 텍스트 업데이트 함수 호출
      });
    });
  };

  // 갤러리 아이템 초기화
  const resetGalleryItems = () => {
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
      item.addEventListener("mouseout", resetGalleryItems); // 마우스 아웃 시 초기화
    });
  };

  // 화면 크기에 따라 Swiper와 갤러리 애니메이션 제어
  const handleResize = () => {
    const viewportWidth = window.innerWidth;

    if (viewportWidth >= 768) {
      // 768px 이상일 때 Swiper 비활성화 및 갤러리 애니메이션 활성화
      swswiper.autoplay.stop(); // Swiper 자동 전환 중지
      document.querySelector(".swiper.sw-gallery").classList.remove("swiper-initialized"); // Swiper CSS 클래스 제거
      setupGalleryHover(); // 갤러리 호버 애니메이션 활성화
    } else {
      // 768px 이하일 때 Swiper 활성화
      if (!swswiper.autoplay.running) {
        swswiper.autoplay.start(); // Swiper 자동 전환 재시작
      }
      resetGalleryItems(); // 갤러리 초기화
    }
  };

  // 초기화 함수
  const initEventListeners = () => {
    window.addEventListener("resize", handleResize); // 화면 크기 변화 시 처리
    handleResize(); // 초기 화면 크기에 맞게 Swiper 및 갤러리 설정
    setupSubTextClick(); // 서브텍스트 클릭 이벤트 설정
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
  $(window).scroll(function () {
    if ($(".tooltip-text").offset().top >= $(".main_copy").offset().top && $(".tooltip-text").offset().top <= $(".pp-det-bg").offset().top){
      $(".tooltip-text").css("color", "black");
    }
    else if ($(".tooltip-text").offset().top >= $(".det2-top").offset().top && $(".tooltip-text").offset().top <= $(".footer").offset().top){
      $(".tooltip-text").css("color", "black");
    } 
    else if ($(".tooltip-text").offset().top >= $(".det2-top").offset().top && $(".tooltip-text").offset().top <= $(".footer-tab").offset().top) {
      $(".tooltip-text").css("color", "black");
    } else {
      $(".tooltip-text").css("color", "white");
    }
  });
});
$(document).ready(function () {
  // bbtn-container를 클릭했을 때
  $(".bbtn-container").click(function () {
    // 해당 링크로 이동
    window.location.href = "product_page.html";
  });
  $(".bbtn-container2").click(function () {
    // 해당 링크로 이동
    window.location.href = "product_page.html";
  });
});
