// check if orders exist in session storage
const orders = new Map(JSON.parse(sessionStorage.getItem('orders')));

console.log(orders)

async function setProduct(id) {
    const response = await fetch('../products.json');
    const data = await response.json();
    const product = data.products.find(product => parseInt(product.id) === parseInt(id));

    if (!orders.has(product.id)) {
        orders.set(product.id, {product: product, quantity: 1});
    } else {
        const currentQuantity = orders.get(product.id).quantity;
        orders.set(product.id, {product: product, quantity: currentQuantity + 1});
    }

    console.log("here " + id);
    console.log(orders);

    localStorage.setItem('orders', JSON.stringify(Array.from(orders.entries())));
}

