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
function getHumanChoice() {
    let isValid = false;
    let humanChoice = null;

    while (!isValid) {
        humanChoice = prompt("Enter rock, paper, or scissors").toLowerCase();
        if ((humanChoice === "rock") ||
            (humanChoice === "paper") ||
            (humanChoice === "scissors")) {
                isValid = true;
        }
    }

    return humanChoice;
}

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
function playRound(humanChoice, computerchoice) {


}
