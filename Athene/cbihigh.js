var cbiField = document.getElementById("arid_WIN_0_536872149").value.trim(); 
var hotlineField = document.getElementById("arid_WIN_0_536870951").value.trim(); 
var ttidField = document.getElementById("WIN_0_1").querySelector("textarea").value; // #arid_WIN_0_1 //*[@id="arid_WIN_0_1"] /html/body/div[1]/div[5]/div[6]/textarea
var customerName = document.getElementById("arid_WIN_0_536871994").value.trim();  
var customerNet = document.getElementById("arid_WIN_0_536870936").value.trim();  

var nameLc = document.getElementById("arid_WIN_0_536871015").value.trim(); 
var phoneLc = document.getElementById("arid_WIN_0_536871021").value.trim(); 
var mailLc = document.getElementById("arid_WIN_0_536871022").value.trim(); 

var zipLc = document.getElementById("arid_WIN_0_536871001").value.trim(); 
var cityLc = document.getElementById("arid_WIN_0_536871000").value.trim(); 
var straLc = document.getElementById("arid_WIN_0_536871002").value.trim(); 

var severityField = document.getElementById("arid_WIN_0_536871225").value.trim(); 
var ressField; //- var ressField = document.getElementById("arid_WIN_0_536871016").value.trim(); 
var slaField = document.getElementById("arid_WIN_0_536870996").value.trim(); 
var slaRemaining = document.getElementById("arid_WIN_0_536871345").value.trim(); 
var descriptionField = document.getElementById("arid_WIN_0_536870990").value.trim(); 

//var ttmain = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 4);

var limMail1 = "DL-TS_TCS_DF_OPS_BLS_NEARSHORE01@telekom.com";
var limMail2 = "TC_Leitstand@telekom.de";
var sicMail = "SIC_SDX_SDWAN@telekom.com";

var ttMain = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 4);
//console.log("cbi0");

	var newElementCBI = document.createElement("div");
		newElementCBI.id = "cbiHigh";
		newElementCBI.style.position = "absolute";
		newElementCBI.style.zIndex = "99998";
		newElementCBI.style.top = "30px";
		newElementCBI.style.left = "765px";
		newElementCBI.style.width = "20px";
		newElementCBI.style.height = "20px";
        newElementCBI.innerHTML = "<button id='cbiButton' type='button' title='High/Critical'>CBI</button>";


	
       // console.log("5 seconds have passed!");
	  // console.log("cbi1");
	   setTimeout(executeCBI, 7000);
		//console.log("cbi2");
		function executeCBI() {
			//console.log("cbi3");            arid_WIN_0_536871498
			ttMain = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 4);
			console.log(ttMain);
			if (ttMain == "Main") {
				//console.log("cbi4");
				document.getElementById('FormContainer').appendChild(newElementCBI);

				document.getElementById("cbiButton").addEventListener("click", function() {
					
					cbiField = document.getElementById("arid_WIN_0_536872149").value.trim(); 
					hotlineField = document.getElementById("arid_WIN_0_536870951").value.trim(); 
					ttidField = document.getElementById("WIN_0_1").querySelector("textarea").value;// #arid_WIN_0_1 //*[@id="arid_WIN_0_1"] /html/body/div[1]/div[5]/div[6]/textarea
					customerName = document.getElementById("arid_WIN_0_536871994").value.trim();  
					customerNet = document.getElementById("arid_WIN_0_536870936").value.trim();  

					nameLc = document.getElementById("arid_WIN_0_536871015").value.trim(); 
					phoneLc = document.getElementById("arid_WIN_0_536871021").value.trim(); 
					mailLc = document.getElementById("arid_WIN_0_536871022").value.trim(); 

					zipLc = document.getElementById("arid_WIN_0_536871001").value.trim(); 
					cityLc = document.getElementById("arid_WIN_0_536871000").value.trim(); 
					straLc = document.getElementById("arid_WIN_0_536871002").value.trim(); 

					severityField = document.getElementById("arid_WIN_0_536871225").value.trim(); 
					
					try {
					  ressField = document.getElementById("arid_WIN_0_536871016").value.trim(); 
					}
					catch(err) {
					  ressField = document.getElementById("arid_WIN_0_536870996").value.trim(); 
					}
					//ressField = document.getElementById("arid_WIN_0_536871016").value.trim(); 
					
					slaField = document.getElementById("arid_WIN_0_536870996").value.trim(); 
					slaRemaining = document.getElementById("arid_WIN_0_536871345").value.trim(); 
					descriptionField = document.getElementById("arid_WIN_0_536870990").value.trim(); 

					if (hotlineField != "TCS.DF.HU.OPS.L1.SDWAN.SDX"){
						sicMail = "FMB.FMB-TS-ITSH-SICEN2@telekom.com";
					}
					
					var urlMail = `mailto:${encodeURIComponent(limMail1)};${encodeURIComponent(limMail2)}?cc=${encodeURIComponent(sicMail)}&subject=Nearshore customer || wTTS TT: ${encodeURIComponent(ttidField)} || Customer: ${encodeURIComponent(customerName)} || Wichtung/Severity: ${encodeURIComponent(severityField)} || CBI: ${encodeURIComponent(cbiField)}  &body=Dear Team, %0a%0aPlease be advised that we detected a CBI: ${encodeURIComponent(cbiField)} (eTTS) Incident in the ${encodeURIComponent(hotlineField)}. Below please find the necessary information:%0aTT-ID: ${encodeURIComponent(ttidField)}%0aCustomer: ${encodeURIComponent(customerName)} / ${encodeURIComponent(customerNet)}%0a %0aLocal Contact:%0aName: ${encodeURIComponent(nameLc)}%0aTelefon: ${encodeURIComponent(phoneLc)}%0aE-mail: ${encodeURIComponent(mailLc)}%0aAddress: ${encodeURIComponent(zipLc)} ${encodeURIComponent(cityLc)} ${encodeURIComponent(straLc)}%0a %0aWichtung: ${encodeURIComponent(severityField)}%0aCBI: ${encodeURIComponent(cbiField)}%0aRessource: ${encodeURIComponent(ressField)}%0aSLA: ${encodeURIComponent(slaField)}%0aRemaining SLA: ${encodeURIComponent(slaRemaining)}%0a %0aBeschreibung: %0a${encodeURIComponent(descriptionField)}%0a%0a`;
					console.log("cbi2");
				   // console.log(urlMail);
					window.open(urlMail, "_blank");
				});
			}
		}
