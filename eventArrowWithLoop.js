// Retrieve form elements
const usernameField = document.getElementById('username');
const submitButton = document.getElementById('submitBtn');
const message = document.getElementById('message');

// add click Event listener with arrow function and if-else to the submit btn
// if username is empty, it displays error message
submitButton.addEventListener('click', () => {
    if (usernameField.value.trim() === '') {
        message.textContent = 'Please enter a username.';
        message.style.color = 'red';
    } else {
        message.textContent = `Welcome, ${usernameField.value}!`;
        message.style.color = 'green';
    }
});