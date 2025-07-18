
const moves = ['rock', 'paper', 'scissors'];
const outcome = [[1,0,2],
                 [2,1,0],
                 [0,2,1]] // [human][computer], 0-lose, 1-draw, 2-win


function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  let h = prompt('Enter your move (rock, paper or scissors)').toLowerCase();
  return moves.indexOf(h);
}


function playGame () {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    
    switch (outcome[humanChoice][computerChoice]) {
      case 0:
        console.log("You lose! " + moves[humanChoice] + " gets beaten by " + moves[computerChoice] + ".");
        computerScore++; 
        break;
      case 1:
        console.log("Draw! Both played " + moves[humanChoice]);
        break;
      case 2:
        console.log("You win! " + moves[humanChoice] + " beats " + moves[computerChoice] + ".");
        humanScore++;
        break;
    }
    console.log("human: " + humanScore + ", computer: " + computerScore);
  }

  for (i=0; i<5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
  }

}

playGame()