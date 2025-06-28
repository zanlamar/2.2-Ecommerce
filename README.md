# ITA SPRINT 2: JAVASCRIPT Basics — by Ana Laf

---

## 📄 Description
Second sprint of the bootcamp. Second part focused on JavaScript logics of an e-commerce.




## 🎯 Objectives

- Put **JavaScript** concepts into practice.
- Learn to manipulate a **dataset**.
- Divide code into **single-responsibility** functions.
- Develop **cart functionalities / logic**.
- Develop form **validations**.





## 💻 Technologies Used

- HTML5, CSS & Bootstrap 5 (for layout and minimal styling).
- JavaScript (DOM manipulation + validation).
- RegEx (for email, phone, password patterns).



## 📋 Requirements

No additional dependencies are required to run this project. You just need a modern web browser (Chrome, Firefox, Edge, etc.).


## 🛠 Installation

There’s no need to install anything for this project, just clone the Git repository and dive through the main.html file.
```bash
git clone [https://github.com/zanlamar/2.2-Ecommerce]
cd STARTER-CODE-FRONTEND-SHOP
open index.html
``` 
---


## 📁 Project Structure
The project was developed in two branches: `main`and `develop`.

Folder structure: 

<pre> ```text 📁 STARTER-CODE-FRONTEND-SHOP ├── 📄 index.html ├── 📄 checkout.html ├── 📁 js │ ├── 📄 cart.js │ ├── 📄 checkout.js │ ├── 📄 products.js │ └── 📄 shop.js ├── 📁 css │ └── 📄 styles.css ├── 📁 images │ ├── 📄 favicon.ico │ ├── 📄 product.svg │ ├── 📁 items │ │ └── 🖼️ (product images) │ └── 📁 herobanner │ └── 🖼️ (hero banner images) ``` </pre>


---

## 🔮  Functionalities

### 🛒 Cart Functionality / logic
##### Add to cart:
Products are added to the cart[ ] array.
If the product already exists, its quantity is incremented.

##### View and print cart:
Products are listed in a modal with name, price, quantity, and subtotal.
Totals are dynamically calculated.

##### Discounts applied:
Products with offers apply discounts automatically if quantity requirements are met.

##### Clear cart:
Empties the cart and updates all DOM elements (counter, total_price, etc).


### ✅ Checkout form validation
##### Field-level validation on blur:
Each input field is validated when the user leaves it. If the value is incorrect, an error message appears below the field.

##### Dynamic feedback:
Adds is-invalid class and error message on invalid input.
Adds is-valid class when the input becomes valid.
Error messages are contextual and easy to customize on HTML.

##### Form-level validation on submit
All validations are handled with vanilla JavaScript, using RegEx and logic functions for field-specific rules.

---

## 👩🏻‍🎨 Layout

Some improvement changes onto the original design, focused mainly on UX and commercial purposes:

- 🔝 **Sticky navbar** with interactive hover buttons.

- 🎯 **Dynamic herobanner** for better offer visibility.

- 🖼️ Enhanced **product visuals with extra hover images**.

- 💳 **Optimized checkout UX** – clearer focus on conversion.

- 💬 **Refined commercial layout** and content for clarity and appeal.




### 📸  Preview

![JavaScript preview](preview.gif)



---

## 📋 Takeaways
- It was delightful to apply JavaScript to a 'realistic' project as an ecommerce.
- It was exciting to unlock so many new functionalities while developing this project! 🤩
- No drama with github during this sprint (!!!).
- Deeper understanding of layout and styles.
- I understand now the unique responsibility principle.
- The HTML validation & the 'blur' event were super interesting.





## 💬 Notes
- Missing some backend in order to make the navbar on the checkout page useful.
- Many other ideas to improve commercial purposes on the backlist.
- Refactorizing was satisfying.




### ⭐ Highlights

- Thanks to Rick for his check.

---