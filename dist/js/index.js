let dncDice = document.getElementById("dncDice");
let dncRollValue;
let dncScore = document.getElementById("dncScore");
let dncScoreValue = 0;
dncScore.textContent = dncScoreValue;
// console.log(typeof dncScoreValue);

let rncRollValue;
let rncDice = document.getElementById("rncDice");
let rncScore = document.getElementById("rncScore");
let rncScoreValue = 0;
rncScore.textContent = rncScoreValue;
// console.log(rncScoreValue);

let rollBtn = document.querySelector(".goBtn");

let rollAudio = document.getElementById("rollAudio");
rollAudio.preload = "auto";

rollBtn.addEventListener("click", roll, false);
rollBtn.addEventListener("mousedown", toggleShadow, false);

const Dice = {
  1: "assets/1side.png",
  2: "assets/2side.png",
  3: "assets/3side.png",
  4: "assets/4side.png",
  5: "assets/5side.png",
  6: "assets/6side.png"
};

let randomNumber = function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
};

function roll() {
  //Remove Win Glow
  dncDice.classList.remove("winGlow");
  rncDice.classList.remove("winGlow");

  // Pause Event Listener
  rollBtn.disabled = true;

  // Dice Roll Sound Effect
  rollAud();

  // Button Depress
  toggleShadow();

  // Roll The Dice
  simulateRoll();

  //Turn Back On Event Listener
  rollBtn.disabled = false;

  return;
}

function whoWon() {
  dncScore.textContent = dncScoreValue;
  rncScore.textContent = rncScoreValue;

  if (dncRollValue === rncRollValue) {
    console.log("Tie");
  } else if (dncRollValue > rncRollValue) {
    console.log("DNC Wins");
    updateScore(dncDice);
    dncScore.textContent = dncScoreValue;
    dncDice.classList.toggle("winGlow");
  } else {
    console.log("RNC Wins");
    updateScore(rncDice);
    rncScore.textContent = rncScoreValue;
    rncDice.classList.toggle("winGlow");
  }
  return;
}

function updateScore(winner) {
  if (winner === dncDice) {
    dncScore.textContent = Number(dncScoreValue++).toString();
  } else {
    rncScore.textContent = Number(rncScoreValue++).toString();
  }

  return;
}

function rollAud() {
  
  let audio = new Audio("./assets/dice-2.ogg");
  audio.play();
    
//   rollAudio.play();

  return;
}

function toggleShadow() {
  rollBtn.classList.toggle("goBtnShadow");

  return;
}

function fillDiceImageArray() {
  dncArray = [];

  for (let i = 0; i < 10; i++) {
    dncArray.push(Dice[randomNumber()]);
    setInterval(simulateRoll, 2000);
  }

  console.log(dncArray);

  return;
}

function simulateRoll() {
  dncRollValue = randomNumber();
  rncRollValue = randomNumber();
  dncDice.src = Dice[dncRollValue];
  rncDice.src = Dice[rncRollValue];

  whoWon();

  return;
}
