var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr) {
    const olderThan18 = arr.filter(function (person) {
        if (person.age >= 18) {
            return true
        }
    })
    olderThan18.sort(function (a, b) {
        let nameA = a.lastName
        let nameB = b.lastName
        return nameA.localeCompare(nameB)
    })
    const newOlderThan18 = olderThan18.map(function (person) {
        return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
    })
    return newOlderThan18
}

console.log(sortedOfAge(peopleArray));

/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/

// extra credit
var peopleArray2 = [
    {
        firstName: "Paul",
        lastName: "Rudd",
        age: 53
    },
    {
        firstName: "Salma",
        lastName: "Hayek",
        age: 55
    },
    {
        firstName: "Mariah",
        lastName: "Carey",
        age: 53
    }
]

const fullPeopleArray = peopleArray.concat(peopleArray2)

console.log(fullPeopleArray)

function filteredOutYAndA(arr) {
    const newArr = arr.filter(function (person) {
        let lName = person.lastName
        if (lName.charAt(lName.length - 1) === "y" || lName.charAt(lName.length - 1) === "a") {
            return true
        }
    })
    newArr.splice(1, 1);
    newArr.reverse();
    return newArr
}
console.log(filteredOutYAndA(fullPeopleArray))

// function filteredOutYAndA(arr) {
//     const newArr = arr.filter(function (person) {
//         let lName = person.lastName
//         if (lName.charAt(lName.length - 1) === "y" || lName.charAt(lName.length - 1) === "a") {
//             return true
//         }
//     })
//     return newArr
// }
// console.log(filteredOutYAndA(fullPeopleArray))

// const shortenedArray = filteredOutYAndA(fullPeopleArray)

// console.log(shortenedArray)

// const splicedArray = shortenedArray.splice(1, 1)
// console.log(splicedArray)
// console.log(shortenedArray)
// shortenedArray.reverse()
// console.log(shortenedArray)