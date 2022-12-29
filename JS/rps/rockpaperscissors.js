
let ROUND_COUNT = 5;
let CHOICES = [ "rock",  "paper", "scissors"];
let currentRound = 0;
let rockButton = document.createElement('button');
let paperButton = document.createElement('button');
let scissorsButton = document.createElement('button');
let startButton = document.querySelector('.start-game');
let content = document.querySelector('.content');
let outcome = document.querySelector('.outcome');

startButton.addEventListener('click', startGame);

function startGame() 
{
    content.removeChild(startButton);
    currentRound = 1;
    initializeButtons();
}

function initializeButtons()
{
    rockButton.textContent = "Rock";
    paperButton.textContent = "Paper";
    scissorsButton.textContent = "Scissors";
    rockButton.addEventListener('click', choiceMade);
    paperButton.addEventListener('click', choiceMade);
    scissorsButton.addEventListener('click', choiceMade);
    let choices = document.querySelector('.choices');
    choices.appendChild(rockButton);
    choices.appendChild(paperButton);
    choices.appendChild(scissorsButton);
}

function choiceMade(event)
{
    let userChoice;
    let computerChoice = getComputerChoice();

    if (event.srcElement == rockButton) {
        userChoice = 'rock';
    }
    else if (event.srcElement == paperButton) {
        userChoice = 'paper';
    }
    else {
        userChoice = 'scissors';
    }

    let roundOutcome = getRoundOutcome(userChoice, computerChoice);

    if (roundOutcome == 1) {
        outcome.textContent = "User wins";
    }
    else if (roundOutcome == -1) {
        outcome.textContent = "Computer wins";
    }
    else {
        outcome.textContent = "Draw";
    }

    currentRound++;

    if (currentRound > ROUND_COUNT) {
        endGame();
    }
}

function endGame()
{
    let choices = document.querySelector('.choices');
    choices.removeChild(rockButton);
    choices.removeChild(paperButton);
    choices.removeChild(scissorsButton);
    content.insertBefore(startButton, choices);
}

function getComputerChoice()
{
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function getRoundOutcome(userChoice, computerChoice)
{
    if (userChoice == "rock") {
        if (computerChoice == "paper") {
            return -1;
        }

        if (computerChoice == "scissors") {
            return 1
        }

        return 0;
    }

    if (userChoice == "paper") {
        if (computerChoice == "rock") {
            return 1;
        }

        if (computerChoice == "scissors") {
            return -1
        }

        return 0;
    }

    if (userChoice == "scissors") {
        if (computerChoice == "paper") {
            return 1;
        }

        if (computerChoice == "rock") {
            return -1
        }

        return 0;
    }

    return undefined;
}