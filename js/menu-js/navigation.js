// Отримуємо список елементів меню та список контейнерів, що відповідають їм
const menuItems = document.querySelectorAll('.menu-category-item');
const sections = document.querySelectorAll('.pizza-block, .pasta-block, .salad-block, .drink-block');

// Функція, яка встановлює активний стиль для певного елемента меню
function setActiveMenuItem(index) {
    // Спочатку знімаємо активний стиль з усіх елементів меню
    menuItems.forEach(item => item.classList.remove('bold-text'));

    // Встановлюємо активний стиль для певного елемента меню
    menuItems[index].classList.add('bold-text');
}

// Функція, яка визначає, який контейнер є поточним на основі скролінгу
function getCurrentSection() {
    let currentSection = sections[0];

    sections.forEach(section => {

        // Визначаємо координати контейнера відносно верхнього краю сторінки
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;

        // Порівнюємо координати, щоб знайти поточний контейнер
        if (scrollPosition >= sectionTop - sectionHeight / 2) {
            currentSection = section;
        }
    });

    return currentSection;
}

// Функція, яка встановлює активний стиль для елементів меню на основі поточного контейнера
function updateActiveMenuItem() {
    // Отримуємо поточний контейнер
    const currentSection = getCurrentSection();

    // Отримуємо індекс елемента меню, який відповідає поточному контейнеру
    const currentSectionIndex = Array.from(sections).indexOf(currentSection);

    // Встановлюємо активний стиль для відповідного елемента меню
    setActiveMenuItem(currentSectionIndex);
}

// Встановлюємо початковий активний стиль для першого елемента меню
setActiveMenuItem(0);

// Слідкуємо за скролінгом та оновлюємо активний стиль для елементів меню
// на основі поточного контейнера
window.addEventListener('scroll', updateActiveMenuItem);

/* --- NavBar Category Menu --- */

// Додаємо прослуховувач події "click" на всі пункти меню
menuItems.forEach(item => {
    item.addEventListener('click', () => {

        // Отримуємо атрибут "data-target", який містить селектор відповідної секції
        const target = item.getAttribute('id').replace('item-', ".") + "-block";

        // Знаходимо відповідну секцію на сторінці
        const section = document.querySelector(target);

        // Задаємо властивість scroll-margin-top для відступу від верхньої частини сторінки
        section.style.scrollMarginTop = '100px';

        // Прокручуємо сторінку до вибраної секції з плавністю анімації
        section.scrollIntoView({ behavior: 'smooth' });
    });
});