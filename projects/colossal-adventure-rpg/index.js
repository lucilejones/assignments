const readline = require("readline-sync");

let game = true;
let xp = 6;

const enemies = ["mean girl", "pop quiz", "rip in your jeans", "bully", "late bell"];
const items = ["trapper keeper", "cherry chapstick", "study guide for the next test", "graphing calculator", "soda", "five dollar bill", "glitter pen", "pack of gum", "fidget pop-it", "granola bar"];
const backpack = [];
const encouragementList = ["Things are going smoothly so far!", "You are rockin' it!", "Confidence looks good on you.", "You got this.", "No problems here.", "High School is your jam."];


console.log(`\nWelcome to your first day at Riverwood High School!`);
const name = readline.question("What is your name? ");
console.log(`\nAlright, ${name}. High School can be tricky. Keep alert and you'll do great!`);

while (game) {
    schedule()
    if (xp <= 0) {
        console.log(`\nSchool's not your thing today. You call your parents to pick you up.`);
        game = !game
    } else if (xp >= 12) {
        console.log(`\nCongrats, ${name}! You made it through your first day.`);
        console.log(`\nName: ${name} \nExperience Points: ${xp} \nBackpack: ${backpack} \n`);
        game = !game
    }
}

function schedule() {
    const followSchedule = readline.question(`\nEnter (s) to follow your schedule, (b) to check your backpack. \nEnter (print) or (p) to check game stats. `);
    if (followSchedule === "s") {
        randomEnemy()
    } else if (followSchedule === "b") {
        checkBackpack()
    } else if (followSchedule === "p" || followSchedule === "print") {
        console.log(`\nName: ${name} \nExperience Points: ${xp} \nBackpack: ${backpack}`);
    }
}

function checkBackpack() {
    console.log(`\nYou look in your backback and this is what you find: `);
    console.log(backpack);
}

function randomEnemy() {
    const randomNumber = Math.random();
    // console.log(randomNumber)
    if (randomNumber <= 1 / 3) {
        const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
        console.log(`\nOh no! You've encountered a challenge. It's a ${randomEnemy}.`);
        const willFight = readline.question(`Enter (f) to face and resolve the issue, (r) to run. `);
        if (willFight === "f") {
            chooseToFight();
        } else if (willFight === "r") {
            run();
        } else {
            run();
        }
    } else if (randomNumber > 1 / 3) {
        const noEnemy = encouragementList[Math.floor(Math.random() * encouragementList.length)];
        console.log(`\n${noEnemy}`);
    }
}

function chooseToFight() {
    let fight = true;
    let enemyDamage = 0;
    let playerDamage = 0;

    while (fight) {
        console.log(`You use your wits.`);
        enemyDamage = enemyDamage + Math.floor(Math.random() * 3) + 1;
        // min damage is 1, max is 3
        // could put +1 inside the floor function
        console.log(`The challenge has been reduced by ${enemyDamage}.`);

        if (enemyDamage >= 5) {
            console.log(`You win! Gain 2 XP.`);
            xp = xp + 2;
            addToBackpack();
            fight = !fight
        } else if (enemyDamage < 5) {
            console.log(`This challenge tries to get the better of you.`);
            playerDamage = playerDamage + Math.floor(Math.random() * 3) + 1;
            console.log(`You have lost ${playerDamage} health.`);
            if (playerDamage >= 5) {
                console.log(`You lose. Lose 2 XP.`);
                xp = xp - 2;
                fight = !fight
            }
        }
    }
}

function addToBackpack() {
    const gainedItem = items.splice(Math.floor(Math.random() * items.length), 1);
    backpack.push(gainedItem[0]);
    console.log(`\nYou've earned a ${gainedItem}! Put it in your backpack. `);
}

function run() {
    const randomNumber = Math.random();
    // console.log(randomNumber)
    if (randomNumber < 1 / 2) {
        console.log(`\nYou got away this time.`);
    } else if (randomNumber >= 1 / 2) {
        const pause = readline.question(`\nYou're going to have to face this. Press enter to continue. `);
        runButThenFight();
    }
}

function runButThenFight() {
    let fight = true;
    let enemyDamage = 0;
    let playerDamage = 0;

    while (fight) {
        // while(enemyDamage < 5 && playerDamage < 5)
        console.log(`This challenge tries to get the better of you.`);
        playerDamage = playerDamage + Math.floor(Math.random() * 3) + 1;
        console.log(`You have lost ${playerDamage} health.`);

        if (playerDamage >= 5) {
            console.log(`You lose. Lose 2 XP.`);
            xp = xp - 2;
            fight = !fight
        } else if (playerDamage < 5) {
            console.log(`You use your wits.`);
            enemyDamage = enemyDamage + Math.floor(Math.random() * 3) + 1;
            console.log(`The challenge has been reduced by ${enemyDamage}.`);
            if (enemyDamage >= 5) {
                console.log(`You win! Gain 2 XP.`);
                xp = xp + 2;
                addToBackpack();
                fight = !fight
            }
        }
    }
}




// notes for completing challenge
// go requirement by requirement
// use the debugger [feedback loop is faster]
// good to have classmate look over code

// decide what local and global variables are going to be
// local if only used within a function

// enemy selection function that would return an enemy to the enemy encounter function
// have that enemy you could then pass to a fight function or enemy attack function

// good variables to be global are the player's health points and the enemies array

// write functions for every little action that happens, keep close to the left
// don't make functions too big

// try not to have functions call themselves or call each other
// stack is ok as long as it's linear: walk calls encounter which calls fight which calls enemy attack, etc
// circular flow - walk through, encounter, then get back to walking
// game loop
// also loops when player encounters an enemy


// use a while loop
// while (hp > 0) {
//     walk()
// }

// walk will get called, walk will call fight, fight will call selectWinner
// then will get taken off the stack as they resolve
// then when the stack is empty, while loops will ask is hp still greater than 0?
// yes, then call walk again