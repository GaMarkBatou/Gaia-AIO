function simulateUserInteraction(element) {
	
	
	try {
		element.focus();
	}
	catch(err) {
		console.log("Ops!");
	}

	  // Szimuláljuk az input eseményt
	var inputEvent = new Event('input', {
		bubbles: true,
		cancelable: true
	});
	  element.dispatchEvent(inputEvent);
	// Szimuláljuk a változást
	
	var changeEvent = new Event('change', {
		bubbles: true,
		cancelable: true
	});
	
	element.dispatchEvent(changeEvent);
}

//simulateUserInteraction(document.getElementById("arid_WIN_0_536870921"));
