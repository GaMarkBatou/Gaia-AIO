/* 
		function keyListener(event) {
            event = event || window.event;
            const key = event.key || event.which || event.keyCode;
            if (key === 112) { // For F1
                function copyToClipboardLegacy(text) {
					async function copyToClipboard(text) {
						try {
								await navigator.clipboard.writeText(text);
								console.log("Text copied to clipboard!");
							} catch (err) {
								console.error("Error copying text:", err);
							}
						}

					// Usage:
					const textToCopy = "Hello, world!";
					copyToClipboard(textToCopy);

                alert("Shift+F1 pressed!");
            }
        }

        // Bind the listener to the window
        window.addEventListener("keydown", keyListener); */
		
		// (event.key === "c" && event.ctrlKey && event.shiftKey) CTRL+SHIFT+C
		// (event.key === "F1" && event.shiftKey)	SHIFT+F1
		
		//console.log('Lets find!'); 
		
document.addEventListener("keydown", function(event) {
	if (event.key === "C" && event.ctrlKey && event.shiftKey) {
        //console.log('Lets find!'); 
		var highlightedText = getSelectionText();
		//console.log("Highlighted text:", highlightedText);
		
		const searchValue = highlightedText.trim(); 
        const paddedSearchValue = searchValue.padStart(15, '0'); // Add leading zeros if necessary
        const url = `https://wtts.telekom.de/wtts/forms/ars-etts.telekom.de/eTTS:Main/Web/?eid=${encodeURIComponent(paddedSearchValue)}`;
        //chrome.tabs.create({ url });
		window.open(url, "_blank");
		
    }
});


function getSelectionText() {
/*     var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type !== "Control") {
        text = document.selection.createRange().text;
    }
    return text; */
	//console.log('Lets find!1'); 
	if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return ''; // Return an empty string if selection is not supported
}