$(document).ready(function () {
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
  $(".sec-list li a").click(function () {
    $(".sec-list li a").css("color", "#ccc");
    $(".sec-list li a").removeClass("active");

    // console.log($(this).offset().top);
    $(this).addClass("active");
    // if($(this).offset().top >= $(".pp-descriptions").offset().top && $(this).offset().top < $(".det2").offset().top){
    //   $(this).css("color","#fff")
    // }else{
    //   $(this).css("color","#000")
    // }
  });
  // $(window).scroll(function () {
  //   if ($(".sec-list").offset().top >= $(".pp-descriptions").offset().top) {
  //     $(".sec-list li a").css("color", "#ccc");
  //     $(".sec-list li a").removeClass("active");
  //     $(".sec-list li a").eq(1).addClass("active");
  //   } 
  //   else if ($(".sec-list li a.active").offset().top >= $(".pp-descriptions").offset().top && $(".sec-list li a").offset().top < $(".det2").offset().top) {
  //     // console.log( $(".pp-descriptions").offset().top);

  //     $(".active").css("color", "#fff");
  //   } else if ($(".sec-list li a.active").offset().top >= $(".sec3").offset().top) {
  //     // console.log( $(".pp-descriptions").offset().top);

  //     $(".active").css("color", "#fff");
  //   } 
  //   else {
  //     $(".active").css("color", "#000");
  //   }
  // });
  $(window).scroll(function () {
    if ($(".tooltip-text").offset().top >= $(".footer").offset().top && $(".tooltip-text").offset().top >= $(".footer-tab").offset().top) 
      
      {
      $(".tooltip-text").css("color", "white");
    
    } 
    else{
      $(".tooltip-text").css("color", "black");
    }
    // if($(".tooltip-text").offset().top >= $(".footer-tab").offset().top) {
    //   $(".tooltip-text").css("color", "white");
    // } 
    // else{
    //   $(".tooltip-text").css("color", "black");
    // }
    
});
});
