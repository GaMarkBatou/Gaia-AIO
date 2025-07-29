const mode = sessionStorage.getItem('mode');
var defmin = "08";


function notizart(enttyp){
	var textArea = document.getElementById("arid_WIN_0_536870913");
	var text = enttyp;
	var index = -1;
		
		function typeText() {
			if (index < text.length) {
				textArea.value += text.charAt(index);
				index++;
				setTimeout(typeText, 30); 
			}
		}
	
	typeText();
	simulateUserInteraction(document.getElementById("arid_WIN_0_536870913"));	
}

function minuten(vmin){
	var textArea = document.getElementById("arid_WIN_0_536870949");
	var text = vmin;
	var index = 0;
	
		
		function typeText() {
				if (index < text) {
					const linkElement = document.querySelector('a.btn.btn3d.spinnerup');
					if (linkElement) {
						linkElement.click();
					}
				index++;
				setTimeout(typeText, 50); 
			}
		}
		
	typeText();
	simulateUserInteraction(document.getElementById("arid_WIN_0_536870921"));
}

window.onload = function() {
	//console.log("Page is fully loaded");
	//console.log(`ready`);

	//notizart(mode);
	chrome.storage.local.get(['optionCustSearc'], function(result) {
		custSearc = result.optionCustSearc;
	});
	//document.getElementById("arid_WIN_0_536870913").title = mode;	
	chrome.storage.local.get(['optionNotiMin'], function(result) {  
	  defmin = result.optionNotiMin;
	  console.log(defmin);
	  
	  if (defmin == ""){
		defmin = "08"  
	  }
	  var entryT = document.getElementById("arid_WIN_0_536870913");
	  if (entryT == "Zusammenfassung"){
		defmin = "08" 
	  }
	});
	simulateUserInteraction(document.getElementById("arid_WIN_0_536870921"));
	minuten(defmin);

};

//optionNotiZus