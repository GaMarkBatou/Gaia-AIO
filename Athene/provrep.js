var ttidFieldProv = document.getElementById("WIN_0_1").querySelector("textarea").value; // #arid_WIN_0_1 //*[@id="arid_WIN_0_1"] /html/body/div[1]/div[5]/div[6]/textarea
var beginFieldProv = document.getElementById("arid_WIN_0_536871242").value.trim();  
var customerName = document.getElementById("arid_WIN_0_536871994").value.trim(); 

var nameLcProv = document.getElementById("arid_WIN_0_536871015").value.trim(); 
var phoneLcProv = document.getElementById("arid_WIN_0_536871021").value.trim(); 
var mailLcProv = document.getElementById("arid_WIN_0_536871022").value.trim(); 

var zipLcProv = document.getElementById("arid_WIN_0_536871001").value.trim(); 
var cityLcProv = document.getElementById("arid_WIN_0_536871000").value.trim(); 
var straLcProv = document.getElementById("arid_WIN_0_536871002").value.trim(); 

var bearCID = document.getElementById("arid_WIN_0_536870978").value.trim(); 

var prov = document.getElementById("arid_WIN_0_536870980").value.trim(); 
var sicMailProv = "SIC_SDX_SDWAN@telekom.com";
var cidfromPOP = localStorage.getItem('cid');

var ttSub = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 3);
console.log("cbi0");

	var newElementProv = document.createElement("div");
		newElementProv.id = "provRep";
		newElementProv.style.position = "absolute";
		newElementProv.style.zIndex = "99998";
		newElementProv.style.top = "30px";
		newElementProv.style.left = "757px";
		newElementProv.style.width = "40px";
		newElementProv.style.height = "20px";
        newElementProv.innerHTML = "<button id='providerReport' type='button' title='Provider Report'>Report</button>";

	   //console.log("cbi1");
	   setTimeout(executeCBI, 7000);
		//console.log("cbi2");
		function executeCBI() {
			//console.log("cbi3");
			ttSub = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 3);
			//console.log(ttSub);
			if (ttSub == "Sub") {
				//console.log("cbi4");
				document.getElementById('FormContainer').appendChild(newElementProv);

				document.getElementById("providerReport").addEventListener("click", function() {
					
					//arid_WIN_0_536870978
					const element = document.getElementById('WIN_0_536870529');
					element.click();
					
					setTimeout(function() {
					    console.log("CID");
					
					cidfromPOP = localStorage.getItem('cid');
					bearCID = cidfromPOP;
					try {
					  document.getElementById("arid_WIN_0_536870978").value = bearCID.trim();
					}
					catch(err) {
						var element1 = document.getElementById('providerReport');
						cidfromPOP = localStorage.getItem('cid');
						bearCID = cidfromPOP;
						element1.click();
						document.getElementById("arid_WIN_0_536870978").value = bearCID.trim();
						bearCID = localStorage.getItem('cid'); 
					}
					
					}, 2000); 
					
					ttidFieldProv = document.getElementById("WIN_0_1").querySelector("textarea").value; // #arid_WIN_0_1 //*[@id="arid_WIN_0_1"] /html/body/div[1]/div[5]/div[6]/textarea
					beginFieldProv = document.getElementById("arid_WIN_0_536871242").value.trim();  
					customerName = document.getElementById("arid_WIN_0_536871994").value.trim(); 

					nameLcProv = document.getElementById("arid_WIN_0_536871015").value.trim(); 
					phoneLcProv = document.getElementById("arid_WIN_0_536871021").value.trim(); 
					mailLcProv = document.getElementById("arid_WIN_0_536871022").value.trim(); 
					
					zipLcProv = document.getElementById("arid_WIN_0_536871001").value.trim(); 
					cityLcProv = document.getElementById("arid_WIN_0_536871000").value.trim(); 
					straLcProv = document.getElementById("arid_WIN_0_536871002").value.trim(); 
					
					//bearCID = localStorage.getItem('cid'); 

					prov = document.getElementById("arid_WIN_0_536870980").value.trim(); 

					if (hotlineField != "TCS.DF.HU.OPS.L1.SDWAN.SDX"){
						sicMail = "FMB.FMB-TS-ITSH-SICEN2@telekom.com";
					}
					
					var urlMail = `mailto:${encodeURIComponent(prov)}?cc=${encodeURIComponent(sicMailProv)}&subject=Ticket opening request || wTTS TT: ${encodeURIComponent(ttidFieldProv)} || EndCustomer: ${encodeURIComponent(customerName)} || Location: ${encodeURIComponent(zipLcProv)} ${encodeURIComponent(cityLcProv)} ${encodeURIComponent(straLcProv)} &body=Dear Team,%0a%0aPlease raise a ticket for us for the following circuit: ${encodeURIComponent(bearCID)}%0a%0aOur monitoring system showing us that this line is completely down since ${encodeURIComponent(beginFieldProv)} MET%0a%0aIf you need any information from us for the ticket opening, please do not hesitate to contact us on the below represented availabilities.%0aPlease revert back to us with your ticket reference and your findings.%0a%0aOur ticket reference: ${encodeURIComponent(ttidFieldProv)}%0aCircuit ID: ${encodeURIComponent(bearCID)}%0aName: ${encodeURIComponent(nameLcProv)}%0aPhone: ${encodeURIComponent(phoneLcProv)}%0aE-mail: ${encodeURIComponent(mailLcProv)}%0a%0aOpening hours of the Customer site: No information yet. Pending on Customer. Normal business hours.%0aSite power conditions: No information yet. Pending on Customer. No power issue.%0aThank you very much for your cooperation.%0a%0a`;
					console.log("cbi2");
				   // console.log(urlMail);
				   setTimeout(function() {
					cidfromPOP = localStorage.getItem('cid');
					bearCID = cidfromPOP;
					window.open(urlMail, "_blank");
					}, 3000); 

				});
			}
		}
