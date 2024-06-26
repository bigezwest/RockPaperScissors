"use strict";

/** Global Variables ***********************************************************
 Your game will keep track of the players score. You will write variables to
    keep track of the players score.

 X - 1. Create two new variables named humanScore and computerScore in the
    global scope.
 X - 2. Initialize those variables with the value of 0.
*/
let humanScore = 0;
let computerScore = 0;
// let humanChoice = "";

/** getComputerChoice() ********************************************************
Your game will be played against the computer. You will write a function that
    randomly returns “rock”, “paper” or “scissors”.

X - 1. Create a new function named getComputerChoice.
X - 2. Write the code so that getComputerChoice will randomly return one of the
    following string values: “rock”, “paper” or “scissors”.

        Hint: The Math.random method returns a random number that’s greater than
        or equal to 0 and less than 1. Think about how you can use this to
        conditionally return one of the multiple choices.
X - 3. Test that your function returns what you expect using console.log or the
    browser developer tools before advancing to the next step.
*/
function getComputerChoice() {
    const min = 1;
    const max = 4;
    const randNum = Math.floor(Math.random (min, max) * (max - min) + min);
    let compChoice = null;

    switch (randNum) {
        case 1:
            compChoice = "rock";
            break;
        case 2:
            compChoice = "paper";
            break;
        case 3:
            compChoice = "scissors";
            break;
        default:
            compChoice = "An error has occurred."
            break;
    }
    return compChoice;
}

/** getHumanChoice() ***********************************************************
X - 1. Create a new function named getHumanChoice.
X - 2. Write the code so that getHumanChoice will return one of the valid
        choices depending on what the user inputs.
            Hint: Use the prompt method to get the user’s input.
X - 3. Test what your function returns by using console.log.
*/
// function getHumanChoice(humanChoiceInput) {
    // let isValid = false;
    // let humanChoice = humanChoiceInput;

    // // while (!isValid) {
    //     const humanChoice = humanChoiceInput;
    //     if ((humanChoice === "rock") ||
    //         (humanChoice === "paper") ||
    //         (humanChoice === "scissors")) {
    //             isValid = true;
    //     }
    // }
    //     humanChoice = prompt("Enter rock, paper, or scissors").toLowerCase();
    //     if ((humanChoice === "rock") ||
    //         (humanChoice === "paper") ||
    //         (humanChoice === "scissors")) {
    //             isValid = true;
    //     }
    // }

//     return humanChoice;
// }

/** playRound() ****************************************************************
 * Your game will be played round by round. You will write a function that takes
    the human and computer player choices as arguments, plays a single round,
    increments the round winner’s score and logs a winner announcement.

1. Create a new function named playRound.
2. Define two parameters for playRound: humanChoice and computerChoice. Use
    these two parameters to take the human and computer choices as arguments.
3. Make your function’s humanChoice parameter case-insensitive so that players
    can input “rock”, “ROCK”, “RocK”, or other variations.
4. Write the code for your playRound function to console.log a string value
    representing the round winner, such as: “You lose! Paper beats Rock”.
5. Increment the humanScore or computerScore variable based on the round winner.
 */
function playRound(humanChoice, computerChoice) {

    let statement = null;

    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                statement = "Tie Game.  No Winner."
                break;
            case "scissors":
                statement = "You Win!  Rock beats scissors.";
                humanScore += 1;
                break;
            case "paper":
                statement = "You Lose.  Paper beats rock."
                computerScore += 1;
                break;
        }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                statement = "You Win! Paper beats rock."
                humanScore += 1;
                break;
            case "paper":
                statement = "Tie Game.  No Winner.";
                break;
            case "scissors":
                statement = "You lose.  Scissors beats paper."
                computerScore += 1;
                break;
        }
    } else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                statement = "You lose.  Rock beats scissors.";
                computerScore += 1;
                break;
            case "paper":
                statement = "You win! Scissors beats paper.";
                humanScore += 1;
                break;
            case "scissors":
                statement = "Tie Game.  No Winner.";
                break;
        }
    }
    // Update the roundResultDiv to show the round results
    roundResultDiv.textContent = statement;
}

/** playRound() ******************************************************************
1. Create a new function named playGame.
2. Move your playRound function and score variables so that they’re declared inside of the new playGame function
3. Play 5 rounds by calling playRound 5 times.
    Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
    Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
    If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
 */

function playGame(humanChoice) {
    // const humanSelection = getHumanChoice();
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    showGameTotals();
}
/** showGameTotals ********************************************************** */
function showGameTotals () {
    if (computerScore === 5) {
        scoresP.textContent = `The computer wins!`;
        resetValues();
    } else if (humanScore === 5) {
        scoresP.textContent = `The human wins!`;
        resetValues();
    } else {
        scoresP.textContent = `
            Human Score: ${humanScore}
            Computer Score: ${computerScore}`;
    }
    roundResultDiv.appendChild(scoresP);
    body.appendChild(roundResultDiv);
}

function resetValues() {
    computerScore = 0;
    humanScore = 0;
}

// - body
const body = document.querySelector("body");

/** Create Elements  ******************************************************** */

// - div to hold buttons
const btnDiv = document.createElement("div");

// - 3 buttons - user selections
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

// - div to show the results of the current round
const roundResultDiv = document.createElement("div");

// - p to hold the scores of computer and human
const scoresP = document.createElement("p");

btnDiv.className = "btnDiv";
roundResultDiv.className = "resultsDiv";

// Add Text Content to buttons
rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

// Append buttons and btnDiv to body
body.appendChild(btnDiv);
btnDiv.appendChild(rockBtn);
btnDiv.appendChild(paperBtn);
btnDiv.appendChild(scissorsBtn);

// Add an event for each button
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent.toLowerCase();
        playGame(humanChoice);
        // alert(button.textContent);
    });
});
