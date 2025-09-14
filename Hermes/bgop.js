var newElement = document.createElement("div");
		newElement.id = "wbgsearc";
		newElement.style.position = "absolute";
		newElement.style.zIndex = "99999";
		newElement.style.top = "30px";
		newElement.style.left = "797px";
		newElement.style.width = "30px";
		newElement.style.height = "20px";
        newElement.innerHTML = "<button id='wbgsearcb' type='button' title='Best Guide'>Wiki</button>";
	document.getElementById('FormContainer').appendChild(newElement);	
	/* FormApp--FormContainer */


document.getElementById("wbgsearcb").addEventListener("click", function() {
        var searchValuebg = document.getElementById("arid_WIN_0_536871994").value.trim(); 
		console.log(searchValuebg);
		var modifiedValue = searchValuebg.replace(/ /g, '+');
		console.log(modifiedValue);
        var urlbg = `https://wiki.telekom.de/dosearchsite.action?queryString=${encodeURIComponent(modifiedValue)}`;
		console.log(urlbg);
         window.open(urlbg, "_blank");
    });
	
	