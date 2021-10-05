const modal = document.querySelectorAll(".modal");
const openBtn = document.querySelectorAll(".study-card__joinBtn");
const cancelBtn = document.querySelectorAll(".modal__cancel");
const overlay = document.querySelectorAll(".modal__overlay");

const HIDDEN_CLASSNAME = "hidden";

for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener("click", function () {
    // modal.classList.remove(HIDDEN_CLASSNAME);
    modal[i].classList.remove(HIDDEN_CLASSNAME);
  });
}
for (let i = 0; i < openBtn.length; i++) {
  overlay[i].addEventListener("click", function () {
    modal[i].classList.add(HIDDEN_CLASSNAME);
  });
  cancelBtn[i].addEventListener("click", function () {
    modal[i].classList.add(HIDDEN_CLASSNAME);
  });
}
