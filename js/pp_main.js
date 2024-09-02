$(document).ready(function(){
    // 탑버튼
  $(".top-btn").click(function(){
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
  // cs버튼
  $(".cs-btn").click(function(){
    // $(".cs-btn-li").css("opacity","1").css("transform", "translateX(-60px)")
    $(".cs-btn-kakao").toggleClass("show")
    $(".cs-btn-naver").toggleClass("show")
  })
})