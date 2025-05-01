// customer arid_WIN_0_536871994
// festgestellt arid_WIN_0_536871242
// tt klasse arid_WIN_0_536871498
// problemklasse arid_WIN_0_536870989
	
var problemKlasse = document.getElementById("arid_WIN_0_536870989").value.trim(); 
var kozernCustomer = document.getElementById("arid_WIN_0_536871994").value.trim(); 
var festgDate = document.getElementById("arid_WIN_0_536871242").value.trim(); 
var ttKlasse = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 4);
//console.log("gf ready");

setTimeout(executeAfterDelay, 10000);
	
    function executeAfterDelay() {
		//console.log("gf timer");
		//console.log(kozernCustomer);
		//console.log(festgDate);
		problemKlasse = document.getElementById("arid_WIN_0_536870989").value.trim(); 
		kozernCustomer = document.getElementById("arid_WIN_0_536871994").value.trim(); 
		festgDate = document.getElementById("arid_WIN_0_536871242").value.trim(); 
		ttKlasse = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 4);
		
		if (kozernCustomer == "Georg Fischer Group" && festgDate == "" && ttKlasse == "Main" && problemKlasse == "Störung"){
			//console.log("gf-if-ok");
			//console.log(ttKlasse);
			document.getElementById("arid_WIN_0_536871242").style.background='#ff2930';
		}
	}
	
	document.getElementById("arid_WIN_0_536871242").addEventListener("change", function(){
		if (kozernCustomer == "Georg Fischer Group" && festgDate == "" && ttKlasse == "Main"){
			//console.log("gf-change-on");
			document.getElementById("arid_WIN_0_536871242").style.background= null;
		}else{
			//console.log("gf-change-off");
			document.getElementById("arid_WIN_0_536871242").style.background= '#ff2930';
	}});
	
	//document.getElementById("arid_WIN_0_536871242").style.background='#ff2930';
	//animation: bg 5s linear infinite