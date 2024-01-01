let homePoints = 0;
let guestPoints = 0;

let homeBoardPointsEl = document.getElementById("home-board-points");
let guestBoardPointsEl = document.getElementById("guest-board-points");

homeBoardPointsEl.innerHTML = homePoints;
guestBoardPointsEl.innerHTML = guestPoints;

function add1HomePoint() {
  homeBoardPointsEl.innerHTML = homePoints += 1;
}

function add2HomePoints() {
  homeBoardPointsEl.innerHTML = homePoints += 2;
}

function add3HomePoints() {
  homeBoardPointsEl.innerHTML = homePoints += 3;
}

function add1GuestPoint() {
  guestBoardPointsEl.innerHTML = guestPoints += 1;
}

function add2GuestPoints() {
  guestBoardPointsEl.innerHTML = guestPoints += 2;
}
function add3GuestPoints() {
  guestBoardPointsEl.innerHTML = guestPoints += 3;
}
