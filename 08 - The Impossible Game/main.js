const coin = document.getElementById('coin');
const footer = document.getElementById('footer');
const headline = document.getElementById('headline');


let isCheatOn = false;

function hit() {
    headline.innerHTML = 'You Did It!';
}



function move() {
    if (isCheatOn) return;

    let randomTop = ~~(Math.random() * 90);
    let randomLeft = ~~(Math.random() * 95);
    coin.style.top = randomTop+'%';
    coin.style.left = randomLeft + '%';
    headline.innerHTML = 'Get the V-Buck';
}

move()



coin.addEventListener('mouseover', move)

footer.addEventListener('mouseover', function () {
    isCheatOn = !isCheatOn;
})