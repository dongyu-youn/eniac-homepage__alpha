const btn = document.querySelector(".infor-bar");
const box = document.querySelector(".infor-barr");

// div 클릭 시 act 클래스 토글
btn.addEventListener("click", () => {
  box.classList.toggle("act");
});

function init() {
  btn.addEventListener("click", handleClick);
}
