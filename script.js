function getComputerChoice () {
    const arrayStrings = ["rock", "paper", "scissors"];
    const randomizer = Math.floor(Math.random()*3);
    return arrayStrings[randomizer];
}

function getHumanChoice (choice) {
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = "";
    
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                result = "You win! Rock beats Scissors";
                humanScore++;
            } else if (computerChoice === "paper") {
                result = "You lose! Paper beats Rock";
                computerScore++;
            } else {
                result = "It's a tie!";
            }
            break;
        
        case "scissors":
            if (computerChoice === "paper") {
                result = "You win! Scissors beats Paper";
                humanScore++;
            } else if (computerChoice === "rock") {
                result = "You lose! Rock beats Scissors";
                computerScore++;
            } else {
                result = "It's a tie!";
            }
            break;
        
        case "paper":
            if (computerChoice === "rock") {
                result = "You win! Paper beats Rock";
                humanScore++;
            } else if (computerChoice === "scissors") {
                result = "You lose! Scissors beats Paper";
                computerScore++;
            } else {
                result = "It's a tie!";
            }
            break;
        
        default:
            result = "Invalid choice!";
    }
    
    return result;
}

const paperButton = document.createElement('button');
const rockButton = document.createElement('button');
const scissorsButton = document.createElement('button');

paperButton.textContent = "Paper";
rockButton.textContent = "Rock";
scissorsButton.textContent = "Scissors";

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

rockButton.addEventListener("click", () => {
  const result = playRound("rock", getComputerChoice());
  updateDisplay(result);
});

paperButton.addEventListener("click", () => {
  const result = playRound("paper", getComputerChoice());
  updateDisplay(result);
});

scissorsButton.addEventListener("click", () => {
  const result = playRound("scissors", getComputerChoice());
  updateDisplay(result);
});

const displayResult = document.createElement('div');
displayResult.style.marginTop = "20px";
displayResult.style.fontSize = "20px";
document.body.appendChild(displayResult);

const scoreBoard = document.createElement("div");
scoreBoard.style.marginTop = "10px";
scoreBoard.style.fontSize = "20px";
document.body.appendChild(scoreBoard);

function updateDisplay(resultText) {
  displayResult.textContent = resultText;
  scoreBoard.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
  if (humanScore === 5) {
    displayResult.textContent = 'You are the winner!';
    disableButtons(true);
    gameRestart()
  }
  else if (computerScore === 5) {
    displayResult.textContent = 'You lost';
    disableButtons(true);
    gameRestart()
  }
}

function disableButtons(state) {
  rockButton.disabled = state;
  paperButton.disabled = state;
  scissorsButton.disabled = state;
}


const restartGame = document.createElement('button');
restartGame.textContent = "Restart game";
restartGame.style.display = "none";
restartGame.style.marginTop = "20px";
restartGame.style.padding = "10px 20px";
restartGame.style.fontSize = "16px";
document.body.appendChild(restartGame);

function gameRestart() {
    if (humanScore === 5 || computerScore === 5) {
        restartGame.style.display = "block";
    }
}

restartGame.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  displayResult.textContent = "New match started!";
  scoreBoard.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
  restartGame.style.display = "none";
  disableButtons(false);
});