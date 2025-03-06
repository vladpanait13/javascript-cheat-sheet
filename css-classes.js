// Select the first paragraph element
let paragraph = document.querySelector("p");

// 1. Add the class 'besonders'
paragraph.className = "special";
console.log("Class set to 'special'. Current classes:", paragraph.className);

// 2. Remove the class 'besonders' and add 'anders'
paragraph.classList.remove("special");
paragraph.classList.add("different");
console.log("Class changed to 'different'. Current classes:", paragraph.className);

// 3. Toggle the class 'unsichtbar' (make the paragraph hidden)
paragraph.classList.toggle("invisible");
console.log("Toggled 'invisible'. Current classes:", paragraph.className);

// 4. Toggle the class 'unsichtbar' (make the paragraph visible)
paragraph.classList.toggle("invisible");
console.log("Toggled 'invisible'. Current classes:", paragraph.className);
