let scrollingUp = document.querySelector(".scrolling-up");
window.onscroll = function () {
    if (window.scrollY >= 400) scrollingUp.classList.add("show");
    else scrollingUp.classList.remove("show");
};
scrollingUp.onclick = function () {
    window.scrollTo(0, 0);
};
// get elements
const header = document.querySelector(".header");
const scrollBtn = document.getElementById("scroll-btn");
const menu = document.getElementById("menu-icon");
const navlist = document.querySelector(".nav-list");
const navlistEl = document.querySelectorAll(".nav-list li a");

// handle nav list element on click
navlist.addEventListener("click", (e) => {
  // remove active class from every element
  navlistEl.forEach((el) => {
    if (el.classList.contains("active")) el.classList.remove("active");
  });

  // add active class to current element
  if (e.target.tagName === "A") {
    if (!e.target.classList.contains("active"))
      e.target.classList.add("active");
  }
});

// Handle menu click
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

// Scroll reveal animations
const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2500,
  reset: true,
});

// animations
sr.reveal(".home-text", { delay: 300 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".container", { delay: 400 });
