function sum(x, y) {
    if (typeof x != 'number' || typeof y != 'number') {
        throw ("not a number")
    } else {
        return x + y;
    }

}

// console.log(sum(5, 2))

try {
    sum("1", "2")
}
catch (err) {
    console.log(err)
}


var user = { username: "sam", password: "123abc" };
var user = { username: "beth", password: "understudy5" }
function login(username, password) {
    if (user.username !== username || user.password !== password) {
        throw "Username and password do not match"
    } else {
        console.log("Login successful!")
    }
}

try {
    login("beth", "123abc")
}
catch (err) {
    console.log(err)
}
