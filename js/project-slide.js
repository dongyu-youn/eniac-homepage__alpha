const slides1 = document.querySelector("#tab1 .slides"),
  slide1 = document.querySelectorAll("#tab1 .slides li"),
  slideCount1 = slide1.length,
  prevBtn1 = document.querySelector("#tab1 .prev"),
  nextBtn1 = document.querySelector("#tab1 .next"),
  slides2 = document.querySelector("#tab2 .slides"),
  slide2 = document.querySelectorAll("#tab2 .slides li"),
  slideCount2 = slide2.length,
  prevBtn2 = document.querySelector("#tab2 .prev"),
  nextBtn2 = document.querySelector("#tab2 .next"),
  slides3 = document.querySelector("#tab3 .slides"),
  slide3 = document.querySelectorAll("#tab3 .slides li"),
  slideCount3 = slide3.length,
  prevBtn3 = document.querySelector("#tab3 .prev"),
  nextBtn3 = document.querySelector("#tab3 .next"),
  slides4 = document.querySelector("#tab4 .slides"),
  slide4 = document.querySelectorAll("#tab4 .slides li"),
  slideCount4 = slide4.length,
  prevBtn4 = document.querySelector("#tab4 .prev"),
  nextBtn4 = document.querySelector("#tab4 .next"),
  slides5 = document.querySelector("#tab5 .slides"),
  slide5 = document.querySelectorAll("#tab5 .slides li"),
  slideCount5 = slide5.length,
  prevBtn5 = document.querySelector("#tab5 .prev"),
  nextBtn5 = document.querySelector("#tab5 .next"),
  slides6 = document.querySelector("#tab6 .slides"),
  slide6 = document.querySelectorAll("#tab6 .slides li"),
  slideCount6 = slide6.length,
  prevBtn6 = document.querySelector("#tab6 .prev"),
  nextBtn6 = document.querySelector("#tab6 .next");

const slideWidth = 270,
  slideMargin = 30;

function playSlide(slides, slideCount, prevBtn, nextBtn) {
  let currentIdx = 0; //현재 위치

  slides.style.width =
    (slideWidth + slideMargin) * slideCount - slideMargin + "px"; //슬라이드 너비를 정해줘야해

  function moveSlide(num) {
    //클릭할때 슬라이드 전체를 왼쪽으로 이동시켜줌(즉, 실제로는 오른쪽으로 이동하는 것처럼 보임)
    slides.style.left = -num * (slideWidth + slideMargin) + "px";
    currentIdx = num; //이동시키고 현재인덱스는 이동한 num으로 지정
  }

  prevBtn.addEventListener("click", function () {
    if (currentIdx < slideCount - 3) {
      moveSlide(currentIdx + 1);
    } else {
      moveSlide(0);
      //마지막 슬라이드에서 더 가면 첫번째 슬라이드로 이동
    }
  });
  nextBtn.addEventListener("click", function () {
    if (currentIdx > 0) {
      moveSlide(currentIdx - 1);
    } else {
      moveSlide(slideCount - 3);
      //첫번째 슬라이드에서 더 가면 마지막 슬라이드로 이동
    }
  });

  /* 자동슬라이드 */
  let timer = undefined;

  function autoSlide() {
    if (timer == undefined) {
      timer = setInterval(function () {
        if (currentIdx < slideCount - 3) {
          moveSlide(currentIdx + 1);
        } else {
          moveSlide(0);
        }
      }, 3000);
    }
  }
  autoSlide();
  function stopSlide() {
    clearInterval(timer);
    timer = undefined;
  }
  slides.addEventListener("mouseenter", function () {
    stopSlide();
  });
  slides.addEventListener("mouseleave", function () {
    autoSlide();
  });
}

playSlide(slides1, slideCount1, nextBtn1, prevBtn1);
playSlide(slides2, slideCount2, nextBtn2, prevBtn2);
playSlide(slides3, slideCount3, nextBtn3, prevBtn3);
playSlide(slides4, slideCount4, nextBtn4, prevBtn4);
playSlide(slides5, slideCount5, nextBtn5, prevBtn5);
playSlide(slides6, slideCount6, nextBtn6, prevBtn6);
