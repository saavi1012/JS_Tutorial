let score = "127";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// valueInNumber is used to find the value of the dataype, if it returns NaN that means not a number

/* "127" => 127 
"127abc" => NaN
true => 1; false=>0
undefined => NaN
null => 0
*/

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/* 1 => true; 0 => false
"" => false
"shreya" => true
*/

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
