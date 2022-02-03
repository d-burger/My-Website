// -------------- SELECTORS AND VARIABLES --------------
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay-nav");
const closeBtn = document.querySelector(".close");
const navLinksMobile = document.querySelectorAll(".list-item-m a");

// -------------- EVENT LISTENERS ----------------------
burger.addEventListener("click", () => {
  overlay.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("visible");
});

navLinksMobile.forEach((link) => {
  link.addEventListener("click", () => {
    overlay.classList.remove("visible");
  });
});
