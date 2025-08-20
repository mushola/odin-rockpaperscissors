
const moves = ['rock', 'paper', 'scissors'];
const outcomes = [[1,0,2],
                  [2,1,0],
                  [0,2,1]] // [human][computer], 0-lose, 1-draw, 2-win


function getComputerChoice() {
  // returns an integer between 0 and 2 representing the computers move.
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  // returns an integer between 0 and 2 representing the humans move.
  let h = prompt('Enter your move (rock, paper or scissors)').toLowerCase();
  return moves.indexOf(h);
}



let gamesPlayed = 0;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (gamesPlayed == 0) {
    humanScore = 0;
    computerScore = 0;
  }
// Determines the outcome of a single round of rockpaperscissors
  switch (outcomes[humanChoice][computerChoice]) {
    case 0:
      resultText.textContent = "You lose! " + moves[humanChoice] + " gets beaten by " + moves[computerChoice] + ".";
      computerScore++; 
      break;
    case 1:
      resultText.textContent = "Draw! Both played " + moves[humanChoice];
      break;
    case 2:
      resultText.textContent = "You win! " + moves[humanChoice] + " beats " + moves[computerChoice] + ".";
      humanScore++;
      break;
  }
  gamesPlayed++;
  scoreText.textContent = `games: ${gamesPlayed}, human: ${humanScore}, computer: ${computerScore}.`;
  if (gamesPlayed == 5) {
    scoreText.textContent += " That's it!!!  "
    gamesPlayed = 0;
    }
  }


// UI Section
const btnScissors = document.querySelector("#btnScissors");
const btnPaper = document.querySelector("#btnPaper");
const btnRock = document.querySelector("#btnRock");
const resultText = document.querySelector("#resultText");
const scoreText = document.querySelector("#scoreText");


btnScissors.addEventListener("click", () => {
  playRound(2, getComputerChoice());
})

btnPaper.addEventListener("click", () => {
  playRound(1, getComputerChoice());
})

btnRock.addEventListener("click", () => {
  playRound(0, getComputerChoice());
})
