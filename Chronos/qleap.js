const timers = {
  break: {
    duration: 40 * 60,
    remaining: 40 * 60,
    intervalId: null,
    displayId: 'breakDisplay',
    sound: new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg'), //'https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg'
    endMessage: 'Break time is over! Get back to work.'
  },
  lunch: {
    duration: 30 * 60,
    remaining: 30 * 60,
    intervalId: null,
    displayId: 'lunchDisplay',
    sound: new Audio('https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg'),
    endMessage: 'Lunch break finished! Ready to continue?'
  },
  ticket: {
    duration: 10 * 60,
    remaining: 10 * 60,
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
});

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
  timer.remaining -= 60; // subtract 1 minute
  if (timer.remaining < 0) {
    timer.remaining = 0; // don't go below zero
  }
  updateDisplay('break');
}


function pad(num) {
  return num.toString().padStart(2, '0');
}

function updateDisplay(timerName) {
  const timer = timers[timerName];
  const display = document.getElementById(timer.displayId);
  const minutes = Math.floor(timer.remaining / 60);
  const seconds = timer.remaining % 60;
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

function countdown(timerName) {
  const timer = timers[timerName];
  if (timer.remaining > 0) {
    timer.remaining--;
    updateDisplay(timerName);
  } else {
    clearInterval(timer.intervalId);
    timer.intervalId = null;
    setBlinkColon(timerName, false);
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
	
	//alert(timer.endMessage);
	
  }
}

function startTimer(timerName) {
  const timer = timers[timerName];
  if (!timer.intervalId) {
    timer.intervalId = setInterval(() => countdown(timerName), 1000);
    setBlinkColon(timerName, true);
  }
}

function stopTimer(timerName) {
  const timer = timers[timerName];
  if (timer.intervalId) {
    clearInterval(timer.intervalId);
    timer.intervalId = null;
    setBlinkColon(timerName, false);
  }
}

function resetTimer(timerName) {
  const timer = timers[timerName];
  stopTimer(timerName);
  timer.remaining = timer.duration;
  updateDisplay(timerName);
  setBlinkColon(timerName, false);
}

Object.keys(timers).forEach(t => updateDisplay(t));
