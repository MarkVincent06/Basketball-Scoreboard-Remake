let homePoints = 0;
let guestPoints = 0;
let homeFoul = 0;
let guestFoul = 0;
let countdownTimer = "23:59"; // Initial time
let periodNumber = 1;
let timerPaused = false; // Flag to check if the timer is paused
let remainingTime = 0; // Variable to store remaining time when paused
let originalCountdownDate = null; // Variable to store the original countdown date

let countdownTimerEl = document.getElementById("countdown-timer");
let periodNumberEl = document.getElementById("period-number");

let homeBoardPointsEl = document.getElementById("home-board-points");
let guestBoardPointsEl = document.getElementById("guest-board-points");
let homeBoardScoreEl = document.getElementById("home-board-score");
let guestBoardScoreEl = document.getElementById("guest-board-score");

let homeFoulNumberEl = document.getElementById("home-foul-number");
let guestFoulNumberEl = document.getElementById("guest-foul-number");

homeBoardPointsEl.innerHTML = homePoints;
guestBoardPointsEl.innerHTML = guestPoints;
homeFoulNumberEl.innerHTML = homeFoul;
guestFoulNumberEl.innerHTML = guestFoul;
countdownTimerEl.innerHTML = countdownTimer;
periodNumberEl.innerHTML = periodNumber;

let countdownInterval;

function countdownTimerStart() {
  clearInterval(countdownInterval); // Clear existing interval before starting a new one

  let countdownDate = new Date();

  if (timerPaused && remainingTime > 0) {
    // If timer was paused and there's remaining time, start from that remaining time
    countdownDate.setMilliseconds(
      countdownDate.getMilliseconds() + remainingTime
    );
    remainingTime = 0; // Reset remaining time after resuming
  } else {
    originalCountdownDate = new Date(countdownDate); // Store the original countdown date
    originalCountdownDate.setMinutes(originalCountdownDate.getMinutes() + 23);
    originalCountdownDate.setSeconds(originalCountdownDate.getSeconds() + 59);
    countdownDate = originalCountdownDate;
  }

  countdownInterval = setInterval(() => {
    if (!timerPaused) {
      let now = new Date().getTime();
      let distance = countdownDate - now;

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownTimerEl.innerHTML = `${minutes}:${seconds}`;

      if (distance < 0) {
        clearInterval(countdownInterval);
        countdownTimerEl.innerHTML = "00:00"; // Display 00:00 when the timer reaches zero
      }
    }
  }, 1000);
}

function startTime() {
  timerPaused = false;
  countdownTimerStart();
}

function pauseTime() {
  timerPaused = true;
  remainingTime = calculateRemainingTime(); // Store the remaining time when paused
}

function resumeTime() {
  timerPaused = false;
  countdownTimerStart();
}

function calculateRemainingTime() {
  // Calculate remaining time in milliseconds
  let now = new Date().getTime();
  let originalCountdownTime = originalCountdownDate.getTime();
  return originalCountdownTime - now;
}

function nextPeriod() {
  pauseTime(); // Pause the timer before moving to the next period
  periodNumberEl.innerHTML = periodNumber += 1;
  if (periodNumber > 4) {
    periodNumberEl.innerHTML = periodNumber = 1;
  }
  resetTimer();
}

function resetTimer() {
  clearInterval(countdownInterval);
  countdownTimerEl.innerHTML = "23:59"; // Reset the timer to the initial time
  remainingTime = 0; // Reset remaining time when resetting the timer
}

function highlightAheadPoints() {
  if (homePoints > guestPoints) {
    guestBoardScoreEl.classList.remove("highlight-border");
    homeBoardScoreEl.classList.add("highlight-border");
  } else if (guestPoints > homePoints) {
    homeBoardScoreEl.classList.remove("highlight-border");
    guestBoardScoreEl.classList.add("highlight-border");
  }
}

function add1HomePoint() {
  homeBoardPointsEl.innerHTML = homePoints += 1;
  highlightAheadPoints();
}

function add2HomePoints() {
  homeBoardPointsEl.innerHTML = homePoints += 2;
  highlightAheadPoints();
}

function add3HomePoints() {
  homeBoardPointsEl.innerHTML = homePoints += 3;
  highlightAheadPoints();
}

function add1GuestPoint() {
  guestBoardPointsEl.innerHTML = guestPoints += 1;
  highlightAheadPoints();
}

function add2GuestPoints() {
  guestBoardPointsEl.innerHTML = guestPoints += 2;
  highlightAheadPoints();
}
function add3GuestPoints() {
  guestBoardPointsEl.innerHTML = guestPoints += 3;
  highlightAheadPoints();
}

function addHomeFoul() {
  homeFoulNumberEl.innerHTML = homeFoul += 1;
}

function addGuestFoul() {
  guestFoulNumberEl.innerHTML = guestFoul += 1;
}

function newGame() {
  homePoints = 0;
  guestPoints = 0;
  homeFoul = 0;
  guestFoul = 0;
  countdownTimer = "23:59";
  periodNumber = 1;
  timerPaused = false;

  homeBoardPointsEl.innerHTML = homePoints;
  guestBoardPointsEl.innerHTML = guestPoints;
  homeFoulNumberEl.innerHTML = homeFoul;
  guestFoulNumberEl.innerHTML = guestFoul;
  countdownTimerEl.innerHTML = countdownTimer;
  periodNumberEl.innerHTML = periodNumber;
}
