let introOpen = document.querySelector(".intro__text");
let awardOpen = document.querySelector(".middle_icon_awardSet");
let giftOpen = document.querySelector(".middle_icon_giftSet");

let intro = document.querySelector(".introduce");
let award = document.querySelector(".award");
let gift = document.querySelector(".gift");

introOpen.addEventListener("click", function () {
  console.log("클릭");
  award.classList.remove("visible");
  award.classList.add("hidden");
  gift.classList.remove("visible");
  gift.classList.add("hidden");
  intro.classList.remove("hidden");
  intro.classList.add("visible");
});

awardOpen.addEventListener("click", function () {
  intro.classList.remove("visible");
  intro.classList.add("hidden");
  gift.classList.remove("visible");
  gift.classList.add("hidden");
  award.classList.remove("hidden");
  award.classList.add("visible");
});

giftOpen.addEventListener("click", function () {
  intro.classList.remove("visible");
  intro.classList.add("hidden");
  award.classList.remove("visible");
  award.classList.add("hidden");
  gift.classList.remove("hidden");
  gift.classList.add("visible");
});
