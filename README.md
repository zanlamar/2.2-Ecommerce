# ITA SPRINT 2: JAVASCRIPT Basics — by Ana Laf

## 📄 Description
Second sprint of the bootcamp. Second part focused on JavaScript logics of an e-commerce.




## 🎯 Objectives

- Put JavaScript concepts into practice.
- Learn to manipulate a dataset.
- Divide code into **single-responsibility** functions.
- Develop cart functionalities / logic.
- Develop form validations.





## 💻 Technologies Used

- HTML5, CSS & Bootstrap 5 (for layout and minimal styling).
- JavaScript (DOM manipulation + validation).
- RegEx (for email, phone, password patterns).



## 📋 Requisitos

No additional dependencies are required to run this project. You just need a modern web browser (Chrome, Firefox, Edge, etc.).



## 🛠 Installation

There’s no need to install anything for this project, just clone the Git repository and dive through the main.html file.




## 📁 Project Structure
The project was developed in two branches: main and develop.

The folders in **main** contains:
- A `shop.js` file with the JavaScript code.
- A `product.js` file with the product array given.

- A `shop.html` file to visualize the exercises.
- A `checkout.html` file to visualize the exercises.



## 🔮  Functionalities

### Cart Functionality
- Add to cart:
Products are added to the cart[] array.
If the product already exists, its quantity is incremented.

- View and print cart:
Products are listed in a modal with name, price, quantity, and subtotal.
Totals are dynamically calculated.

- Discounts applied:
Products with offers apply discounts automatically if quantity requirements are met.

- Clear cart:
Empties the cart and updates all DOM elements (counter, total_price, etc).


### Checkout form validation
- Field-level validation on blur:
Each input field is validated when the user leaves it. If the value is incorrect, an error message appears below the field.

- Dynamic feedback:
Adds is-invalid class and error message on invalid input.
Adds is-valid class when the input becomes valid.
Error messages are contextual and easy to customize on HTML.

- Form-level validation on submit
All validations are handled with vanilla JavaScript, using RegEx and logic functions for field-specific rules.


### Layout




### 📸  Preview

![JavaScript preview](preview.gif)



---

## 📋 Takeaways
- It was delightful to apply JavaScript to a 'realistic' project as an ecommerce.
- So many new funtionalities unblocked! 🤩.
- No drama with github during this sprint (!!!).




## 💬 Notes
- 




### ⭐ Highlights

- Thanks to Rick for his check.
- 

---