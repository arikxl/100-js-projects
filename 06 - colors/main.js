const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const colorP = document.getElementById('colorP');


let COLOR = '';


function changeColor() {
    let red = redInput.value;
    let green = greenInput.value;
    let blue = blueInput.value;

    COLOR = `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor = COLOR;
    colorP.innerHTML = COLOR;
}


changeColor()


function randomColor() {
    let randomRed = ~~(Math.random()*255)
    let randomGreen = ~~(Math.random()*255)
    let randomBlue = ~~(Math.random()*255)
    // console.log(randomRed)

    COLOR = `rgb(${randomRed},${randomGreen},${randomBlue})`;
    document.body.style.backgroundColor = COLOR;
    colorP.innerHTML = COLOR;
    redInput.value = randomRed;
    greenInput.value = randomGreen;
    blueInput.value = randomBlue;
}

randomColor() 