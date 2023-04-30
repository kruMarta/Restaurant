const mapOrder = new Set();
const orders = new Map();

function setProduct(id) {
    mapOrder.set(id)
}

fetch('../products.json')
    .then(response => response.json())
    .then(data => {
        const products = data.products;
    // .find(product => parseInt(product.id) === parseInt(id))


        mapOrder.forEach((id) => {
            products.forEach(product => {
                if (parseInt(product.id) === id) {
                    orders.set(product, 1);
                }
            });
        });

    });

function incQ(product) {
    if (mapOrder.get(product).key <= 30) {
        mapOrder.get(product).key++
    }
}

function decQ(product) {
    if (mapOrder.get(product).key >= 1) {
        mapOrder.get(product).key--
    }
}


