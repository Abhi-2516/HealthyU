# Gym Supplements E-Commerce Platform

A modern and fully functional e-commerce platform for gym supplements, featuring a seamless payment process and a BMI calculator. Built using **HTML, CSS, Tailwind CSS, and JavaScript**.

## Features
- **Product Listing**: Browse a variety of gym supplements.
- **Product Search & Filters**: Easily find supplements by category, price, or brand.
- **Cart Management**: Add, remove, and update products in the cart.
- **Secure Payment Gateway**: Complete transactions using multiple payment options.
- **BMI Calculator**: Calculate Body Mass Index (BMI) to assist customers in choosing the right supplements.
- **Responsive Design**: Fully optimized for desktop and mobile devices.

## Technologies Used
- **Frontend**: HTML, CSS, Tailwind CSS, JavaScript
- **Payment Gateway**: Integration with Stripe / Razorpay
- **BMI Calculation Logic**: JavaScript-based formula

## Installation

### Clone the Repository
```sh
git clone https://github.com/Abhi-2516/gym-supplements-store.git
cd gym-supplements-store
```

### Open the Project
Since this is a frontend-based project, you can open `index.html` in a browser or use a live server extension in VS Code.

## Usage
1. **Browse Products**: Navigate through different supplements and select the ones you need.
2. **Add to Cart**: Click on the "Add to Cart" button for your selected products.
3. **Proceed to Checkout**: Review your cart and proceed to the payment page.
4. **Make Payment**: Enter your payment details and complete the transaction securely.
5. **Use BMI Calculator**: Enter your height and weight to get your BMI score and recommendations.

## Payment Integration
This project integrates a **secure payment gateway** (e.g., Stripe or Razorpay). The payment process follows these steps:
1. User adds items to the cart and clicks "Checkout".
2. Payment details are entered and submitted.
3. Payment is processed securely through the selected gateway.
4. Upon successful payment, an order confirmation message is displayed.

## BMI Calculator
The BMI calculator uses the following formula:
```javascript
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi.toFixed(2);
}
```
Users can enter their **weight (kg)** and **height (m)** to get their BMI result and category.


## Contact
For inquiries, contact me at: [2516abhi43@gmail.com]

