const orderContainer = document.querySelector('.orders');
const totalPriceContainer = document.querySelector('.total-price');

let totalPrice = 0;

window.onload = () => {
    orders.forEach((quantity, product) => {
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
                                            <button class="btn-minus" onclick="decQ();">
                                                -
                                            </button>
                                            <span> ${quantity} </span>
                                            <button class="btn-add" onclick="incQ();">
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
                        <button class="remove-btn">
                            <img src="../images/menu/cancel.svg" alt="cancelOrderItem">
                        </button>
                    </div>
                    
                </div>
            `;

        orderContainer.insertAdjacentHTML('beforeend', orderHTML);

        totalPrice += parseInt(product.price)
    });

    totalPriceContainer.insertAdjacentHTML('beforeend', `
        <div class="total-price-text">
            Разом
        </div>
        <div class="total-price-value">
            ${totalPrice} ₴
        </div>
    `);

    console.log(orders)
}