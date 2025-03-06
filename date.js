// Current date
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1; // Months are 0-based
console.log(`The current date is: ${day}.${month}.`);

// Current time
let hours = date.getHours();
let minutes = date.getMinutes();
console.log(`It is now ${hours} o'clock and ${minutes} minutes.`);