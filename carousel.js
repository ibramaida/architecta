const gap = 32;

const carousel = document.querySelector(".carousel");
const content = document.querySelector(".content");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.opacity = "1";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.opacity = "0";
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.opacity = "0";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.opacity = "1";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
