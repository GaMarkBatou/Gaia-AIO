// Get the title element
var titleElement = document.querySelector('head > title');

// Get the title text
var titleText = titleElement.textContent;

// Function to remove leading zeros from the first 7 characters
function removeLeadingZeros(str) {
    // Limit the operation to the first 7 characters
    var firstSevenChars = str.slice(0, 7);
    // Remove leading zeros
    var modifiedFirstSevenChars = firstSevenChars.replace(/^0+/, '');
    // Combine with the rest of the title
    return modifiedFirstSevenChars + str.slice(7);
}

// Update the title text



// Function to be executed after 15 seconds
function executeAfterDelay() {
    //console.log("10 seconds have passed!");
	titleElement = document.querySelector('head > title');
	titleText = titleElement.textContent;
	titleElement.textContent = removeLeadingZeros(titleText);
    // You can place any code you want to execute after the delay here
}

// Set a timeout to wait for 15 seconds (15000 milliseconds)
setTimeout(executeAfterDelay, 10000);