let value = 3;
let negValue = -value;

let str1 = "hello";
let str2 = " shreya";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// In JS, if we write any operation before adding a string to it, the operation or conversion takes place first and then added to a string, but if string is written first then all of the elements are treated as a string and added to the original string.

console.log(+true); // result will be 1 bcz true = 1
console.log(+""); // result will be 0, as false = 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter; // it is using prefix as value of gameCounter is incremented before printing it, thus we will get the value after incrementation
console.log(gameCounter);

// gameCounter++ => this is postfix where first the value is printed then incremented.
