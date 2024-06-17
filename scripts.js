"use strict";

/**
 * Your game will keep track of the players score. You will write variables to keep track of the players score.
 *
 * X - 1. Create two new variables named humanScore and computerScore in the global scope.
 * X - 2. Initialize those variables with the value of 0.
*/
let humanScore = 0;
let computerScore = 0;


/**
 * Instructions:
 *  X - 1. Create a new function named getComputerChoice.
    X - 2. Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
        Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
    X - 3. Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
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
/**
 *
X - 1. Create a new function named getHumanChoice.
X - 2. Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
        Hint: Use the prompt method to get the user’s input.
X - 3. Test what your function returns by using console.log.

 */
function getHumanChoice() {
    let isValid = false;
    let humanChoice = null;

    while (!isValid) {
        humanChoice = prompt("Enter rock, paper, or scissors");
        if ((humanChoice === "rock") ||
            (humanChoice === "paper") ||
            (humanChoice === "scissors")) {
                isValid = true;
        }
    }

    return humanChoice;
}
