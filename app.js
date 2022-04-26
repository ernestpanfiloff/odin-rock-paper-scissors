
const choices = ['rock', 'paper', 'scissors'];

function computerPlay(playerSelection, computerSelection) {
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(computerPlay());