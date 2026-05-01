const searchBar = document.getElementById('search-bar');
const bgUploadInput = document.getElementById('bg-upload');
const setBgButton = document.getElementById('set-bg');

// Perform a Google search or navigate to typed URL on "Enter"
searchBar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const query = searchBar.value;
    if (query.startsWith('http') || query.includes('.')) {
      window.location.href = query; // URL
    } else {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`; // Google Search
    }
  }
});

// Allow users to upload a custom background
/* setBgButton.addEventListener('click', () => {
  const file = bgUploadInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      document.querySelector('.background-layer').style.backgroundImage = `url('${imageDataUrl}')`;
      localStorage.setItem('customBackground', imageDataUrl); // Save the background
    };
    reader.readAsDataURL(file);
  } else {
    alert('Please select an image file.');
  }
}); */ //------------ original

// Get references to the elements
//const setBgButton = document.getElementById('set-bg');
//const bgUploadInput = document.getElementById('bg-upload');

// Add click event listener to the button
setBgButton.addEventListener('click', () => {
  // Programmatically trigger the file input dialog
  bgUploadInput.click();
});

// Add change event listener to the hidden file input
bgUploadInput.addEventListener('change', () => {
  const file = bgUploadInput.files[0]; // Get the selected file
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      // Set the background image to the target element
      document.querySelector('.background-layer').style.backgroundImage = `url('${imageDataUrl}')`;
      // Save the selected background to localStorage
      localStorage.setItem('customBackground', imageDataUrl);
    };
    reader.readAsDataURL(file); // Read the file as a data URL
  } else {
    alert('Please select an image file.');
  }
});



// Load the saved background on page load
window.onload = () => {
  const savedBg = localStorage.getItem('customBackground');
  if (savedBg) {
    document.querySelector('.background-layer').style.backgroundImage = `url('${savedBg}')`;
  }
};

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

