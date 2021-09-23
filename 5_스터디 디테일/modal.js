//혜택 부분
const benefit__openBtn = document.querySelector('.benefit__button__open');
const benefit__closeBtn = document.querySelector('.benefit__button__close');
const benenfit__modal = document.querySelector('.benefit__modal__bg');

function benefit__showModal() {
    benenfit__modal.classList.remove('benefit__hidden');
    benenfit__modal.classList.add('benefit__visible');
}

function benefit__closeModal() {
    benenfit__modal.classList.add('benefit__hidden');
    benenfit__modal.classList.remove('benefit__visible');
}

benefit__openBtn.addEventListener('click', benefit__showModal);
benefit__closeBtn.addEventListener('click', benefit__closeModal);


//동아리 수상 부분
const award__openBtn = document.querySelector('.award__button__open');
const award__closeBtn = document.querySelector('.award__button__close');
const award__modal = document.querySelector('.award__modal__bg');

function award__showModal() {
    award__modal.classList.remove('award__hidden');
    award__modal.classList.add('award__visible');
}

function award__closeModal() {
    award__modal.classList.add('award__hidden');
    award__modal.classList.remove('award__visible');
}

award__openBtn.addEventListener('click', award__showModal);
award__closeBtn.addEventListener('click', award__closeModal);


//개발작품 부분
const develop__openBtn = document.querySelector('.develop__button__open');
const develop__closeBtn = document.querySelector('.develop__button__close');
const develop__modal = document.querySelector('.develop__modal__bg');

function develop__showModal() {
    develop__modal.classList.remove('develop__hidden');
    develop__modal.classList.add('develop__visible');
}

function develop__closeModal() {
    develop__modal.classList.add('develop__hidden');
    develop__modal.classList.remove('develop__visible');
}

develop__openBtn.addEventListener('click', develop__showModal);
develop__closeBtn.addEventListener('click', develop__closeModal);
