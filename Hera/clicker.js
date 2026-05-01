function clickElementById(id) {
  const interval = setInterval(() => {
    const element = document.getElementById(id); // Find the element by ID
    
    if (element) {
      element.click(); // Trigger the click event
      clearInterval(interval); // Stop further checks
      console.log(`Element with ID "${id}" clicked.`);
    }
  }, 100); // Check every 100ms
}

// Example usage
clickElementById("datetimetable");
clickElementById("datetimetable");
