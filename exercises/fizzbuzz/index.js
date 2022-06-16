const numbersList = document.getElementById("numbers-list");
const numbersListArr = [];

for (let i = 1; i <= 100; i++) {
    var newNumber = document.createElement("li");
    if (i % 3 === 0 && i % 5 === 0) {
        newNumber.textContent = "fizzbuzz"
    } else if (i % 3 === 0) {
        newNumber.textContent = "fizz"
    } else if (i % 5 === 0) {
        newNumber.textContent = "buzz"
    } else {
        newNumber.textContent = i;
    }
    numbersList.append(newNumber)
    numbersListArr.push(newNumber.textContent)
}

console.log(numbersListArr)
console.log(typeof (numbersListArr[0]))

// put the multiple of 3 and 5 first
// it'll stop looking after it finds an if that's true


// // let initialValue = { fizz: 0, buzz: 0, fizzbuzz: 0 }
// let countsFizzBuzz = numbersListArr.reduce(function (previous, number) {
//     // let i = 0;
//     if (newNumber.textContent === "fizz") {
//         previous++;
//     }
//     if (newNumber.textContent === "buzz") {
//         previous++;
//     }
//     if (newNumber.textContent === "fizzbuzz") {
//         previous++;
//     }
//     return previous;
// }, { fizz: 0, buzz: 0, fizzbuzz: 0 });

// console.log(countsFizzBuzz);
// console.log(numbersListArr[2])




// const count = {};

// for (const element of numbersListArr) {
//     if (typeof (element) === 'string') {
//         if (count[element]) {
//             count[element] += 1;
//         } else {
//             count[element] = 1;
//         }
//     }
// }
// console.log(count);
// this works, but puts each number once in the object
// it's reading all the numbers as strings



// let count = 0;
// let count2 = 0;
// let count3 = 0;

// numbersListArr.forEach(function (number) {
//     if (number === "fizz") {
//         count += 1;
//     } else if (number === "buzz") {
//         count2 += 1;
//     } else if (number === "fizzbuzz") {
//         count3 += 1;
//     }
// });


// console.log(count)
// console.log(count2)
// console.log(count3)
