const clickSpan = document.getElementById('clickSpan');
const timeSpan = document.getElementById('timeSpan');
const recordMsg = document.getElementById('recordMsg');
const recordSpan = document.getElementById('recordSpan');



let score = 0;
let time = 5;
let interval;
let record = +localStorage.getItem('cookie-record') || 0  ;

recordSpan.innerHTML = record;

function clicker() {
    score++;
    // console.log(score)
    clickSpan.innerHTML = score;
    if (score === 1) timer();
}



function timer() {
    interval = setInterval(() => {
        time--;
        // console.log(time);
        timeSpan.innerHTML = time;
        if (time < 1) {
            clearInterval(interval);
            checkRecord();
        }

    },1000 );
}


function checkRecord() {
    if (score > record) {
        recordMsg.style.display = 'block';
        record = score;
        localStorage.setItem( 'cookie-record' , record );
    }
}

function newGame() {
    recordMsg.style.display = 'none';
    score = 0;
    clickSpan.innerHTML = score;
    time = 5;
    timeSpan.innerHTML = time;
    clearInterval(interval);
    recordSpan.innerHTML = record;
}
