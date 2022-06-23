// 1. make an array of numbers that are doubles of the first array

function doubleNumbers(arr) {
    const newArr = arr.map(function (number) {
        return number * 2
    })
    return newArr
}

console.log(doubleNumbers([2, 5, 100]));
// [4, 10, 200]
console.log(doubleNumbers([25, 14, 150, 2000, 1.5, 6]));


// 2. take an array of numbers and make them strings

function stringItUp(arr) {
    const newArr = arr.map(function (number) {
        return number.toString()
    })
    return newArr
}

console.log(stringItUp([2, 5, 100]));
// ["2", "5", "100"]
console.log(stringItUp([65, 3, 294]));


// 3. capitalize the first letter of each name and make the rest of the characters lowercase

function capitalizeNames(arr) {
    const newArr = arr.map(function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    })
    return newArr
}
// string.charAt() tells it which index to grab a character, then .toUpperCase says to uppercase that character
// string.slice() tells it which index to start at the make a separate string, then .toLowerCase says to lowercase that whole string

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]
console.log(capitalizeNames(["uhtgsHAGH", "habiHHH", "saLLLLY", "runREG"]));


// 4. make an array of strings of the names

function namesOnly(arr) {
    const newArr = arr.map(function (person) {
        return person.name
    })
    return newArr
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// 5. make an array of strings of the names saying whether they can go to The Matrix

function makeStrings(arr) {
    const newArr = arr.map(function (person) {
        if (person.age >= 18) {
            return `${person.name} can go to The Matix`
        } else if (person.age < 18) {
            return `${person.name} is under age!!`
        }
    })
    return newArr
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]


// 6. make an array of the names in h1s and the ages in h2s

function readyToPutInTheDOM(arr) {
    const newArr = arr.map(function (person) {
        return `<h1>${person.name}</h1><h2>${person.age}</h2>`
    })
    return newArr
}


console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]



