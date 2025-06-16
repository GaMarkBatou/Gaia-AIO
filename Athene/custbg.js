/* const custbg = document.getElementById('eviewstart');
	custbg.style.setProperty('margin', '1px');
//	iddiv.style.setProperty('padding', '3px');

background-image: url("https://i.giphy.com/l3nWhI38IWDofyDrW.webp")!important;  */

/* chrome.storage.local.get(['optionbg'], function(result) {
  console.log('Value currently is ' + result.key);
});


custbg.style.setProperty('background-image', 'url("https://i.giphy.com/l3nWhI38IWDofyDrW.webp")'); */

const custbg = document.getElementById('FormContainer');

chrome.storage.local.get(['optionbg'], function(result) {
  // Correct access of the stored value
  const bgValue = result.optionbg;
  console.log('Value currently is ' + bgValue);

  // Use the correct reference and string concatenation
  custbg.style.setProperty('background-image', `url(${bgValue})`);
});




/* // Adat mentése
function saveString(key, value) {
  chrome.storage.local.set({ [key]: value }, function() {
    console.log('String has been saved.');
  });
}

// Adat visszatöltése
function getString(key, callback) {
  chrome.storage.local.get([key], function(result) {
    console.log('String has been retrieved:', result[key]);
    callback(result[key]);
  });
}

// Használat
saveString('myStringKey', 'Hello, World!');
getString('myStringKey', function(value) {
  console.log('Retrieved value:', value);
}); */
