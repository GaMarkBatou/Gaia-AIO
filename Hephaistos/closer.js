//var searchValueclosetime1 = document.getElementById("arid_WIN_0_536871869").value.trim(); 
//var searchValueclosetime2 = document.getElementById("arid_WIN_0_536871397").value.trim(); 
var ttKlasseClose = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 4);
var kostUmbe = document.getElementById("arid_WIN_0_536870995").value.trim(); 
var imtcConnect = document.getElementById("arid_WIN_0_536870976").value.trim(); 
var closerCodeEnd = document.getElementById("arid_WIN_0_536870994").value.trim().toLowerCase()
var cUmbi = 0;
var cTimer = 0;
var cClosure = 0;
	
/* document.getElementById("arid_WIN_0_536871869").addEventListener("change", function(){
	searchValueclosetime1 = document.getElementById("arid_WIN_0_536871869").value.trim(); 
	document.getElementById("arid_WIN_0_536871397").value = searchValueclosetime1;	
	const element = document.getElementById('arid_WIN_0_536871397');
	element.click();

});

document.getElementById("arid_WIN_0_536871397").addEventListener("change", function(){
	searchValueclosetime2 = document.getElementById("arid_WIN_0_536871397").value.trim(); 
	document.getElementById("arid_WIN_0_536871869").value = searchValueclosetime2;	
	const element = document.getElementById('arid_WIN_0_536871869');
	element.click();

}); */


//console.log("ez: " + kostUmbe);
//console.log("gf ready");

function checkAndSetBackground() {
    let element = document.getElementById("TBsearchsavechanges");
    let currentBackground = element.style.background;

    /* if (currentBackground !== '#ff2930') {
        element.style.background = '#ff2930';
    } */
	
	if(cUmbi == 1 || cTimer == 1 || cClosure == 1){
		element.style.background = '#ff2930';
	}else{
		element.style.background = null;
	}
	
	//document.getElementById("TBsearchsavechanges").style.background = '#ff2930';
	//document.getElementById("TBsearchsavechanges").style.background= null;
	
}


setTimeout(closerCheck, 10000);


////

function closerCheck() {

    
/*     console.log("Checking values...");
    console.log("searchValueclosetime1: " + searchValueclosetime1);
    console.log("searchValueclosetime2: " + searchValueclosetime2);

    if (searchValueclosetime1 !== searchValueclosetime2) {
        console.log("Values are different");
        document.getElementById("TBsearchsavechanges").style.background = '#ff2930';
		cTimer = 1;
    } else {
        console.log("Values are the same");
        document.getElementById("TBsearchsavechanges").style.background = null;
		cTimer = 0;
    } */
    
	searchValueclosetime1 = document.getElementById("arid_WIN_0_536871869").value.trim().toLowerCase();
    searchValueclosetime2 = document.getElementById("arid_WIN_0_536871397").value.trim().toLowerCase();
	
	kostUmbe = document.getElementById("arid_WIN_0_536870995").value.trim(); 
	searchValueclosetime1 = document.getElementById("arid_WIN_0_536871869").value.trim().toLowerCase();
	searchValueclosetime2 = document.getElementById("arid_WIN_0_536871397").value.trim().toLowerCase();
	//console.log("ez: " + kostUmbe +"|");
	ttKlasseClose = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 4);
		if(ttKlasseClose == "Main"){
			
				
		
		if (kostUmbe != "unbekannt" && kostUmbe != ""){
			
			
			cUmbi = 1;
			checkAndSetBackground();
			document.getElementById("arid_WIN_0_536870995").style.background='#ff2930';
			//document.getElementById("TBsearchsavechanges").style.background = '#ff2930';
				
			
			//console.log("ez: " + kostUmbe +"|");
		}else{
			//console.log("gf-change-off");
			cUmbi = 0;
			checkAndSetBackground();
			document.getElementById("arid_WIN_0_536870995").style.background= null;
			//document.getElementById("TBsearchsavechanges").style.background= null;
			//console.log("ez: " + kostUmbe +"|");
		}
		////// timer
		
		   /*  console.log("Checking values...");
			console.log("searchValueclosetime1: " + searchValueclosetime1);
			console.log("searchValueclosetime2: " + searchValueclosetime2); */

		if (searchValueclosetime1 !== searchValueclosetime2) {
			//console.log("Values are different");
			cTimer = 1;
			checkAndSetBackground();
			//document.getElementById("TBsearchsavechanges").style.background = '#ff2930';
			document.getElementById("arid_WIN_0_536871869").style.background = '#ff2930';
			document.getElementById("arid_WIN_0_536871397").style.background = '#ff2930';
		} else {
			//console.log("Values are the same");
			cTimer = 0;
			checkAndSetBackground();
			//document.getElementById("TBsearchsavechanges").style.background = null;
			document.getElementById("arid_WIN_0_536871869").style.background = null;
			document.getElementById("arid_WIN_0_536871397").style.background = null;
		}
		
		imtcConnect = document.getElementById("arid_WIN_0_536870976").value.trim(); 
		closerCodeEnd = document.getElementById("arid_WIN_0_536870994").value.trim().toLowerCase();
		
		if(imtcConnect == 'IMTC' && closerCodeEnd == "")	{
			//console.log("IMTC teszt 1, " + imtcConnect +", "+closerCodeEnd);
			cClosure = 1;
			checkAndSetBackground();
			document.getElementById("arid_WIN_0_536870991").style.background = '#ff2930';
			document.getElementById("arid_WIN_0_536870992").style.background = '#ff2930';
			document.getElementById("arid_WIN_0_536870993").style.background = '#ff2930';
			document.getElementById("arid_WIN_0_536870994").style.background = '#ff2930';
			document.getElementById("arid_WIN_0_536870976").style.background = '#ff2930';
		}else{
			//console.log("IMTC teszt 0, " + imtcConnect +", "+ closerCodeEnd);
			cClosure = 0;
			checkAndSetBackground();
			document.getElementById("arid_WIN_0_536870991").style.background = null;
			document.getElementById("arid_WIN_0_536870992").style.background = null;
			document.getElementById("arid_WIN_0_536870993").style.background = null;
			document.getElementById("arid_WIN_0_536870994").style.background = null;
			document.getElementById("arid_WIN_0_536870976").style.background = null;
		}
	
		//if (document.getElementById("arid_WIN_0_536870976").value.trim())
		
    setTimeout(closerCheck, 3000);
	}
}



/* // setTimeout(executeAfterDelayKost, 10000);
	
    function executeAfterDelayKost() {

		arid_WIN_0_536871849
		document.getElementById("arid_WIN_0_536871849").value = "englisch";	
		
		//setTimeout(executeAfterDelayKost, 3000);
	}
	 */
	
	