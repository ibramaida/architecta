// mobile menu toggle
const nav = document.querySelector("#primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  let isVisible = nav.getAttribute("data-visible");

  if (isVisible === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
  //   console.log(isVisible);
});

nav.addEventListener("click", (e) => {
  // console.log(e.target.tagName);
  if (e.target.tagName === "A") {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

window.addEventListener("click", (e) => {
  // console.log(e.target);
  let isOutside = !e.target.closest("#primary-navigation");
  if (e.target === navToggle) {
    return;
  }
  if (e.target === nav) {
    return;
  } else if (isOutside) {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
