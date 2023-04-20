// hamburger menu
const hamburger = document.getElementById("hamburger");
const header = document.getElementById("header2");

hamburger.addEventListener("click", () => {
  header.classList.toggle("header2-active");
});
