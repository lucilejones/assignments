const readline = require('readline-sync');
const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
const shift = parseInt(readline.question('How many letters would you like to shift? '));


function encrypt(str, num) {
    if (num < 1 || num > 26) {
        return "Please enter a number between 1 and 26."
    }
    let strArray = str.split("");
    let cipherLetters = strArray.map(function (value, index) {
        if (str.codePointAt(index) < 97 || str.codePointAt(index) > 122) {
            return value
        } else {
            return String.fromCharCode(((str.codePointAt(index) - 97 + num) % 26) + 97)
        }
    })
    return cipherLetters.join("");
}

console.log(encrypt(input, shift))





// function encrypt(str, num) {
//     if (num < 1 || num > 26) {
//         return "Please enter a number between 1 and 26."
//     }
//     let strArray = str.split("");
//     let cipherLetters = strArray.map(function (value, index) {
//         if (str.codePointAt(index) < 97 || str.codePointAt(index) > 122) {
//             return value
//         } if (str.codePointAt(index) + num > 122) {
//             return String.fromCharCode(str.codePointAt(index) - (26 - num))
//         } else {
//             return String.fromCharCode(str.codePointAt(index) + num)
//         }
//     })
//     return cipherLetters.join("");
// }

// console.log(encrypt(input, shift))
