let game = true;

// write a function to randomly choose the player?
// function whichPlayer(){
//     let randoNum = getRandomInt(0,1)
//     if (randoNum === 0){
//         setName = "Mario"
//     } else if (randoNum === 1){
//         setName = "Luigi"
//     }
// }


class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }

    setName(namePicked) {
        if (namePicked === "Mario") {
            this.name = "Mario"
        } if (namePicked === "Luigi") {
            this.name = "Luigi"
        }
    }

    gotHit() {
        // called whenever player is hit by enemy, sets status property
        if (this.status === "Powered Up") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Small"
        } else if (this.status === "Small") {
            this.status = "Dead"
        }
        player.print()
        stopGame()
    }

    gotPowerup() {
        // called when a powerup is received, sets status
        if (this.status === "Small") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            this.hasStar = true
        }
        player.print()
        stopGame()
    }

    addCoin() {
        this.totalCoins++
        player.print()
        stopGame()
    }

    print() {
        console.log(`
        Name: ${this.name}
        Status: ${this.status}
        Total Coins: ${this.totalCoins}`)
        if (this.hasStar === true) {
            console.log(`       You have a star.`)
        }
    }
}

const player = new Player("Luigi", 0, "Big", false)
// player.addCoin()
player.print()


function randomRange() {
    const randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber)
    if (randomNumber === 0) {
        player.gotHit()
    } else if (randomNumber === 1) {
        player.gotPowerup()
    } else if (randomNumber === 2) {
        player.addCoin()
    }
}

const intervalID = setInterval(randomRange, 2000)

function stopGame() {
    if (player.status === "Dead") {
        console.log(`       Oh no! You died.
        Your final score was ${player.totalCoins}.`)
        clearInterval(intervalID)
    }
}
