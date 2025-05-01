        const newDiv = document.createElement("div");

        newDiv.innerHTML = "Start timer";
		newDiv.id="timer";

        document.body.appendChild(newDiv);
		
		
		let startTime = Date.now();

/*         function updateTimer() {
            const currentTime = Date.now();
            const elapsedTime = Math.floor((currentTime - startTime) / 1000); // in seconds
            document.getElementById('timer').textContent = `${elapsedTime} sec`;
        } */

/*		function updateTimer() {
			const currentTime = Date.now();
			const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);

			// Calculate minutes and seconds
			const minutes = Math.floor(elapsedTimeInSeconds / 60);
			const seconds = elapsedTimeInSeconds % 60;

			// Display the time
			document.getElementById('timer').textContent = `${minutes}:${seconds} `;
		} */
		
		function updateTimer() {
			const currentTime = Date.now();
			const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);

			// Calculate minutes and seconds
			const minutes = Math.floor(elapsedTimeInSeconds / 60);
			const seconds = elapsedTimeInSeconds % 60;

			// Format minutes and seconds with leading zeros
			const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
			const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

			// Display the time
			document.getElementById('timer').textContent = `Time in ticket: ${formattedMinutes}:${formattedSeconds}`;
		}

        setInterval(updateTimer, 1000);
		
		//////
		
		
		
		
		/* function keyListener(event) {
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