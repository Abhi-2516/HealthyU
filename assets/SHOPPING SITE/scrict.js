document.addEventListener("DOMContentLoaded", function () {
    const js= document.getElementById("js");

    js.addEventListener("submit", function (e) {
        e.preventDefault();

        // You can add your payment processing logic here.
        // Typically, you would send this data to a server for processing.

        alert("Addded TO Cart");
       
         
      
    });
});
