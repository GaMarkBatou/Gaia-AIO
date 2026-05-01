var ciscoStatus;
//localStorage.removeItem("statusTimes");
// Create a new div element
const div = document.createElement('div');

// Set the ID
div.id = 'Tardis';

// Set its styles
div.style.position = 'fixed';
div.style.bottom = '10px'; // 20px padding from the bottom
div.style.right = '40px'; // 20px padding from the right
div.style.width = '450px'; // Width of the div
div.style.height = '580px'; // Height of the div
div.style.backgroundColor = 'rgba(0, 59, 111, 0.9)'; // Background color with transparency
div.style.color = 'white'; // Text color
div.style.zIndex = '9999'; // High z-index to ensure it appears on top
div.style.padding = '10px'; // Additional padding inside the div
div.style.boxShadow = '0 4px 8px rgba(0, 59, 111, 0.5)'; // Adds a subtle shadow
div.style.fontSize = '13px';
div.style.borderRadius = '15px';

// Add some content to the div (optional)
div.innerHTML = '<center></center><div id="timeLord"></div><div id="theCompanion"></div>';

// Append the div to the body
document.body.appendChild(div);

////----------------------------------------------

function clearStatusTimes() {
  // Reset the statusTimes object to all zeros
  statusTimes = {
    Available: 0,
      "Abwesend/Idle": 0,
      Busy: 0,
      Lunch: 0,
      Pause: 0,
	  Meeting: 0,
	  Engaged: 0,
	  "": 0
  };

  // Save the cleared state to localStorage
  saveStatusTimes();

  // Update the UI to reflect the cleared state
  updateStatusLog();
  
  console.log("Status times have been reset.");
}

// Example: Add a button to trigger the reset functionality
const resetButton = document.createElement('button');
resetButton.id = 'clrTardis';
resetButton.innerText = "⟲";
resetButton.style.position = 'fixed';
resetButton.style.bottom = '480px';
resetButton.style.right = '48px';
resetButton.style.backgroundColor = '#CF1B1B'; // Button background
resetButton.style.color = '#fff'; // Button text color
resetButton.style.border = 'none';
resetButton.style.padding = '10px 18px 10px 18px';
resetButton.style.cursor = 'pointer';
resetButton.style.zIndex = '99999';
resetButton.style.borderRadius = '10px';
document.body.appendChild(resetButton);

// Add click event to the button to clear the timers
resetButton.addEventListener('click', clearStatusTimes);

////----------------------------------------------

function compressTardis() {

const timeLordDiv = document.getElementById("Tardis");
const clrTardisDiv = document.getElementById("clrTardis");

  // Check the current visibility state
  if (timeLordDiv.style.display === "none") {
    // Make the div visible
    timeLordDiv.style.display = "block";
  } else {
    // Hide the div
    timeLordDiv.style.display = "none";
  }
  
  // Check the current visibility state
  if (clrTardisDiv.style.display === "none") {
    // Make the div visible
    clrTardisDiv.style.display = "block";
	compressButton.innerText = ">";
	compressButton.style.right = '49px';
	compressButton.style.boxShadow = '0 0 0px rgba(0, 59, 111, 0.0)';
	compressButton.style.padding= '10px 20px 10px 20px';
  } else {
    // Hide the div
    clrTardisDiv.style.display = "none";
	compressButton.innerText = "<<<<<";
	compressButton.style.right = '-20px';
	compressButton.style.boxShadow = '0 0 10px rgba(0, 59, 111, 0.9)';
	compressButton.style.padding= '10px';
  }
  
  
  console.log("Tardis...");
}

// Example: Add a button to trigger the reset functionality
const compressButton = document.createElement('button');
compressButton.innerText = ">";
compressButton.style.position = 'fixed';
compressButton.style.bottom = '534px';
compressButton.style.right = '49px';
compressButton.style.backgroundColor = '#1BC6CF'; // Button background
compressButton.style.color = '#fff'; // Button text color
//compressButton.style.border = '3px solid rgba(0, 59, 111, 0.9)'; 
//compressButton.style.boxShadow = '0 0 10px rgba(0, 59, 111, 0.9)';
compressButton.style.padding = '10px 20px 10px 20px';
compressButton.style.cursor = 'pointer';
compressButton.style.border = 'none';
compressButton.style.zIndex = '99999';
compressButton.style.borderRadius = '10px';
document.body.appendChild(compressButton);

// Add click event to the button to clear the timers
compressButton.addEventListener('click', compressTardis);


////----------------------------------------------

// Recursive function to search deeply in Shadow DOM
function findSpansDeep(element) {
  // If there is a shadow root, dive into it
  if (element.shadowRoot) {
    const shadowSpans = element.shadowRoot.querySelectorAll('span.ax-current-status-label.ellipsis-text');
    shadowSpans.forEach((span) => {
      //console.log("Found span in shadowRoot:", span.textContent.trim());
	  ciscoStatus = span.textContent.trim();
    });

    // Recursively search deeper
    element.shadowRoot.querySelectorAll("*").forEach(findSpansDeep);
  } else {
    // If no shadowRoot, just check for spans in the current element
    const spans = element.querySelectorAll('span.ax-current-status-label.ellipsis-text');
    spans.forEach((span) => {
      //console.log("Found span:", span.textContent.trim());
	  ciscoStatus = span.textContent.trim();
    });
  }
}

// Function to start the recursive search
function findAllSpans() {
  // Start searching from the document
  document.querySelectorAll("*").forEach(findSpansDeep);
}

// Run the script every 10 seconds
setInterval(findAllSpans, 3000);
//-----------------------------------------------------------------------------------------


    let statusTimes = {
      Available: 0,
      "Abwesend/Idle": 0,
      Busy: 0,
      Lunch: 0,
      Pause: 0,
	  Meeting: 0,
	  Engaged: 0,
	  "": 0
    };
	
	    // Load data from localStorage (if exists)
    function loadStatusTimes() {
      const savedData = localStorage.getItem("statusTimes");
      if (savedData) {
        try {
          // Parse saved data and overwrite the initial status times
          const parsedData = JSON.parse(savedData);
          if (parsedData && typeof parsedData === "object") {
            statusTimes = parsedData;
            console.log("Status times loaded from localStorage:", statusTimes);
          }
        } catch (error) {
          console.error("Could not parse statusTimes from localStorage:", error);
        }
      }
    }
	
	// Save data to localStorage
    function saveStatusTimes() {
      try {
        localStorage.setItem("statusTimes", JSON.stringify(statusTimes));
        //console.log("Status times saved to localStorage:", statusTimes);
      } catch (error) {
        console.error("Error saving statusTimes to localStorage:", error);
      }
    }

    // Variable to simulate the current status
    ciscoStatus = "Abwesend/Idle"; // Initial status

    // Variable to track the last status and timestamp
    let lastStatus = ciscoStatus;
    let lastStatusChangeTime = Date.now();

    // Function to round seconds to the nearest 10 (00, 10, 20, 30, 40, 50)
    function roundSeconds(seconds) {
      return Math.round(seconds / 10) * 10;
    }

    // Function to format time in HH:MM:SS (rounded to nearest 10 seconds)
    function formatTime(seconds) {
      var hours = Math.floor(seconds / 3600); // Calculate hours
      var minutes = Math.floor((seconds % 3600) / 60); // Remaining minutes
      let secondsRounded = roundSeconds(seconds % 60); // Rounded seconds

      // Handle case where rounding increases seconds to 60
      if (secondsRounded === 60) {
        secondsRounded = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }

      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsRounded).padStart(2, '0')}`;
    }

    // Function to update the `statusLog` div content
    function updateStatusLog() {
      const currentTime = Date.now();
      const timeSpent = Math.floor((currentTime - lastStatusChangeTime) / 1000); // Time in seconds

      // Add the spent time to the current status
      if (timeSpent > 0) {
        statusTimes[lastStatus] += timeSpent;
        lastStatusChangeTime += timeSpent * 1000; // Update the lastStatusChangeTime precisely
		
		//saveStatusTimes();
      }

      // Generate an HTML table for the status log
      const statusLogDiv = document.getElementById("timeLord");
      let logHTML = "<table border='0' style='width: 100%;'>";

      for (const [status, time] of Object.entries(statusTimes)) {
        const formattedTime = formatTime(time) || "00:00:00"; // Ensure valid rounded time
        logHTML += `<tr><td style='text-align: right; width: 55%;'>${status} - </td><td style='text-align: left; width: 45%;'> ${formattedTime}</td></tr>`;
      }
      logHTML += "</table>";

      // Update the div content
      statusLogDiv.innerHTML = logHTML;
    }

    // Function to check for changes in status every 5 seconds
    setInterval(() => {
      if (ciscoStatus !== lastStatus) {
        const currentTime = Date.now();
        const timeSpent = Math.floor((currentTime - lastStatusChangeTime) / 1000); // Time in seconds

        statusTimes[lastStatus] += timeSpent; // Update time for the previous status
        lastStatus = ciscoStatus; // Update the status
        lastStatusChangeTime = currentTime; // Update the last status change timestamp
      }
	  
	  saveStatusTimes();
	  updateStatusLog();
	  
    }, 3000); // Check every 5 seconds

/*     // Auto-update the HTML div content every 30 minutes
    setInterval(updateStatusLog, 30 * 60 * 1000); // 30 minutes in milliseconds

    // Simulate status changes for testing
    setTimeout(() => { ciscoStatus = "Busy"; console.log("Status changed to Busy"); }, 10000); // After 10 seconds
    setTimeout(() => { ciscoStatus = "Lunch"; console.log("Status changed to Lunch"); }, 20000); // After 20 seconds
    setTimeout(() => { ciscoStatus = "Meeting"; console.log("Status changed to Meeting"); }, 40000); // After 40 seconds
    setTimeout(() => { ciscoStatus = "Pause"; console.log("Status changed to Pause"); }, 60000); // After 60 seconds
    setTimeout(() => { ciscoStatus = "Available"; console.log("Status changed to Available"); }, 90000); // After 90 seconds */
	
	loadStatusTimes();
    // Initial update of status log
    updateStatusLog();



//-----------------------------------

function updateCompanionDiv() {
    const theCompanion = document.getElementById("theCompanion");

    // Retrieve agentlog data from chrome.storage.local
    chrome.storage.local.get("agentlog", function (result) {
      const agentlog = result.agentlog;
      if (!agentlog) {
        console.log("agentlog not found in storage.");
        theCompanion.innerHTML = "No data available.";
        return;
      }

     // console.log("agentlog retrieved from storage:", agentlog);

      // Format the data and update the div // font-size: 14px
      let content = "<table style='width: 100%;'>";
		
      var allowedNames; // List of allowed names
	  //var allowedNames2;
		allowedNames = ["Márk János Gavallér", "Gábor Vad", "Ádám Szolnoky", "Andrea Váll", "Dóra Knapiczius", "János Máté Balogh", "Orsolya Varga", "Fatima Al-Hamati", "Réka Árva", "Petra Balázs", "Tamás Balogh", "Roland Börcsök", "Eszter Kovács", "Krisztián Kovács", "Bianka Tünde Lugosi", "Csaba Zoltán Mikulás", "Stefánia Nyakas", "Imre Papp", "Márton Szabó", "Fruzsina Tar", "Zsuzsanna Tóth", "Denisz Zsanett Gavallérné Gafouroglou"];
	
		 chrome.storage.local.get(['names'], (result) => {
			/* if (result.names == null)
			{allowedNames = ["Márk János Gavallér", "Gábor Vad", "Ádám Szolnoky", "Andrea Váll", "Dóra Knapiczius", "János Máté Balogh", "Orsolya Varga", "Fatima Al-Hamati", "Réka Árva", "Petra Balázs", "Tamás Balogh", "Roland Börcsök", "Eszter Kovács", "Krisztián Kovács", "Bianka Tünde Lugosi", "Csaba Zoltán Mikulás", "Stefánia Nyakas", "Imre Papp", "Márton Szabó", "Fruzsina Tar", "Zsuzsanna Tóth", "Denisz Zsanett Gavallérné Gafouroglou"];} */
		
			//var aNamesAray = result.names; // Assign value or default to an empty string
			allowedNames = result.names; //aNamesAray.split(",");
			console.log('Allowed Names:', allowedNames); // Log the loaded value
		}); 

		
		//console.log('Allowed Names2:', allowedNames2);
		console.log('Allowed Names:', allowedNames);
		
		 chrome.storage.local.set({ names: allowedNames }, () => {
			if (chrome.runtime.lastError) {
			  console.error('Failed to save allowedNames:', chrome.runtime.lastError);
			} else {
			  console.log('Allowed Names saved successfully:', allowedNames);
			}
		}); 
		
		for (const key in agentlog) {
		  const row = agentlog[key];
		  if (Array.isArray(row) && row.length > 0 && allowedNames.includes(row[0])) {
			  //<td style='text-align: left;'>${row[4]} |</td>
			content += `<tr>
						   <td style='text-align: right;'>${row[0]} |</td>
						   <td style='text-align: right;'>${row[2]}</td>
						   <td style='text-align: left;'> - ${row[3]}</td>
						</tr>`; 
		  }
		}
	
	  content += "</table>";
      theCompanion.innerHTML = content;
    });
  }

  // Fetch updates every 5 seconds
  setInterval(() => {
   // console.log("Updating UI...");
    updateCompanionDiv();
  }, 3000);

  // Run the function immediately on startup
  updateCompanionDiv();
//-------------------- today clear
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentDay = currentTime.toLocaleDateString(); // Get the current day as a string

  // Retrieve the last clear date from the local storage
  let lastClearDate = localStorage.getItem("lastClearDate");

  // Check if it's the first time running the script
  if (lastClearDate === null) {
    console.log("First-time run: Initializing local storage.");
    // Consider it as if it was yesterday and run the function if it's past 6:00 AM
    if (currentHours >= 5) {
      clearStatusTimes();
      localStorage.setItem("lastClearDate", currentDay);
    }
  } else if (currentHours >= 5 && lastClearDate !== currentDay) {
    // If the time is past 6:00 AM and it hasn't been cleared today, clear it
    clearStatusTimes();
    localStorage.setItem("lastClearDate", currentDay);
  }