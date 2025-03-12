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
  console.log(computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  userChoice = prompt("Rock, Paper, Scissors?");
  console.log(userChoice);
  return userChoice;
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore = computerScore + 1;
      console.log("You lose! Paper beats Rock");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore = computerScore + 1;
      console.log("You lose! Scissors beats Paper");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore = computerScore + 1;
      console.log("You lose! Rock beats Scissors");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore += 1;
      console.log("You win! Rock beats Scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
      console.log("You win! Paper beats Rock");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore += 1;
      console.log("You win! Scissors beats Paper");
    } else if (humanChoice === computerChoice) {
      console.log("Draw!");
    }
  }

  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
}

playGame();
