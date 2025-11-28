

function checkAnswer() {
    const CHARACTER = 'בובספוג מכנסמרובע';
    // console.log(CHARACTER.length)
    const img = document.getElementById('img');
    const gameInput = document.getElementById('gameInput111');
    const playerGuess = gameInput.value;
    // console.log(playerGuess)
    if (CHARACTER.startsWith(playerGuess)) {
        
        const lettersLeft = CHARACTER.length - playerGuess.length;
        img.style.filter = `blur(${lettersLeft}px)`;
    }
}



