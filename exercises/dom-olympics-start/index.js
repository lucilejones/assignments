const header = document.getElementById("header")
header.textContent = "JavaScript Made This!!"
header.className = "header"
header.style.fontSize = "45px"

const subTitle = document.createElement("h2")
subTitle.innerHTML = "<span class='name'>Luci</span> wrote the JavaScript"
header.append(subTitle)
subTitle.style.fontSize = "25px"

const clearButton = document.getElementById("clear-button")

var result = document.querySelectorAll("div.messages > div")
console.log(Array.from(result))

var positiveMessages = [
    "Hi! It's great to talk to you",
    "Thanks. You are a good friend.",
    "I hope your day is going well.",
    "You too! Let's get together soon."
]

for (var i = 0; i < positiveMessages.length; i++) {
    result[i].textContent = positiveMessages[i]
}

// result[0].textContent = "Hi! It's great to talk to you."

function clearAllMessages() {
    document.querySelectorAll(".message").forEach(function (clear) {
        clear.textContent = ""
    })
}
clearButton.addEventListener("click", clearAllMessages)


const dropDown = document.getElementById("theme-drop-down")

dropDown.addEventListener("change", changeTheme);

function changeTheme() {
    if (dropDown.value === "theme-one") {
        document.querySelectorAll(".right").forEach(function (change) {
            change.style.backgroundColor = "lightblue";
        })
        document.querySelectorAll(".left").forEach(function (change) {
            change.style.backgroundColor = "burlywood";
            change.style.color = "black"
        })
    } else if (dropDown.value === "theme-two") {
        document.querySelectorAll(".right").forEach(function (change) {
            change.style.backgroundColor = "red";
        })
        document.querySelectorAll(".left").forEach(function (change) {
            change.style.backgroundColor = "black";
            change.style.color = "white"
        })
    }
}
// console.log(document.querySelectorAll(".right"))

// const sendButton = document.getElementById("send-button")
const form = document.message
// can grab with document.[name of the form]
const messageList = document.querySelector(".messages")
var message = document.getElementById("input")

var newMessage = document.createElement("div")

form.addEventListener("submit", submitMessage)
// use submit event ("submit" instead of "click" for when a button inside form tags is clicked)

function submitMessage(event) {
    event.preventDefault()
    messageList.append(newMessage)
    newMessage.textContent = message.value
    // alert("It's working")
}

console.log(message.value)

