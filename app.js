// -------------- SELECTORS AND VARIABLES --------------
const html = document.querySelector("html");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay-nav");
const closeBtn = document.querySelector(".close");
const navLinksMobile = document.querySelectorAll(".list-item-m a");
const contactFormMobile = document.querySelector(".form-mbl-container");
const contactMeBtnMobile = document.querySelector(".envelope");
const closeFormBtn = document.querySelector(".close-form");
const submitFormBtn = document.querySelector(".mobile-form-submit-button");
const sidebar = document.querySelector("#sidebar");

// -------------- EVENT LISTENERS ----------------------
// BURGER
burger.addEventListener("click", () => {
  overlay.classList.toggle("visible");
  html.classList.toggle("no-scroll");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.toggle("visible");
  html.classList.toggle("no-scroll");
});

navLinksMobile.forEach((link) => {
  link.addEventListener("click", () => {
    overlay.classList.toggle("visible");
    html.classList.toggle("no-scroll");
  });
});

// MOBILE CONTACT FORM
try {
  contactMeBtnMobile.addEventListener("click", () => {
    contactFormMobile.classList.toggle("visible-form");
    html.classList.toggle("no-scroll");
  });
  closeFormBtn.addEventListener("click", () => {
    contactFormMobile.classList.toggle("visible-form");
    html.classList.toggle("no-scroll");
  });
  submitFormBtn.addEventListener("click", () => {
    contactFormMobile.classList.toggle("visible-form");
    html.classList.toggle("no-scroll");
  });
} catch (error) {
  console.log("Error caught: " + error);
}

// SCROLLING
// let endReached = false;
// window.addEventListener("scroll", function () {
//   console.log(window.pageYOffset + "px");
//   if (window.pageYOffset >= 4100 && !endReached) {
//     console.log("hello");
//     endReached = true;
//     sidebar.classList.remove("sidebar");
//   }
//   if (window.pageYOffset < 4100 && endReached) {
//     console.log("hello");
//     endReached = false;

//     sidebar.classList.add("sidebar");
//   }
// });
