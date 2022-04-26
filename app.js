

const choices = ['rock', 'paper', 'scissors'];
const computerChoice = computerPlay();

// Computer plays rock, paper, scissors
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}


//  Player plays rock, paper, scissors

let playerChoice = prompt("Choose either Rock, Paper or Scissors").toLowerCase();

function playRound(playerChoice, computerChoice) {
    
    if (playerChoice === computerChoice) {
        return "Computer selected: " + computerChoice + "\n" + "You selected: " + playerChoice + "\n" + "It's a tie!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return "Computer selected: " + computerChoice + "\n" + "You selected: " + playerChoice + "\n" + "You lose!";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "Computer selected: " + computerChoice + "\n" + "You selected: " + playerChoice + "\n" + "You win!";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "Computer selected: " + computerChoice + "\n" + "You selected: " + playerChoice + "\n" + "You lose!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return "Computer selected: " + computerChoice + "\n" + "You selected: " + playerChoice + "\n" + "You win!";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "Computer selected: " + computerChoice + "\n" + "You selected: " + playerChoice + "\n" + "You lose!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "Computer selected: " + computerChoice + "\n" + "You selected: " + playerChoice + "\n" + "You win!";
    } else {
        return "You entered a wrong choice. Please restart the page, and try again.";
    }
}

console.log(playRound(playerChoice, computerChoice));


// Game function
function game() {
    for (let round = 0; round < 5; round++) {
        playRound();
        return whatRound = "Round: " + round;
     }
}


console.log(game())