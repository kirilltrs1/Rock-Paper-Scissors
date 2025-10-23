function getComputerChoice () {
    const arrayStrings = ["rock", "paper", "scissors"];
    const randomizer = Math.floor(Math.random()*3);
    if (randomizer === 0) {
        return arrayStrings[0]
    }
    else if (randomizer === 1) {
        return arrayStrings[1]
    }
    else {
        return arrayStrings[2]
    }
}

function getHumanChoice () {
    const humanChoice = prompt("Rock, scissors or paper?").toLowerCase().trim();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result;
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




function playGame() {
    for (let i=1; i<=5; i++) {              
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}
