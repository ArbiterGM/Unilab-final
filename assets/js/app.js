// hamburger menu
const hamburger = document.getElementById("hamburger");
const header = document.getElementById("header2");

hamburger.addEventListener("click", () => {
  header.classList.toggle("header2-active");
});

// modals
for (i = 1; i < 18; i++) {
  const modal = document.querySelector(".modal" + [i]);

  const modalOpener = document.querySelector(".modal-opener" + [i]);

  const modalCloser = document.querySelector(".modal-closer" + [i]);
  // open
  modalOpener.addEventListener("click", function () {
    modal.style.display = "block";
  });

  // close
  modalCloser.onclick = function () {
    modal.style.display = "none";
  };
}
