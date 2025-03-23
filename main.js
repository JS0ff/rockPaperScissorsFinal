// Get computer choice for Rock, Paper, Scissors
function getComputerChoice() {
  let computerChoice;
  let randomInt = Math.floor(Math.random() * 3);
  if (randomInt === 1) {
    computerChoice = "Paper";
  } else if (randomInt === 2) {
    computerChoice = "Rock";
  } else if (randomInt === 0) {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

//   // Save the score to declare the winner
let humanScore = 0;
let computerScore = 0;

// Declare the function inside the game
function playRound(humanChoice, computerChoice) {
  // Make both choices lowercase to easy comparison
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  //Declare the round winner
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore = computerScore + 1;
    humanResult.textContent = humanScore;
    computerResult.textContent = computerScore;
    currentResult.textContent = "You lose! Paper beats Rock";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore = computerScore + 1;
    humanResult.textContent = humanScore;
    computerResult.textContent = computerScore;
    currentResult.textContent = "You lose! Scissors beats Paper";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore = computerScore + 1;
    humanResult.textContent = humanScore;
    computerResult.textContent = computerScore;
    currentResult.textContent = "You lose! Rock beats Scissors";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    computerResult.textContent = computerScore;
    humanResult.textContent = humanScore;
    currentResult.textContent = "You win! Rock beats Scissors";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    computerResult.textContent = computerScore;
    humanResult.textContent = humanScore;
    currentResult.textContent = "You win! Paper beats Rock";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    computerResult.textContent = computerScore;
    humanResult.textContent = humanScore;
    currentResult.textContent = "You win! Scissors beats Paper";
  } else if (humanChoice === computerChoice) {
    computerResult.textContent = computerScore;
    humanResult.textContent = humanScore;
    currentResult.textContent = "Draw";
  }

  //Declare the winner
  // if (humanScore > computerScore) {
  //   console.log("You won!");
  //   console.log(`HumanScore: ${humanScore} vs ComputerScore: ${computerScore}`);
  // } else if (computerScore > humanScore) {
  //   console.log("You lost!");
  //   console.log(`HumanScore: ${humanScore} vs ComputerScore: ${computerScore}`);
  // } else if (computerScore === humanScore) {
  //   console.log("This is a draw!");
  //   console.log(`HumanScore: ${humanScore} vs ComputerScore: ${computerScore}`);
  // }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const currentResult = document.querySelector(".current-result");
const computerResult = document.querySelector(".computer-score");
const humanResult = document.querySelector(".human-score");

rockButton.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});

// Run the game
// playGame();
