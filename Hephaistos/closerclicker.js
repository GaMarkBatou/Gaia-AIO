

// Call the function to search for "sample paragraph."
// clickElementContainingText('sample paragraph.');

var newElement = document.createElement("div");
		newElement.id = "cclicker";
		newElement.style.position = "absolute";
		newElement.style.zIndex = "99999";
		newElement.style.top = "30px";
		newElement.style.left = "1200px";
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
		
		//	const element = document.getElementById('WIN_0_536870905');
		//	element.click();
			
			(document.evaluate("/html/body/div[1]/div[5]/div[34]/fieldset[8]/div[3]/a", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue |
			| console.error("Element not found with the provided XPath.")).click();

			
    });