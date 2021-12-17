// var fastDuration = document.getElementById("fastDuration")
const startingMinutes = 20;
let time = startingMinutes * 60;
var timer = document.getElementById("timer")
var startBtn = document.getElementById("startBtn")
var timeLeft

const countdownEl = document.getElementById("timer")

// Timer that counts down from 1000
// click listener to activate time at start
startBtn.addEventListener("click", countdown);
function countdown(){
    var timeleft = 1000
    var fastDurationValue = fastDuration.value;
    const minutes = Math.floor(time / 60);
    // console.log(fastDurationValue)

    timer.textContent = fastDurationValue

    timerId = setInterval( function() {
        timer--;
        // timer.textContent = fastDurationValue;
    },1000);
}

countdown();

timer.innerHTML = `${minutes}:${seconds}`;
time--;
console.log(fastDurationValue)
// get the value of the input to determine the time of countdown


//start countdown