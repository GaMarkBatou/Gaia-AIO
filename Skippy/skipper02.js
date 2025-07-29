function findRowsContainingWord(tableId, word) {
  // Get the table element by ID
  const table = document.getElementById(tableId);
  if (!table) {
    console.error(`Table with ID "${tableId}" not found.`);
    return [];
  }

  // Collect all rows that contain the specified word
  const rowsContainingWord = [];
  const regex = new RegExp(`\\b${word}\\b`, 'i'); // Case-insensitive match

  // Iterate over all rows
  for (let row of table.rows) {
    let rowData = [];
    let containsWord = false;

    // Check each cell in the row
    for (let cell of row.cells) {
      rowData.push(cell.textContent.trim());
      if (regex.test(cell.textContent)) {
        containsWord = true;
      }
    }
    // If any cell in the row contains the word, add the row data to the result
    if (containsWord) {
      rowsContainingWord.push(rowData);
    }
  }

  return rowsContainingWord;
}

var unbiPrev;
var unbiList;
var notiTitle = "Alarm:";

//--------------EVA-----------------
function runSearchEVA() {
  const rowsWithEVAa = findRowsContainingWord('T536870913', 'EVA-Alarms');
  //Kundenstatusmeldung, EVA-Alarms
  console.log('EVA-Alarms Unbekannts:', rowsWithEVAa);
	notiTitle = "EVA Alarm!";
	//unbiList.push(rowsWithEVAa);
  if (rowsWithEVAa.length > 1) {
    handleListNotification(rowsWithEVAa); // Call function for multiple notifications
  } else if (rowsWithEVAa.length === 1) {
    handleSimpleNotification(rowsWithEVAa[0]); // Call function for a single notification
  }
}

function runSearchIMTC() {
  const rowsWithIMTC = findRowsContainingWord('T536870913', 'IMTC erzeugt');
  //Kundenstatusmeldung, IMTC erzeugt
  console.log('IMTC Unbekannts', rowsWithIMTC);
	//unbiList.push(rowsWithIMTC);
	notiTitle = "IMTC Alarm!";
  if (rowsWithIMTC.length > 1) {
    handleListNotification(rowsWithIMTC); // Call function for multiple notifications
  } else if (rowsWithIMTC.length === 1) {
    handleSimpleNotification(rowsWithIMTC[0]); // Call function for a single notification
  }
}

function runSearchWEB() {
  const rowsWithWEB = findRowsContainingWord('T536870913', 'WEB erzeugt');
  //Kundenstatusmeldung, WEB erzeugt
  console.log('WEB Unbekannts', rowsWithWEB);
	//unbiList.push(rowsWithWEB);
	notiTitle = "WEB Alarm!";
  if (rowsWithWEB.length > 1) {
    handleListNotification(rowsWithWEB); // Call function for multiple notifications
  } else if (rowsWithWEB.length === 1) {
    handleSimpleNotification(rowsWithWEB[0]); // Call function for a single notification
  }
}

function runSearch2nd() {
  const rowsWith2nd = findRowsContainingWord('T536870913', 'proaktiv erkannte Störung'); // Der Hotlinegruppe TCS.DF.HU.OPS.L1.SDWAN.SDX wurde eine proaktiv erkannte Störung zugewiesen.
  //Kundenstatusmeldung, proaktiv erkannte Störung zugewiesen.
  console.log('2nd LVL Unbekannts', rowsWith2nd);
	//unbiList.push(rowsWith2nd);
	notiTitle = "2nd LVL assigned an Unbekannt to us!";
  if (rowsWith2nd.length > 1) {
    handleListNotification(rowsWith2nd); // Call function for multiple notifications
  } else if (rowsWith2nd.length === 1) {
    handleSimpleNotification(rowsWith2nd[0]); // Call function for a single notification
  }
}

//proaktiv erkannte Störung zugewiesen.

function runSearchPrevs() {
	const allNoti = findRowsContainingWord('T536870913', ' ');
	var stillinNoti = getIntersection(allNoti, unbiPrev); // ide meg kell hogy csak a jegyszam alapjan nezze meg.
	unbiPrev = unbiList;
	notiTitle = "Still in the Noti!";
	if (stillinNoti.length > 1) {
    handleListNotification(stillinNoti); // Call function for multiple notifications
  } else if (stillinNoti.length === 1) {
    handleSimpleNotification(stillinNoti[0]); // Call function for a single notification
  }
}

function getIntersection(array1, array2) {
    return array1.filter(value => array2.includes(value));
}


// Function to handle a simple notification
function handleSimpleNotification(rowData) {
  const third = rowData[2];
  const fourth = rowData[3];
  const sixth = rowData[5];

  const customMessage = `${third} \n${sixth} \n${fourth}`;  // Custom merged message
  createSimpleNotification(notiTitle, customMessage, customMessage);
}

// Function to handle a list notification
function handleListNotification(rows) {
  const listItems = rows.map(row => {
    return {
      title: row[5], // Third column
      message: `${row[3]}` // Merged message with fourth and sixth columns
    };
  });

  // Send list notification message
  chrome.runtime.sendMessage({ action: 'createListNotification', items: listItems });
    //notiSound();
	notiSound();
}
//---------------------------------


const functions = [runSearchEVA, runSearchIMTC, runSearchWEB, runSearch2nd];

let currentFunctionIndex = 0;

function runFunctionSequence() {
	
  // Execute the current function
  functions[currentFunctionIndex]();

  // Update the index to the next function after 5 seconds
  setTimeout(() => {
    currentFunctionIndex = (currentFunctionIndex + 1) % functions.length;
  }, 3000); // 5-second delay before updating the index
  
}

function runNotiRefress() {
    const element = document.getElementById('WIN_0_536870910');
	element.click();
	console.log("Noti refressed");
}

// Set the interval to 5000 milliseconds (5 seconds)
setInterval(runNotiRefress, 20000);

// Run the search every 30 seconds (30000 milliseconds)
setInterval(runFunctionSequence, 4000);

function createSimpleNotification(number, customer, net) {
  chrome.runtime.sendMessage({ action: 'createNotification', number, customer: net });
  notiSoundSingle();

}

// Skippy/sound/notification.mp3
function notiSound() {
  const audioUrl = 'https://github.com/GaMarkBatou/Gaia-AIO/raw/refs/heads/main/Skippy/sound/notification.mp3';
  const audio = new Audio(audioUrl);
  audio.play();
}

function notiSoundSingle() {
  const audioUrl = 'https://github.com/GaMarkBatou/Gaia-AIO/raw/refs/heads/main/Skippy/sound/notification_single.mp3';
  const audio = new Audio(audioUrl);
  audio.play();
}


	
	
	
/* function createSimpleNotification(number, customer, net) {
  const options = {
    type: "basic",
    iconUrl: chrome.runtime.getURL("images/icon-64.png"),  
    title: number,
    message: customer
  };

  chrome.notifications.create('', options, function(notificationId) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log("Notification created with ID:", notificationId);
	  
	        // Play sound
      const audio = new Audio(chrome.runtime.getURL("sound/notification.mp3"));
      audio.play().catch(error => {
        console.error("Error playing sound:", error);
      });
	  
    }
  });
} */