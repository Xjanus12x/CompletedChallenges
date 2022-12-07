const hamburgerButton = document.getElementById("hamburger-button");
const navMenu = document.getElementById("nav-menu");
const closeButton = document.getElementById("close");

hamburgerButton.addEventListener("click", () => {
  navMenu.classList.add("slideIn");
  navMenu.classList.toggle("show");
});

closeButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
