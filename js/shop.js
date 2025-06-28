"use strict"

import {
    cart,
    updateCounter,
    buy,
    calculatePriceSingle,
    applyPromotionSingle,
    calculateTotal,
    applyPromotionsCart,
    removeFromCart,
    cleanCart,
} from './cart.js';


function updatePage(id, newValue){
    const element = document.getElementById(id);
    if (element) element.innerHTML = newValue;
}

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', event => {
                const id = button.getAttribute('data-product-id');
                buy(parseInt(id));
                printCart();
            });
        });
    });

    const emptyCart = document.getElementById("clean-cart");
    emptyCart.addEventListener('click', () => { 
        cleanCart();
        updatePage("count_product", 0); 
        printCart();
    });


const printCart = () => {
    const cartList = document.getElementById("cart_list"); // identify the elements in order to change them later
    const container = document.getElementById("total_container");
    const CTAs = document.getElementById("checkout-buttons");
    
    cartList.innerHTML = '';
    
    if (cart.length === 0) {
        cartList.innerHTML = ` 
            <tr>
                <td colspan="5" class="text-center h5"><br>🛒 Your cart is empty!<br> Are you ready to shop?<br><br> 
            </tr>
            `;
        container.style.display = "none";
        CTAs.style.display = "none";
        return;

    } else { 
        container.style.display = 'block';
        CTAs.style.display = "block";
    };


    cart.forEach((element) => {
        cartList.innerHTML += `
            <tr>
                <td>${element.name}</td>
                <td>$${element.price}</td>
                <td><div class="input-group">
                    <span class="input-group-btn">
                        <button type="button" class="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="" data-id="${element.id}">
                            <span class="glyphicon glyphicon-minus"></span>
                        -</button>
                    </span>
                    <input type="text" id="quantity" name="quantity" class="form-control input-number" value="${element.quantity}" min="1" max="99" data-id="${element.id}">
                        <span class="input-group-btn">
                            <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="" data-id="${element.id}">
                                <span class="glyphicon glyphicon-plus"></span>
                            +</button>
                        </span>
                    </div>
                </td>
                <td>$${applyPromotionSingle(element).toFixed(2)}</td>
            </tr>
            `;
        container.textContent = `Total: $${applyPromotionsCart()}`  
    });


const quantityButtons = document.querySelectorAll('.btn-number');

    quantityButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id); 
            const type = btn.dataset.type;
            const item = cart.find(p => p.id === id);

            if (type === 'plus') {
                buy(id);
                printCart();

            } else if (type === 'minus') {
                if (item && item.quantity > 1) {
                    item.quantity--;
                    console.log(item.quantity);
                    printCart();
                    updateCounter();                    
                } else {
                    removeFromCart(id)
                    printCart();
                    updateCounter();           
                };
            };
        });
    });
};



document.addEventListener('DOMContentLoaded', () => {
    const emptyCart = document.getElementById("clean-cart");
    emptyCart.addEventListener('click', cleanCart);

    updatePage("count_product", 0); 
    printCart();
});


const open_modal = () =>  {
    printCart();
}
