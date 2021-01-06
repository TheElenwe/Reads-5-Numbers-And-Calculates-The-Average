let readlineSync = require("readline-sync");
let number1 = readlineSync.question("Give me first number: ");
let number2 = readlineSync.question("Give me second number: ");
let number3 = readlineSync.question("Give me third number: ");
let number4 = readlineSync.question("Give me fourth number: ");
let number5 = readlineSync.question("Give me fifth number: ");

number1 = parseFloat(number1);
number2 = parseFloat(number2);
number3 = parseFloat(number3);
number4 = parseFloat(number4);
number5 = parseFloat(number5);

let total = (number1 + number2 + number3 + number4 + number5) / 5;

console.log(total);
