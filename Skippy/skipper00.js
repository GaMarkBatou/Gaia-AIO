// Assume unbiList and unbiPrev are initialized somewhere in the code
var unbiList = [];
var unbiPrev = [];

function runSearch(word, title) {
  const rows = findRowsContainingWord('T536870913', word);
  console.log(`${title} Unbekannts:`, rows);
  notiTitle = title;

  // Add rows to unbiList
  unbiList.push(...rows);

  if (rows.length > 1) {
    handleListNotification(rows);
  } else if (rows.length === 1) {
    handleSimpleNotification(rows[0]);
  }
}

function runSearchPrevs() {
  const allNoti = findRowsContainingWord('T536870913', ' ');
  
  // Get intersection based on the sixth column
  const stillinNoti = getIntersection(allNoti, unbiPrev);
  unbiPrev = unbiList.slice(); // Update unbiPrev with a copy of the current unbiList
  notiTitle = "Still in the Noti!";

  if (stillinNoti.length > 1) {
    handleListNotification(stillinNoti);
  } else if (stillinNoti.length === 1) {
    handleSimpleNotification(stillinNoti[0]);
  }
}

function getIntersection(array1, array2) {
  const array2Values = new Set(array2.map(row => row[5])); // Create a set of sixth column values from array2
  return array1.filter(row => array2Values.has(row[5]));  // Filter array1 based on the sixth column values
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

function runFunctionSequence() {
  const currentFunction = notificationTypes[currentFunctionIndex];
  runSearch(currentFunction.word, currentFunction.title);
  currentFunctionIndex = (currentFunctionIndex + 1) % notificationTypes.length;
}

function runNotiRefress() {
  const element = document.getElementById('WIN_0_536870910');
  if (element) {
    element.click();
    console.log("Noti refreshed");
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

let currentFunctionIndex = 0;
setInterval(runNotiRefress, 20000);
setInterval(runFunctionSequence, 4000);
