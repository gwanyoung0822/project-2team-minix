$(document).ready(function () {
  const swVisual = new Swiper(".sw-visual", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    on: {
      slideChange: function () {
        // 모든 비디오 일시 정지
        $("video").each(function () {
          this.pause();
          this.currentTime = 0;
        });

        // 현재 슬라이드의 비디오를 재생
        playVideoOnActiveSlide();
      },
    },
  });

  // 페이지 로드 시 첫 번째 슬라이드의 비디오 재생
  playVideoOnActiveSlide();

  function playVideoOnActiveSlide() {
    var currentSlide = $(swVisual.slides[swVisual.activeIndex]);
    var video = currentSlide.find("video").get(0);
    document.addEventListener("fullscreenchange", function (event) {
      if (document.fullscreenElement) {
        // 전체 화면 모드가 활성화될 때 비디오를 다시 표시하지 않도록 설정
        document.exitFullscreen();
      }
    });
    if (video) {
      video.play();

      // 비디오가 일정 시간마다 업데이트되도록 이벤트 리스너 추가
      video.addEventListener("timeupdate", function () {
        // 비디오의 총 재생 시간과 현재 재생 시간
        var videoDuration = video.duration;
        var videoCurrentTime = video.currentTime;

        // 비디오의 남은 재생 시간에 +5초를 더한 시간에 슬라이드 자동 전환
        var delay = Math.max(0, (videoDuration - videoCurrentTime + 5) * 1000);

        // 비디오가 재생된 시간에 따라 슬라이드 전환 조정
        clearTimeout(video.slideTimeout);
        video.slideTimeout = setTimeout(function () {
          swVisual.slideNext();
        }, delay);
      });
    }
  }
  // 다음 섹션 이동
  $(".next-sec-btn").click(function () {
    let sec1_h = $(".visual").height();
    window.scrollTo({
      top: sec1_h,
      behavior: "smooth",
    });
  });
  // 탑버튼
  $(".top-btn").click(function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  // cs버튼
  $(".cs-btn").click(function () {
    // $(".cs-btn-li").css("opacity","1").css("transform", "translateX(-60px)")
    $(".cs-btn-kakao").toggleClass("show");
    $(".cs-btn-naver").toggleClass("show");
  });
});
