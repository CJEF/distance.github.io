const mBtn = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

mBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("disabled");
});
overlay.addEventListener("click", (e) => {
  if (e.target.dataset.menu !== "true") {
    menu.classList.toggle("active");
    overlay.classList.toggle("disabled");
  }
});
