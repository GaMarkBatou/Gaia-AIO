//var ttidField = document.getElementById("WIN_0_1").querySelector("textarea").value;
//var divID = document.getElementById("WIN_0_1").querySelector("textarea"); // Replace with your actual div ID

var newArchiveB = document.createElement("div");
		newArchiveB.id = "arcHive";
		newArchiveB.style.position = "absolute";
		newArchiveB.style.zIndex = "99999";
		newArchiveB.style.top = "5px";
		newArchiveB.style.left = "1010px";
		newArchiveB.style.width = "40px";
		newArchiveB.style.height = "20px";
        newArchiveB.innerHTML = "<button id='archiveButton' type='button' title='Open Archive'>Archive</button>";
		
document.getElementById('FormContainer').appendChild(newArchiveB);
		
document.getElementById("archiveButton").addEventListener("click", () => {
	const archivelink = chrome.runtime.getURL("archive.html");
	window.open(archivelink, "_blank", "width=400,height=800");	
});

//------------
/* var newControllC = document.createElement("div");
		newControllC.id = "contCenter";
		newControllC.style.position = "absolute";
		newControllC.style.zIndex = "99999";
		newControllC.style.top = "5px";
		newControllC.style.left = "1010px";
		newControllC.style.width = "70px";
		newControllC.style.height = "20px";
        newControllC.innerHTML = "<button id='controlcButton' type='button' title='Open CC'>Controll Center</button>";
		
document.getElementById('FormContainer').appendChild(newControllC);
		
document.getElementById("controlcButton").addEventListener("click", () => {
	const centerlink = chrome.runtime.getURL("controlcenter.html");
	window.open(centerlink, "_blank", "width=405,height=940");	
}); */
//------------

//const archivelink = chrome.runtime.getURL("controlcenter.html");;
//window.open(archivelink, "_blank", "width=405,height=940");	


/* document.querySelector('archiveButton').addEventListener('click', () => {
    chrome.windows.create({
        url: chrome.runtime.getURL("archive.html"),
        type: "popup",
        width: 400,
        height: 800
    }, (createdWindow) => {
        console.log("Window created:", createdWindow);
    });
}); */
	
		

function addFormattedInfoToStorageAfterDelay() {
  setTimeout(() => {
	//divID = document.getElementById("WIN_0_1").querySelector("textarea").value; 
    var ttnum = document.getElementById("WIN_0_1").querySelector("textarea");
	
	function checkTextarea() {
		ttnum = document.getElementById("WIN_0_1").querySelector("textarea");
		if (ttnum) { // Check if the textarea element exists
			const value = ttnum.value.trim(); // Get the trimmed value of the textarea

			if (value === '') { // If it's empty
				console.log("Textarea is empty. Retrying in 15 seconds...");
				setTimeout(checkTextarea, 15000); // Wait 15 seconds and check again
			} else {
				console.log("Textarea has content:", value); // Log the content if not empty
			}
		} else {
			console.log("Textarea element not found or is null.");
		}
	}

// Call the function to start checking
	checkTextarea();
	
	const div = trimFirstXCharacters(ttnum.value, 7); 
	//const divlink = document.getElementById("WIN_0_1").querySelector("textarea"); 
	const customerName = document.getElementById("arid_WIN_0_536871994").value.trim(); 
	const datetime = new Date();
	const now = trimFirstXCharacters(trimLastXCharacters(datetime.toString(), 43),4); // ISO format date-time string
	
    //const rawInfo = div.textContent.trim(); // e.g. "00000122344"
    const formattedInfo = `<tr><td><a href="https://wtts.telekom.de/wtts/forms/ars-etts.telekom.de/eTTS:Main/Web/?eid=0000000${div}" target="_blank">${div}</a></td><td>${now}</td><td>${customerName}</td></tr>`;
	//const formattedInfo = div;
	///<tr><td>Alice</td><td>30</td><td>New York</td></tr>
    
	chrome.storage.local.get(['tthistory'], (result) => {
        let existingArray = result['tthistory'] || [];

        //if (!existingArray.includes(formattedInfo)) {
          existingArray.push(formattedInfo);
        //}

        chrome.storage.local.set({ ['tthistory']: existingArray }, () => {
          console.log(`Added tt to history:`, formattedInfo);
          //console.log("Updated stored array:", existingArray);
        });
      });

  }, 15000);
}

function trimLastXCharacters(str, x) {
  if (x <= 0) {
    return str; // If x is less than or equal to 0, return the original string
  }
  return str.slice(0, -x); // Slice off the last X characters
}

function trimFirstXCharacters(str, x) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  if (x <= 0) {
    return str; // If x is less than or equal to 0, return the original string
  }
  return str.slice(x); // Skip the first X characters
}

//var ttStatus = document.getElementById("arid_WIN_0_536870917").value;
//console.log(`TT:`, ttStatus);

/* setTimeout(function () {
	const ttStatus = document.getElementById("arid_WIN_0_536870917").value;
	console.log(`TT:`, ttStatus);
	if (ttStatus.value !== "zugewiesen" || ttStatus.value !== "neu") {
		console.log(`TT:`, ttStatus);
		addFormattedInfoToStorageAfterDelay();
	}
}, 15000);  */

setTimeout(function () {
    const ttStatusElement = document.getElementById("arid_WIN_0_536870917");

    if (ttStatusElement) {
        const ttStatus = ttStatusElement.value.trim().toLowerCase(); // Trim and normalize case

        //console.log("TTStatus (trimmed and normalized):", ttStatus);

        if (ttStatus !== "zugewiesen" && ttStatus !== "neu") {
            console.log("Condition met. TT is not 'zugewiesen' or 'neu':", ttStatus);
            addFormattedInfoToStorageAfterDelay();
        } else {
            console.log("Condition NOT met. TT is 'zugewiesen' or 'neu'.");
        }
    } else {
        console.error("TT element not found! Check the element ID.");
    }
}, 15000);

//addFormattedInfoToStorageAfterDelay();

//chrome.tabs.create({ url: chrome.runtime.getURL('help.html') });

