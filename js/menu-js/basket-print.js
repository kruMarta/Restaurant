const basketContainer = document.querySelector('.basket-block');
const orderContainer = document.querySelector('.orders');
const totalPriceContainer = document.querySelector('.total-price');

// Отримати дані з локального сховища
let ordersList = new Map(JSON.parse(localStorage.getItem('orders')));

if (ordersList) {
    printProducts(ordersList);
} else {
    console.log("empty")
}
console.log(ordersList)



function printProducts(orders) {

    console.log(orders)
    // if (orders.size)

    let totalPrice = 0;
    orderContainer.innerHTML = '';
    orders.forEach((entry) => {

        const product = entry.product
        const quantity = entry.quantity

        const orderHTML = `
                <div class="row order-item">
                    
                    <div class="order-desc">
                        <table>
                            <tr>
                                <td class="img-column">
                                    <img class="order-img" src="${product.image}" alt="">
                                </td>
                                <td class="desc-column">
                                    <div class="row">
                                        <div class="col-7 order-item-title">
                                            ${product.name}
                                        </div>
                                        <div class="col-2 order-item-quantity text-center">
                                            <button class="btn-minus" onclick="decQ(${product.id});">
                                                -
                                            </button>
                                            <span> ${quantity} </span>
                                            <button class="btn-add" onclick="incQ(${product.id});">
                                                +
                                            </button>
                                        </div>
                                        <div class="col-3 order-item-price text-end">
                                            ${product.price} ₴
                                        </div>
                                    </div>

                                </td>
                            </tr>
                        </table>
                    </div>
                    
                    <div class="remove-order">
                        <button class="remove-btn" onclick="removeItem(${product.id});">
                            <img src="../images/menu/cancel.svg" alt="cancelOrderItem">
                        </button>
                    </div>
                    
                </div>
            `;


        orderContainer.insertAdjacentHTML('beforeend', orderHTML);

        totalPrice += parseInt(product.price) * quantity
    });

    totalPriceContainer.innerHTML = '';
    if (totalPrice > 0) {
        totalPriceContainer.insertAdjacentHTML('beforeend', `
        <div class="total-price-text">
            Разом
        </div>
        <div class="total-price-value">
            ${totalPrice} ₴
        </div>
    `);
    }
}

function incQ(id) {
    if (ordersList.get(id).quantity <= 30) {
        ordersList.get(id).quantity += 1;
        ordersList.set(id, ordersList.get(id));
    }
    printProducts(ordersList)
}

function decQ(id) {
    if (ordersList.get(id).quantity > 1) {
        ordersList.get(id).quantity -= 1;
        ordersList.set(id, ordersList.get(id));
    }
    printProducts(ordersList)
}

function removeItem(id) {
    ordersList.delete(id);
    
    localStorage.setItem('orders', ordersList);
    printProducts(ordersList)
}