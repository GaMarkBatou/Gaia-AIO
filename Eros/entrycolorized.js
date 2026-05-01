/* function entrycolorizer () {
	console.log("Function is running...");
	const targetDiv = document.querySelector('WIN_0_536871148');
  
  // Ensure the div exists before proceeding
  if (targetDiv) {
    // Find the table inside the div
    const table = targetDiv.querySelector('table');

    // Ensure the table exists
    if (table) {
      // Select all rows in the table
      const rows = table.querySelectorAll('tr'); // Only target rows inside this table

      rows.forEach(row => {
        const rowText = row.innerText; // Get the complete text inside the row

        // Check for specific keywords and apply different colors
        if (rowText.includes("Kundenstatus")) {
          row.style.backgroundColor = 'rgba(245, 39, 108, 0.2)'; // Highlight rows with "Kundenstatus" in yellow
        } else if (rowText.includes("Vorprüfung")) {
          row.style.backgroundColor = 'rgba(245, 73, 39, 0.2)'; // Highlight rows with "Vorprüfung" in lightblue
        }
      });
    }
  }
	
} */

/*
 function entrycolorizer() {
  console.log("Function is running...");
  
  // Select the table by ID from your HTML
  const table = document.querySelector('#T536871148');
  if (!table) {
    console.warn("Table not found");
    return;
  }
  
  // Select all rows except the header (assuming first tr is header)
  // Or, you can add a check for rows with 'th' element
  const rows = table.querySelectorAll('tbody tr');
  
  rows.forEach(row => {
    // Skip header rows if any have <th>
    if (row.querySelector('th')) return;
    
    // Get the 2nd <td> in each row
    const secondTdSpan = row.querySelector('td:nth-child(2) nobr span');
    if (secondTdSpan) {
      const text = secondTdSpan.innerText.trim();
      
      if (text.includes("Kundenstatus")) {
        row.style.backgroundColor = 'rgba(239, 71, 111, 0.7)';  // EF476F
      } else if (text.includes("Bearbeitungsvermerk")) {
        row.style.backgroundColor = 'rgba(255, 196, 61, 0.7)';   // FFC43D
      } else if (text.includes("update Servicestatus")) {
        row.style.backgroundColor = 'rgba(6, 214, 160, 0.7)';   // 06D6A0
      } else {
        // Reset background for other rows (optional) // F8FFE5 rgba(248, 255, 229, 0.5) - tojas // 1B9AAA rgba(27, 154, 170, 0.5) - kekes
        row.style.backgroundColor = '';
      }
    }
  });
} 



setInterval(entrycolorizer, 5000);
*/

//---------

(function() {
  // Create and inject styles for the toggle switch
  const style = document.createElement('style');
  style.innerHTML = `
    .toggle-container {
          display: flex;
    align-items: center;
    margin: 5px;
    left: 560px;
    top: 9px;
    z-index: 99999;
    padding: 5px;
	background-color: #ffffff1a;
    border-radius: 15px;
    }

    .toggle-label {
      margin-right: 3px;
      font-family: Arial, sans-serif;
    }

    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 31px;
		height: 16px;
	  z-index: 999999;
    }

    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: 0.4s;
      border-radius: 15px;
    }

    .slider:before {
        position: absolute;
    content: "";
    height: 14.5px;
    width: 15px;
    left: 1px;
    bottom: 0.5px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    }

    input:checked + .slider {
      background-color: #4CAF50;
    }

    input:checked + .slider:before {
      transform: translateX(14px);
    }
	
	input:checked + .toggle-container {
          display: flex;
    align-items: center;
    margin: 5px;
    left: 560px;
    top: 9px;
    z-index: 99999;
    padding: 5px;
	background-color: #f356ad;
    border-radius: 15px;
    color: aliceblue;
    }
	
  `;
  document.head.appendChild(style);

  // Create and inject the toggle switch container
  const toggleContainer = document.createElement('div');
  toggleContainer.classList.add('toggle-container');
  toggleContainer.innerHTML = `
    <span class="toggle-label">Colorize:</span>
    <label class="toggle-switch">
      <input type="checkbox" id="toggleSwitch">
      <span class="slider"></span>
    </label>
  `;
  document.body.prepend(toggleContainer); // Inject at the top of the page

  let intervalId;

  // Define the entrycolorizer function
  function entrycolorizer() {
    console.log("Function is running...");
    
    const table = document.querySelector('#T536871148');
    if (!table) {
      console.warn("Table not found");
      return;
    }
    
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
      if (row.querySelector('th')) return;
      
      const secondTdSpan = row.querySelector('td:nth-child(2) nobr span');
      if (secondTdSpan) {
        const text = secondTdSpan.innerText.trim();
        
        if (text.includes("Kundenstatus")) {
          row.style.backgroundColor = 'rgba(239, 71, 111, 0.7)';  // EF476F
        } else if (text.includes("Bearbeitungsvermerk")) {
          row.style.backgroundColor = 'rgba(255, 196, 61, 0.7)';   // FFC43D
        } else if (text.includes("update Servicestatus")) {
          row.style.backgroundColor = 'rgba(6, 214, 160, 0.7)';   // 06D6A0
        } else {
          row.style.backgroundColor = '';
        }
      }
    });
  }

  // Get reference to the toggle switch
  const toggleSwitch = document.getElementById('toggleSwitch');

  // Load the toggle state from storage
  chrome.storage.sync.get(['toggleState'], function(result) {
    if (result.toggleState) {
      toggleSwitch.checked = true;
      intervalId = setInterval(entrycolorizer, 5000); // Start the function when loading if it was saved as "on"
      console.log("Toggle switch is ON (loaded from storage).");
    } else {
      console.log("Toggle switch is OFF (loaded from storage).");
    }
  });

  // Add event listener to the toggle switch
  toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
      console.log("Starting the coloring function...");
      intervalId = setInterval(entrycolorizer, 5000); // Run every 5 seconds
      
      // Save the state in chrome.storage
      chrome.storage.sync.set({ toggleState: true }, function() {
        console.log("Toggle state saved as ON.");
      });
    } else {
      console.log("Stopping the coloring function...");
      clearInterval(intervalId);
      
      // Save the state in chrome.storage
      chrome.storage.sync.set({ toggleState: false }, function() {
        console.log("Toggle state saved as OFF.");
      });
    }
  });
})();

