// variables with let, const, var
let age = 25;
const name = 'John';
var isLoggedIn = true;

// Difference between let and var 
if (true) {
    let blockScoped = 'Visible only here';
    var functionScoped = 'Visible everywhere in the function';

    // console.log(blockScoped); // Works
    // console.log(functionScoped); // Works
}

console.log(blockScoped); // Error
console.log(functionScoped); // Works

// let and const are only valid within the block where they were defined, i.e., inside the curly braces {}
// var is valid throughout the entire function, which can sometimes lead to errors