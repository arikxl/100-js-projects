const enemy = document.getElementById('enemy'); 
const scoreSpan = document.getElementById('scoreSpan'); 
const heartSpan = document.getElementById('heartSpan'); 



let score = 0;
let life = 3;
let heart = '❤️';
let interval;
let speed = 1000;


function moveEnemy() {

    interval = setInterval(() => {
        
        const rndmTop = Math.floor(Math.random() * 95); 
        const rndmLeft = Math.floor(Math.random() * 95); 
        // console.log(rndmTop)
        enemy.style.top = rndmTop+'%';
        enemy.style.left = rndmLeft + '%';

    }, speed );


}

moveEnemy()


function hit() {
    if (life <1) return;

    score++;
    // console.log(score);
    scoreSpan.innerHTML = score;
    life++;
}



function miss() {
    life--;
    console.log(life);
    heartSpan.innerHTML = heart.repeat(life);

    if (life === 0) clearInterval(interval);
}