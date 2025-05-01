var kozernCustomerGib = document.getElementById("arid_WIN_0_536871994").value.trim(); 
var quelleGib = document.getElementById("arid_WIN_0_536870915").value.trim(); 
const inputAsaiGib = document.getElementById('arid_WIN_0_536870990');
const inputAsaiGib2 = document.getElementById('arid_WIN_0_536871792');


	setTimeout(executeAfterDelay, 8000);

    function executeAfterDelay() {
		kozernCustomerGib = document.getElementById("arid_WIN_0_536871994").value.trim(); 
		quelleGib = document.getElementById("arid_WIN_0_536870915").value.trim(); 
		if (kozernCustomerGib === "Asahi Europe Ltd" && quelleGib === "TT-BUS"){
			let text = inputAsaiGib.value;
			let replacedText = text.replace(/\\r\\n/g, '\n');
			inputAsaiGib.value = replacedText;
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

