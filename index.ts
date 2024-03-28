import inquirer from "inquirer" 

let myBalance = 10000; //Dollar
let myPin= 1407;

let pinAnswer = await inquirer.prompt({
    name:"pin",
    message:"enter yourpin",
    type:"number",
})
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operatIons = await inquirer.prompt([
            {
                name:"operation",
                message:"please select optiom",
                type:"list",
                choices: ["withdraw", "check balance"]
            }
        ]
    );
    if(operatIons.operation === "withdraw"){
        let withdrawOption = await inquirer.prompt([
            {
                name:"withdrawAmount",
                message:"Select withdraw1 amount or choose 'fast cash' option",
                type:"list",
                choices:["$1000", "$20000", "$2000", "$5000", "fast cash"]
            }
        ]);
        let amountToWithdraw =0;
        switch(withdrawOption.withdraw1Amount){
            case "$1000":
                amountToWithdraw=1000;
                break;
                case "$20000":
                    amountToWithdraw=10000;
                    break;
                    case "$2000":
                        amountToWithdraw=2000;
                        break;
                        case "$5000":
                            amountToWithdraw=5000;
                            break;
                            case "fast cash":
                                amountToWithdraw =[1000,10000,2000,5000][Math.floor(Math.random()*4)];
                                break;
                                default:
                                    console.log("Invalid option");
                                    "return"
        }
        if(amountToWithdraw > myBalance){
            console.log(`insufficient funds. your balance is ${myBalance}`);
        }else{
            myBalance -= amountToWithdraw;
            console.log(`your reamaining balance is: ${myBalance}`);
    }
      }else if (operatIons.operation === "check balance"){

        console.log(`your current balance is: ${myBalance}`);
      }
} else {
    console.log("incorrect pin code!!!");
}