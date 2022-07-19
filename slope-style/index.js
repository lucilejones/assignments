// rest and spread

function collectAnimals(...animals) {
    animalsArray = []
    animalsArray.push(...animals)
    console.log(animalsArray)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]
collectAnimals("rabbit", "jaguar", "anteater")


function combineFruit(fruit, sweets, vegetables) {
    return { fruit, sweets, vegetables }
}

combineFruit(["apple", "pear"],
    ["cake", "pie"],
    ["carrot"])
console.log(combineFruit(["apple", "pear"],
    ["cake", "pie"],
    ["carrot"]))
//=> {
//     fruit: ["apple", "pear"],
//     sweets: ["cake", "pie"],
//     vegetables: ["carrot"]
//  }


function parseSentence({ place, duration }) {
    return `We're going to have a good time in ${place} for ${duration}`
}

parseSentence({
    place: "Burly Idaho",
    duration: "2 weeks"
});

console.log(parseSentence({
    place: "Burly Idaho",
    duration: "2 weeks"
}))


// array destructuring
function returnFirst(items) {
    // const firstItem = items[0]; /*change this line to be es6*/
    const [firstItem] = items;
    return firstItem
}


// write destructuring code to assign variables that will help return the expected string
// also change the string to use template literals
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     /*your code here*/
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
// }

// returnFavorites(favoriteActivities)

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(favorites) {
    const [firstFav, secondFav, thirdFav] = favorites;
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`;
}

returnFavorites(favoriteActivities)
console.log(returnFavorites(favoriteActivities))


// use rest and spread operators to take any number of arrays and return one array
// will need to change how the arrays are passed in
// function combineAnimals() {

// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// ["dog", "cat", "mouse", "jackolope", "platypus"]


function combineAnimals(...arrays) {
    const newArr = [...arrays];
    // console.log(newArr)
    return newArr.flat();
}

// function combineAnimals(array1, array2, array3) {
//     return [...array1, ...array2, ...array3];
// }

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
const otherAnimals = ["orangatan", "alligator", "squirrel"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals, otherAnimals);

// ["dog", "cat", "mouse", "jackolope", "platypus"]
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))
console.log(combineAnimals(realAnimals, otherAnimals))


// make this function more ES6y
// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];

//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//  }

const product = (a, b, c, d, e) => {
    const numbers = [a, b, c, d, e];

    return numbers.reduce((acc, number) => acc * number, 1)
}
console.log(product(1, 2, 3, 4, 5))


// make the following more ES6y - use rest and spread
// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
//  }

const unshift = (array, ...nums) => [...nums, ...array]

console.log(unshift(["L", "u", "c", "i"], 1, 2, 3, 4, 5))


// use destructuring and ES6 shorthand
// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

function populatePeople(names) {
    return names.map(function (name) {
        name = name.split(" ");
        const [firstName, lastName] = name
        return {
            firstName,
            lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
console.log(populatePeople(["Steven Jones", "Luci Jones", "Brandon Jones", "Wesley Jones", "Evan Jones"]))
