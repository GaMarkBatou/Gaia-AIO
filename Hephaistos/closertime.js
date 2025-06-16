var searchValueclosetime1 = document.getElementById("arid_WIN_0_536871869").value.trim(); 
var searchValueclosetime2 = document.getElementById("arid_WIN_0_536871397").value.trim(); 

	
document.getElementById("arid_WIN_0_536871869").addEventListener("change", function(){
	searchValueclosetime1 = document.getElementById("arid_WIN_0_536871869").value.trim(); 
	document.getElementById("arid_WIN_0_536871397").value = searchValueclosetime1;	
	
	const elementct1 = document.getElementById('arid_WIN_0_536871397');
	simulateUserInteraction(elementct1);
	elementct1.click();

});

document.getElementById("arid_WIN_0_536871397").addEventListener("change", function(){
	searchValueclosetime2 = document.getElementById("arid_WIN_0_536871397").value.trim(); 
	document.getElementById("arid_WIN_0_536871869").value = searchValueclosetime2;	
	
	const elementct2 = document.getElementById('arid_WIN_0_536871869');
	simulateUserInteraction(elementct2);
	elementct2.click();

});


/* setTimeout(closerCheck, 10000);

function closerCheck() {

    
    console.log("Checking values...");
    console.log("searchValueclosetime1: " + searchValueclosetime1);
    console.log("searchValueclosetime2: " + searchValueclosetime2);

    if (searchValueclosetime1 !== searchValueclosetime2) {
        console.log("Values are different");
        document.getElementById("TBsearchsavechanges").style.background = '#ff2930';
    } else {
        console.log("Values are the same");
        document.getElementById("TBsearchsavechanges").style.background = null;
    }
    
	searchValueclosetime1 = document.getElementById("arid_WIN_0_536871869").value.trim().toLowerCase();
    searchValueclosetime2 = document.getElementById("arid_WIN_0_536871397").value.trim().toLowerCase();
	
    setTimeout(closerCheck, 3000);
} */
	