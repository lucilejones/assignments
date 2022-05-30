/**
 * CHALLENGE:
 * 
 * Play around with all the different DOM methods for selecting and modifying elements.
 * 
 * Make sure to read through the `notes.md` file for a recap and some new information regarding using the DOM API
 */

var title = document.getElementById("header1")
title.textContent = "Practice with Selecting Elements"
title.style.fontSize = "45px"

var subtitle = document.querySelector("#header2")
subtitle.innerHTML = "<h3>Using different options</h3>"


var firstList = document.getElementById("first-list")
// var newNumLi = document.createElement("li")
firstList.innerHTML += "<li class='list-items'>getElementsByClassName 4</li>"
firstList.innerHTML += "<li class='list-items'>getElementsByClassName 5</li>"
// var newNumLi2 = document.createElement("li")
// newNumLi2.textContent = "getElementsByClassName 5"
// firstList.append(newNumLi)
// firstList.append(newNumLi2)
// this (above) didn't work with the var newNum and text.Content and trying to change the textContent to the family list later


// var secondList = document.querySelector(".navbar")
// var newBulletLi = document.createElement("li")
// newBulletLi.innerHTML = "<li>querySelectorAll 4</li>"
// secondList.append(newBulletLi)
// This works OR you could do what's below

var secondList = document.getElementsByTagName("ul")[0]
var newBulletLi = document.createElement("li")
newBulletLi.innerHTML = "<li>querySelectorAll 4</li>"
secondList.append(newBulletLi)


var familyMembers = [
    "Steven",
    "Luci",
    "Brandon",
    "Wesley",
    "Evan"
]

var familyList = document.getElementsByClassName("list-items")

for (var i = 0; i < familyMembers.length; i++) {
    familyList[i].textContent = familyMembers[i]
}

console.log(familyList[4].textContent)