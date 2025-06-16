var ttidField = document.getElementById("WIN_0_1").querySelector("textarea").value; // #arid_WIN_0_1 //*[@id="arid_WIN_0_1"] /html/body/div[1]/div[5]/div[6]/textarea
var customerName = document.getElementById("arid_WIN_0_536871994").value.trim();  
var hotlineField = document.getElementById("arid_WIN_0_536870951").value.trim(); 

var nameLc = document.getElementById("arid_WIN_0_536871015").value.trim(); 
// var phoneLc = document.getElementById("arid_WIN_0_536871021").value.trim(); 
var mailLc = document.getElementById("arid_WIN_0_536871022").value.trim();

var zipLc = document.getElementById("arid_WIN_0_536871001").value.trim(); 
var cityLc = document.getElementById("arid_WIN_0_536871000").value.trim(); 
var straLc = document.getElementById("arid_WIN_0_536871002").value.trim(); 

var notizKS = document.getElementById("arid_WIN_0_536871782").value.trim(); 



//var ttmain = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 4);

var lcmail1 = mailLc;
var lcmail2 = "";
var sicMail = "SIC_SDX_SDWAN@telekom.com";


//console.log("cbi0");

	var newElementLCM = document.createElement("div");
		newElementLCM.id = "lcMail";
		newElementLCM.style.position = "absolute";
		newElementLCM.style.zIndex = "99998";
		newElementLCM.style.top = "30px";
		newElementLCM.style.left = "1090px";
		newElementLCM.style.width = "50px";
		newElementLCM.style.height = "20px";
        newElementLCM.innerHTML = "<button id='lcMailButt' type='button' title='Blank Mail to LC'>Mail to LC</button>"; //✉


	
       // console.log("5 seconds have passed!");
	  // console.log("cbi1");
	   setTimeout(executeCBI, 1000);
		//console.log("cbi2");
		function executeCBI() {
			//console.log("cbi3");arid_WIN_0_536871498
			//console.log(ttMain);
				//console.log("cbi4");
				document.getElementById('FormContainer').appendChild(newElementLCM);

				document.getElementById("lcMailButt").addEventListener("click", function() {
					
					ttidField = document.getElementById("WIN_0_1").querySelector("textarea").value;// #arid_WIN_0_1 //*[@id="arid_WIN_0_1"] /html/body/div[1]/div[5]/div[6]/textarea
					customerName = document.getElementById("arid_WIN_0_536871994").value.trim();  
					hotlineField = document.getElementById("arid_WIN_0_536870951").value.trim(); 
					
					nameLc = document.getElementById("arid_WIN_0_536871015").value.trim(); 
					mailLc = document.getElementById("arid_WIN_0_536871022").value.trim();
					lcmail1 = mailLc;

					zipLc = document.getElementById("arid_WIN_0_536871001").value.trim(); 
					cityLc = document.getElementById("arid_WIN_0_536871000").value.trim(); 
					straLc = document.getElementById("arid_WIN_0_536871002").value.trim(); 
					
					notizKS = document.getElementById("arid_WIN_0_536871782").value.trim(); 


					if (hotlineField != "TCS.DF.HU.OPS.L1.SDWAN.SDX"){
						sicMail = "FMB.FMB-TS-ITSH-SICEN2@telekom.com";
					}
					
					var urlMail = `mailto:${encodeURIComponent(lcmail1)};${encodeURIComponent(lcmail2)}?cc=${encodeURIComponent(sicMail)}&subject=Assistance needed || End Customer: ${encodeURIComponent(customerName)}  || Location: ${encodeURIComponent(zipLc)} ${encodeURIComponent(cityLc)} ${encodeURIComponent(straLc)} || wTTs TT: ${encodeURIComponent(ttidField)} &body=Dear ${encodeURIComponent(nameLc)}, %0a${encodeURIComponent(notizKS)}%0a%0a`;
					//console.log("cbi2");
				   // console.log(urlMail);
					window.open(urlMail, "_blank");
				});
			
		}
