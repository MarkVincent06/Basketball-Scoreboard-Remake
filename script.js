let homePoints = 0;
let guestPoints = 0;

let homeBoardPointsEl = document.getElementById("home-board-points");
let guestBoardPointsEl = document.getElementById("guest-board-points");
let homeBoardScoreEl = document.getElementById("home-board-score");
let guestBoardScoreEl = document.getElementById("guest-board-score");

homeBoardPointsEl.innerHTML = homePoints;
guestBoardPointsEl.innerHTML = guestPoints;

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
