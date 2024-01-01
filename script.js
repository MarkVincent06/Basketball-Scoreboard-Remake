let homePoints = 0;
let guestPoints = 0;
let homeFoul = 0;
let guestFoul = 0;
let periodNumber = 1;
let countdownTimer = "12:00"; // Initial time

const startingMinutes = 12;
let time = startingMinutes * 60;
let timerInterval; // Variable to store the interval ID

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

let isTimerRunning = false;

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownTimerEl.innerHTML = `${minutes}:${seconds}`;
  time--;

  if (time < 0) {
    stopTime();
    nextPeriod();
  }
}

function startTime() {
  if (!isTimerRunning) {
    timerInterval = setInterval(updateCountdown, 1000);
    isTimerRunning = true;
  }
}

function stopTime() {
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function resetTime() {
  stopTime(); // Stop the timer if running
  time = startingMinutes * 60;
  updateCountdown(); // Update the display immediately
}

function nextPeriod() {
  resetTime();
  periodNumberEl.innerHTML = periodNumber += 1;
  if (periodNumber > 4) {
    periodNumberEl.innerHTML = periodNumber = 1;
  }
}

function highlightLeadingPoints() {
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
  highlightLeadingPoints();
}

function add2HomePoints() {
  homeBoardPointsEl.innerHTML = homePoints += 2;
  highlightLeadingPoints();
}

function add3HomePoints() {
  homeBoardPointsEl.innerHTML = homePoints += 3;
  highlightLeadingPoints();
}

function add1GuestPoint() {
  guestBoardPointsEl.innerHTML = guestPoints += 1;
  highlightLeadingPoints();
}

function add2GuestPoints() {
  guestBoardPointsEl.innerHTML = guestPoints += 2;
  highlightLeadingPoints();
}
function add3GuestPoints() {
  guestBoardPointsEl.innerHTML = guestPoints += 3;
  highlightLeadingPoints();
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
  let countdownTimer = "12:00";
  periodNumber = 1;

  homeBoardPointsEl.innerHTML = homePoints;
  guestBoardPointsEl.innerHTML = guestPoints;
  homeFoulNumberEl.innerHTML = homeFoul;
  guestFoulNumberEl.innerHTML = guestFoul;
  countdownTimerEl.innerHTML = countdownTimer;
  periodNumberEl.innerHTML = periodNumber;

  resetTime();
}
