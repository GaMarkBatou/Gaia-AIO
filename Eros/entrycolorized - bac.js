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
