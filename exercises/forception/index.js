var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
    var upperCaseAlphabet = alphabet.toUpperCase()
    console.log(upperCaseAlphabet)

    var splitUpperCaseAlphabet = upperCaseAlphabet.split("")
    console.log(splitUpperCaseAlphabet)
    splitUpperCaseAlphabet.reverse()

    for (var i = people.length - 1; i >= 0; i--) {
        people[i] = people[i] + ":"
        for (var j = 0; j < splitUpperCaseAlphabet.length; j++) {
            people.splice([i + 1], 0, splitUpperCaseAlphabet[j])
        }
    }
    console.log(people)
}

forception(people, alphabet)


// var trips = ["Paris", "New York", "Death Valley"]
// var vehicle = "car"
// forception(trips, vehicle)



// var upperCaseAlphabet = alphabet.toUpperCase()
// console.log(upperCaseAlphabet)

// var splitUpperCaseAlphabet = upperCaseAlphabet.split("")
// console.log(splitUpperCaseAlphabet)
// splitUpperCaseAlphabet.reverse()


// for (var i = people.length; i >= 0; i--) {
//     people[i] = people[i] + ":"
//     for (var j = 0; j < splitUpperCaseAlphabet.length; j++) {
//         people.splice([i + 1], 0, splitUpperCaseAlphabet[j])
//     }
// }

// console.log(people)

// for (var i = people.length; i >= 0; i--) {
//     people[i] = people[i] + ":"
//     for (var j = 0; j < splitUpperCaseAlphabet.length; j++) {
//         people.splice([i], 0, splitUpperCaseAlphabet[j])
//     }
// }

// console.log(people)