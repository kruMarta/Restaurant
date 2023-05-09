// Отримуємо елемент, в який будуть записані продукти
const pizzaList = document.querySelector('.pizza');
const pastaList = document.querySelector('.pasta');
const saladList = document.querySelector('.salad');
const drinkList = document.querySelector('.drink');
const mobPizzaList = document.querySelector('.mob-pizza');
const mobPastaList = document.querySelector('.mob-pasta');
const mobSaladList = document.querySelector('.mob-salad');
const mobDrinkList = document.querySelector('.mob-drink');

// Завантажуємо інформацію з JSON файлу
fetch('../products.json')
    .then(response => response.json()) // перетворюємо в JSON об'єкт
    .then(data => {
        // отримуємо масив продуктів з JSON
        const products = data.products;

        // пройтися по кожному продукту та створити HTML код для нього
        products.forEach(product => {
            const productHTML = `
                        <div class="product-container">
                            <a href="../pages/menu-item.html?prod_id=${product.id}">
                                <div class="product-img">
                                    <img class="prod-img" src="${product.image}" alt="${product.name}">
                                </div>
                            </a>
                            <div class="row product-desc">
                                <div class="col-8 text-start p-0"><span class="product-title">${product.name}</span></div>
                                <div class="col-4 text-end p-0"><span class="product-price">${product.price} ₴</span></div>
                            </div>
                            <button class="product-btn text-center" onclick="setProduct(${product.id});">
                                <span class="product-btn-text">додати в корзину </span>
                                <img class="basket-arrow" src="../images/menu/long-arrow.svg" alt="longArrow">
                            </button>
                        </div>
            `;

            const categoryList = {
                "Піца": pizzaList,
                "Паста": pastaList,
                "Салати": saladList,
                "Напої": drinkList
            };

            categoryList[product.category].insertAdjacentHTML('beforeend', productHTML);

            const mobCategoryList = {
                "Піца": mobPizzaList,
                "Паста": mobPastaList,
                "Салати": mobSaladList,
                "Напої": mobDrinkList
            };

            mobCategoryList[product.category].insertAdjacentHTML('beforeend', productHTML);

        });
    })
    .catch(error => console.error(error));
