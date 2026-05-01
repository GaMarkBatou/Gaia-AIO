var newCustB = document.createElement("div");
	newCustB.id = "custName";
	newCustB.style.position = "absolute";
	newCustB.style.zIndex = "99998";
	newCustB.style.top = "4px";
//	newCustB.style.left = "765px";
	newCustB.style.right = "0px";
	newCustB.style.width = "598px";
	newCustB.style.height = "20px";
	//newCustB.style.min-width = "20px";
	//newCustB.classList.add('toprightnow');
	
	
	
var element = document.getElementById('WIN_0_536870908');

const defaultCustRessOption = "<button id='gfInsert' type='button' class='toprightnow' data-text='Georg Fischer Group' title='Insert Georg Fischer'>GF</button>";

loadCustRessOptions();

function loadCustRessOptions() {
    chrome.storage.local.get(['custRessOption'], function(result) {
        let custRessOption;
        if (!result.custRessOption || result.custRessOption.length === 0) {
            // If missing or empty, save default options into local storage
            chrome.storage.local.set({ custRessOption: defaultCustRessOption }, function() {
                console.log('Default options saved to local storage');
            });
            custRessOption = defaultCustRessOption;
        } else {
            custRessOption = result.custRessOption;
        }

        newCustB.innerHTML = custRessOption;

    });
}

	
setTimeout(exeCustB, 1000);
		
	function exeCustB() {	

	document.getElementById('WIN_0_536880941').appendChild(newCustB);

	var buttons = document.querySelectorAll('.toprightnow');

	buttons.forEach(function(button) {
		button.addEventListener('click', function() {
		  var textArea = document.getElementById("arid_WIN_0_536870924");
		  textArea.value = this.getAttribute('data-text'); // Use the data-text attribute
		  
		  simulateUserInteraction(textArea);
		  element && element.click();
		  // Assuming you have a valid element to click, ensure element is defined
		  // element && element.click(); // Uncomment and define 'element' if needed
		});
	  });
	}
	
	
