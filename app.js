function calculateGST() {
    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var gstRate = parseFloat(document.getElementById("gstRate").value);
    
    if (isNaN(subtotal) || isNaN(gstRate)) {
        alert("Please enter valid numbers for Subtotal and GST Rate.");
        return;
    }
    
    var gstAmount = (subtotal * gstRate) / 100;
    var totalAmount = subtotal + gstAmount;
    var subtotalAmount = gstAmount + totalAmount
    
    document.getElementById("gstAmount").innerText = "GST Amount: INR " + gstAmount.toFixed(2);
    document.getElementById("totalAmount").innerText = "Total Amount: INR " + totalAmount.toFixed(2);
    
}



function navSlide(){
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");


    burger.addEventListener("click", ()=>{
        menu.classList.toggle("nav-active");

        // burger.classList.toggle("toggle");
    })
}
navSlide();


