"use strict"

import { products } from './products.js'

export const cart = [];
 
export const updateCounter = () => {
    const counter = document.getElementById("count_product");
    const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
    counter.textContent = totalItems;
    return totalItems;
} ;

export const buy = (id) => {
    let item = products.find(product => product.id === id);
    let cartItem = cart.find(product => product.id === id);
    let newCartItem = (!cartItem)? true: false;

    if (newCartItem) {cart.push({...item, quantity: 1});
        } else {
        cartItem.quantity++;
    }; 
    updateCounter();
    // printCart();
    console.log('buy', id, cart);
};

export const calculatePriceSingle = (product) => {
    let total = product.price * product.quantity;
    return total; 
}

export const applyPromotionSingle = ((product) => {
    let finalDiscountedPrice = 0;

    if (product.offer && product.quantity >= product.offer.number) {
            const discount = product.price * (product.offer.percent / 100);
            const promoPrice = product.price - discount;
            return promoPrice * product.quantity;
    } else {
        finalDiscountedPrice = calculatePriceSingle(product);
        return finalDiscountedPrice;
    };
});

export const calculateTotal = () =>  {
    let total = 0;
    cart.forEach(element => { 
        // total += element.price * element.quantity}); 
        calculatePriceSingle(element)});
    return total.toFixed(2);
};

export const applyPromotionsCart = () =>  {
    let subtotalWithDiscount = 0;

    cart.forEach((element) => {
        if (element.offer && element.quantity >= element.offer.number) {
            const discount = element.price * (element.offer.percent / 100);
            const promoPrice = element.price - discount; 
            subtotalWithDiscount += promoPrice * element.quantity;
            console.log('applypromotionscart CON DESCUENTO', subtotalWithDiscount); 
        } else {
            subtotalWithDiscount += calculatePriceSingle(element);
            console.log('applypromotionscart sin DESCUENTO', subtotalWithDiscount); 
        };
    });
    return subtotalWithDiscount.toFixed(2);
};

export const cleanCart = () =>  {
    cart.splice(0, cart.length);
};

export const removeFromCart = (id) => {
    const index = cart.findIndex(p => p.id === id);

    if (index !== -1) {
        cart.splice(index, 1);
    };
};







