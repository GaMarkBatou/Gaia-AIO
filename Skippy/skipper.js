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

var notiTitle = "Alarm:";

//--------------EVA-----------------
function runSearchEVA() {
  const rowsWithEVA = findRowsContainingWord('T536870913', 'EVA-Alarms');
  //Kundenstatusmeldung, EVA-Alarms
  console.log('Rows containing indicator word:', rowsWithEVA);
	notiTitle = "EVA Alarm!";
  if (rowsWithEVA.length > 1) {
    handleListNotification(rowsWithEVA); // Call function for multiple notifications
  } else if (rowsWithEVA.length === 1) {
    handleSimpleNotification(rowsWithEVA[0]); // Call function for a single notification
  }
}

function runSearchIMTC() {
  const rowsWithEVA = findRowsContainingWord('T536870913', 'IMTC erzeugt');
  //Kundenstatusmeldung, EVA-Alarms
  console.log('Rows containing indicator word:', rowsWithEVA);
	notiTitle = "IMTC Alarm!";
  if (rowsWithEVA.length > 1) {
    handleListNotification(rowsWithEVA); // Call function for multiple notifications
  } else if (rowsWithEVA.length === 1) {
    handleSimpleNotification(rowsWithEVA[0]); // Call function for a single notification
  }
}

function runSearchWEB() {
  const rowsWithEVA = findRowsContainingWord('T536870913', 'WEB erzeugt');
  //Kundenstatusmeldung, EVA-Alarms
  console.log('Rows containing indicator word:', rowsWithEVA);
	notiTitle = "WEB Alarm!";
  if (rowsWithEVA.length > 1) {
    handleListNotification(rowsWithEVA); // Call function for multiple notifications
  } else if (rowsWithEVA.length === 1) {
    handleSimpleNotification(rowsWithEVA[0]); // Call function for a single notification
  }
}

function runSearch2nd() {
  const rowsWithEVA = findRowsContainingWord('T536870913', 'proaktiv erkannte Störung zugewiesen.');
  //Kundenstatusmeldung, EVA-Alarms
  console.log('Rows containing indicator word:', rowsWithEVA);
	notiTitle = "2nd LVL assigned a Unbekannt!";
  if (rowsWithEVA.length > 1) {
    handleListNotification(rowsWithEVA); // Call function for multiple notifications
  } else if (rowsWithEVA.length === 1) {
    handleSimpleNotification(rowsWithEVA[0]); // Call function for a single notification
  }
}

//proaktiv erkannte Störung zugewiesen.



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
	
	const element = document.getElementById('WIN_0_536870910');
	element.click();
	
  // Execute the current function
  functions[currentFunctionIndex]();

  // Update the index to the next function after 5 seconds
  setTimeout(() => {
    currentFunctionIndex = (currentFunctionIndex + 1) % functions.length;
  }, 3000); // 5-second delay before updating the index
  
}

// Run the search every 30 seconds (30000 milliseconds)
setInterval(runFunctionSequence, 3000);

function createSimpleNotification(number, customer, net) {
  chrome.runtime.sendMessage({ action: 'createNotification', number, customer: net });
  notiSound();

}

// Skippy/sound/notification.mp3
function notiSound() {
  const audio = new Audio(chrome.runtime.getURL('notification.mp3'));
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