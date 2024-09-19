document.addEventListener("DOMContentLoaded", function () {
    const detailTab = document.querySelectorAll(".detail-tab li")
    const tabDesc = document.querySelector(".tab-desc")
    const tabReview = document.querySelector(".tab-review")
    const reviewSec = document.querySelector(".review")
    const descSec = document.querySelector(".description")
    detailTab.forEach((tab)=>{
      tab.addEventListener("click",function(){
        detailTab.forEach((tab) => tab.classList.remove("active"));
        this.classList.add("active")
      })
    })
    tabDesc.addEventListener("click",function(){
      reviewSec.style.display = "none"
      descSec.style.display = "block"
    })
    tabReview.addEventListener("click",function(){
      reviewSec.style.display = "block"
      descSec.style.display = "none"
    })
    // 상세정보 열기닫기
    const descOpenBtn = document.querySelector(".desc-open-btn")
    const closeBtn = document.querySelector(".closeBtn")
    const btnWrap = document.querySelector(".btn-wrap")
    descOpenBtn.addEventListener("click",function(){
      descOpenBtn.style.display = "none"
      btnWrap.style.display = "none"
      descSec.classList.add("open")
    })
    closeBtn.addEventListener("click",function(){
      descSec.classList.remove("open")
      descOpenBtn.style.display = "block"
      btnWrap.style.display = "block"
    })
  });
  