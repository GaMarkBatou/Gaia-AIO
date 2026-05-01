const timers = {
  break: {
    duration: 40 * 60, // 40 minutes
    remaining: 40 * 60,
    hasEnded: false, // Track if the timer finished counting down
    intervalId: null,
    displayId: 'breakDisplay',
    sound: new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg'),
    endMessage: 'Break time is over! Get back to work.'
  },
  lunch: {
    duration: 30 * 60, // 30 minutes
    remaining: 30 * 60,
    hasEnded: false,
    intervalId: null,
    displayId: 'lunchDisplay',
    sound: new Audio('https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg'),
    endMessage: 'Lunch break finished! Ready to continue?'
  },
  ticket: {
    duration: 10 * 60, // 10 minutes
    remaining: 10 * 60,
    hasEnded: false,
    intervalId: null,
    displayId: 'ticketDisplay',
    sound: new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg'),
    endMessage: 'Ticket timer ended! Time to review.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('breakIncrement').addEventListener('click', incrementBreak);
  document.getElementById('breakDecrement').addEventListener('click', decrementBreak);

  document.querySelectorAll('.timer').forEach(timerDiv => {
    const timerName = timerDiv.id.replace('Timer',''); // e.g., breakTimer -> break
    
    timerDiv.querySelector('button.start').addEventListener('click', () => startTimer(timerName));
    timerDiv.querySelector('button.stop').addEventListener('click', () => stopTimer(timerName));
    timerDiv.querySelector('button.reset').addEventListener('click', () => resetTimer(timerName));
  });

  // Handle tab visibility
  document.addEventListener("visibilitychange", handleVisibilityChange);
});

window.onload = () => {
  const savedBg = localStorage.getItem('customBackground');
  if (savedBg) {
    document.querySelector('.background-layer').style.backgroundImage = `url('${savedBg}')`;
  }
};

function incrementBreak() {
  const timer = timers.break;
  timer.remaining += 60; // add 60 seconds = 1 minute
  if (timer.remaining > 99 * 60) { // max 99 minutes to prevent overflow
    timer.remaining = 99 * 60;
  }
  updateDisplay('break');
}

function decrementBreak() {
  const timer = timers.break;
  if (!timer.hasEnded) {
    timer.remaining -= 60; // subtract 1 minute
    if (timer.remaining < 0) {
      timer.remaining = 0; // don't go below zero while counting down
    }
    updateDisplay('break');
  }
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

function updateDisplay(timerName) {
  const timer = timers[timerName];
  const display = document.getElementById(timer.displayId);

  // When counting up, invert the display to show elapsed time after zero
  const time = timer.hasEnded ? Math.abs(timer.remaining) : timer.remaining;
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  display.querySelector('.minutes').textContent = pad(minutes);
  display.querySelector('.seconds').textContent = pad(seconds);
}

function setBlinkColon(timerName, blinking) {
  const display = document.getElementById(timers[timerName].displayId);
  const colon = display.querySelector('.colon');
  if (blinking) {
    colon.classList.add('blinking-colon');
  } else {
    colon.classList.remove('blinking-colon');
  }
}

function countdownWithTimestamp(timerName, lastTimestamp = performance.now()) {
  const timer = timers[timerName];
  const now = performance.now();
  const elapsed = (now - lastTimestamp) / 1000; // Calculate elapsed seconds

  if (!timer.hasEnded) {
    timer.remaining -= elapsed;
    if (timer.remaining <= 0) {
      // Switch to counting upwards
      timer.remaining = 0;
      timer.hasEnded = true; // Mark timer as ended
      try {
        timer.sound.play();
      } catch (e) {
        console.warn('Sound play failed', e);
      }
      if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({
          action: 'timerEnded',
          timer: timerName,
          message: timer.endMessage,
          timestamp: Date.now()
        });
      }
    }
  } else {
    // Timer has ended and starts counting up
    timer.remaining -= elapsed; // Decrement remaining to "count up" visually
  }

  updateDisplay(timerName);

  // Continue updating using requestAnimationFrame
  timer.intervalId = requestAnimationFrame(() => countdownWithTimestamp(timerName, now));
}

function startTimer(timerName) {
  const timer = timers[timerName];
  if (!timer.intervalId) {
    setBlinkColon(timerName, true);
    timer.intervalId = requestAnimationFrame(() => countdownWithTimestamp(timerName));
  }
}

function stopTimer(timerName) {
  const timer = timers[timerName];
  if (timer.intervalId) {
    cancelAnimationFrame(timer.intervalId);
    timer.intervalId = null;
    setBlinkColon(timerName, false);
  }
}

function resetTimer(timerName) {
  const timer = timers[timerName];
  stopTimer(timerName);
  timer.remaining = timer.duration;
  timer.hasEnded = false; // Reset to countdown mode
  updateDisplay(timerName);
  setBlinkColon(timerName, false);
}

// Handle tab visibility change to prevent throttling
function handleVisibilityChange() {
  if (document.hidden) {
    // Pause timers if the tab is hidden
    Object.keys(timers).forEach(timerName => {
      const timer = timers[timerName];
      if (timer.intervalId) {
        stopTimer(timerName);
        timer.hiddenTime = performance.now(); // Record the time when the tab became hidden
      }
    });
  } else {
    // Resume timers and adjust for the elapsed time when the tab is visible again
    Object.keys(timers).forEach(timerName => {
      const timer = timers[timerName];
      if (timer.hiddenTime) {
        const now = performance.now();
        const elapsed = (now - timer.hiddenTime) / 1000; // Calculate how long the tab was hidden
        if (!timer.hasEnded) {
          timer.remaining = Math.max(0, timer.remaining - elapsed); // Adjust countdown time
        } else {
          timer.remaining -= elapsed; // Adjust counting up time
        }
        startTimer(timerName); // Restart the timer
        delete timer.hiddenTime;
      }
    });
  }
}

// Initialize displays on page load
Object.keys(timers).forEach(t => updateDisplay(t));
