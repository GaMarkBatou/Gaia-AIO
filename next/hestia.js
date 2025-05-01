// Function to dynamically load a JavaScript file
function loadScript(url) {
  const script = document.createElement('script');
  script.src = url;
  script.type = 'text/javascript';
  document.head.appendChild(script);
}
console.log("Hestia loaded.");
// Load preferences and execute functions based on user settings
const function1 = localStorage.getItem('function1') === 'true';
const function2 = localStorage.getItem('function2') === 'true';

var entryArtemis = 0;
var ticketArtemis = 0;
console.log(entryArtemis);
console.log(ticketArtemis);
console.log(function1);
console.log(function2);

if (function1) {
    //loadScript(chrome.runtime.getURL('function1.js'));
	entryArtemis = 1;
	console.log(entryArtemis);
	console.log(ticketArtemis);
}

if (function2) {
	//loadScript(chrome.runtime.getURL('function2.js'));
	ticketArtemis = 1;
	console.log(entryArtemis);
	console.log(ticketArtemis);
}