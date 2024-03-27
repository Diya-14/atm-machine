import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1407;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter yourpin",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operatIons = await inquirer.prompt([
        {
            name: "operation",
            message: "please select optiom",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operatIons);
    if (operatIons.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("ypur reamining balance is:" + myBalance);
    }
    else if (operatIons.operation === "check balance") {
        console.log("your balance is:" + myBalance);
    }
}
else {
    console.log("incorrect pin code!!!");
}
