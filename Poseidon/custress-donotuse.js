var newCustB = document.createElement("div");
	newCustB.id = "custName";
	newCustB.style.position = "absolute";
	newCustB.style.zIndex = "99998";
	newCustB.style.top = "4px";
//	newCustB.style.left = "765px";
	newCustB.style.right = "0px";
	newCustB.style.width = "590px";
	newCustB.style.height = "20px";
	//newCustB.style.min-width = "20px";
	//newCustB.classList.add('toprightnow');
	var element = document.getElementById('WIN_0_536870908'); 
    newCustB.innerHTML = "<button id='gfInsert' type='button' class='toprightnow' title='Insert Georg Fischer'>GF</button><button id='lufiInsert' type='button' class='toprightnow' title='Insert Deutsche Lufthansa'>Lufi</button>";
	
setTimeout(executeCBI, 1000);
		
	function executeCBI() {		
		document.getElementById('WIN_0_536880941').appendChild(newCustB);

		document.getElementById("gfInsert").addEventListener("click", function() {
			var textArea = document.getElementById("arid_WIN_0_536870924");
			textArea.value = "Georg Fischer Group";
			
			simulateUserInteraction(textArea);
			element && element.click();
			
		});
		
		document.getElementById("lufiInsert").addEventListener("click", function() {
			var textArea = document.getElementById("arid_WIN_0_536870924");
			textArea.value = "Deutsche Lufthansa AG";
			
			simulateUserInteraction(textArea);
			element && element.click();
		});
	}
	
	
	