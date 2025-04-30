// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.

/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator')
const buttons = document.querySelectorAll('.button-number')
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(event.target.innerText)
    })
})
/*-------------------------------- Functions --------------------------------*/
const display = document.getElementById("display")

const appendToDisplay(input) {
    display.value += input
}
const clearDisplay() {

}

const calculate() {

}