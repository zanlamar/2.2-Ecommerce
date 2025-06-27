"use strict"
import { products } from './products.js';

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


// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
// const cart = [];

// change DOM by ID - TBC
function updatePage(id, newValue){
    const element = document.getElementById(id);
    if (element) element.innerHTML = newValue;
}

// activate queries and events on html WHEN DOM IS READY
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
        updatePage("count_product", 0); // this way it shows that is empty
        printCart(); // cleans the view of the cart
        // YAS FUNCIONA !
    });

    // console.log(emptyCart); 
    
    // // update the product cart counter at navbar
    // const updateCounter = () => {
    //     const counter = document.getElementById("count_product");
    //     const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
    //     counter.textContent = totalItems;
    //     return totalItems;
    // } 

// Exercise 1
// const buy = (id) => {
//     console.log(`producto ID ${id}`);

//     // 1. Loop for to the array products to get the item to add to cart
//     let item = products.find(product => product.id === id);
//     let cartItem = cart.find(product => product.id === id);
//     let newCartItem = (!cartItem)? true: false;

//     // 2. Add found product to the cart array
//     if (newCartItem) {cart.push({...item, quantity: 1});
//         } else {
//         cartItem.quantity++;
//     };

//     updateCounter();
//     printCart();
// }
// // Exercise 2 - empty cart (how to include this at the beggining?)
// const cleanCart = () =>  {
//     cart.splice(0, cart.length); // this way it gets empty
//     updatePage("count_product", 0); // this way it shows that is empty
//     printCart(); // cleans the view of the cart
// };


// Exercise 3
// Calculate total price of the cart using the "cartList" array
// const calculateTotal = () =>  {
//     let total = 0;
//     cart.forEach(element => { 
//         total += element.price * element.quantity}); 
//     return total.toFixed(2);
// }

// Exercise 4
// Apply promotions to each item in the array "cart"
// const applyPromotionsCart = () =>  {
//     let subtotalWithDiscount = 0;

//     cart.forEach((element) => {

//         if (element.offer && element.quantity >= element.offer.number) {
//             const discount = element.price * (element.offer.percent / 100);
//             const promoPrice = element.price - discount;
//             subtotalWithDiscount += promoPrice * element.quantity;
//         } else {
//             subtotalWithDiscount += element.price * element.quantity;
//         };

//     }); return subtotalWithDiscount.toFixed(2);
// };


// apply products to a single product
// creo que esta funcion no se usa realmente para nada?
// const applyPromotionSingle = ((product) => {
//     let finalDiscountedPrice = 0;

//     if (product.offer && product.quantity >= product.offer.number) {
//             const discount = product.price * (product.offer.percent / 100);
//             const promoPrice = product.price - discount;
//             finalDiscountedPrice = promoPrice * product.quantity;
//     } else {
//         finalDiscountedPrice = product.price * product.quantity;
//     };
//     return finalDiscountedPrice.toFixed(2); 
// });

// Exercise 5
// Fill the shopping cart modal manipulating the shopping cart dom

const printCart = () => {
    const cartList = document.getElementById("cart_list"); // identify the elements in order to change them later
    const container = document.getElementById("total_container");
    const CTAs = document.getElementById("checkout-buttons");
    
    cartList.innerHTML = '';
    
    if (cart.length === 0) {
        // se mantiene la parte de producto, price, quantity etc. pero dentro aparece un texto especifico
        cartList.innerHTML = ` 
            <tr>
                <td colspan="5" class="text-center h5"><br>🛒 Your cart is empty!<br> Are you ready to shop?<br><br> 
            </tr>
            `;
        container.style.display = "none"; // to hide the total span, para que no aparezca el total
        CTAs.style.display = "none"; // para que no aparezcan los botones
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


// NEW QUANTITY SELECTOR
const quantityButtons = document.querySelectorAll('.btn-number');

    quantityButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);  // este es el identificador del id que hemos colocado en el html
            const type = btn.dataset.type; // si es plus o minus
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




/// ADD A LSITENER TO THE CHARGING DOM IN ORDER TO CLEAN THE CART BEFORE
document.addEventListener('DOMContentLoaded', () => {
    const emptyCart = document.getElementById("clean-cart");
    emptyCart.addEventListener('click', cleanCart);

    updatePage("count_product", 0); // this way it shows that is empty
    printCart(); // cleans the view of the cart
});


// Exercici 6
//Ara implementarem la validació del formulari de checkout que es troba en l'arxiu checkout.js.




// ** Nivell II **

// Exercise 7
// const removeFromCart = (id) => {
//     const index = cart.findIndex(p => p.id === id);

//     if (index !== -1) {
//         cart.splice(index, 1);
//         printCart();
//         updateCounter();
//     };
// };


const open_modal = () =>  {
    printCart();
}