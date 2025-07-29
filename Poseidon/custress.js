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
    newCustB.innerHTML = "<button id='gfInsert' type='button' class='toprightnow' data-text='Georg Fischer Group' title='Insert Georg Fischer'>GF</button><button id='lufiInsert' type='button' class='toprightnow' data-text='Deutsche Lufthansa AG' title='Insert Deutsche Lufthansa'>Lufi</button><button id='voestalpinInsert' type='button' class='toprightnow' data-text='voestalpine AG' title='Insert voestalpine'>Voestalpine</button><button id='rcoInsert' type='button' class='toprightnow' data-text='Continuation Computers Limited' title='Insert RCO'>RCO</button><button id='asahiInsert' type='button' class='toprightnow' data-text='Asahi Europe' title='Insert Asahi'>Asahi</button><button id='fqmlInsert' type='button' class='toprightnow' data-text='First Quantum Minerals' title='Insert fqml'>FQML</button><button id='recipharmInsert' type='button' class='toprightnow' data-text='Recipharm' title='Insert Recipharm'>Recipharm</button><button id='gowlingInsert' type='button' class='toprightnow' data-text='Gowling' title='Insert Gowling'>Gowling</button><button id='boschInsert' type='button' class='toprightnow' data-text='Robert Bosch GmbH' title='Insert Bosch'>Bosch</button><button id='vanderlandeInsert' type='button' class='toprightnow' data-text='Vanderlande Industries B.V.' title='Insert Vanderlande'>Vanderlande</button>";
	
	// minta <button id='voestalpinInsert' type='button' class='toprightnow' data-text='voestalpine AG' title='Insert voestalpine'>Voestalpine</button>
	

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
	
	
