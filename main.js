const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const currentResult = document.querySelector(".current-result");
const computerResult = document.querySelector(".computer-score");
const humanResult = document.querySelector(".human-score");

let humanChoice; // to store the value of the user: Paper Rock Scissors :: for looping

//Save the score to declare the winner
let humanScore = 0;
let computerScore = 0;

// Add event listeners to run round
rockButton.addEventListener("click", function () {
  //Condition limit game to 5 rounds
  if (humanScore >= 5 || computerScore >= 5) {
    announceTheWinner();
  } else {
    humanChoice = "rock";
    playRound(humanChoice, getComputerChoice());
  }
});
paperButton.addEventListener("click", function () {
  if (humanScore >= 5 || computerScore >= 5) {
    announceTheWinner();
  } else {
    humanChoice = "paper";
    playRound(humanChoice, getComputerChoice());
  }
});
scissorsButton.addEventListener("click", function () {
  if (humanScore >= 5 || computerScore >= 5) {
    announceTheWinner();
  } else {
    humanChoice = "scissors";
    playRound(humanChoice, getComputerChoice());
  }
});

// Get computer choice for Rock, Paper, Scissors
function getComputerChoice() {
  let computerChoice;
  let randomInt = Math.floor(Math.random() * 3);
  if (randomInt === 1) {
    computerChoice = "paper";
  } else if (randomInt === 2) {
    computerChoice = "rock";
  } else if (randomInt === 0) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

// Declare the function inside the game
function playRound(humanChoice, computerChoice) {
  // Make both choices lowercase to easy comparison
  console.log(humanChoice);
  console.log(computerChoice);

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
  if (humanScore === 5 || computerScore === 5) {
    announceTheWinner();
  }
}

function announceTheWinner() {
  if (computerScore > humanScore) {
    currentResult.textContent = "You LOST! Computer is the winner";
    currentResult.style.fontWeight = "bold";
  } else {
    currentResult.textContent = "You WIN! Congratulations!!!";
    currentResult.style.fontWeight = "bold";
  }
}
