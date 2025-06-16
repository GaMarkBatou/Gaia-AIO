document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the "Search" button
    document.getElementById("searchExternBT").addEventListener("click", function() {
        const searchValue = document.getElementById("searchExtern").value.trim(); 
        const url = `https://wtts.telekom.de/wtts/forms/ars-etts.telekom.de/eTTS:UebersichtTicketkopplungen/Web/?externtt=${encodeURIComponent(searchValue)}`;
        chrome.tabs.create({ url });
    });
	
	document.getElementById("searchExtern").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const searchValue = document.getElementById("searchExtern").value.trim(); 
        const url = `https://wtts.telekom.de/wtts/forms/ars-etts.telekom.de/eTTS:UebersichtTicketkopplungen/Web/?externtt=${encodeURIComponent(searchValue)}`;
        chrome.tabs.create({ url });
    }
	});
});
//localStorage.setItem('cid', elementContent);