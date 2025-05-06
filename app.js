// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.

/*-------------------------------- Constants --------------------------------*/
const operatorButtons = document.querySelectorAll('.button.operator')
const equalsButton = document.querySelector('.button.equals')
const numberButtons = document.querySelectorAll('.button.number')
const display = document.querySelector('.display')

    let currentInput = ''
    let resultShown = false
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (resultShown) {
                currentInput = ''
                resultShown = false
            }
            currentInput += button.textContent.trim()
            display.textContent = currentInput
        })
    })
})
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      const op = button.textContent.trim()

      if (op === 'C') {
        currentInput = ''
        display.textContent = ''
        return
      }

      if (resultShown) resultShown = false

      const lastCharacter = currentInput[currentInput.length - 1]
      if (['+', '-', '*', '/'].includes(lastCharacter)) {
        currentInput = currentInput.slice(0, -1)
      }
      currentInput += op
      display.textContent = currentInput
    })
})
equalsButton.addEventListener('click', () => {
    try {
        const result = eval(currentInput)
        display.textContent = result
        currentInput = result.toString()
        resultShown = true
    } catch {
        display.textContent = 'Error'
        currentInput = ''
        resultShown = false
    }
})
