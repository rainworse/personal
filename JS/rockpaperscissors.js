
let ROUND_COUNT = 5;
let CHOICES = [ "rock",  "paper", "scissors"];

function game() 
{
    let score = 0;
    for (i = 0; i < ROUND_COUNT; i++) {
        score += playRound(i);
    }

    if (score > 0) {
        console.log("User wins game with " + score + " points");
    }

    else if (score < 0) {
        console.log("Computer wins game with " + Math.abs(score) + " points");
    }

    else {
        console.log("Game is a draw");
    }
}

function playRound(roundNum)
{
    console.log("Starting round " + (roundNum + 1));
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    if (userChoice == undefined) {
        return;
    }
    let outcome = getRoundOutcome(userChoice, computerChoice);
    if (outcome == 1) {
        console.log("User wins");
    }

    else if (outcome == -1) {
        console.log("Computer wins");
    }

    else {
        console.log("Draw");
    }

    return outcome;
}

function getUserChoice()
{
    let userChoice = prompt("Make your choice (either rock, paper or scissors): ");
    userChoice = userChoice.toLowerCase();
    if (!CHOICES.includes(userChoice)) {
        console.error("Unrecognized choice made");
        return undefined;
    }

    return userChoice;
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