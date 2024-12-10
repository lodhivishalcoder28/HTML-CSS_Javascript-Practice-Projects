const randomNumber = console.log(parseInt(Math.random() * 10 + 1))

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
       
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('please enter a valid no.')
    }
    else if(guess<1 || guess>100){
        alert("please enter a valid no.")
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`game over. Random number was ${randomNumber}`);
            endGame();
        } else{
displayGuess(guess);
checkGuess(guess)
            
        }
    }
}
function checkGuess(guess) {
    if(guess === randomNumber){
displayMessage(`you guessed it right`)
endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`number is tooo low`)
    }
    else if(guess>randomNumber){
        displayMessage(`number is tooo high`)
    }
}


function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML+= `${guess}  `;
    numGuess++;
    remaining.innerHTML=`${10-numGuess}`

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
    //
}
function newGame() {
    //
}
