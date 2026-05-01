document.addEventListener('DOMContentLoaded', () => {
  const textField = document.getElementById('textField');
  const saveButton = document.getElementById('saveButton');

  // Load the "names" (or larger content) data from Chrome local storage when the page loads
  chrome.storage.local.get(['names'], (result) => {
    if (result.names) {
      textField.value = result.names; // Populate text area with the stored value
    }
  });

  // Save the textarea content to Chrome local storage when the button is clicked
  saveButton.addEventListener('click', () => {
    const textToSave = textField.value;
    chrome.storage.local.set({ names: textToSave }, () => {
      console.log('Content saved to storage:', textToSave);
      alert('Names saved successfully!');
    });
  });
});
