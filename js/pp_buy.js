$(document).ready(function () {
  const swBuy = new Swiper(".sw-buy", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChangeTransitionEnd: function () {
        const activeImg = $(".swiper-slide-active img").attr("src");
        $(".zoom-display-img").attr("src", activeImg);
        // 모든 슬라이드에서 기존 .inner-frame 요소를 제거
        $(".swiper-slide .inner-frame").remove();

        // 현재 활성화된 슬라이드에 .inner-frame 추가 및 position 스타일 설정
        $(".swiper-slide-active").append(`<div class="inner-frame"></div>`);
        const $newInnerFrame = $(".swiper-slide-active .inner-frame");

        // Add 'active' class to the .inner-frame of the active slide
        // $newInnerFrame.addClass("active");

        // 스타일에 position 속성을 추가하여 위치 지정 가능하게 설정
        // $newInnerFrame.css({
        //   position: "absolute", // position 값을 absolute로 설정
        //   top: 0,
        //   left: 0,
        // });

        // 새 슬라이드에 이벤트 연결
        addMouseMoveEvent($newInnerFrame);
      },
    },
  });

  // 줌 관련 이벤트 함수 정의
  function addMouseMoveEvent(innerFrame) {
    const $imageWrapper = $(".sw-buy");
    const $zoomDisplay = $(".zoom-display");
    const $zoomDisplayImage = $(".zoom-display-img");

    // 기존 이벤트 리스너를 제거하여 중복 등록 방지
    // $imageWrapper.off("mousemove mouseleave");

    $imageWrapper.on("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Set inner frame position
      innerFrame.css({
        left: `${x - innerFrame.width() / 2}px`,
        top: `${y - innerFrame.height() / 2}px`,
        display: "block",
      });

      // Set zoom display position and update zoom image
      $zoomDisplay.css("display", "block");

      // Calculate zoom image position
      const zoomImageX = (x / $imageWrapper.width()) * ($zoomDisplayImage.width() - $zoomDisplay.width());
      const zoomImageY = (y / $imageWrapper.height()) * ($zoomDisplayImage.height() - $zoomDisplay.height());
      $zoomDisplayImage.css({
        left: `-${zoomImageX}px`,
        top: `-${zoomImageY}px`,
      });
    });

    $imageWrapper.on("mouseleave", function () {
      innerFrame.hide();
      $zoomDisplay.css("display", "none");
    });
  }

  // 초기 페이지 로드 시 활성 슬라이드에 이벤트 연결
  const $initialInnerFrame = $(".swiper-slide-active .inner-frame");
  addMouseMoveEvent($initialInnerFrame);
  // 색상 클릭시 카트에 담기는 함수
  $(".color-green").click(function () {
    $(".cart-wrap").remove();
    $(".cart").append(`<div class="cart-wrap">
        <div class="cart-product">
          <div class="cart-tit">[미닉스] 미니건조기 PRO+</div>
          <div class="cart-color">네이처그린</div>
        </div>
        <div class="cart-price">
        369,000원 <i class="fa-solid fa-xmark"></i>
        </div>
      </div>`);
    $(".fa-xmark").click(function () {
      $(".cart-wrap").remove();
    });
  });
  $(".color-white").click(function () {
    $(".cart-wrap").remove();
    $(".cart").append(`
        <div class="cart-wrap">
        <div class="cart-product">
          <div class="cart-tit">[미닉스] 미니건조기 PRO+</div>
          <div class="cart-color">그레이스</div>
        </div>
        <div class="cart-price">
        369,000원 <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      `);
    $(".fa-xmark").click(function () {
      $(".cart-wrap").remove();
    });
  });
  $(".fa-xmark").click(function () {
    $(".cart-wrap").remove();
  });
  // 스와이퍼 높이 넓이에 비례하도록
  window.addEventListener("resize", function() {
    if (window.innerWidth <= 450) {
      // 화면 너비가 768px 이하일 때 실행할 코드
      // console.log("화면 너비가 768px 이하입니다.");
      $(".sw-buy").width("100%")
      const swBuyW = $(".sw-buy").width()
      $(".sw-buy").height(swBuyW)
      // console.log(swBuyW);
      
      }
      else if(window.innerWidth > 450){
        $(".sw-buy").height(450)
        $(".sw-buy").width(450)
      }
  })
});
