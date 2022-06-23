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




function countsFizzBuzz(arr) {
    const countsObj = arr.reduce(function (final, number) {
        if (number.includes("fizz") && !number.includes("buzz")) {
            final.fizz++
        }
        if (number.includes("buzz") && !number.includes("fizz")) {
            final.buzz++
        }
        if (number.includes("fizzbuzz")) {
            final.fizzbuzz++
        }
        return final
    }, { fizz: 0, buzz: 0, fizzbuzz: 0 })
    return countsObj
}
console.log(countsFizzBuzz(numbersListArr))



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
