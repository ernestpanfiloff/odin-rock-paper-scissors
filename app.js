// Variables
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

// Computer plays rock, paper, scissors. Picks a random choice.
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

//  Player plays rock, paper, scissors
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Computer selected: " + computerChoice + "\n" + "You selected: " + playerChoice + "\n" + "It's a tie!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore+=1;
        return "Computer selected: " + computerChoice + "\n" + "You selected: " + playerChoice + "\n" + "You lose!";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore+=1;
        return "Computer selected: " + computerChoice + "\n" + "You selected: " + playerChoice + "\n" + "You win!";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore+=1;
        return "Computer selected: " + computerChoice + "\n" + "You selected: " + playerChoice + "\n" + "You lose!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore+=1;
        return "Computer selected: " + computerChoice + "\n" + "You selected: " + playerChoice + "\n" + "You win!";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore+=1;
        return "Computer selected: " + computerChoice + "\n" + "You selected: " + playerChoice + "\n" + "You lose!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore+=1;
        return "Computer selected: " + computerChoice + "\n" + "You selected: " + playerChoice + "\n" + "You win!";
    } else {
        return "You entered a wrong choice. Please restart the page, and try again.";
    }
}

// Game function
function game() {
    for (let round = 1; round <= 5; round++) {
        let playerChoice = prompt("Choose either Rock, Paper or Scissors").toLowerCase();
        let computerChoice = computerPlay();

        console.log(playRound(playerChoice, computerChoice));
        console.log("Round: " + round);
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
     }
}

console.log(game())

// Tell the winner
if (playerScore > computerScore) {
    console.log("You win!");
} else if (playerScore < computerScore) {
    console.log("You lose!");
} else if (playerScore === 0 && computerScore === 0) {
    console.log("You both have 0 points. Nobody wins.");
} else if (playerScore === computerScore) {
    console.log("It's a tie!");
}

