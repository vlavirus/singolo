
window.onload = function() {
    // console.log('HELLO');
    addMenuClickerHandler();
}

const addMenuClickerHandler = () => {
    document.querySelector('.navigation__menu').addEventListener('click', (e) => {
        // console.log(e);
        if (e.target.classList.contains('navigation__menu--link')) {
            let clickedTag = e.target;
            removeActiveTags();
            selectClickedTag(clickedTag);
        }
    });
}

const removeActiveTags = () => {
    let items = document.querySelectorAll('.navigation__menu--link');
    // console.log(items);    
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
// console.log(backGround);
let currentSlide = 0;
// console.log(slides);
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

let funnyImages = document.querySelectorAll('.images__items');

document.querySelector('.portfolio__navigation--menu-link.first').addEventListener('click', function() {
    let buttons = document.querySelectorAll('.frame');

    buttons.forEach(buttons => {
        buttons.classList.remove('active_frame');
    });
    let parrent = document.querySelector('.portfolio__navigation--menu-link.first').parentElement;
    parrent.classList.add('active_frame');

    funnyImages[0].classList.remove('change');
    funnyImages[1].classList.remove('change');
    funnyImages[2].classList.remove('change');
});


document.querySelector('.portfolio__navigation--menu-link.second').addEventListener('click', function() {
    let buttons = document.querySelectorAll('.frame');

    buttons.forEach(buttons => {
        buttons.classList.remove('active_frame');
    });
    let parrent = document.querySelector('.portfolio__navigation--menu-link.second').parentElement;
    parrent.classList.add('active_frame');

    funnyImages[0].classList.remove('change');
    funnyImages[1].classList.remove('change');
    funnyImages[2].classList.remove('change');
    funnyImages[0].classList.add('change');
});

document.querySelector('.portfolio__navigation--menu-link.third').addEventListener('click', function() {
    let buttons = document.querySelectorAll('.frame');

    buttons.forEach(buttons => {
        buttons.classList.remove('active_frame');
    });
    let parrent = document.querySelector('.portfolio__navigation--menu-link.third').parentElement;
    parrent.classList.add('active_frame');

    funnyImages[0].classList.remove('change');
    funnyImages[1].classList.remove('change');
    funnyImages[2].classList.remove('change');
    funnyImages[0].classList.add('change');
    funnyImages[1].classList.add('change');
});

document.querySelector('.portfolio__navigation--menu-link.fourth').addEventListener('click', function() {
    let buttons = document.querySelectorAll('.frame');

    buttons.forEach(buttons => {
        buttons.classList.remove('active_frame');
    });
    let parrent = document.querySelector('.portfolio__navigation--menu-link.fourth').parentElement;
    parrent.classList.add('active_frame');

    funnyImages[0].classList.add('change');
    funnyImages[1].classList.add('change');
    funnyImages[2].classList.add('change');
});

let imagesActive = document.querySelector('.funny__images');

imagesActive.addEventListener('click', (event) => {
    imagesActive.querySelectorAll('img').forEach(element => element.classList.remove('lightOn'));
    event.target.classList.add('lightOn');
});

document.querySelector('.button_black__screen1').addEventListener('click', function() {
    if(document.querySelector('.black__screen1').classList[1] == "disable" ) {
        document.querySelector('.black__screen1').classList.remove('disable')
    } else {
        document.querySelector('.black__screen1').classList.add('disable')
    }
});

document.querySelector('.button_black__screen2').addEventListener('click', function() {
    if(document.querySelector('.black__screen2').classList[1] == "disable" ) {
        document.querySelector('.black__screen2').classList.remove('disable')
    } else {
        document.querySelector('.black__screen2').classList.add('disable')
    }
});

document.querySelector('.button_black__screen3').addEventListener('click', function() {
    if(document.querySelector('.black__screen3').classList[1] == "disable" ) {
        document.querySelector('.black__screen3').classList.remove('disable')
    } else {
        document.querySelector('.black__screen3').classList.add('disable')
    }
});

document.querySelector('.form__confirm').addEventListener('click', (event) => {
    event.preventDefault();
    if ( document.querySelector('.subject').value == '' ) {
        document.querySelector('.pop_massege-theme').innerHTML = 'Без темы';
    } else {
        document.querySelector('.pop_massege-theme').innerHTML = 'Тема: ' + document.querySelector('.subject').value;
    }

    if ( document.querySelector('.describe').value == '' ) {
        document.querySelector('.pop_massege-description').innerHTML = 'Без описания';
    } else {
        document.querySelector('.pop_massege-description').innerHTML = 'Описание: ' + document.querySelector('.describe').value;
    }


    document.querySelector('.pop_massege').classList.add('disable');
});


document.querySelector('.pop_masseg-quit').addEventListener('click', (event) =>{

    document.querySelector('.pop_massege').classList.remove('disable');
});



const burger = document.querySelector(".header__burger");
const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const nav = header.querySelector("nav");
let menuOpened = false;
// darkenContent(header);
const headerBackground = header.querySelector(".dark-background");
hideDarkBackground();



function drawMenu() {
    if (document.documentElement.clientWidth >= 768) {
      menuOpened = true;
    }
    if(menuOpened) {
      hideDarkBackground();
      burger.classList.remove("rotated90");
      h1.classList.remove("to-left");
      nav.classList.remove("to-right");
    } else {
      showDarkBackground();
      burger.classList.add("rotated90");
      h1.classList.add("to-left");
      nav.classList.add("to-right");
    }
    menuOpened = !menuOpened;
  }