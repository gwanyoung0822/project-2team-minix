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
