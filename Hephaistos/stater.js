// status arid_WIN_0_536870917
// termin arid_WIN_0_536870918
	
document.getElementById("arid_WIN_0_536870917").addEventListener("change", function(){
	
	var statusStatus = document.getElementById("arid_WIN_0_536870917").value.trim(); 
	if (statusStatus == "in Bearbeitung"){
	document.getElementById("arid_WIN_0_536870918").value = null;	
	}
	if (statusStatus == "behoben"){
	document.getElementById("arid_WIN_0_536870918").value = null;	
	}
});