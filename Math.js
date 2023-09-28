const score = 300;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length); // Here, we have converted balance from number to string datatype, and now cal also use features of string with it

console.log(balance.toFixed(2)); // It rounds the string to a specified number of decimals

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundereds.toLocaleString(en - IN)); // used to convert the number in Indian Number system for better readability

// Has various features like Math.random, Math.round, Math.ceil, Math.floor, Math.min, Math.maz, etc.
// Math.random always lies between 0 and 1.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
