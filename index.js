import chalk from "chalk";
import inquirer from "inquirer";
//Creating a class of Player
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    //Method to decrease fuel of a player
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    //Method to increase fuel of a player by drinking portion
    fuelIncrease() {
        this.fuel = 100;
    }
}
;
//Creating a class of Oponent
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    //Method to decrease fuel of an opponent
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
;
let player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Please Enter Your Name:"
    }
]);
let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "choose",
        message: "Choose Your Opponent:",
        choices: ["Skeleton", "Assassin", "Zombie"]
    }
]);
//Creating objects Player and Opponent Class
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.choose);
console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
while (true) {
    //Skeleton
    if (opponent.choose == "Skeleton") {
        console.log();
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select the Action:",
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor((Math.random() * 2));
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose! Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("Congratulations! You Have Won The Game!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`You Have Drank Health Portion! Your Fuel is ${p1.fuel}!`));
        }
        if (ask.opt == "Run For Your Life") {
            console.log(chalk.red.bold.italic("You Loose! Better Luck Next Time!"));
            process.exit();
        }
    }
    //Assassin
    if (opponent.choose == "Assassin") {
        console.log();
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select the Action:",
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor((Math.random() * 2));
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose! Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("Congratulations! You Have Won The Game!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`You Have Drank Health Portion! Your Fuel is ${p1.fuel}!`));
        }
        if (ask.opt == "Run For Your Life") {
            console.log(chalk.red.bold.italic("You Loose! Better Luck Next Time!"));
            process.exit();
        }
    }
    //Zombie
    if (opponent.choose == "Zombie") {
        console.log();
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select the Action:",
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor((Math.random() * 2));
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose! Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("Congratulations! You Have Won The Game!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`You Have Drank Health Portion! Your Fuel is ${p1.fuel}!`));
        }
        if (ask.opt == "Run For Your Life") {
            console.log(chalk.red.bold.italic("You Loose! Better Luck Next Time!"));
            process.exit();
        }
    }
}
