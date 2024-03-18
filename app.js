const button = document.querySelector('.button');
const message = document.querySelector('.message');


let userGuess = document.getElementById('input-field');
let randomNumber;


function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 100) + 1; 
}

function checkForGuess(event) {
    event.preventDefault();

    if (!randomNumber) {
        generateRandomNumber(); 
    }

    console.log(randomNumber);

    if (userGuess.value > 100 || userGuess.value < 1) {
        message.innerText = "Your guess must be between 1 and 100";
    } else {
        if (userGuess.value > randomNumber) {
            message.innerText = "Your guess is too high. Try again!";
        } else if (userGuess.value < randomNumber) {
            message.innerText = "Your guess is too low. Try again!";
        } else {
            message.innerText = "Your guess is correct. Refresh to guess again";
        }
    }    
}


button.addEventListener('click', checkForGuess);