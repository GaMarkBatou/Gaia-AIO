var kozernCustomerGib = document.getElementById("arid_WIN_0_536871994").value.trim(); 
var quelleGib = document.getElementById("arid_WIN_0_536870915").value.trim(); 
const inputAsaiGib = document.getElementById('arid_WIN_0_536870990');
const inputAsaiGib2 = document.getElementById('arid_WIN_0_536871792');
const inputAsaiGib3 = document.getElementById('editor');

	setTimeout(executeAfterDelay, 9000);

    function executeAfterDelay() {
		kozernCustomerGib = document.getElementById("arid_WIN_0_536871994").value.trim(); 
		quelleGib = document.getElementById("arid_WIN_0_536870915").value.trim(); 
		if (kozernCustomerGib === "Asahi Europe Ltd" && quelleGib === "TT-BUS"){
			let text = inputAsaiGib.value;
			let replacedText = text.replace(/\\r\\n/g, '\n');
			inputAsaiGib.value = replacedText;
			setTimeout(executeAsaGhib, 3000);
		}
	}
	
	inputAsaiGib.addEventListener('click', function(event) {
		  let text = inputAsaiGib.value;
		  let replacedText = text.replace(/\\r\\n/g, '\n');
		  inputAsaiGib.value = replacedText;
		  //console.log("Replacement executed 2");
		  //console.log(replacedText);
	})
	
	inputAsaiGib2.addEventListener('click', function(event) {
		  let text = inputAsaiGib2.value;
		  let replacedText = text.replace(/\\r\\n/g, '\n');
		  inputAsaiGib2.value = replacedText;
		  //console.log("Replacement executed 2");
		  //console.log(replacedText);
	})

	function executeAsaGhib() {
//		kozernCustomerGib = document.getElementById("arid_WIN_0_536871994").value.trim(); 
//		quelleGib = document.getElementById("arid_WIN_0_536870915").value.trim(); 
		
		var text1 = inputAsaiGib.value;
		var replacedText1 = text1.replace(/\\r\\n/g, '\n');
		inputAsaiGib.value = replacedText1;
		
		var text2 = inputAsaiGib2.value;
		var replacedText2 = text2.replace(/\\r\\n/g, '\n');
		inputAsaiGib2.value = replacedText2;
		
		setTimeout(executeAsaGhib, 3000);
	}