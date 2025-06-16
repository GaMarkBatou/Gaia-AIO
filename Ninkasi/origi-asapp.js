
var kozernCustomer = document.getElementById("arid_WIN_0_536871994").value.trim(); 
var ttidTicket = document.getElementById("arid_WIN_0_1").value.trim(); 
var ppzipLc = document.getElementById("arid_WIN_0_536871001").value.trim(); 
var ppcityLc = document.getElementById("arid_WIN_0_536871000").value.trim(); 
var ppstraLc = document.getElementById("arid_WIN_0_536871002").value.trim(); 
var ppbesch = document.getElementById("arid_WIN_0_536870990").value.trim(); 
var ppnameLc = document.getElementById("arid_WIN_0_536871015").value.trim(); 
var ppphoneLc = document.getElementById("arid_WIN_0_536871021").value.trim(); 
var ppmailLc = document.getElementById("arid_WIN_0_536871022").value.trim();
var ppwichTung = document.getElementById("arid_WIN_0_536871225").value.trim(); 

var ttKlasseA = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 3);
	var newAsahiPP = document.createElement("div");
		newAsahiPP.id = "asamail";
		newAsahiPP.style.position = "absolute";
		newAsahiPP.style.zIndex = "99998";
		newAsahiPP.style.top = "30px";
		newAsahiPP.style.left = "1140px";
		newAsahiPP.style.width = "30px";
		newAsahiPP.style.height = "30px";
        newAsahiPP.innerHTML = "<button id='asahiPP' type='button' title='Asahi Mail'>PP</button>";
		
var Mail1 = "support@parkplacetech.com;David-Csaba.Berkes@telekom.com";
var Mail2 = "SIC_SDX_SDWAN@telekom.com";

    setTimeout(executeAfterDelay, 8000);
	
    function executeAfterDelay() {

		kozernCustomer = document.getElementById("arid_WIN_0_536871994").value.trim(); 
		ttidTicket = document.getElementById("arid_WIN_0_1").value.trim(); 

		ttKlasseA = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 3);
		

        if (kozernCustomer == "Asahi Europe Ltd" && ttKlasseA == "Sub") {

			document.getElementById('FormContainer').appendChild(newAsahiPP);

            document.getElementById("asahiPP").addEventListener("click", function() {
				
				ttidTicket = document.getElementById("arid_WIN_0_1").value.trim(); 
				ppzipLc = document.getElementById("arid_WIN_0_536871001").value.trim(); 
				ppcityLc = document.getElementById("arid_WIN_0_536871000").value.trim(); 
				ppstraLc = document.getElementById("arid_WIN_0_536871002").value.trim(); 
				ppbesch = document.getElementById("arid_WIN_0_536870990").value.trim(); 
				ppnameLc = document.getElementById("arid_WIN_0_536871015").value.trim(); 
				ppphoneLc = document.getElementById("arid_WIN_0_536871021").value.trim(); 
				ppmailLc = document.getElementById("arid_WIN_0_536871022").value.trim();
				ppwichTung = document.getElementById("arid_WIN_0_536871225").value.trim(); 

				
                var urlMailpp = `mailto:support@parkplacetech.com;David-Csaba.Berkes@telekom.com?cc=SIC_SDX_SDWAN@telekom.com&subject=Asahi Europe Ltd (Managed service) || wTTS TT: ${encodeURIComponent(ttidTicket)} || Location: ${encodeURIComponent(ppzipLc)} ${encodeURIComponent(ppcityLc)} ${encodeURIComponent(ppstraLc)} || ${encodeURIComponent(ppbesch)} &body=Dear Team, %0a Please raise a ticket for us, please see the details:%0a%0a1.	Full company name and end user, if applicable. - Asahi Europe Ltd %0a2.	Full site address (street name and number, city, Postal Code, and any floor, suite, or building number, if applicable). - ${encodeURIComponent(ppzipLc)} ${encodeURIComponent(ppcityLc)} ${encodeURIComponent(ppstraLc)}%0a3.	Are the site address and shipping address the same? If not, please provide shipping address. - Same%0a4.	Site contact details (name, phone number, and email). - ${encodeURIComponent(ppnameLc)} ${encodeURIComponent(ppphoneLc)} ${encodeURIComponent(ppmailLc)} %0a5.	For your service request, would you prefer an engineer on site, parts only, or remote assistance only? - Depending on the investigation results from your technical team. %0a6.	For service delivery expectations, would you prefer service today or is next business day suitable? (Please include hours of operation.) - As soon as possible %0a7.	Serial number or Service Tag of the device. -  %0a8.	Make and model of the equipment. -  %0a9.	Short description of issue. (Feel free to add any affected part numbers, images or screenshots in the email) - ${encodeURIComponent(ppwichTung)} %0a10.	What is the impact to your business or customers?-  %0a`;

                window.open(urlMailpp, "_blank");
				// window.open('mailto:test@example.com', '_blank');
				window.open(urlMailpp, "_blank");
            });
        }
    }
	
	
  	   var urlMailpp = `mailto:support@parkplacetech.com;David-Csaba.Berkes@telekom.com?cc=SIC_SDX_SDWAN@telekom.com&subject=Asahi Europe Ltd (Managed service) || wTTS TT: ${encodeURIComponent(ttidTicket)} || Location: ${encodeURIComponent(ppzipLc)} ${encodeURIComponent(ppcityLc)} ${encodeURIComponent(ppstraLc)} || ${encodeURIComponent(ppbesch)} &body=Dear Team, %0a Please raise a ticket for us, please see the details:%0a%0a%0a1.	Full company name and end user, if applicable. - Asahi Europe Ltd %0a2.	Full site address (street name and number, city, Postal Code, and any floor, suite, or building number, if applicable). - ${encodeURIComponent(ppzipLc)} ${encodeURIComponent(ppcityLc)} ${encodeURIComponent(ppstraLc)}%0a3.	Are the site address and shipping address the same? If not, please provide shipping address. - ${encodeURIComponent(ppzipLc)} ${encodeURIComponent(ppcityLc)} ${encodeURIComponent(ppstraLc)}%0a4.	Site contact details (name, phone number, and email). - ${encodeURIComponent(ppnameLc)} ${encodeURIComponent(ppphoneLc)} ${encodeURIComponent(ppmailLc)}%0a5.	For your service request, would you prefer an engineer on site, parts only, or remote assistance only? - Depending on the investigation results from your technical team%0a6.	For service delivery expectations, would you prefer service today or is next business day suitable? (Please include hours of operation.) - As soon as possible%0a7.	Serial number or Service Tag of the device. -  %0a8.	Make and model of the equipment. -  %0a9.	Short description of issue. (Feel free to add any affected part numbers, images or screenshots in the email) - ${encodeURIComponent(ppwichTung)} %0a10.	What is the impact to your business or customers? -  %0a%0aPlease revert back to us with your ticket reference and after performing the initial checking at your part.%0aIf you need any information from us, for the ticket opening – please do not hesitate to contact us on the below represented availabilities:%0a%0a•	Our team’s hotline number: +49 69 973 179 9108%0a•	Our team’s e-mail address: SIC_SDX_SDWAN@telekom.com%0a%0aThank you very much for your cooperation.%0a%0a`; 
 
