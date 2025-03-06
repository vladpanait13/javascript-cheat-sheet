// Select an element
const button = document.querySelector('button');

// Add click event listener
button.addEventListener('click', () => {
    alert('Button clicked!');
});

// Create a new element and append it with text content  (to the body of doc)
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, DOM!';
document.body.appendChild(newDiv);