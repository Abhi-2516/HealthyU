document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");

    paymentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // You can add your payment processing logic here.
        // Typically, you would send this data to a server for processing.

        alert("Payment submitted successfully!");
        alert("You Can Now Exit !");
        alert("We Will Contact You !");
         
        paymentForm.reset();
    });
});
