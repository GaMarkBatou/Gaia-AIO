document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the "Search" button
    document.getElementById("searchTaskBT").addEventListener("click", function() {
        const searchValue = document.getElementById("searchExtern").value.trim(); 
        const url = `https://wtts.telekom.de/wtts/forms/ars-etts/MCC%3ATAS%3ATAJ%3ATask_Join/Web/?tasktt=${encodeURIComponent(searchValue)}`;
        chrome.tabs.create({ url });
    });
	
	//https://wtts.telekom.de/wtts/forms/ars-etts/MCC%3ATAS%3ATAJ%3ATask_Join/Web/

});
//localStorage.setItem('cid', elementContent);