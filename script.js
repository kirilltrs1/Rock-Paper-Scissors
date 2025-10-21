

function getComputerChoice () {
    const whatIsIt = ["rock", "paper", "scissors"];
    return Math.floor(Math.random(whatIsIt.length));
}

const message = getComputerChoice()
console.log(message)
console.log([whatIsIt.length]);