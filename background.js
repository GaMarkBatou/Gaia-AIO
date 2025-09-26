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
		iconUrl: chrome.runtime.getURL("images/alarm.png"),
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

// New listener specifically for 'timerEnded' messages
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'timerEnded') {
    const options = {
      type: "basic",
      iconUrl: chrome.runtime.getURL("images/time.png"),
      title: `Timer is over! ${message.timer}`,
      message: message.message || 'Timer ended!'
    };

    chrome.notifications.create('', options, (notificationId) => {
      if (chrome.runtime.lastError) {
        console.error("Error creating timerEnded notification:", chrome.runtime.lastError);
      } else {
        console.log("TimerEnded notification created with ID:", notificationId);
      }
    });

    // No response needed, but explicitly return false to keep channel open
    return false;
  }
  // For other messages, do nothing here, let existing listener handle
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
 
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openSidePanel") {
    openSidePanel();
	console.log("On it.");
  }
});

function openSidePanel() {
  if (chrome.sidePanel) {
  const sidePanelPath = chrome.runtime.getURL("sidepanel.html");
  console.log("Attempting to open the side panel with path:", sidePanelPath);

  chrome.sidePanel.setOptions({ enabled: false }) // Ensure we reset the side panel state
    .then(() => chrome.sidePanel.setOptions({
      path: sidePanelPath,
      enabled: true,
    }))
    .then(() => {
      console.log("Side Panel opened successfully!");
    })
    .catch((error) => {
      console.error("Error while toggling Side Panel:", error);
    });
} else {
  console.error("Side Panel API is not available.");
}
}

/*--- tab group ---*/

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

chrome.tabs.onCreated.addListener(async (newTab) => {
  if (!newTab.openerTabId) {
    // Skip tabs without a parent tab (manual new tabs)
    console.log("New tab has no openerTabId, skipping.");
    return;
  }

  // Delay to ensure tab state has settled
  await delay(3000);

  try {
    // Get the parent tab (the one that opened this new tab)
    const parentTab = await chrome.tabs.get(newTab.openerTabId);
    if (!parentTab) {
      console.error("Parent tab not found for openerTabId:", newTab.openerTabId);
      return;
    }

    console.log("Parent tab found:", parentTab);

	   // Check if the parent tab is pinned
    if (parentTab.pinned) {
      console.log("Parent tab is pinned. Skipping grouping logic.");
      return; // Skip processing if the parent tab is pinned
    }
	
	// eTTS%3AMain eTTS:Main



	
    // Ensure the parent tab is in a group (or create one if needed)
    let groupId = parentTab.groupId;
    if (groupId === -1) {
      console.log("Parent tab is not in a group. Creating a new group...");
      groupId = await chrome.tabs.group({ tabIds: [parentTab.id] });

      if (typeof groupId === "undefined" || groupId === -1) {
        console.error("Failed to create a group for the parent tab. Group ID:", groupId);
        return;
      }

      console.log("Created a new group with ID:", groupId);

      // Update the group (optional title and color)
      await chrome.tabGroups.update(groupId, { title: "TT Group", color: "pink" });
      console.log("Group updated with title and color. Group ID:", groupId);
    } else {
      console.log("Parent tab is already in group ID:", groupId);
    }

    // Add the new tab to the same group
    console.log("Adding new tab to group. Tab ID:", newTab.id, "Group ID:", groupId);
    await chrome.tabs.group({ tabIds: [newTab.id], groupId });
    console.log(`New tab ${newTab.id} successfully added to group ID: ${groupId}`);
  } catch (error) {
    console.error("Error while adding new tab to group:", error);
  }
});
