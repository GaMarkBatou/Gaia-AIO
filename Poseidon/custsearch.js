var newCustSearc = document.createElement("div");
	newCustSearc.id = "custSearc";
	newCustSearc.style.position = "absolute";
	newCustSearc.style.zIndex = "99998";
	newCustSearc.style.top = "30px";
	newCustSearc.style.left = "220px";
//	newCustSearc.style.right = "0px";
	newCustSearc.style.width = "598px";
	newCustSearc.style.height = "20px";
	//newCustSearc.style.min-width = "20px";
	//newCustSearc.classList.add('toprightnow');
	
	
	var custSearc = document.getElementById('custSearc');

	chrome.storage.local.get(['optionCustSearc'], function(result) {
	  
	  custSearc = result.optionCustSearc;
	  
	  console.log(custSearc);
	  
	  if (custSearc == ""){
		custSearc = "<button id='null' type='button' class='toprightnow' data-tstatus='alle Offenen, nicht behoben' data-group='TCS.DF.HU.OPS.L1.EN2 TCS.DF.HU.OPS.L1.SDWAN.SDX' data-kname='' data-suchk='' data-main='' title='Null'>Null</button><button id='gfsearc' type='button' class='toprightnow' data-tstatus='alle Offenen, nicht behoben' data-group='' data-kname='Georg Fischer Group' data-suchk='Incidentklasse = &quot;%törung%&quot;' data-main='0' title='Searc Georg Fischer'>GF</button><button id='fortiSearch' type='button' class='toprightnow' data-tstatus='alle Offenen, nicht behoben' data-group='TCS.DF.HU.OPS.L1.SDWAN.SDX TCS.DF.HU.OPS.L1.DE1' data-kname='' data-main='0' data-suchk='Netzname = &quot;%FT-SDW%&quot;' title='Searc Fortinet'>Fortinet</button>"  
	  }
	//  console.log('Value currently is ' + bgValue);
	  newCustSearc.innerHTML = custSearc;
	//  custbg.style.setProperty('background-image', `url(${bgValue})`);
	});

      /* newCustSearc.innerHTML = "<button id='null' type='button' class='toprightnow' data-tstatus='alle Offenen, nicht behoben' data-group='TCS.DF.HU.OPS.L1.EN2 TCS.DF.HU.OPS.L1.SDWAN.SDX' data-kname='' data-suchk='' data-main='' title='Null'>Null</button><button id='gfsearc' type='button' class='toprightnow' data-tstatus='alle Offenen, nicht behoben' data-group='' data-kname='Georg Fischer Group' data-suchk='Incidentklasse = &quot;%törung%&quot;' data-main='main' title='Searc Georg Fischer'>GF</button><button id='fortiSearch' type='button' class='toprightnow' data-tstatus='alle Offenen, nicht behoben' data-group='TCS.DF.HU.OPS.L1.SDWAN.SDX TCS.DF.HU.OPS.L1.DE1' data-kname='' data-main='main' data-suchk='Netzname = &quot;%FT-SDW%&quot;' title='Searc Fortinet'>Fortinet</button>";  
	 */
	  /* fetch('tubuttons.html')
      .then(response => response.text())
      .then(data => {
        newCustSearc.innerHTML = data;
      })
      .catch(error => console.error('Error loading HTML:', error));  */
	
	
	// minta <button id='null' type='button' class='toprightnow' data-tstatus='alle Offenen, nicht behoben' data-group='TCS.DF.HU.OPS.L1.EN2 TCS.DF.HU.OPS.L1.SDWAN.SDX' data-kname='' data-main='main' data-suchk='' title='Searc Georg Fischer'>Null</button>
	
	

setTimeout(exeCustB, 1000);
		
	function exeCustB() {	

	document.getElementById('FormContainer').appendChild(newCustSearc);

	var buttons = document.querySelectorAll('.toprightnow');

	buttons.forEach(function(button) {
		button.addEventListener('click', function() {
			var element = document.getElementById('WIN_0_rc0id536871860'); 
			var elementSuchen = document.getElementById('WIN_0_536870910'); 
			
			var textAreaKname = document.getElementById("arid_WIN_0_536870946");
			var textAreatstatus = document.getElementById("arid_WIN_0_536870923");
			var textAreaGroup = document.getElementById("arid_WIN_0_536870943");
			var textAreaSuchk = document.getElementById("arid_WIN_0_536871136");
			var textAreaMain = this.getAttribute('data-main');
			console.log(textAreaMain);
			//var textAreaMain;
			
			textAreaKname.value = this.getAttribute('data-kname');	  
			textAreatstatus.value = this.getAttribute('data-tstatus');
			textAreaGroup.value = this.getAttribute('data-group');
			textAreaSuchk.value = this.getAttribute('data-suchk');
			
			simulateUserInteraction(textAreaKname);
			simulateUserInteraction(textAreatstatus);
			simulateUserInteraction(textAreaGroup);
			simulateUserInteraction(textAreaSuchk);
			
			//element && element.click();
			
			if(textAreaMain == "0"){
				if(!(element.checked)){
					console.log("main click");
					element && element.click();
				}
			}else{
				console.log("else click");
				if(element.checked){
					console.log("else click - ok");
					element && element.click();
				}
			}
				
			elementSuchen && elementSuchen.click();
		});
	  });
	}
	
/* 	- arid_WIN_0_536870923 = "alle Offenen, nicht behoben"
	- arid_WIN_0_536870943 = ""
	- arid_WIN_0_536870946 = "Georg Fischer Group"
	- WIN_0_rc0id536871860 = click
	- arid_WIN_0_536871136 = "Incidentklasse = '%törung%'" */
	
	
var textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.id = 'textInputCres';
        textInput.placeholder = 'Button name';
		textInput.style.position = "absolute";
		textInput.style.zIndex = "99998";
		textInput.style.top = "5px";
		textInput.style.right = "170px";

        // Create a button element
var saveButton = document.createElement('button');
        saveButton.id = 'saveButton';
        saveButton.textContent = 'Save';
		saveButton.style.position = "absolute";
		saveButton.style.zIndex = "99998";
		saveButton.style.top = "6px";
		saveButton.style.right = "140px";

        // Append elements to the container
var container = document.getElementById('FormContainer');
        container.appendChild(textInput);
        container.appendChild(saveButton);
		//console.log("03");
	
var textAreaMain = null;
	
document.querySelectorAll('input[name="WIN_0_RCGroup536871860"]').forEach(function(radio) {
		radio.addEventListener('change', function() {
		// When a radio button is selected, update the variable with its value
			textAreaMain = this.value;
			console.log('Selected value:', textAreaMain); // For demonstration purposes
		});
	});	

saveButton.addEventListener('click', function() {
	
	//console.log("04");
            // Get the value from the text input
    var textInputValue = textInputCres.value;

            // Display a message or perform any other action
   // var messageElement = document.getElementById('message').value;
	var textAreaKname = document.getElementById("arid_WIN_0_536870946").value;
	var textAreatstatus = document.getElementById("arid_WIN_0_536870923").value;
	var textAreaGroup = document.getElementById("arid_WIN_0_536870943").value;
	var textAreaSuchk = document.getElementById("arid_WIN_0_536871136").value;
		
	var custSearcOriginal = custSearc
	
	var custSearcNew = "<button id='' type='button' class='toprightnow' data-tstatus='"+textAreatstatus+"' data-group='"+textAreaGroup+"' data-kname='"+textAreaKname+"' data-suchk='"+textAreaSuchk+"' data-main='"+textAreaMain+"' title=''>"+textInputValue+"</button>"
	
	custSearc = custSearcOriginal + custSearcNew;
	
	chrome.storage.local.set({ optionCustSearc: custSearc }, () => {
            console.log('Options saved:', custSearc);
	});
	
	setTimeout(function() {
		location.reload();
	}, 1000); 
	
/*     if (textInputValue) {
        messageElement.textContent = 'Saved: ' + textInputValue;
    } else {
        messageElement.textContent = 'Please enter some text.';
    } */
});