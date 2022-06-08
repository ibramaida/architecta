const whyUsGap = 32;

const whyUsCarousel = document.querySelector(".why-us-carousel");
const whyUsContent = document.querySelector(".why-us-content");
const whyUsNext = document.querySelector(".why-us-next");
const whyUsPrev = document.querySelector(".why-us-prev");

whyUsNext.addEventListener("click", (e) => {
  whyUsCarousel.scrollBy(whuUsWidth + whyUsGap, 0);
  if (whyUsCarousel.scrollWidth !== 0) {
    whyUsPrev.style.opacity = "1";
  }
  if (
    whyUsContent.scrollWidth - whuUsWidth - whyUsGap <=
    whyUsCarousel.scrollLeft + whuUsWidth
  ) {
    whyUsNext.style.opacity = "0";
  }
});
whyUsPrev.addEventListener("click", (e) => {
  whyUsCarousel.scrollBy(-(whuUsWidth + whyUsGap), 0);
  if (whyUsCarousel.scrollLeft - whuUsWidth - whyUsGap <= 0) {
    whyUsPrev.style.opacity = "0";
  }
  if (
    !whyUsContent.scrollWidth - whuUsWidth - whyUsGap <=
    whyUsCarousel.scrollLeft + whuUsWidth
  ) {
    whyUsNext.style.opacity = "1";
  }
});

let whuUsWidth = whyUsCarousel.offsetWidth;
window.addEventListener(
  "resize",
  (e) => (whuUsWidth = whyUsCarousel.offsetWidth)
);
