const menuToggle = document.getElementById("menu-toggle");
const menuIconOpen = document.getElementById("menu-icon-open");
const menuIconClose = document.getElementById("menu-icon-close");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  const isOpen = mobileMenu.classList.toggle("hidden");
  menuIconOpen.classList.toggle("hidden", isOpen);
  menuIconClose.classList.toggle("hidden", !isOpen);
  mobileMenu.classList.toggle("block");
  mobileMenu.classList.toggle("slide-in");
});

document.getElementById("close-toggle").addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("block");
  mobileMenu.classList.toggle("slide-in");
  menuIconOpen.classList.toggle("hidden", true);
  menuIconClose.classList.toggle("hidden", false);
});
// Get all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Add event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove active class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add active class to the clicked link
    this.classList.add("active");
  });
});

const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add("navbar-hidden");
  } else {
    // Scrolling up
    navbar.classList.remove("navbar-hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

function countToNumber(target, end, duration) {
  let current = 0;
  const step = Math.ceil(end / (duration / 60)); // 60 steps per second
  const timer = setInterval(function () {
    current += step;
    if (current >= end) {
      clearInterval(timer);
      current = end;
    }
    target.textContent = current;
  }, 1000 / 60); // 60 frames per second
}

const sections = document.querySelectorAll(".section");
const targetNumbers = ["+100", "50", "+98", "+11"]; // Replace with your desired numbers
const duration = 600000; // Adjust duration as needed

sections.forEach((section, index) => {
  const countElement = section.querySelector(".count");
  countToNumber(countElement, targetNumbers[index], duration);
});

const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach((item) => {
  const button = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");

  button.addEventListener("click", () => {
    content.classList.toggle("hidden");
    button.querySelector("svg").classList.toggle("rotate-180");
  });
});
