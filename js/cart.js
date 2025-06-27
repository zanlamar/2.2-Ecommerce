"use strict"

// las constantes que van de uno a otro
import { products } from './products.js'

export const cart = [];
 
// update the product cart counter at navbar
export const updateCounter = () => {
    const counter = document.getElementById("count_product");
    const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
    counter.textContent = totalItems;
    return totalItems;
} ;

export const buy = (id) => {
    // 1. Loop for to the array products to get the item to add to cart
    let item = products.find(product => product.id === id);
    let cartItem = cart.find(product => product.id === id);
    let newCartItem = (!cartItem)? true: false;

    // 2. Add found product to the cart array
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
    console.log('calculatesingle', total.toFixed(2)); // este si funciona
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
        console.log('promotionsingleCart', finalDiscountedPrice) // ahora si, YAS!
        return finalDiscountedPrice;
    };
});

// esta se usa realmente? yo creo que no
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
            const promoPrice = element.price - discount; // esto es interesante que esté en una nueva variable porque es muy goloso para marketing
            subtotalWithDiscount += promoPrice * element.quantity;
            console.log('applypromotionscart CON DESCUENTO', subtotalWithDiscount); // creo que es ok pero faltaria el tofixed
        } else {
            subtotalWithDiscount += calculatePriceSingle(element);
            console.log('applypromotionscart sin DESCUENTO', subtotalWithDiscount); // creo que es ok pero faltaria el tofixed
        };
    });
    return subtotalWithDiscount.toFixed(2);

};


export const removeFromCart = (id) => {
    const index = cart.findIndex(p => p.id === id);

    if (index !== -1) {
        cart.splice(index, 1);
        printCart();
        updateCounter();
    };
};

export const cleanCart = () =>  {
    cart.splice(0, cart.length); // this way it gets empty
    updatePage("count_product", 0); // this way it shows that is empty
    printCart(); // cleans the view of the cart
};





