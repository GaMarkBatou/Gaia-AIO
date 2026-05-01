var agentlog;

var tesztelek = "Elek Teszt 123";

chrome.storage.local.set({ agentlog }, function () {
	//console.log("agentlog saved to chrome.storage.local");
});
//window.agentlog = {};
// Function to extract the table data
function extractTableData() {
    //console.log("Searching for the table container...");

    // Use the shorter XPath to locate the target div
    const tableContainer = document.evaluate(
        '/html/body/app-root/app-preview/div/div/mat-sidenav-container/mat-sidenav-content/div/app-dashboard-designer/div/div[2]/div/ngx-gridster/div/ngx-gridster-item[6]/div/div[2]/app-visualization-grid-wrapper/div/app-visualization-grid-view/div/ag-grid-angular/div/div[2]/div[2]',
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue;

    if (tableContainer) {
        console.log("Table container found!");

        // Find rows within the container
        const rows = [...tableContainer.querySelectorAll('div[role="row"]')];

        if (rows.length === 0) {
            console.log("No rows found in the table!");
            return;
        }

        // Extract data from each row
        const tableData = rows.map((row) => {
            const cells = [...row.querySelectorAll('div[role="gridcell"]')];
            return cells.map((cell) => cell.innerText.trim()); // Clean up cell text
        });

        console.log("Extracted Table Data:", tableData);
		agentlog = tableData;
		chrome.storage.local.set({ agentlog }, function () {
			console.log("agentlog saved to chrome.storage.local");
		});
         //Send the data to the background script or process it further
        chrome.runtime.sendMessage({ tableData: tableData });
    } else {
        console.log("Table container not found. Retrying...");
    }
}

// Run the extractTableData function every 5 seconds
setInterval(extractTableData, 3000);
