// это многоразовый таб 
function tab(titleTabSelector) {
    let titleTab = document.querySelectorAll(titleTabSelector);

        titleTab.forEach(item => {
        let tab = item.parentNode;

        item.addEventListener('click', () => {
            tab.classList.toggle('tab-active');
        });
    });
};

function burger (burgerSelector, NavBurgerSelector) {
    let burger = document.querySelector(burgerSelector);
    let block = document.querySelector(NavBurgerSelector);

    burger.addEventListener('click', () => {
        block.classList.toggle('bg-active');
        burger.classList.toggle('active');
    });
};
burger('.burger', '.header__nav');


tab('.tabs__header');

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let scrolling = window.pageYOffset;

    if (scrolling > 100) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
});

window.addEventListener('resize', () => {
    let size = window.clientWidth;
});

document.querySelectorAll('.header__link').forEach(item => {
    item.addEventListener('click', () => {
    document.querySelector('.header__nav').classList.remove('bg-active');
    document.querySelector('.burger ').classList.remove('active');
})});
/*
всё зависит от атрибута data-promo у <form>
если data-promo='false', то включается формула без промокода,
если data-promo='true', то с промокодом

у самих полос прокрутки есть атрибут data-value,
в него также передаётся информация о количестве 
бонусов и рублей
*/

// form
const ranges = document.querySelectorAll('.bonus__range');

// ranges.forEach(item => {
//     item.addEventListener('input', () => {
//         let min = parseInt(item.getAttribute('min'));
//         let max = parseInt(item.getAttribute('max'));
//         let value = parseInt(item.value);

//         let x = value / max * 94;


//         let color = `linear-gradient(90deg, #f93a3a ${x}%, #eaeaea 0%)`;

//         item.style.background = color;
//     });
// });


const form =  document.querySelector('.bonus');

const promoInput = document.querySelector('#promo');

promoInput.addEventListener('input', () => {
    let data = promoInput.value;

    if (data == 'тест') {
        document.querySelector('.bonus').setAttribute('data-promo', 'true')
    }
    else {
        document.querySelector('.bonus').setAttribute('data-promo', 'false')
    }


});


const rangeBonus = document.querySelector('#quantity-bonus');
const getInputBonus = document.querySelector('#get-quantity-bonus');

// const rangeRub = document.querySelector('#quantity-rub');
const getInputRub = document.querySelector('#get-quantity-rub')

const bonusMax = document.querySelector('#bonus-max');


rangeBonus.addEventListener('input', () => {
    const isPromo = (form.getAttribute('data-promo') == 'true');

    let data = rangeBonus.value;

    getInputBonus.innerHTML = data;

    let dataBonus;

    if (isPromo == true) {
        rangeBonus.setAttribute('min', '3000');
        rangeBonus.setAttribute('max', '15000');
        bonusMax.innerHTML = '15000';

        dataBonus = data / 1.5;
    } else {
        rangeBonus.setAttribute('min', '1400');
        rangeBonus.setAttribute('max', '14000');
        bonusMax.innerHTML = '14000';

        dataBonus = data / 1.4;
    }

    getInputRub.innerHTML = Math.trunc(dataBonus);
    
    // dataRub = Math.trunc(dataRub);
});



const helpEl = document.querySelector('#promo-btn-help-s');
const helpEr = document.querySelector('#promo-btn-help-b');






// slider
const sliderPrev = document.querySelector('.reviews-slider-btn._prev');
const sliderNext = document.querySelector('.reviews-slider-btn._next');

const sliderContainer = document.querySelector('.reviews-slider');
const sliderTrack = document.querySelector('.reviews-track');
const slides = document.querySelectorAll('.reviews__slide');

slidesCount = slides.length;

const slidesToScroll = 2;

let slideWidth;

const wrapper = document.querySelector('.wrapper')

if (wrapper.clientWidth <= 768) {
    slideWidth = sliderContainer.clientWidth / 1;
} else {
    slideWidth = sliderContainer.clientWidth / 2.1;
}


slides.forEach(item => {
    item.style.minWidth = `${slideWidth}px`;
});

let pos = 0;

movePosition = slideWidth + slideWidth * (5/100);

checkBtns();

sliderNext.addEventListener('click', () => {
    pos -= movePosition;

    setPosition();
    checkBtns();
});

sliderPrev.addEventListener('click', () => {
    pos += movePosition;

    setPosition();
    checkBtns();
});

function setPosition() {
    sliderTrack.style.transform = `translateX(${pos}px)`;
}

function checkBtns() {
    if (pos === 0) {
        sliderPrev.classList.add('disabled');
    } else {
        sliderPrev.classList.remove('disabled');
    }

    if (
        pos <= -(slidesCount - 2 ) * slideWidth
        ) {
        sliderNext.classList.add('disabled');
    } else {
        sliderNext.classList.remove('disabled');
    }
}
// checkBtns();