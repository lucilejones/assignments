// 1. given an array of numbers, return a new array that has only the numbers that are 5 or greater

function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function (num) {
        if (num >= 5) {
            return true
        }
    })
    return result
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


// 2. given an array of numbers, return a new array that only includes the even numbers

function evensOnly(arr) {
    const evenNumbers = arr.filter(function (num) {
        if (num % 2 === 0) {
            return true
        }
    })
    return evenNumbers
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
console.log(evensOnly([5, 29, 7, 4, 16, 23]))


// 3. given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

function fiveCharactersOrFewerOnly(arr) {
    const newArr = arr.filter(function (string) {
        if (string.length <= 5) {
            return true
        }
    })
    return newArr
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));
// ["by", "dog", "wolf", "eaten"]


// 4. given an array of people objects, return a new array that has filtered out all those who don't belong to the club

function peopleWhoBelongToTheIlluminati(arr) {
    const clubPeople = arr.filter(function (person) {
        if (person.member === true) {
            return true
        }
    })
    return clubPeople
}
// test
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]


// 5. make a filtered list of all the people who are old enough to see The Matrix

function ofAge(arr) {
    const newArr = arr.filter(function (person) {
        if (person.age >= 18) {
            return true
        }
    })
    return newArr
}
// test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]