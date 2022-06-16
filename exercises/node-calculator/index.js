const readline = require("readline-sync")

function addition(num1, num2) {
    return +num1 + +num2
}

function subtraction(num1, num2) {
    return +num1 - +num2
}

function multiplication(num1, num2) {
    return +num1 * +num2
}

function division(num1, num2) {
    return +num1 / +num2
}

var num1 = readline.question('Please enter your first number. ');

var num2 = readline.question('Please enter your second number. ')

var operation = readline.question('Please enter the operation to perform: add, sub, mul, div: ')

let result
// if result is defined globally (outside of any function) then it can be called any time
// if result is defined within a function, it's local and can only be called within the function

function runOperation(num1, num2, operation) {
    // console.log(typeof num1)
    // console.log(operation)

    // let result
    // see note about result above
    if (operation === "add") {
        result = addition(+num1, +num2)
    } else if (operation === "sub") {
        result = subtraction(+num1, +num2)
    } else if (operation === "mul") {
        result = multiplication(+num1, +num2)
    } else if (operation === "div") {
        result = division(+num1, +num2)
    }
    // console.log(result)
}


runOperation(num1, num2, operation)
console.log(result)

// function runOperation(num1, num2, operation) {
//     // let result = 0
//     if (operation === "add") {
//         result = addition(num1, num2)
//     } else if (operation === "sub") {
//         result = subtraction(num1, num2)
//     } else if (operation === "mul") {
//         result = multiplication(num1, num2)
//     } else if (operation === "div") {
//         result = division(num1, num2)
//     }
//     return Number(result)
// }


// console.log(num1)
// console.log(num2)
// console.log(addition(num1, num2))
// console.log(subtraction(num1, num2))
// console.log(multiplication(num1, num2))
// console.log(division(num1, num2))
// runOperation(num1, num2, operation)
//console.log(runOperation(num1, num2, operation))
// console.log(operation)
//runOperation()
// console.log(result)
