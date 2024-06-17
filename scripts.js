"use strict";

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
