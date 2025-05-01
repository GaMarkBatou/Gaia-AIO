// Function to click on an element specified by the CSS selector
function clickElementBySelector(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView(); // Scroll to the element if necessary
        setTimeout(() => {
            element.click(); // Simulate a click on the element
            console.log('Element clicked:', element);
        }, 100); // Small delay to ensure it is clickable
    } else {
        console.error('Element not found for the given selector:', selector);
    }
}

//// Normal found end
// Function to click on an element specified by the CSS selector
function clickElementBySelector(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView(); // Scroll to the element if necessary
        element.click(); // Simulate a click on the element
        console.log('Element clicked:', element);
    } else {
        console.error('Element not found for the given selector:', selector);
    }
}

// Function to observe changes in the DOM
function observeDOM(selector) {
    const observer = new MutationObserver(() => {
        const element = document.querySelector(selector);
        if (element) {
            clickElementBySelector(selector);
            observer.disconnect(); // Stop observing after the element is found and clicked
        }
    });

    // Start observing the document body for child list changes
    observer.observe(document.body, {
        childList: true,
        subtree: true // Observe all child nodes
    });
}


// Call the function to search for "sample paragraph."
// clickElementContainingText('sample paragraph.');

var newElement = document.createElement("div");
		newElement.id = "cclicker";
		newElement.style.position = "absolute";
		newElement.style.zIndex = "99999";
		newElement.style.top = "30px";
		newElement.style.left = "1100px";
		newElement.style.width = "50px";
		newElement.style.height = "15px";
        newElement.innerHTML = "<button id='btcClicker' type='button' title='testclicker'>Clicker</button>";
	document.getElementById('FormContainer').appendChild(newElement);	
	/* FormApp--FormContainer */


document.getElementById("btcClicker").addEventListener("click", function() {
		//WIN_0_536870683
		//const element = document.getElementById('WIN_0_536870683');
		//element.click();
		// Example usage: Click the div with ID 'myDiv' inside the iframe with ID 'myIframe'
		
		setTimeout(() => {
            clickElementBySelector('#WIN_0_536871849 > a');
        }, 100);
		setTimeout(() => {
            //clickElementBySelector('body > div.MenuOuter > div.MenuTableContainer > table > tbody > tr:nth-child(2)');
			observeDOM("body > div.MenuOuter > div.MenuTableContainer > table > tbody > tr:nth-child(2)");
        }, 200);
		setTimeout(() => {
            clickElementBySelector('#WIN_0_536870683');
        }, 300);
		setTimeout(() => {
            //clickElementBySelector('#T1 > tbody > tr.SelPrimary > td:nth-child(1) > nobr > span');
			observeDOM("#T1 > tbody > tr.SelPrimary > td:nth-child(1) > nobr > span");
        }, 2000)
	
	
    });