const counter = ($counter, max) => {
    let now = max;
  
    const handle = setInterval(() => {
      $counter.innerHTML = Math.ceil(max - now);
    
      // 목표수치에 도달하면 정지
      if (now < 1) {
        clearInterval(handle);
      }
      
      // 증가되는 값이 계속하여 작아짐
      const step = now / 10;
      
      // 값을 적용시키면서 다음 차례에 영향을 끼침
      now -= step;
    }, 50);
  }
  
  window.onload = () => {
    // 카운트를 적용시킬 요소
    const $counter = document.querySelector(".det2-main1-1 .big");
    const $counter1 = document.querySelector(".det2-main1-2 .big");
    const $counter2 = document.querySelector(".det2-main2-1 .big");
    const $counter3 = document.querySelector(".det2-main2-2 .big");
    
    // 목표 수치
    const max = 125000;
    
    setTimeout(() => counter($counter, max), 2000);
  }