/* --- Fixed Menu --- */
// Код дозволяє веб-сторінці зберігати фіксовану позицію верхнього меню під час прокрутки сторінки.

const headContainer = document.querySelector('.menu-category');
const underContainer = document.querySelector('.under-category-menu');

// Визначаємо висоту верхнього меню відносно верхньої границі батьківського елемента.
const headHeight = headContainer.offsetTop;
// Визначаємо висоту меню з урахуванням всіх зовнішніх відступів, границь та заповнення.
const menuHeight = headContainer.offsetHeight +
    parseInt(window.getComputedStyle(headContainer).marginTop) +
    parseInt(window.getComputedStyle(headContainer).marginBottom) +
    parseInt(window.getComputedStyle(headContainer).borderTopWidth) +
    parseInt(window.getComputedStyle(headContainer).borderBottomWidth) +
    parseInt(window.getComputedStyle(headContainer).paddingTop) +
    parseInt(window.getComputedStyle(headContainer).paddingBottom);

// Додаємо прослуховувач події прокрутки вікна браузера.
window.addEventListener('scroll', function() {

    // Визначаємо висоту прокрутки вікна браузера.
    const scrollTop = window.scrollTop || document.documentElement.scrollTop;

    // Визначаємо відстань між верхньою границею батьківського елемента та верхньою границею сторінки.
    const containerOffsetTop = headContainer.offsetTop;

    // Якщо висота прокрутки вікна браузера більша або дорівнює відстані між верхньою границею
    // батьківського елемента та верхньою границею сторінки, то додаємо клас CSS "fixed"
    // до контейнера верхнього меню.
    if (scrollTop >= containerOffsetTop) {
        headContainer.classList.add('fixed');
        underContainer.style.marginTop = menuHeight + "px";
    } else {
        headContainer.classList.remove('fixed');
    }

    // Якщо висота прокрутки вікна браузера менша або дорівнює висоті верхнього меню відносно верхньої
    // границі батьківського елемента, то видаляємо клас CSS "fixed" від контейнера верхнього меню та
    // встановлюємо відступ нижнього меню на "0".
    if (scrollTop <= headHeight) {
        headContainer.classList.remove('fixed');
        underContainer.style.marginTop = "0";
    }

});

/* --- Slow Scroll Down --- */

// Знаходимо кнопку з класом CSS "slow-scroll-down".
const myButton = document.querySelector('.slow-scroll-down');

// Додаємо прослуховувач події кліку на кнопку, щоб при кліку на неї сторінка плавно прокручувалась
// до верхнього меню.
myButton.addEventListener("click", function() {
    headContainer.scrollIntoView({behavior: "smooth"});
});

