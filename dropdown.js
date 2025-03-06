// Select the button element
let button = document.querySelector("button");

// Add an event listener for the 'click' event
button.addEventListener("click", function() {
    // Toggle the 'display' class on the button
    button.classList.toggle("display");

    // Log the current state of the button
    if (button.classList.contains("display")) {
        console.log("Dropdown is now visible.");
    } else {
        console.log("Dropdown is now hidden.");
    }
});