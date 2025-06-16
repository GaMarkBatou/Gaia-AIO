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

    function runSearch() {
      // Find all rows in the table containing the word "EVA"
      const rowsWithEVA = findRowsContainingWord('T536870913', 'Kundenstatusmeldung');
	  //let i = 0;
	  // Kundenstatusmeldung
		
		
      // Log the array of rows to the console
      //console.log('Rows containing indicator world:', rowsWithEVA);
	
		for (let i = 0; i < rowsWithEVA.length; i++) {
		  // Extract specific columns: 3rd, 4th, and 6th
		  const third = rowsWithEVA[i][2];  
		  const fourth = rowsWithEVA[i][3]; 
		  const sixth = rowsWithEVA[i][5];  
		  
		  console.log('Notifying for row:', {
			sixth: sixth,
			fourth: fourth,
			third: third
		  });

		  createSimpleNotification(sixth, fourth, third);
		}
		
    }

    // Run the search every 5 seconds (5000 milliseconds)
    setInterval(runSearch, 30000);

// Kundenstatusmeldung

function createSimpleNotification(number, customer, net) {
  chrome.runtime.sendMessage({ action: 'createNotification', number, customer, net });
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