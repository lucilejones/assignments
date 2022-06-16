var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

// 1
vegetables.pop()
console.log("vegetables: ", vegetables);

// 2
fruit.shift()
console.log("fruit: ", fruit);

// 3
var index = fruit.indexOf("orange")
console.log(index)

// 4
fruit.push(1)
console.log("fruit: ", fruit);

// 5
var veggieLength = vegetables.length
console.log(veggieLength)

// 6
vegetables.push(3)
console.log("vegetables: ", vegetables);

// 7
var food = fruit.concat(vegetables)
console.log(food)

// 8
food.splice(4, 2)
console.log(food)

// 9
food.reverse()
console.log(food)

// 10
var stringOfFoods = food.join()
console.log(stringOfFoods)

