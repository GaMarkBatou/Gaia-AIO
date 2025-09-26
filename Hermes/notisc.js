const inputNotiz = document.getElementById('arid_WIN_0_536871782');

var standCityLOC = document.getElementById("arid_WIN_0_536871000").value.trim(); 
var zipLOC = document.getElementById("arid_WIN_0_536871001").value.trim(); 
var streetLOC = document.getElementById("arid_WIN_0_536871002").value.trim(); 
var endsIDLOC = document.getElementById("arid_WIN_0_536870999").value.trim(); 
//console.log("location check loaded");
var lcname = document.getElementById("arid_WIN_0_536871015").value.trim(); 
var lcphone1 = document.getElementById("arid_WIN_0_536871021").value.trim(); 
var lcphone2 = document.getElementById("arid_WIN_0_536872300").value.trim(); 

inputNotiz.addEventListener('input', handleInput);

/* function handleInput(event) {
    if (isUpdating) return;
    isUpdating = true;

    console.log("location check");
    const inputValue = event.target.value;
    let replacedValue = inputValue;
    replacedValue = replacedValue.replace(/X-X/gi, 'Good bye');
    replacedValue = replacedValue.replace(/location/gi, "Location:" + zipLOC + " " + standCityLOC + " " + streetLOC);
    replacedValue = replacedValue.replace(/locid/gi, endsIDLOC + " | " + standCityLOC);

    event.target.value = replacedValue;

    isUpdating = false;
} */

//
//	Lcname:
//	Lcphone:
//	Lcphone2:
//	Location:
//	Locid:
//

function handleInput(event) {
    //console.log("location check");
    const inputValue = event.target.value;
    //console.log("Original input value:", inputValue);

    let replacedValue = inputValue;

/*     if (/X-X/gi.test(replacedValue)) {
        replacedValue = replacedValue.replace(/X-X/gi, 'Good bye');
    } */
	
	if (/lcname/gi.test(replacedValue) && !/lcname-/.test(replacedValue)) {
		replacedValue = replacedValue.replace(/Lcname-/gi, lcname);
	}
	
	if (/lcphone/gi.test(replacedValue) && !/lcphone-/.test(replacedValue)) {
		replacedValue = replacedValue.replace(/Lcphone-/gi, lcphone1);
	}
	
	if (/lcphone2/gi.test(replacedValue) && !/lcphone2-/.test(replacedValue)) {
		replacedValue = replacedValue.replace(/Lcphone2-/gi, lcphone2);
	}

	if (/location/gi.test(replacedValue) && !/location-/.test(replacedValue)) {
		replacedValue = replacedValue.replace(/Location-/gi, "Location: " + zipLOC + " " + standCityLOC + " " + streetLOC);
	}

    if (/locid/gi.test(replacedValue) && !/\|/.test(replacedValue)) {
        replacedValue = replacedValue.replace(/Locid-/gi, endsIDLOC + " | " + standCityLOC);
    }

    //console.log("Replaced value:", replacedValue);

    if (inputValue !== replacedValue) {
        //console.log("Updating input value");
        event.target.value = replacedValue;
    } else {
        //console.log("No changes made to input value");
    }
}

		
inputNotiz.addEventListener('click', function(event) {
			//console.log("var updated");
			zipLOC = document.getElementById("arid_WIN_0_536871001").value.trim(); 
			standCityLOC = document.getElementById("arid_WIN_0_536871000").value.trim(); 
			streetLOC = document.getElementById("arid_WIN_0_536871002").value.trim(); 
			endsIDLOC = document.getElementById("arid_WIN_0_536870999").value.trim(); 
			lcname = document.getElementById("arid_WIN_0_536871015").value.trim(); 
			lcphone1 = document.getElementById("arid_WIN_0_536871021").value.trim(); 
			lcphone2 = document.getElementById("arid_WIN_0_536872300").value.trim(); 
});