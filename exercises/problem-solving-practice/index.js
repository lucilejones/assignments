// write a function that takes an array of numbers and returns the largest
// without using Math.max()

let arr1 = [3, 5, 2, 8, 1];
let arr2 = [57, 200, 4, 19, 30]


function largest(array) {
    temp = 0
    array.forEach(function (element) {
        if (temp < element) {
            temp = element;
        }
    });
    console.log(`The largest number in the array: ${temp}`);
}

largest(arr1)
largest(arr2)
// if temp is smaller than the current value that's being evaluated, then change temp to the current value



// write a function that takes an array of words and a character and returns each word that has that characater

let wordArr = ["#3", "$$$", "C%4!", "Hey!"]
let wordArr2 = ["Bob", "Cherry", "Roses", "Oranges", "Basketball", "Chocolate"]


function lettersWithStrings(array, string) {
    let newWordArr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].includes(string)) {
            newWordArr.push(array[i]);
        }
    }
    return newWordArr;
}

// console.log(newWordArr) - won't work because newWordArr is only defined within the function
console.log(lettersWithStrings(wordArr, "!"))
console.log(lettersWithStrings(wordArr2, "o"))



// write a function that takes a num1 and num2 and returns when num1 is divisible by num2

function isDivisible(num1, num2) {
    if (num1 % num2 === 0) {
        return true
    } else return false
}
console.log(isDivisible(4, 2));
console.log(isDivisible(9, 3));
console.log(isDivisible(15, 4));