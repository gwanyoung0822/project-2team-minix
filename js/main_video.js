$(document).ready(function () {
  const videos = $(".visual-video")
  $.each(videos,function(index){
  })

  const swVisual = new Swiper(".sw-visual", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    on:{
      slideChange: function (){
      }
    },
  });
});
