// Save preferences when the user clicks the "Save" button
document.getElementById('save').addEventListener('click', () => {
  const function1 = document.getElementById('function1').checked;
  const function2 = document.getElementById('function2').checked;
  localStorage.setItem('function1', function1);
  localStorage.setItem('function2', function2);
  alert('Preferences saved!');
  //console.log(entryArtemis);
  //console.log(ticketArtemis);
});

// Load preferences when the options page is opened
document.addEventListener('DOMContentLoaded', () => {
  const function1 = localStorage.getItem('function1') === 'true';
  const function2 = localStorage.getItem('function2') === 'true';
  document.getElementById('function1').checked = function1;
  document.getElementById('function2').checked = function2;
  //console.log(entryArtemis);
  //console.log(ticketArtemis);
});