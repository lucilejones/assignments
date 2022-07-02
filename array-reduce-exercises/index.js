// 1. turn an array of numbers into a total of all the numbers

function total(arr) {
    const newArr = arr.reduce(function (final, num) {
        final += num
        return final
    })
    return newArr
}

// function total(arr) {
//     const newArr = arr.reduce((final, num) => final += num)
//     return newArr
// }

console.log(total([1, 2, 3])); // 6


// 2. turn an array of numbers into a long string of all those numbers

function stringConcat(arr) {
    const newString = arr.reduce(function (final, num) {
        final += num.toString()
        return final
    }, "")
    return newString
}

console.log(stringConcat([1, 2, 3])); // "123"
console.log(stringConcat([52, 17, 5, 23, 7, 988]))


// 3. turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
    const voteCount = arr.reduce(function (final, voter) {
        if (voter.voted) {
            final++
        }
        return final
    }, 0)
    return voteCount
}

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
// console.log(totalVotes(voters)); // 7

// function totalVotes(arr) {
//     const voteCount = []
//     arr.forEach(function (voter) {
//         if (voter.voted === true) {
//             voteCount.push(voter)
//         }
//         return voteCount
//     })
//     return voteCount.length
// }
// console.log(totalVotes(voters))

// function totalVotes(arr) {
//     const voteCount = arr.filter(function (voter) {
//         if (voter.voted) {
//             return true
//         }
//     })
//     return voteCount.length
// }
// console.log(totalVotes(voters))


// 4. given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
    const totalPrice = arr.reduce(function (final, item) {
        final += item.price
        return final
    }, 0)
    return totalPrice
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005


// 5. given an array of arrays, flatten them into a single array

function flatten(arr) {
    const newArr = arr.reduce(function (final, array) {
        final = final.concat(array)
        return final
    }, [])
    return newArr
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// arrays = arrays.reduce(function(a, b){
//     return a.concat(b);
// }, []);


// 6. given an array of potential voters, return an object representing the results of the vote

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
    const voterObj = arr.reduce(function (final, voter) {
        if (voter.age <= 25 && voter.voted === true) {
            final.numYoungVotes++
        }
        if (voter.age <= 25) {
            final.numYoungPeople++
        }
        if (voter.age > 25 && voter.age <= 35 && voter.voted === true) {
            final.numMidVotes++
        }
        if (voter.age > 25 && voter.age <= 35) {
            final.numMidsPeople++
        }
        if (voter.age > 35 && voter.voted === true) {
            final.numOldVotes++
        }
        if (voter.age > 35) {
            final.numOldsPeople++
        }
        return final
    }, { numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidsPeople: 0, numOldVotes: 0, numOldsPeople: 0 })
    return voterObj
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/


