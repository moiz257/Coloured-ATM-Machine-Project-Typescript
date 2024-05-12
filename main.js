import inquirer from "inquirer";
import chalk from "chalk";
let mypin = 2577;
let mybalance = 50000;
let atmName = "moiz ka ATM";
console.log(chalk.bold.greenBright("   YOUR BALANCE:   ", mybalance));
console.log(chalk.bold.cyanBright("\n      !   WELCOME TO MOIZ KA ATM   !      "));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.bold.blue("\nEnter Your Pin!!"),
        type: "number"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log(chalk.bold.green("\nYour pin is correct!!"));
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.bold.blue("What you would like to do"),
            type: "list",
            choices: ["Withdrawal", "Balance Inquirey", "Fast Cash", "Savings"]
        }
    ]);
    if (operationAnswer.operation === "Withdrawal") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.bold.blue("Enter Your Amount"),
                type: "input"
            }
        ]);
        mybalance -= amountAnswer.amount;
        console.log(chalk.bold.green(`\nGreat! you have done your transaction successfully: ${amountAnswer.amount}\n\n your remaining balance is ${mybalance}`));
        if (amountAnswer.amount > mybalance)
            console.log(chalk.bold.red("insufficient balance!!!"));
    }
    ;
    if (operationAnswer.operation === "Balance Inquirey") {
        console.log(chalk.bold.green(`\n\nyour balance is ${mybalance}`));
    }
    ;
    if (operationAnswer.operation === "Savings") {
        let Savingsans = await inquirer.prompt([
            {
                name: "saving",
                message: chalk.bold.blue("Enter your saving amount!!"),
                type: "input"
            }
        ]);
        mybalance -= Savingsans.saving;
        console.log(chalk.bold.green(`\n Great! you have done your transaction ${Savingsans.saving} \n\n Your remaining balance is ${mybalance}`));
        if (Savingsans.saving > mybalance)
            console.log(chalk.bold.red("insufficient balance !!!"));
    }
    else if (operationAnswer.operation === "Fast Cash") {
        let cashanswer = await inquirer.prompt([
            {
                name: "cash",
                Message: chalk.bold.blue("Select your cash"),
                type: "list",
                choices: [2000, 5000, 10000, 20000, 40000, 50000]
            }
        ]);
        mybalance -= cashanswer.cash;
        console.log(chalk.bold.green(`You have done your transaction ${cashanswer.cash}\n Your remaining balance is ${mybalance}`));
        if (cashanswer.cash > mybalance) {
            console.log(chalk.bold.red("insufficient balance"));
        }
        ;
    }
    console.log(chalk.bold.cyanBright("\n\n      Thank You For Using Our ATM!      "));
}
else {
    console.log(chalk.bold.redBright("Your pin is incorrect"));
}
;
