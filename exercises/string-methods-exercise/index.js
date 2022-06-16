// capilizeAndLowercase("HelLo") // => "HELLOhello"

function capilizeAndLowercase(string) {
    var capitalString = string.toUpperCase()
    // console.log(capitalString)
    var lowercaseString = string.toLowerCase()
    // console.log(lowercaseString)
    var fullString = capitalString.concat(lowercaseString)
    console.log(fullString)
}

capilizeAndLowercase("HelLo")


// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5

function findMiddleIndex(string) {
    var stringLength = string.length
    // console.log(stringLength)
    var halfStringLength = Math.floor(stringLength / 2)
    console.log(halfStringLength)
}

findMiddleIndex("Hello World")


// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"

function returnFirstHalf(string) {
    var stringLength = string.length
    // console.log(stringLength)
    var halfStringLength = Math.floor(stringLength / 2)
    var index = halfStringLength
    // console.log(index)
    var firstHalf = string.slice(0, index)
    console.log(firstHalf)
}

returnFirstHalf("Hello World")


// capilizeAndLowercase2("Hello") // => "HEllo"
// capilizeAndLowercase2("Hello World") // => "HELLO world"

function capilizeAndLowercase2(string) {
    var stringLength = string.length
    // console.log(stringLength)
    var halfStringLength = Math.floor(stringLength / 2)
    var index = halfStringLength
    // console.log(index)
    var firstHalf = string.slice(0, index)
    // console.log(firstHalf)
    var secondHalf = string.slice(index)
    // console.log(secondHalf)
    var capitalFirstHalf = firstHalf.toUpperCase()
    // console.log(capitalFirstHalf)
    var lowerSecondHalf = secondHalf.toLowerCase()
    // console.log(lowerSecondHalf)
    console.log(capitalFirstHalf.concat(lowerSecondHalf))
}

capilizeAndLowercase2("hello world")


// Write a function that takes a string as a parameter and capitalizes any character that follows a space.
// (This one is a step up in difficulty and utilizes the .split() string method and .join() array method)
// capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"
// At first, you need to split() the string on the basis of space and extract the first character using charAt(). Use toUpperCase() for the extracted character.

function capitalize(string) {
    var separateString = string.split(" ")
    console.log(separateString)
    for (var i = 0; i < separateString.length; i++) {
        separateString[i] = separateString[i].charAt(0).toUpperCase() + separateString[i].substring(1);
    }
    console.log(separateString.join(" "))
}

capitalize("hey friends! practice practice practice")

