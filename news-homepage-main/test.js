const button = document.querySelector("button");
const button2 = document.querySelector(".n2");
const div = document.querySelector("ul");

button.addEventListener("click", () => {
  div.classList.add("slideIn");
  div.classList.add("show");
  button.setAttribute("aria-expanded", "true");
});

button2.addEventListener("click", () => {
  div.classList.remove("slideIn");
  div.classList.add("slideOut");
});
