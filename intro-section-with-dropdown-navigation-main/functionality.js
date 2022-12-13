const primaryNavigationOpenButton = document.querySelector(".open-menu");
const primaryNavigationCloseButton = document.querySelector(".close-menu");
const primaryNavigation = document.getElementById("primary-navigation");
const secondaryNavigation = document.getElementById("secondary-navigation");
const secondaryNavigationButton = document.getElementById(
  "toggle-secondary-navigation"
);
const tertiaryNavigation = document.getElementById("tertiary-navigation");
const tertiaryNavigationButton = document.getElementById(
  "tertiary-toggle-menu"
);
const body = document.querySelector("body");

// Primary navigation functionality
primaryNavigationOpenButton.addEventListener("click", () => {
  const isNotOpened =
    primaryNavigationOpenButton.getAttribute("aria-expanded") === "false";
  if (isNotOpened) {
    primaryNavigationOpenButton.setAttribute("aria-expanded", "true");
    body.classList.add("semi-dark");
  }
  primaryNavigation.setAttribute("data-state", "opened");
});

primaryNavigationCloseButton.addEventListener("click", () => {
  const isOpened =
    primaryNavigationOpenButton.getAttribute("aria-expanded") === "true";
  if (isOpened) {
    primaryNavigationOpenButton.setAttribute("aria-expanded", "false");
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

// Secondary navigation functionality
menuEventListener(secondaryNavigationButton, secondaryNavigation);

// Tertiary navigation functionality
menuEventListener(tertiaryNavigationButton, tertiaryNavigation);

// event listener in a function
function menuEventListener(activeButton, navigationName) {
  activeButton.addEventListener("click", () => {
    const isOpened = activeButton.getAttribute("aria-expanded") === "true";
    isOpened
      ? closeMenu(activeButton, navigationName)
      : openMenu(activeButton, navigationName);
  });
}

function openMenu(activeButton, navigationName) {
  navigationName.setAttribute("data-state", "opened");
  activeButton.setAttribute("aria-expanded", "true");
}

function closeMenu(activeButton, navigationName) {
  navigationName.setAttribute("data-state", "closed");
  activeButton.setAttribute("aria-expanded", "false");
}
