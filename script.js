
window.onload = function() {
    // console.log('Hello!');

    console.log('HELLO');

    addMenuClickerHandler();
}

const addMenuClickerHandler = () => {
    document.querySelector('.navigation__menu').addEventListener('click', (e) => {
        console.log(e);
        if (e.target.classList.contains('navigation__menu--link')) {
            let clickedTag = e.target;
            removeActiveTags();
            selectClickedTag(clickedTag);
        }
    });
}

const removeActiveTags = () => {
    let items = document.querySelectorAll('.navigation__menu--link');
    console.log(items);    
    items.forEach(items => {
        items.classList.remove('selected');
        items.classList.add('notchosen');
    });
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('selected');
    clickedTag.classList.remove('notchosen');
}


let slides = document.querySelectorAll('.slides_container');
let backGround = document.querySelectorAll('.container');
let stripe = document.querySelectorAll('.screens_bottom');
console.log(backGround);
let currentSlide = 0;
console.log(slides);
let isEnable = true;

function changeCurrentSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
}

function hideSlide(direction) {
    isEnable = false;
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}

function showSlide(direction) {
    slides[currentSlide].classList.add('next', direction);
    slides[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnable = true;
    });
}

function changeBackground() {

}

function previousSlide(n) {
    hideSlide('to-right');
    changeCurrentSlide(n - 1);
    showSlide('from-left');
}

function nextSlide(n) {
    hideSlide('to-left');
    changeCurrentSlide(n - 1);
    showSlide('from-right');
}

document.querySelector('.control.slides__left').addEventListener('click', function() {
    if (stripe[0].classList[1] == 'blue') {
        stripe[0].classList.remove('blue');
    } else {
        stripe[0].classList.add('blue');
    }
    
    
    if (backGround[0].classList[1] == 'blue') {
        backGround[0].classList.remove('blue');
    } else {
        backGround[0].classList.add('blue');
    }
    
    if (isEnable) {
        previousSlide(currentSlide);
    }
});

document.querySelector('.control.slides__right').addEventListener('click', function() {
    if (stripe[0].classList[1] == 'blue') {
        stripe[0].classList.remove('blue');
    } else {
        stripe[0].classList.add('blue');
    }

    if (backGround[0].classList[1] == 'blue') {
        backGround[0].classList.remove('blue');
    } else {
        backGround[0].classList.add('blue');
    }

    if (isEnable) {
        nextSlide(currentSlide);
    }
});