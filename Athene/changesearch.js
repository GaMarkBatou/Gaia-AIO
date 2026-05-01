
setTimeout(extTT, 500);
		
	function extTT() {	
       
	function getParameterByName(name) {
            let url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
            let results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }

let changeTT = getParameterByName('changett');
	if (changeTT) {
		changeTT = `%${changeTT}%`;
	}
        //console.log(changeTT);


            if (changeTT != null) {
                let textArea = document.getElementById("arid_WIN_0_555000000");
                if (textArea) {
                    textArea.value = changeTT;
                    //types(changeTT);
                } else {
                    console.log("Element with id 'arid_WIN_0_555000000' not found.");
                }
            } else {
                console.log("changeTT is null or empty");
            }
			
			
            function types(TTnum) {
                var textArea = document.getElementById("arid_WIN_0_555000000");
                var text = TTnum;
                var index = -1;
                //console.log(TTnum);
                //console.log(index);

                function typeText() {
                    if (index < text.length) {
                        console.log(text);
                        textArea.value += text.charAt(index);
                        index++;
                        setTimeout(typeText, 1); 
                    }
                }

                typeText();
            }
		//var ffExternal = document.getElementById("arid_WIN_0_555000000");
			simulateUserInteraction(document.getElementById("arid_WIN_0_555000000"));
}
			
			
setTimeout(extTT2, 1000);
		
	function extTT2() {	
		var element = document.getElementById('WIN_0_570000066'); 
		element && element.click();
	}	
	
/* setTimeout(extTT3, 1100);
		
	function extTT3() {	
/* 		var xpath = "/html/body/div[1]/div[5]/div[3]/div[2]/div/div/table/tbody/tr[2]";
		console.log("select table");
		var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		console.log("click prepare");
		  if (element) {
			element.click();
		  } else {
			console.error('Element not found using XPath:', xpath);
		  } *//* 
		var xpath = "/html/body/div[1]/div[5]/div[3]/div[2]/div/div/table/tbody/tr[2]";
		  console.log("select table");

		  var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		  console.log("click prepare");

		  if (element) {
			// Create a dblclick event
			var dblClickEvent = new MouseEvent('dblclick', {
			  bubbles: true,
			  cancelable: true,
			  view: window
			});

			// Dispatch the dblclick event
			element.dispatchEvent(dblClickEvent);
			console.log("dblclick dispatched");
		  } else {
			console.error('Element not found using XPath:', xpath);
		  } 
	} */
	
	

			
		//	var element = document.getElementById('WIN_0_536870899'); 
		//	element && element.click();
			//var element = document.getElementById('WIN_0_536870899');
			//element.click();	