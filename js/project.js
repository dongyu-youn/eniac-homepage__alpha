var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'), 
    currentIdx = 0,
    slideCount = slide.length, //슬리이드 개수
    slideWidth = 260, 
    slideMargin = 60,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

mackClone(); //슬라이드 개수에 따라 앞 뒤에 복사본 추가

function mackClone() {
    for(var i = 0; i<slideCount; i++) {
        //a.cloneNode() a 요소의 복사, a.cloneNode(ture) a의 자식요소까지 복사
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone'); //복사본에 클래스명추가
        //a.appendChild(b) a요소의 뒤에다가 b를 추가하는 함수
        slides.appendChild(cloneSlide);
    }
    for(var i = slideCount - 1; i>=0; i--) {
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        //a.prepend(b) a요소의 앞에 b를 추가
        slides.prepend(cloneSlide);
    }
    updateWidth(); //새로 생긴 슬라이드의 넓이 
    setInitialPos(); 
    
    setTimeout(function() { 
        slides.classList.add('animated'); //animated를 추가해줘야 transition이 됨
    },100); //원래 슬라이드로 움직이는게 보이지 않게 하기 위해 위에 다 작용후 0.1초 후 animated가 작용
    
}
function updateWidth() {
    var currentSlides = document.querySelectorAll('.slides li');
    var newSlideCount = currentSlides.length;

    var newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px'; //새로 ul의 넓이
    slides.style.width = newWidth;
}
function setInitialPos(){ //복사본에서 원래 슬라이드로 오도록
    var initialTranslateValue = -(slideWidth + slideMargin)*slideCount; //좌측 복사본의 슬라이드 넓이, 왼쪽으로 이동하기에 (-) 붙임
    //css경우 slides {transform:translateX(-1000px);}
    slides.style.transform = 'translateX('+ initialTranslateValue+'px)'; //문자니까 따옴표처리
}

nextBtn.addEventListener('click', function(){
    moveSlide(currentIdx + 1);
});
prevBtn.addEventListener('click', function(){
    moveSlide(currentIdx - 1);
});

function moveSlide(num) {
    slides.style.left = -num*(slideWidth + slideMargin) + 'px';
    currentIdx = num;
    console.log(currentIdx, slideCount);

    if(currentIdx == slideCount || currentIdx == -slideCount){

        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx = 0;
        }, 500);
        setTimeout(function(){
            slides.classList.add('animated');
        },600);
    }
}