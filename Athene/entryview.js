var newWievWindow = document.createElement("div");
	newWievWindow.id = "eviewer";
	newWievWindow.style.position = "absolute";
	newWievWindow.style.zIndex = "99999";
	newWievWindow.style.top = "30px";
	newWievWindow.style.left = "682px";
	newWievWindow.style.width = "25px";
	newWievWindow.style.height = "25px";
    newWievWindow.innerHTML = "<button id='eviewstart' type='button' title='Entry Viewer'>=></button>";

	newWievWindow.style.setProperty('height', '25px', 'important');
	newWievWindow.style.setProperty('width', '25px', 'important');
	
	//eviewstart
document.getElementById('WIN_0_536871792').appendChild(newWievWindow);	
	/* FormApp--FormContainer */
	const iddiv = document.getElementById('eviewstart');
	iddiv.style.setProperty('margin', '1px');
	iddiv.style.setProperty('padding', '3px');


document.getElementById("eviewstart").addEventListener("click", function() {
	const parentElement = document.getElementById('WIN_0_536871792'); // #WIN_0_536871792 > a
	const element = parentElement.querySelector('a');
	element.click();
	const contentWidth = window.innerWidth;
    const contentHeight = window.innerHeight;
	const popup536871792_0 = document.getElementById("popup536871792_0");
	popup536871792_0.style.setProperty('top', '70px', 'important');
    popup536871792_0.style.setProperty('left', '1193px', 'important');
	/* popup536871792_0.style.width=`calc(${contentWidth}px - 1194px)`;
	popup536871792_0.style.height=`calc(${contentHeight}px - 78px)`;  */ 
	setTimeout(function() {
    popup536871792_0.style.setProperty('width', `calc(${contentWidth}px - 1194px)`, 'important');
	popup536871792_0.style.setProperty('height', `calc(${contentHeight}px - 200px)`, 'important');
	}, 990);
	popup536871792_0.style.setProperty('width', `calc(${contentWidth}px - 1194px)`, 'important');
	popup536871792_0.style.setProperty('height', `calc(${contentHeight}px - 200px)`, 'important');
});