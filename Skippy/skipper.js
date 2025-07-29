setTimeout(loadGrop, 1000);
		
	function loadGrop() {	

	let currentGroup = getParameterByName('grouppe');
	let inderGruppe = document.getElementById("arid_WIN_0_536870922");

	if (inderGruppe) {
		if (currentGroup) {
			inderGruppe.value = currentGroup; // Set the value if currentGroup is not null or empty
		} else {
			console.log("No group parameter found.");
		}
	} else {
		console.log("Element with ID 'arid_WIN_0_536870922' not found.");
	}
	
	simulateUserInteraction(document.getElementById("arid_WIN_0_536870922"));
	    
	runNotiRefress();

	}

function getParameterByName(name) {
	let url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
	let results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
 }

function findRowsContainingWord(tableId, word) {
  const table = document.getElementById(tableId);
  if (!table) {
    console.error(`Table with ID "${tableId}" not found.`);
    return [];
  }

  const regex = new RegExp(`\\b${word}\\b`, 'i');
  const rowsContainingWord = Array.from(table.rows).filter(row =>
    Array.from(row.cells).some(cell => regex.test(cell.textContent))
  ).map(row => Array.from(row.cells).map(cell => cell.textContent.trim()));

  return rowsContainingWord;
}

const notificationTypes = [
  { word: 'EVA-Alarms', title: 'EVA Alarm!' },
  { word: 'IMTC erzeugt', title: 'IMTC Alarm!' },
  { word: 'WEB erzeugt', title: 'WEB Alarm!' },
  { word: 'proaktiv erkannte Störung', title: '2nd LVL assigned an Unbekannt to us!' }
];

function runSearch(word, title) {
	console.time("SearchTime"); // Start timer
  const rows = findRowsContainingWord('T536870913', word);
  console.log(new Date().toLocaleTimeString(), `${title} Unbekannts:`, rows);
  console.timeEnd("SearchTime"); // End timer
 // console.log(new Date().toLocaleTimeString());

  notiTitle = title;

  if (rows.length > 1) {
    handleListNotification(rows);
  } else if (rows.length === 1) {
    handleSimpleNotification(rows[0]);
  }
}

function runSearchPrevs() {
  const allNoti = findRowsContainingWord('T536870913', ' ');
  const stillinNoti = getIntersection(allNoti, unbiPrev);
  unbiPrev = unbiList;
  notiTitle = "Still in the Noti!";

  if (stillinNoti.length > 1) {
    handleListNotification(stillinNoti);
  } else if (stillinNoti.length === 1) {
    handleSimpleNotification(stillinNoti[0]);
  }
}

function getIntersection(array1, array2) {
  return array1.filter(value => array2.includes(value));
}

function handleSimpleNotification(rowData) {
  const customMessage = `${rowData[2]} \n${rowData[5]} \n${rowData[3]}`;
  createSimpleNotification(notiTitle, customMessage, customMessage);
}

function handleListNotification(rows) {
  const listItems = rows.map(row => ({
    title: row[5],
    message: row[3]
  }));

  chrome.runtime.sendMessage({ action: 'createListNotification', items: listItems });
  notiSound();
}

let isRunning = false;

function runFunctionSequence() {
  if (isRunning) return; // Don't execute if the previous call hasn't finished
  isRunning = true;

  const currentFunction = notificationTypes[currentFunctionIndex];
  runSearch(currentFunction.word, currentFunction.title);
  currentFunctionIndex = (currentFunctionIndex + 1) % notificationTypes.length;

  isRunning = false; // Mark this function call as complete
}

function runNotiRefress() {
  const element = document.getElementById('WIN_0_536870910');
  if (element) {
    element.click();
    console.log(new Date().toLocaleTimeString(), "Noti refreshed");
	//console.log(new Date().toLocaleTimeString());

  }
}

function createSimpleNotification(number, customer, net) {
  chrome.runtime.sendMessage({ action: 'createNotification', number, customer: net });
  notiSoundSingle();
}

function notiSound() {
  new Audio('https://github.com/GaMarkBatou/Gaia-AIO/raw/refs/heads/main/Skippy/sound/notification.mp3').play();
}

function notiSoundSingle() {
  new Audio('https://github.com/GaMarkBatou/Gaia-AIO/raw/refs/heads/main/Skippy/sound/notification_single.mp3').play();
}

function windowRefres() {
	const inputElement = document.getElementById('arid_WIN_0_536870922');
	const currentGroup = inputElement.value;
	console.log(currentGroup);
	const url = `https://wtts.telekom.de/wtts/forms/ars-etts.telekom.de/Notificationuebersicht_neu/Web/?grouppe=${encodeURIComponent(currentGroup)}`;
    window.location.href = url;
}

let currentFunctionIndex = 0;
setInterval(runFunctionSequence, 4000);
setInterval(runNotiRefress, 20000);
//setTimeout(windowRefres, 40000);
setTimeout(windowRefres, 300000);


