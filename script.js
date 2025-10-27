function getComputerChoice () {
    const arrayStrings = ["rock", "paper", "scissors"];
    const randomizer = Math.floor(Math.random()*3);
    return arrayStrings[randomizer];
}

function getHumanChoice () {
    const humanChoice = prompt("Rock, scissors or paper?") .toLowerCase().trim();
    return humanChoice;
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
    playRound("rock", getHumanChoice());
});
paperButton.addEventListener("click", () => {
    playRound("paper", getHumanChoice());
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getHumanChoice());
});

const resultDisplay = document.createElement('div');
document.body.appendChild(resultsDiv);



//function playGame() {
   // for (let i=1; i<=5; i++) {              
   //     const humanSelection = getHumanChoice();
      //  const computerSelection = getComputerChoice();
        //playRound(humanSelection, computerSelection);
   // }
//}
