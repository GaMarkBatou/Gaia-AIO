// Set up variables
var panicTT = document.getElementById("WIN_0_1").querySelector("textarea");
const duration = 30000; // 30 seconds in milliseconds
const interval = 2000; // 2 seconds in milliseconds
let elapsedTime = 0;

// Function to save text input value to Chrome's local storage
function saveToChromeStorage(value) {
    chrome.storage.local.set({ panicTT: value }, function () {
        console.log(`Saved to Chrome storage: ${value}`);
    });
}

// Timer function
const timer = setInterval(() => {
    // Get the current value of the text input
    var inputValue = panicTT.value;
    console.log(`Input value: ${inputValue}`);

    // Save the value to Chrome's storage
    saveToChromeStorage(inputValue);

    // Increment elapsed time
    elapsedTime += interval;

    // Stop the interval after 30 seconds
    if (elapsedTime >= duration) {
        clearInterval(timer);
        console.log("Stopped saving input values after 30 seconds.");
    }
}, interval);
