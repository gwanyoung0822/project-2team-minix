document.addEventListener("DOMContentLoaded", function () {
  const bubbles = document.querySelectorAll(".bubble");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // 10%가 보일 때 트리거
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, observerOptions);

  bubbles.forEach((bubble) => {
    observer.observe(bubble);
  });
});
