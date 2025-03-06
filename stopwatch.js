let startTime;
let stopTime;

// Start stopwatch
function start() {
    startTime = new Date();
    console.log("Stopwatch started!");
}

// Stop stopwatch
function stop() {
    if (!startTime) {
        console.log("Please start the stopwatch first!");
        return;
    }
    stopTime = new Date();
    let difference = stopTime - startTime; // Difference in milliseconds
    let seconds = Math.floor(difference / 1000); // Convert to seconds
    console.log(`Stopwatch stopped! Time: ${seconds} seconds`);
}

// Example: Use these functions in the console
// start();  // Start the stopwatch
// stop();   // Stop after a few seconds