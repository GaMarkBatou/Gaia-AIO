/* function loadDataToDiv() {
  chrome.storage.local.get(['tthistory'], function(result) {
    // Get the div element by its ID
    const div = document.getElementById('yourDivId');
    
    if (!div) {
      console.error('Div element not found');
      return;
    }
    
    // Check if tthistory exists in storage
    if (result.tthistory) {
      // Assuming tthistory is a string or something displayable
	  
      div.textContent = result.tthistory;
      
      // If tthistory is an object/array, you can convert to string like this:
      // div.textContent = JSON.stringify(result.tthistory, null, 2);
    } else {
      div.textContent = 'No data found in tthistory.';
    }
  });
}  */

function loadDataToDiv() {
  chrome.storage.local.get(['tthistory'], function (result) {
    const div = document.getElementById('yourDivId');
    
    if (!div) {
      console.error('Div element not found');
      return;
    }
    
    if (result.tthistory) {
      // Create a new template element
      const template = document.createElement('template');
      
      // The browser will not execute the script or interpret dangerous elements in the template
      template.innerHTML = result.tthistory;

      // Append the sanitized content to the div
      div.appendChild(document.importNode(template.content, true));
    } else {
      div.innerHTML = '<p>No data found in Archive!</p>';
    }
  });
}

// Wait for the DOM content to load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select the button and add an event listener
    const deleteButton = document.getElementById('deleteStorage');
    if (deleteButton) {
        deleteButton.addEventListener('click', function () {
            // Check if the Chrome storage API is available
            if (chrome && chrome.storage) {
                // Remove the specific 'tthistory' key from Chrome storage
                chrome.storage.local.remove('tthistory', function () {
                    if (chrome.runtime.lastError) {
                        console.error("Error removing 'tthistory':", chrome.runtime.lastError);
                    } else {
                        console.log("'tthistory' storage key has been removed successfully.");
						waitAndReload();
                    }
                });
            } else {
                console.error('Chrome Storage API is not available.');
            }
        });
    } else {
        console.error("Button with id 'deleteStorage' could not be found in the DOM.");
    }
});


/* document.getElementById("archiveButton").addEventListener("click", () => {
	//const archivelink = chrome.runtime.getURL("sidepanel.html");
	const archivelink = chrome.runtime.getURL("archive.html");
	window.open(archivelink, "_blank", "width=400,height=800");	
  //chrome.runtime.sendMessage({ action: "openSidePanel" });
}); */

document.addEventListener('DOMContentLoaded', function () {
	const oNoti = document.getElementById('onlineNoti');
	if (oNoti) {
		oNoti.addEventListener('click', function () {
            const archivelink = "https://wtts.telekom.de/wtts/forms/ars-etts.telekom.de/Notificationuebersicht_neu/Web/";
			window.open(archivelink, "_blank", "width=1310,height=790");	
        });
	}
});

document.addEventListener('DOMContentLoaded', function () {
	const oNoti = document.getElementById('breakNoti');
	if (oNoti) {
		oNoti.addEventListener('click', function () {
            const archivelink = chrome.runtime.getURL("Chronos/leap.html");;
			window.open(archivelink, "_blank", "width=390,height=640");	
        });
	}
});


document.addEventListener('DOMContentLoaded', function () {
	const opeWin = document.getElementById('openWindow');
	if (opeWin) {
		opeWin.addEventListener('click', function () {
            const archivelink = chrome.runtime.getURL("controlcenter.html");;
			window.open(archivelink, "_blank", "width=405,height=940");	
        });
	}
});

document.addEventListener('DOMContentLoaded', function () {
	const opeOpt = document.getElementById('openOptions');
	if (opeOpt) {
		opeOpt.addEventListener('click', function () {
            const archivelink = chrome.runtime.getURL("options.html");;
			window.open(archivelink, "_blank", "width=1250,height=940");	
        });
	}
});


document.addEventListener('DOMContentLoaded', function () {
	const deleteButton = document.getElementById('reloadStorage');
    if (deleteButton) {
        deleteButton.addEventListener('click', function () {
            // Check if the Chrome storage API is available
            waitAndReload();
        });
    } else {
        console.error("Button with id 'reloadStorage' could not be found in the DOM.");
    }
	});

function waitAndReload() {
      setTimeout(() => {
        location.reload(); // Reloads the current page
      }, 2000); // Wait for 2 seconds (2000 milliseconds)
    }


// Call this function whenever you want to load the data, e.g. on page load
document.addEventListener('DOMContentLoaded', loadDataToDiv);


