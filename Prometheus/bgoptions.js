document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('optionsform');
    const input = document.getElementById('bgsaveInput');
	const input2 = document.getElementById('cssaveInput');
    
    // Load saved options
    chrome.storage.local.get('optionbg', (data) => {
        input.value = data.optionbg || '';  // Correct the key name here
    });
	
	chrome.storage.local.get('optionCustSearc', (data) => {
        input2.value = data.optionCustSearc || '';  // Correct the key name here
    }); 

    // Save options on form submit
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const optionValue = input.value;
		const optionValue2 = input2.value;

        chrome.storage.local.set({ optionbg: optionValue }, () => {
            console.log('Options saved:', optionValue);
        });
		
		chrome.storage.local.set({ optionCustSearc: optionValue2 }, () => {
            console.log('Options saved:', optionValue2);
        });
		
		alert("All data have been saved in the browser!");
		//createSimpleNotification();
		
    });
});




function createSimpleNotification() {
  const options = {
    type: "basic",
    iconUrl: chrome.runtime.getURL("images/icon-64.png"),  
    title: "Notification Title",
    message: "This is a simple notification message."
  };

  chrome.notifications.create('', options, function(notificationId) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log("Notification created with ID:", notificationId);
	  
	        // Play sound
      const audio = new Audio(chrome.runtime.getURL("sound/notification.mp3"));
      audio.play().catch(error => {
        console.error("Error playing sound:", error);
      });
	  
    }
  });
}




//optionCustSearc

/* document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('options-form');
    const input = document.getElementById('bgsaveInput');
	
	    // Load saved options
    chrome.storage.sync.get('optionbg', (data) => {
        input.value = data.option || '';
    });

    // Save options on form submit
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const optionValue = input.value;

        chrome.storage.sync.set({ optionbg: optionValue }, () => {
            console.log('Options saved:', optionValue);
        });
    });
	 */
    // Event listener for the "Search" button
/*     document.getElementById("bgsaveButton").addEventListener("click", function() {
        chrome.storage.local.set({ bg: 'value' }, function() {
			console.log('Data is saved');
		});
    });
	
	document.getElementById("bgsaveInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        chrome.storage.local.set({ bg: 'value' }, function() {
			console.log('Data is saved');
		});
    } 
});*/


/* // Save data
chrome.storage.local.set({ key: 'value' }, function() {
  console.log('Data is saved');
});

// Retrieve data
chrome.storage.local.get(['key'], function(result) {
  console.log('Value currently is ' + result.key);
});

// Remove data
chrome.storage.local.remove(['key'], function() {
  console.log('Data is removed');
});
 */