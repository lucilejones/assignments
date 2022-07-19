// function product(a, b, c, d, e) {
//     const numbers = [a,b,c,d,e];

//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }


function product(...numbers) {
    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1)
}

console.log(product(5, 4, 6, 8, 7))



// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
//   }

function unshift(array, ...numbers) {
    return [...numbers, ...array];
}

console.log(unshift(["4", "5", "6"], 1, 2, 3, 4, 5))
console.log(unshift(["boy", "boat", "blue"], 7, 8, 9))


// const and let
const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let petName;
        if (pets[i] === "cat") {
            petName = "fluffy"
        } else {
            petName = "spot"
        }
        console.log("pet name: ", petName)
        pet.name = petName
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


// task 1 - rewrite this .map() using an arrow function
const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}

console.log(mapVegetables(carrots))


// task2 - rewrite this .filter()'s callback as arrow function
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly
    })
}

console.log(filterForFriendly(people))


// task 3 = rewrite as arrow functions
// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }

const doMathSum = (a, b) => a + b

var produceProduct = (a, b) => a * b

console.log(doMathSum(4, 3))
console.log(produceProduct(2, 6))


// task 4 - write a pringString function that takes firstName, lastName, and age as parameters and returns a string like:
// Hi Kat Stark, how does is feel to be 40?
// firstName default "Jane", lastName default "Doe", age default "100"

function printString(firstName = "Jane", lastName = "Doe", age = 100) {
    console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`)
}

printString("Luci", "Jones", 38)
printString("Sarah")
printString("Adam", "Gardner")
printString(87)
printString()


// task 5 - use shorthand syntax to make this .filter() take up one line
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

// function filterForDogs(arr) {
//     return arr.filter(animal => {
//         if (animal.type === "dog") {
//             return true
//         } else {
//             return false
//         }
//     })
// }

const filterForDogs = (arr) => arr.filter(animal => animal.type === "dog")

console.log(filterForDogs(animals))


// template literals
// function that takes location and name parameters and outputs a message

function vacationGreeting(location, name) {
    console.log(`Hi ${name}!
    Welcome to ${location}.
    I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)
}

vacationGreeting("Paris", "Janice")