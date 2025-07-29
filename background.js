chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Received message:", message);

  if (message.action === 'createNotification') {
    const options = {
      type: "basic",
      iconUrl: chrome.runtime.getURL("images/icon-64.png"),
      title: message.number, 
      message: message.customer 
    };

    console.log("Creating notification with options:", options);

    chrome.notifications.create('', options, function(notificationId) {
      console.log("Notification created with ID:", notificationId);
      
      if (chrome.runtime.lastError) {
        console.error("Error creating notification:", chrome.runtime.lastError);
        return; // Exit or handle error
      }
      
    });
  } else if (message.action === 'createListNotification') {
    // Check if items are an array and not empty
    if (Array.isArray(message.items) && message.items.length > 0) {
      const options = {
        type: "list",
		iconUrl: chrome.runtime.getURL("images/icon-64.png"),
        title: "Multiple Unbekannts",
        message: "You have multiple notifications:",
        items: message.items.map(item => ({
          title: item.title, 
          message: item.message
        }))
      };

      chrome.notifications.create('', options, function(notificationId) {
        if (chrome.runtime.lastError) {
          console.error("Error creating list notification:", chrome.runtime.lastError);
        } else {
          console.log("List notification created with ID:", notificationId);
        }
      });
    } else {
      console.warn("Invalid items array for list notification:", message.items);
    }
  }
});


function keepAlive() {
	console.log("Keep on keeping on.");
}

// Set the interval to 5000 milliseconds (5 seconds)
setInterval(keepAlive, 5000);

/* chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'createNotification') {
    const options = {
      type: "basic",
      iconUrl: chrome.runtime.getURL("images/icon-64.png"),
      title: message.number,
      message: message.customer
    };

    chrome.notifications.create('', options, function(notificationId) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log("Notification created with ID:", notificationId);
        
        // Optionally play sound
        const audio = new Audio(chrome.runtime.getURL("Skippy/sound/notification.mp3"));
        audio.play().catch(error => {
          console.error("Error playing sound:", error);
        });
      }
    });
  }
});
 */