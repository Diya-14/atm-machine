import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1407;

let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number",
});

if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

    let operations = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);

    if (operations.operation === "withdraw") {
        let withdrawOption = await inquirer.prompt([
            {
                name: "withdrawalAmount",
                message: "Select withdrawal amount or choose 'fast cash' option",
                type: "list",
                choices: ["$1000", "$10000", "$2000", "$5000", "Fast cash"]
            }
        ]);

        let amountToWithdraw = 0;

        switch (withdrawOption.withdrawalAmount) {
            case "$1000":
                amountToWithdraw = 1000;
                break;
            case "$10000":
                amountToWithdraw = 10000;
                break;
            case "$2000":
                amountToWithdraw = 2000;
                break;
            case "$5000":
                amountToWithdraw = 5000;
                break;
            case "Fast cash":
                // Define your own logic for fast cash withdrawal
                // For example, choose one of the predefined amounts randomly
                amountToWithdraw = [1000, 10000, 2000, 5000][Math.floor(Math.random() * 4)];
                break;
            default:
                console.log("Invalid option");
                "return";
        }

        if (amountToWithdraw > myBalance) {
            console.log(`Insufficient funds. Your balance is ${myBalance}`);
        } else {
            myBalance -= amountToWithdraw;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    } else if (operations.operation === "check balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
} else {
    console.log("Incorrect pin code!!!");
}
