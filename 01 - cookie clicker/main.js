const clicksSpan = document.getElementById('clicksSpan');
const timeSpan = document.getElementById('timeSpan');
const recordMsg = document.getElementById('recordMsg');
const recordSpan = document.getElementById('recordSpan');

let clicks = 0;
let time = 5;
let interval;
let record = localStorage.getItem('cookie-record') || 0; 

recordSpan.innerHTML = record;

function clicker() {
    if (time < 1) return;
    clicks++;
    // console.log(clicks);
    clicksSpan.innerHTML = clicks;
    if (clicks === 1) timer();
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
    if (clicks > record) {
        recordMsg.style.display = 'block';
        record = clicks;
        localStorage.setItem('cookie-record', record);
        recordSpan.innerHTML = record;
    }
}


function newGame() {
    clicks = 0;
    clicksSpan.innerHTML = clicks;
    time = 5;
    timeSpan.innerHTML = time;
    recordMsg.style.display = 'none';
    recordSpan.innerHTML = record;
}