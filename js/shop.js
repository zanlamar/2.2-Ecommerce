// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];
// cleanCart();

// change DOM by ID
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
            });
    });
});

// Exercise 1
const buy = (id) => {
    console.log(`producto ID ${id}`);

    // 1. Loop for to the array products to get the item to add to cart
    let item = products.find(product => product.id === id);
    let cartItem = cart.find(product => product.id === id);
    let newCartItem = (!cartItem)? true: false;

    // 2. Add found product to the cart array
    if (newCartItem) {cart.push({...item, quantity: 1});
        } else {
        cartItem.quantity++;
    };

    // update the product cart counter at navbar
    const updateCounter = () => {
        const counter = document.getElementById("count_product");
        const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
        counter.textContent = totalItems;
    };

    updateCounter();
    printCart();
}
// Exercise 2 - empty cart (how to include this at the beggining?)
const cleanCart = () =>  {
    cart.splice(0, cart.length); // this way it gets empty
    updatePage("count_product", 0); // this way it shows that is empty
    printCart(); // cleans the view os the cart
};

const emptyCart = document.getElementById("clean-cart");
emptyCart.addEventListener('click', cleanCart);


// Exercise 3
// Calculate total price of the cart using the "cartList" array
const calculateTotal = () =>  {
    let total = 0;
    cart.forEach(element => { 
        total += element.price * element.quantity}); 
    return total.toFixed(2);
}

// Exercise 4
// Apply promotions to each item in the array "cart"
const applyPromotionsCart = () =>  {
    let subtotalWithDiscount = 0;

    cart.forEach((element) => {

        if (element.offer && element.quantity >= element.offer.number) {
            const discount = element.price * (element.offer.percent / 100);
            const promoPrice = element.price - discount;
            subtotalWithDiscount += promoPrice * element.quantity;
        } else {
            subtotalWithDiscount += element.price * element.quantity;
        };

    }); return subtotalWithDiscount.toFixed(2);
};


// apply products to a single product

const applyPromotionSingle = ((product) => {
    let finalDiscountedPrice = 0;

    if (product.offer && product.quantity >= product.offer.number) {
            const discount = product.price * (product.offer.percent / 100);
            const promoPrice = product.price - discount;
            finalDiscountedPrice = promoPrice * product.quantity;
    } else {
        finalDiscountedPrice = product.price * product.quantity;
    };
    return finalDiscountedPrice; 
});

// Exercise 5
// Fill the shopping cart modal manipulating the shopping cart dom

const printCart = () => {
    const cartList = document.getElementById("cart_list"); // identify the elements in order to change them later
    const totalPrice = document.getElementById("total_price");
    const container = document.getElementById("total_container");
    const table = document.querySelector(".table");
    
    cartList.innerHTML = '';
    
    if (cart.length === 0) {
        // se mantiene la parte de producto, price, quantity etc. pero dentro aparece un texto especifico
        cartList.innerHTML = ` 
            <tr>
                <td colspan="5" class="text-center">🛒 Your cart is empty. Are you ready to shop?</td>
            </tr>
            `;
        container.style.display = "none"; // to hide the total span, para que no aparezca el total
        return;

    } else { 
        container.style.display = 'block';
    }

    cart.forEach((element) => {
        cartList.innerHTML += `
        <tr>
            <td>${element.name}</td>
            <td>$${element.price}</td>
            <td>${element.quantity}</td>
            <td>$${applyPromotionSingle(element)}</td>
        </tr>
        `;
    });
    container.textContent = `Total: $${applyPromotionsCart()}`
};


/// ADD A LSITENER TO THE CHARGING DOM IN ORDER TO CLEAN THE CART BEFORE
document.addEventListener('DOMContentLoaded', () => {
    const emptyCart = document.getElementById("clean-cart");
    emptyCart.addEventListener('click', cleanCart);

    updatePage("count_product", 0); // this way it shows that is empty
    printCart(); // cleans the view os the cart
});



// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {

    printCart();
}

const open_modal = () =>  {
    printCart();
}