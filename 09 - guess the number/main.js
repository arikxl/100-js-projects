const inpt = document.getElementById('inpt');
const msg = document.getElementById('msg');
const wrongSpan = document.getElementById('wrongSpan');
const TriesSpan = document.getElementById('TriesSpan');
const maxSpan = document.getElementById('maxSpan');


let max = 0;
let randomNumber;
let wrongGuesses = [];
let numberOfTries = 0;


function guess() {
    let playerGuess = +inpt.value;
    if (!playerGuess) return;
    numberOfTries++;
    // console.log(playerGuess);

    if (playerGuess === randomNumber) {
        msg.innerHTML = 'You did it! It was ' + randomNumber;
        msg.style.backgroundColor = 'green';
        msg.style.color = 'lime';
        
    } else {
        wrongGuesses.push(playerGuess);
        if (playerGuess > randomNumber) {
            msg.innerHTML = 'Your guess is too high!';
            msg.style.backgroundColor = 'crimson';
            msg.style.color = 'black';
        } else {
            msg.innerHTML = 'Your guess is too low!';
            msg.style.backgroundColor = 'orange';
            msg.style.color = 'yellow';
        }
    }


    inpt.value = '';
    wrongSpan.innerHTML = wrongGuesses;
    TriesSpan.innerHTML = numberOfTries;
}


function newGame() {
    max += 10;
    maxSpan.innerHTML = max;
    randomNumber = Math.ceil(Math.random() * max);
    console.log(randomNumber)
    wrongGuesses = [];
    numberOfTries = 0;
    msg.innerHTML = '';
    msg.style.backgroundColor = 'white';
    wrongSpan.innerHTML = '';
    TriesSpan.innerHTML = 0;
}


newGame()