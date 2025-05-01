
var kozernCustomer = document.getElementById("arid_WIN_0_536871994").value.trim(); 
var kritiKritic = document.getElementById("arid_WIN_0_536872215").value.trim(); 
var wichTung = document.getElementById("arid_WIN_0_536871225").value.trim(); 
var ttidTicket = document.getElementById("arid_WIN_0_1").value.trim(); 
var ttKlasseA = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 4);
	var newElementA = document.createElement("div");
		newElementA.id = "asamail";
		newElementA.style.position = "absolute";
		newElementA.style.zIndex = "99998";
		newElementA.style.top = "30px";
		newElementA.style.left = "775px";
		newElementA.style.width = "50px";
		newElementA.style.height = "50px";
        newElementA.innerHTML = "<button id='asamailButton' type='button' title='Asahi Mail'>AM</button>";


    // Set a timeout to wait for 5 seconds (5000 milliseconds)
    setTimeout(executeAfterDelay, 10000);
	
    function executeAfterDelay() {
       // console.log("5 seconds have passed!");
	   console.log("a-mail");
		kozernCustomer = document.getElementById("arid_WIN_0_536871994").value.trim(); 
		kritiKritic = document.getElementById("arid_WIN_0_536872215").value.trim(); 
		wichTung = document.getElementById("arid_WIN_0_536871225").value.trim(); 
		ttidTicket = document.getElementById("arid_WIN_0_1").value.trim(); 
		ttKlasseA = document.getElementById("arid_WIN_0_536871498").value.trim().substring(0, 4);

        if (kozernCustomer == "Asahi Europe Ltd" && (kritiKritic == "Medium" || kritiKritic == "Low") && (wichTung == "1" || wichTung == "2")&& ttKlasseA == "Main") {
            //console.log("asahi-if-ok");
            document.getElementById('FormContainer').appendChild(newElementA);

            document.getElementById("asamailButton").addEventListener("click", function() {
                var urlMail = `mailto:Szilvia.Horak-Salamon@telekom.com;Mate.Nagy@telekom.com?cc=SIC_SDX_SDWAN@telekom.com&subject=Reactive incident (P${encodeURIComponent(wichTung)}) || wTTS TT: ${encodeURIComponent(ttidTicket)} || Customer: Asahi Europe Ltd&body=Dear Management, %0a
Please be advised that we received a reactive Wichtung ${encodeURIComponent(wichTung)} incident from the customer: ${encodeURIComponent(ttidTicket)}`;

               // console.log(urlMail);
                window.open(urlMail, "_blank");
            });
        }
    }
