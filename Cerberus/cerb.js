// Function to reload the current webpage
function reloadPage() {
    window.location.reload();
}

function logCurrentTime() {
    const now = new Date();
    console.log(now.toLocaleTimeString());
}

function clickSmt() {
	const element = document.getElementById('WIN_0_536870905');
	element.click();
}

function clcikList() {
	const element = document.getElementById('WIN_0_536870907');
	element.click();
}

console.log("Cerberus Activated");
logCurrentTime();

// 5 minutes (300000 milliseconds)
setInterval(reloadPage, 300000);

setInterval(clickSmt, 150000);

setInterval(clcikList, 299900);




