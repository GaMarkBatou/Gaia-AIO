var lcName = document.getElementById("arid_WIN_0_536871015").value.trim(); 
var phoneTelefonLC = document.getElementById("arid_WIN_0_536871021").value.trim(); 
var handyMobileLC = document.getElementById("arid_WIN_0_536872300").value.trim(); 
var lcEmail = document.getElementById("arid_WIN_0_536871022").value.trim(); 
var standCityLC = document.getElementById("arid_WIN_0_536871000").value.trim(); 
var TTkundeLC = document.getElementById("arid_WIN_0_536870941").value.trim(); 


/* 	var newElement = document.createElement("div");
		newElement.id = "clc";
		newElement.style.position = "absolute";
		newElement.style.zIndex = "99998";
		newElement.style.top = "30px";
		newElement.style.left = "1070px";
		newElement.style.width = "50px";
		newElement.style.height = "50px";
        newElement.innerHTML = "<button id='clcButton' type='button'>CLC</button>";
	document.getElementById('FormContainer').appendChild(newElement);	 */


/*
	document.getElementById("clcButton").addEventListener("click", function() {
	lcName = document.getElementById("arid_WIN_0_536871015").value.trim(); 
	phoneTelefonLC = document.getElementById("arid_WIN_0_536871021").value.trim(); 
	handyMobileLC = document.getElementById("arid_WIN_0_536872300").value.trim(); 
	lcEmail = document.getElementById("arid_WIN_0_536871022").value.trim(); 
	standCityLC = document.getElementById("arid_WIN_0_536871000").value.trim(); 
	
	document.getElementById("arid_WIN_0_536871782").value = "Called "+standCityLC+" LC\n-----\n"+lcName+" | "+lcEmail+"\n"+phoneTelefonLC+" - \n"+handyMobileLC+" - ";
});
 */

// Function to update lc details
function updateLcDetails() {
  lcName = document.getElementById("arid_WIN_0_536871015").value.trim();
  phoneTelefonLC = document.getElementById("arid_WIN_0_536871021").value.trim();
  handyMobileLC = document.getElementById("arid_WIN_0_536872300").value.trim();
  lcEmail = document.getElementById("arid_WIN_0_536871022").value.trim();
  standCityLC = document.getElementById("arid_WIN_0_536871000").value.trim();
  TTkundeLC = document.getElementById("arid_WIN_0_536870941").value.trim(); 
//  console.log("lc details updated: " + standCityLC);
}

// Create and append the new element
var newElement = document.createElement("div");
newElement.id = "clc";
newElement.style.position = "absolute";
newElement.style.zIndex = "99999";
newElement.style.top = "30px";
newElement.style.left = "1010px";
newElement.innerHTML = "<select id='clcDropdown'><option value=''>Called</option></select>";
document.getElementById('FormContainer').appendChild(newElement);

const clcDropdown = document.getElementById('clcDropdown');

// Function to populate dropdown with options
function populateDropdownLC() {
  clcDropdown.innerHTML = "<option value=''>Called</option>"; // Clear existing options
  const options = [
    { value: "Called " + standCityLC + " LC\n-----\n" + lcName + " | " + lcEmail + "\n" + phoneTelefonLC + " - \n" + handyMobileLC + " - ", text: 'LC' },
    { value: 'Called LIM\n-----\n008006648109 (2/1)- LIM Informed ', text: 'LIM' },
   // { value: 'Called Bosch NOC\n-----\n'+ TTkundeLC +'\n+49(711)811-30901 - Ticket is  \n+86(512)67673330 - Ticket is ', text: 'Bosch' },
  ];
  options.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.text;
    clcDropdown.appendChild(opt);
	//console.log("dropdown lc created ");
  });
}

// Initial population of the dropdown
populateDropdownLC();

// Event listener for dropdown click to update options
clcDropdown.addEventListener("click", function() {
  updateLcDetails();
  populateDropdownLC();
  //console.log("LC updated ");
});

// Event listener for dropdown change
clcDropdown.addEventListener("change", function() {
  updateLcDetails();
  const selectedOption = clcDropdown.value;
  document.getElementById("arid_WIN_0_536871782").value = selectedOption;
 //console.log("Option selected and pasted: " + selectedOption);
});

// Update lc details initially
updateLcDetails();