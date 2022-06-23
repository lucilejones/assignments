let clickCount = 0;

const myClickFunction = function () {
    clickCount++
    document.getElementById("counter-display").textContent = clickCount

    localStorage.setItem("count", clickCount)
}

window.addEventListener("click", myClickFunction)

const count = localStorage.getItem("count")

document.getElementById("counter-display").textContent = count

setTimeout(function () {
    window.removeEventListener("click", myClickFunction)
}, 10000)

setTimeout(function () {
    console.log(`Time's up`)
}, 10000);

// extra credit
// put a countdown timer (10-30 sec) on the page
// stops the user's clicks from counting toward the total after the timer ends

const timer = document.getElementById("timer")

let countdown = 10
// let intervalId
timer.textContent = countdown

function decrementTimer() {
    countdown--
    timer.textContent = countdown
}

let intervalId = setInterval(decrementTimer, 1000)

function stopTimer() {
    clearInterval(intervalId)
}

setTimeout(stopTimer, 10000)
