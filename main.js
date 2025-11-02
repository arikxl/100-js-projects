const player = document.getElementById('player');
const money = document.getElementById('money');
const lifeH2 = document.getElementById('lifeH2');
const scoreSpan = document.getElementById('scoreSpan');


const COINS = ['🪙', '💎', '💴', '💷', '💳', '💵', '💶', '💰', '💸'];
const LIFE_ICON = '🤑';

let game = {
    score: 0,
    life: 5,
    extraSpeed:0.1,
    isGameOver: false,
    player: {
        left: 45,
        speed:1
    },
    money: {
        top: 0,
        left: 45,
        speed:0.3,
    }
}

function updateGameLogic() {
    // if (game.isGameOver) return;

    game.money.top += game.money.speed;;

    if (game.money.top > 92) {
        const distance  = Math.abs(game.money.left - game.player.left)
        // console.log(distance)

        if (distance < 7) {
            catchMoney()
        } else {
            miss();
        }
    }

}



function updateUI() {
    player.style.left = game.player.left + '%';
    money.style.top = game.money.top + '%';
    money.style.left = game.money.left + '%';
    lifeH2.innerHTML = LIFE_ICON.repeat(game.life);
    scoreSpan.innerHTML = game.score;
}

function resetMoney() {
    game.money.top = 0;
    game.money.left = ~~(Math.random() * 95);
    money.innerHTML = COINS[~~(Math.random() * COINS.length)];
}


function catchMoney () {
    game.score++;

    if (game.score % 5 === 0) {
        game.life++;
        game.money.speed += game.extraSpeed;
    }

    resetMoney();
}

function miss() {
    // alert('MISS')
    game.life--;
    if (game.life < 0) {
        // alert('GAME OVER!');
        game.isGameOver = true;
    } else {
        resetMoney();
    }

    
}


function loop() {
    updateUI();
    updateGameLogic()

    if (game.isGameOver) {
        money.style.display = 'none';
        alert('GAME OVER')

    } else {
        requestAnimationFrame(loop);
    }
}





function movePlayer(e) {
    // console.log(e);
    if (e.code === 'ArrowLeft' && game.player.left>0) {
        game.player.left -= game.player.speed;
    } else if (e.code === 'ArrowRight' && game.player.left < 90) {
        game.player.left += game.player.speed;
    }
    // console.log(game.player.left)
}


document.addEventListener('keydown', movePlayer);
loop();
