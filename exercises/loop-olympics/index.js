for (var i = 0; i < 10; i++) {
    console.log(i)
}


for (var i = 10 - 1; i >= 0; i--) {
    console.log(i)
}


const fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}


numbersArr = []

for (var i = 0; i < 10; i++) {
    numbersArr.push(i)
}
console.log(numbersArr)


for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}


const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

fruit3 = []
for (var i = 0; i < fruit2.length; i++) {
    if (i % 2 === 1) {
        fruit3.push(fruit2[i])
    }
}
console.log(fruit3)


const peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
}

namesArr = []
occupationsArr = []

// for (var i = 0; i < peopleArray.length; i++) {
//     namesArr.push(peopleArray[i].name)
//     occupationsArr.push(peopleArray[i].occupation)
// }
// console.log(namesArr)
// console.log(occupationsArr)

for (var i = 0; i < peopleArray.length; i++) {
    if (i % 2 === 0) {
        namesArr.push(peopleArray[i].name)
    } else if (1 % 2 === 1) {
        occupationsArr.push(peopleArray[i].occupation)
    }
}
console.log(namesArr)
console.log(occupationsArr)


arr = []

for (var i = 0; i < 3; i++) {
    arrInside = []
    for (var j = 0; j < 3; j++) {
        arrInside.push(0)
        // change 0 to i for second grid (from assignment), and to j for third
    }
    arr.push(arrInside)
}
console.log(arr)

// this for loop changes all the items to x's
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arrInside.length; j++) {
        arr[i][j] = "x"
    }
}
console.log(arr)


// arr = []

// for (var i = 0; i < 4; i++) {
//     arrInside = []
//     for (var j = 0; j < i + 1; j++) {
//         arrInside.push(i + j)
//     }
//     arr.push(arrInside)
// }
// console.log(arr)