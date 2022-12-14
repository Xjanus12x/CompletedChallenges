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

let isOldImage = true;
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
menuEventListener(secondaryNavigationButton, secondaryNavigation, 1);

// Tertiary navigation functionality
menuEventListener(tertiaryNavigationButton, tertiaryNavigation, 2);

// event listener in a function
function menuEventListener(activeButton, navigationName, groupNumberOfIcons) {
  activeButton.addEventListener("click", () => {
    const isOpened = activeButton.getAttribute("aria-expanded") === "true";
    isOpened
      ? closeMenu(activeButton, navigationName, groupNumberOfIcons)
      : openMenu(activeButton, navigationName, groupNumberOfIcons);
  });
}

function openMenu(activeButton, navigationName, groupNumberOfIcons) {
  navigationName.setAttribute("data-state", "opened");
  activeButton.setAttribute("aria-expanded", "true");
  changeImage(groupNumberOfIcons, true);
}

function closeMenu(activeButton, navigationName, groupNumberOfIcons) {
  navigationName.setAttribute("data-state", "closed");
  activeButton.setAttribute("aria-expanded", "false");
  changeImage(groupNumberOfIcons, false);
}

function changeImage(groupNumberOfIcons, isOpened) {
  const iconContainer = document.getElementById(
    `set${groupNumberOfIcons}icons`
  ).childNodes;

  if (isOpened) {
    iconContainer[1].style.display = "none";
    iconContainer[3].style.display = "block";
  } else {
    iconContainer[1].style.display = "block";
    iconContainer[3].style.display = "none";
  }
}
