document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("openLinkButton"); // Button ID

    if (!button) {
        console.error("Button with ID 'openLinkButton' not found.");
        return;
    }

    button.addEventListener("click", function () {
        // Retrieve the stored value from Chrome's local storage
        chrome.storage.local.get(["panicTT"], function (result) {
            if (result.panicTT) {
                // Construct the URL with the retrieved value
                const baseUrl = "https://wtts.telekom.de/wtts/forms/ars-etts.telekom.de/eTTS:Main/Web/?eid=";
                const fullUrl = baseUrl + encodeURIComponent(result.panicTT);

                // Open the link in a new browser tab
                window.open(fullUrl, "_blank");
            } else {
                console.log("No value found in storage. Make sure 'panicTT' is stored.");
            }
        });
    });
});
