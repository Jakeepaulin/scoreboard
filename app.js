let scoreH = {
  points: 0,
};

function homeScore() {
  // @ts-ignore
  document.getElementById("Hscore").innerHTML = `<div class="text-primary"><b>
      ${scoreH.points} 
      </b></div>`;
}

function twoPointPlayH() {
  scoreH.points += 2;
  homeScore();
}

function threePointPlayH() {
  scoreH.points += 3;
  homeScore();
}

homeScore();

// ______________________________________________________________________________;

let scoreA = {
  points: 0,
};

function awayScore() {
  // @ts-ignore
  document.getElementById("Ascore").innerHTML = `<div class="text-danger"><b>
      ${scoreA.points}
      </b></div>`;
}

function twoPointPlayA() {
  scoreA.points += 2;
  awayScore();
}

function threePointPlayA() {
  scoreA.points += 3;
  awayScore();
}

awayScore();

function reset() {
  scoreH.points = 0;
  homeScore();
  scoreA.points = 0;
  awayScore();
}
