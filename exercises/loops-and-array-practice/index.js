var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

count = 0
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        count++
    }
}
console.log(count)


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gener === "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. He's good to see Max Fury.")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. She's good to see Max Fury.")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max. Don't let him in.")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max. Don't let her in.")
    }
}



// numbersArr = [9, 3, 4, 2]

// let sum = 0
// for (var i = 0; i < numbersArr.length; i++) {
//     sum += numbersArr[i];
//     if (sum % 2 === 1) {
//         console.log("The light is off")
//     }
// }

numbersArr2 = [1, 2, 1, 1, 3]

let sum = 0
for (var i = 0; i < numbersArr2.length; i++) {
    sum += numbersArr2[i];
}

console.log(sum)
if (sum % 2 === 1) {
    console.log("The light is on")
} else if (sum % 2 === 0) {
    console.log("The light is off")
}

