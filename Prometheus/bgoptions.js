document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('optionsform');
    const input = document.getElementById('bgsaveInput');
	const input2 = document.getElementById('cssaveInput');
	//const input3 = document.getElementById('ttimesaveInput');
	//const input4 = document.getElementById('tzussaveInput');
    const input5 = document.getElementById('ksEdittor');
	const input6 = document.getElementById('cresEdittor');
	
    // Load saved options
    chrome.storage.local.get('optionbg', (data) => {
        input.value = data.optionbg || '';  // Correct the key name here
    });
	
	chrome.storage.local.get('optionCustSearc', (data) => {
        input2.value = data.optionCustSearc || '';  // Correct the key name here
    }); 
	
/* 	chrome.storage.local.get('optionNotiMin', (data) => {
        input3.value = data.optionNotiMin || '';  // Correct the key name here
    }); 
	
	chrome.storage.local.get('optionNotiZus', (data) => {
        input4.value = data.optionNotiZus || '';  // Correct the key name here
    });  */
	
	chrome.storage.local.get('dropdownOptions', (data) => {
		if (data.dropdownOptions) {
			try {
				// data.dropdownOptions is expected to be an object/array directly
				const arr = data.dropdownOptions;
				input5.value = JSON.stringify(arr, null, 4);  // pretty print JSON array
			} catch (e) {
				console.error('Failed to process stored dropdownOptions:', e);
				input5.value = '';
			}
		} else {
			input5.value = '';
		}
		console.log('Data returned from storage:', data);
	});
	
	chrome.storage.local.get('custRessOption', (data) => {
        input6.value = data.custRessOption || '';  // Correct the key name here
    }); 

    // Save options on form submit
form.addEventListener('submit', (event) => {
        event.preventDefault();
        const optionValue = input.value;
		const optionValue2 = input2.value;
		//const optionValue3 = input3.value;
		//const optionValue4 = input4.value;
		const optionValue5 = input5.value;
		const optionValue6 = input6.value;

        chrome.storage.local.set({ optionbg: optionValue }, () => {
            console.log('Options saved:', optionValue);
        });
		
		chrome.storage.local.set({ optionCustSearc: optionValue2 }, () => {
            console.log('Options saved:', optionValue2);
        });
		
		/*chrome.storage.local.set({ optionNotiMin: optionValue3 }, () => {
            console.log('Options saved:', optionValue3);
        });
		
		chrome.storage.local.set({ optionNotiZus: optionValue4 }, () => {
            console.log('Options saved:', optionValue4);
        }); */
		
		/* chrome.storage.local.set({ dropdownOptions: optionValue5 }, () => {
            console.log('Options saved:', optionValue5);
        }); */
		
		try {
			const optionValue5 = JSON.parse(input5.value);
			if (!Array.isArray(optionValue5)) {
				alert('Please enter a valid JSON array of objects.');
				return;
			}
			// Save the array/object directly, no JSON.stringify here
			chrome.storage.local.set({ dropdownOptions: optionValue5 }, () => {
				console.log('Options saved:', optionValue5);
				//alert('Options saved successfully!');
			});
		} catch (e) {
			alert('Invalid JSON format. Please correct it.');
		}
		
		chrome.storage.local.set({ custRessOption: optionValue6 }, () => {
            console.log('Options saved:', optionValue6);
        });
		
		alert("All data have been saved in the browser!");
		//createSimpleNotification();
		
    });
});

/* function loadOptions() {
    chrome.storage.local.get('dropdownOptions', (data) => {
        if (data.dropdownOptions) {
            try {
                let arr = JSON.parse(data.dropdownOptions);
                // Show nicely formatted JSON string
                input5.value = JSON.stringify(arr, null, 4);
            } catch (e) {
                console.error('Failed to parse stored options:', e);
                input5.value = '';
            }
        } else {
            input5.value = '';
        }
        console.log('Data returned from storage:', data);
    });
} */


/* function createSimpleNotification() {
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
 */



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
 
 