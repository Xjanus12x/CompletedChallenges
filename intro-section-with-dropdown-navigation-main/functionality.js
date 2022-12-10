const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const primaryNavigation = document.getElementById("primary-navigation");
const body = document.querySelector("body");

openMenu.addEventListener("click", () => {
  const isNotOpened = openMenu.getAttribute("aria-expanded") === "false";
  if (isNotOpened) {
    openMenu.setAttribute("aria-expanded", "true");
    body.classList.add("semi-dark");
  }
  primaryNavigation.setAttribute("data-state", "opened");
});

closeMenu.addEventListener("click", () => {
  const isOpened = openMenu.getAttribute("aria-expanded") === "true";
  if (isOpened) {
    openMenu.setAttribute("aria-expanded", "false");
    body.classList.remove("semi-dark");
  }
  primaryNavigation.setAttribute("data-state", "closing");

  primaryNavigation.addEventListener(
    "animationend",
    () => {
      primaryNavigation.setAttribute("data-state", "closed");
    },
    { once: true }
  );
});
