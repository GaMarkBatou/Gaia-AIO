var ttidField = document.getElementById("WIN_0_1").querySelector("textarea").value; // #arid_WIN_0_1 //*[@id="arid_WIN_0_1"] /html/body/div[1]/div[5]/div[6]/textarea
var customerName = document.getElementById("arid_WIN_0_536871994").value.trim();  
var hotlineField = document.getElementById("arid_WIN_0_536870951").value.trim(); 

/* var nameLc = document.getElementById("arid_WIN_0_536871015").value.trim(); 
var phoneLc = document.getElementById("arid_WIN_0_536871021").value.trim(); 
var mailLc = document.getElementById("arid_WIN_0_536871022").value.trim(); */ 

var zipLc = document.getElementById("arid_WIN_0_536871001").value.trim(); 
var cityLc = document.getElementById("arid_WIN_0_536871000").value.trim(); 
var straLc = document.getElementById("arid_WIN_0_536871002").value.trim(); 

var notizKS = document.getElementById("arid_WIN_0_536871782").value.trim(); 

//var ttmain = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 4);

var bmail1 = "";
var bmail2 = "";
var sicMail = "SIC_SDX_SDWAN@telekom.com";


//console.log("cbi0");

	var newElementMail = document.createElement("div");
		newElementMail.id = "blankMail";
		newElementMail.style.position = "absolute";
		newElementMail.style.zIndex = "99998";
		newElementMail.style.top = "30px";
		newElementMail.style.left = "1065px";
		newElementMail.style.width = "30px";
		newElementMail.style.height = "20px";
        newElementMail.innerHTML = "<button id='bMailButt' type='button' title='Blank Mail'>Mail</button>"; //✉


	
       // console.log("5 seconds have passed!");
	  // console.log("cbi1");
	   setTimeout(executeCBI, 1000);
		//console.log("cbi2");
		function executeCBI() {
			//console.log("cbi3");arid_WIN_0_536871498
			//console.log(ttMain);
				//console.log("cbi4");
				document.getElementById('FormContainer').appendChild(newElementMail);

				document.getElementById("bMailButt").addEventListener("click", function() {
					
					ttidField = document.getElementById("WIN_0_1").querySelector("textarea").value;// #arid_WIN_0_1 //*[@id="arid_WIN_0_1"] /html/body/div[1]/div[5]/div[6]/textarea
					customerName = document.getElementById("arid_WIN_0_536871994").value.trim();  
					hotlineField = document.getElementById("arid_WIN_0_536870951").value.trim(); 

					zipLc = document.getElementById("arid_WIN_0_536871001").value.trim(); 
					cityLc = document.getElementById("arid_WIN_0_536871000").value.trim(); 
					straLc = document.getElementById("arid_WIN_0_536871002").value.trim(); 
					
					notizKS = document.getElementById("arid_WIN_0_536871782").value.trim(); 

					if (hotlineField != "TCS.DF.HU.OPS.L1.SDWAN.SDX"){
						sicMail = "FMB.FMB-TS-ITSH-SICEN2@telekom.com";
					}
					
					var urlMail = `mailto:${encodeURIComponent(bmail1)};${encodeURIComponent(bmail2)}?cc=${encodeURIComponent(sicMail)}&subject=Assistance needed || End Customer: ${encodeURIComponent(customerName)}  || Location: ${encodeURIComponent(zipLc)} ${encodeURIComponent(cityLc)} ${encodeURIComponent(straLc)} || wTTs TT: ${encodeURIComponent(ttidField)} &body=Dear Team, %0a${encodeURIComponent(notizKS)}%0a%0aThank you in advance.%0a%0a`;
					console.log("cbi2");
				   // console.log(urlMail);
					window.open(urlMail, "_blank");
				});
			
		}
