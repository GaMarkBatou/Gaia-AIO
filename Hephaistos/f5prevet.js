var f5idTicket = document.getElementById("arid_WIN_0_1").value.trim(); 

document.addEventListener('keydown', function(event) {
    if (event.key === 'F5' || event.keyCode === 116) {
        event.preventDefault();
		f5idTicket = document.getElementById("arid_WIN_0_1").value.trim(); 
        window.location.href = `https://wtts.telekom.de/wtts/forms/ars-etts.telekom.de/eTTS:Main/Web/?eid=${encodeURIComponent(f5idTicket)}`;
    }
});

//${encodeURIComponent(wichTung)