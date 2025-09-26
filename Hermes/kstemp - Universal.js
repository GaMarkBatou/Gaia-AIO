/* const newDiv = document.createElement("div");
	newDiv.id = "kstemp";

	newDiv.innerHTML = `
		 <select id="ksDropdown">
        <option value="">Select an option</option>
		</select>
		`; */
		
/* 		document.getElementById("WIN_0_536998669").insertAdjacentHTML('beforeend', '<select id="ksDropdown">
        <option value="">Select an option</option>
		</select>'); 
*/
		
	var newElement = document.createElement("div");
		newElement.id = "wkst";
		newElement.style.position = "absolute";
		newElement.style.zIndex = "99999";
		newElement.style.top = "30px";
		newElement.style.left = "825px";
        newElement.innerHTML = "<select id='ksDropdown'>        <option value=''>Select KS</option>		</select>";
    //document.getElementById("WIN_0_536998669").appendChild(newElement);
	//document.body.appendChild(newElement);	
	document.getElementById('FormContainer').appendChild(newElement);
		//style="position: absolute; width: 200px; height: 200px; background-color: coral; z-index: 99999; top: 50px; left: 50px;"
		

	  const dropdown = document.getElementById('ksDropdown');

	  // Hardcoded options array
	  const options = [
		{ value: '', text: '----Erstmeldung----' },
		{ value: 'Dear Sir or Madam,\n\nWe have recognized a service disturbance on the above component and opened an incident ticket for this issue. Once the initial analysis is completed we will give you an exact description of the error. In accordance with the Service Level Agreement  (SLA) we will keep you informed of the current status and progress. For information or questions you can contact us at anytime. Please state the Ticket ID as reference.\n\nBest regards\nDeutsche Telekom\nService Desk', text: 'Proactive Erst' },
		// Converter: https://codepen.io/jsnelders/pen/qBByqQy
		//{ value: '', text: '---------' },
	  ];

function loadDropdownOptions() {
    chrome.storage.local.get(['dropdownOptions'], function(result) {
	  if (!result.dropdownOptions || result.dropdownOptions.length === 0) {
		// If missing or empty, save default options into local storage
		chrome.storage.local.set({ dropdownOptions: options }, function() {
		  console.log('Default options saved to local storage');
		});

		// Use the default options
		var dropdownOptions = options;
	  } else {
		// Use stored options
		var dropdownOptions = result.dropdownOptions;
	  }

  // Now you can use dropdownOptions for your dropdown
  console.log(dropdownOptions);
    
    // Get the dropdown element
    //const dropdown = document.getElementById('myDropdown');

    // Clear existing options
   // dropdown.innerHTML = '';

    // Populate dropdown with options
     dropdownOptions.forEach(function(option) {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      dropdown.appendChild(optionElement);
    }); 
	
	 // Populate dropdown with options
	/*   options.forEach(option => {
		const opt = document.createElement('option');
		opt.value = option.value;
		opt.textContent = option.text;
		dropdown.appendChild(opt);
	  }); */  

    console.log('Dropdown options loaded.');
  });
}
	
	loadDropdownOptions();

	  // Populate dropdown with options - ORIGINAL
	 /*  options.forEach(option => {
		const opt = document.createElement('option');
		opt.value = option.value;
		opt.textContent = option.text;
		dropdown.appendChild(opt);
	  }); */
	  
    document.getElementById("ksDropdown").addEventListener("change", function() {
        const selectedOption = document.getElementById("ksDropdown").value;

        document.getElementById("arid_WIN_0_536871782").value = selectedOption;
		navigator.clipboard.writeText(selectedOption);
		
		
		var textAreaNotiz = document.getElementById("arid_WIN_0_536871782");
		simulateUserInteraction(textAreaNotiz);
		
    });



