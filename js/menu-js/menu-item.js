const productContainer = document.querySelector('.product-main');
const mobProductContainer = document.querySelector('.mob-product-main');
const recommendedContainer = document.querySelector('.recommended-products');
const mobRecommendedContainer = document.querySelector('.mob-recommended-products');
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('prod_id');
let currentCategory;

fetch('../products.json')
    .then(response => response.json())
    .then(data => {
        const products = data.products;
        const product = products.find(product => parseInt(product.id) === parseInt(productId));

        const imgName = product.image.replace(".png", "");

        const productHTML = `
        <div class="row product-block">
            <div class="big-img-container">
                <img class="product-big-img" src="${imgName}-big.png" alt="${imgName}">
            </div>
            <div class="content-container">
                <div class="product-title">${product.name}</div>
                <div class="product-description">${product.desc}</div>
                <div class="product-price">${product.price} ₴</div>
    
                <div class="product-btn text-center">
                    <button class="product-btn-text" onclick="setProduct(${product.id});">добавити в корзину </button>
                    <img src="../images/menu/long-arrow.svg" alt="longArrow">
                </div>
    
                <a href="delivery-menu.html">
                    <div class="back-to-menu-container">
                        <span class="back-to-menu-text">
                            назад до меню
                        </span>
                    </div>
                </a>
            </div>
            <div class="small-img-container">
                <img class="product-small-img" src="${imgName}-small.png" alt="${imgName}">
            </div>
        </div>
        
        <div class="row product-block">
            <span class="weight">${product.weight} г</span>
        </div>
            `;

        currentCategory = product.category;

        productContainer.insertAdjacentHTML('beforeend', productHTML);

        mobProductContainer.insertAdjacentHTML('beforeend', `
        <div class="row prod-block">
            <div class="big-img-container">
                <img class="product-big-img" src="${imgName}-big.png" alt="${imgName}">
            </div>
            <div class="content-container">
                <div class="product-title">${product.name}</div>
                <div class="small-img">
                    <img class="product-small-img" src="${imgName}-small.png" alt="${imgName}">
                </div>
                <div class="weight-container">
                    <div class="weight">${product.weight} г</div>
                </div>
            </div>
            <div class="row">
                    <div class="product-description">${product.desc}</div>
            </div>
            <div class="row buttons text-center">
                <div class="product-btn">
                    <button class="product-btn-text" onclick="setProduct(${product.id});">добавити в корзину </button>
                    <img class="arrow-add-to-basket" src="../images/menu/long-arrow.svg" alt="longArrow">
                </div>
                <a href="delivery-menu.html">
                    <div class="back-to-menu-container">
                        <span class="back-to-menu-text">
                            назад до меню
                        </span>
                    </div>
                </a>
            </div>
        </div>
        `);
    });

fetch('../products.json')
    .then(response => response.json())
    .then(data => {
        const products = data.products.filter(prod => prod.category === currentCategory);

        console.log(products)

        let recommendProducts = [];
        let counter = 0;
        products.forEach(product => {
            if (parseInt(product.id) !== parseInt(productId)) {
                recommendProducts[counter] = product;
                counter++;
            }
        })

        recommendProducts = shuffleArray(recommendProducts);


        for (let i = 0; i < 3; i++) {
            const item = recommendProducts[i];
            const recommendationItem = `
            <div class="product-container">
                <a href="">
                    <div>
                        <img class="product-img" src="${item.image}" alt="${item.name}">
                    </div>
                </a>
                <div class="row rec-product-desc">
                    <div class="col-8 text-start"><span class="rec-product-title">${item.name}</span></div>
                    <div class="col-4 text-end"><span class="rec-product-price">${item.price} ₴</span></div>
                </div>
            </div>
            `;

            recommendedContainer.insertAdjacentHTML('beforeend', recommendationItem);


            if (i < 2) {
                mobRecommendedContainer.insertAdjacentHTML('beforeend', `
            <div class="product-container">
                <a href="">
                    <div>
                        <img class="product-img" src="${item.image}" alt="${item.name}">
                    </div>
                </a>
                <div class="rec-product-desc">
                    <div class="row"><span class="rec-product-title">${item.name}</span></div>
                    <div class="row"><span class="rec-product-price">${item.price} ₴</span></div>
                </div>
            </div>
            `);
            }

        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

    });


