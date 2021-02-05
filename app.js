var min = 0
var sec = 0
var milisec = 0
var displayMin = document.getElementById('min')
var displaySec = document.getElementById('sec')
var displayMili = document.getElementById('mili')
var timerplay;

function timer() {
    milisec++
    displayMili.innerHTML = milisec
    if (milisec == 100) {
        sec++
        displaySec.innerHTML = sec
        milisec = 0
    } else if (sec == 60) {
        min++
        displayMin.innerHTML = min
        sec = 0
    }
}


function start() {
    var btn = document.getElementById('start').style.display = 'none'
    timerplay = setInterval(timer, 10);
}
function pause() {
    var btn = document.getElementById('start').style.display = 'inline-block'
    clearInterval(timerplay)
}
function reset() {
    milisec = 0
    sec = 0
    min = 0
    displayMili.innerHTML = milisec
    displaySec.innerHTML = sec
    displayMin.innerHTML = min
}
