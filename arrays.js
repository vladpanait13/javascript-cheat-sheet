const numbers = [1, 2, 3, 4];

// map: Double the numbers
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 5, 8]

// filter: Only even numbers
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

// reduce: Calculate the sum
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

// An array is like a list or container where you can store multiple values
// These values can be numbers, text, objects, or even arrays

const names = ['Alice', 'Bob', 'Charlie']; // List of names instead of numbers
const mixed = [42, 'Hello', true, {key: 'value' }]; // Anything goes!

// map, etc. are tools to manipulate arrays
// map does something with each element
// filter selects specific elements
// reduce combines elements into one value

