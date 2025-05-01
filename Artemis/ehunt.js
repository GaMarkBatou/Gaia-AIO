var newElement = document.createElement("div");
		newElement.id = "enthunt";
		newElement.style.position = "absolute";
		newElement.style.zIndex = "9999";
		newElement.style.top = "30px";
		newElement.style.left = "725px";
		newElement.style.width = "50px";
		newElement.style.height = "50px";
        newElement.innerHTML = "<button id='enthunt' type='button'>Entry</button>";
	document.getElementById('FormContainer').appendChild(newElement);	
	/* FormApp--FormContainer */


document.getElementById("enthunt").addEventListener("click", function() {
			if(typeof ClipboardItem === "undefined") {
			alert("Sorry! This feature is not yet available in the browser you are using.\n\n" +
				"Selecting the text and pasting it to your email should give you the same result.")
			return;
		}

		const type = "text/html";
		const blob = new Blob([WIN_0_536871148.innerHTML], {type});
		const data = [new ClipboardItem({[type]: blob})];

		navigator.clipboard.write(data).then(function () {
			exampleContent.style.opacity = '0.4';

			setTimeout(function () {
				exampleContent.style.opacity = '1';
			}, 80)

		}, function () {
			// Fallback in case the copy did not work
		});
    });
	
/*	const copyContentButton = document.getElementById("copyContentButton");

	copyContentButton.addEventListener('click', () => {
    if(typeof ClipboardItem === "undefined") {
        alert("Sorry! This feature is not yet available in the browser you are using.\n\n" +
            "Selecting the text and pasting it to your email should give you the same result.")
        return;
    }

    const type = "text/html";
    const blob = new Blob([exampleContent.innerHTML], {type});
    const data = [new ClipboardItem({[type]: blob})];

    navigator.clipboard.write(data).then(function () {
        exampleContent.style.opacity = '0.4';

        setTimeout(function () {
            exampleContent.style.opacity = '1';
        }, 80)

    }, function () {
        // Fallback in case the copy did not work
    });
}); */
