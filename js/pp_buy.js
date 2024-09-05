$(document).ready(function () {
  const swBuy = new Swiper(".sw-buy", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    },
    on: {
        slideChangeTransitionEnd: function () {
        const activeImg = $(".swiper-slide-active img").attr("src");
        $(".zoom-display-img").attr("src", activeImg);
        // 
        $(".inner-frame").remove()
        $(".swiper-slide-active").append(`<div class="inner-frame"></div>`)
      },
    },
  });
  $(".color-green").click(function(){
    $(".cart").append(`<div class="cart-product">
                    <div class="cart-tit">[미닉스] 미니건조기 PRO+</div>
                    <div class="cart-color">네이처그린</div>
                  </div>
                  <div class="cart-price">
                    369,000원<i class="fa-solid fa-xmark"></i>
                  </div>`)
  })
  $(".color-white").click(function(){
    
    $(".cart").append(`<div class="cart-product">
                    <div class="cart-tit">[미닉스] 미니건조기 PRO+</div>
                    <div class="cart-color">그레이스</div>
                  </div>
                  <div class="cart-price">
                    369,000원<i class="fa-solid fa-xmark"></i>
                  </div>`)
  })
});

window.addEventListener("load", function () {
  //줌
  const imageWrapper = document.querySelector(".sw-buy");
  const innerFrame = document.querySelector(".inner-frame");
  const zoomDisplay = document.querySelector(".zoom-display");
  const zoomDisplayImage = document.querySelector(".zoom-display-img");

  imageWrapper.addEventListener(`mousemove`, function (e) {
    const rect = imageWrapper.getBoundingClientRect();
    console.log(rect);
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Set inner frame position
    innerFrame.style.left = `${x - innerFrame.offsetWidth / 2}px`;
    innerFrame.style.top = `${y - innerFrame.offsetHeight / 2}px`;
    innerFrame.style.display = "block";

    // Set zoom display position and update zoom image
    zoomDisplay.style.display = "block";

    // Calculate zoom image position
    const zoomImageX = (x / imageWrapper.clientWidth) * (zoomDisplayImage.clientWidth - zoomDisplay.clientWidth);
    const zoomImageY = (y / imageWrapper.clientHeight) * (zoomDisplayImage.clientHeight - zoomDisplay.clientHeight);
    zoomDisplayImage.style.left = `-${zoomImageX}px`;
    zoomDisplayImage.style.top = `-${zoomImageY}px`;
  });
  imageWrapper.addEventListener("mouseleave", function () {
    innerFrame.style.display = "none";
    zoomDisplay.style.display = "none";
  });
});
