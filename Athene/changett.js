document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the "Search" button
    document.getElementById("searchChangeBT").addEventListener("click", function() {
        const searchValue = document.getElementById("searchExtern").value.trim(); 
        const url = `https://wtts.telekom.de/wtts/forms/ars-etts/MCA%3ACHJ%3AChange_Join/Web/?changett=${encodeURIComponent(searchValue)}`;
        chrome.tabs.create({ url });
    });
	// https://wtts.telekom.de/wtts/forms/ars-etts/MCA%3ACHJ%3AChange_Join/Web/

});
//localStorage.setItem('cid', elementContent);