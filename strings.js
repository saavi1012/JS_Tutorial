const name = "shreya";
const repoCount = 10;

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// Srring is a key-value pair, where it has a key and that key holds some value

const gameName = new String("shreya");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName);

console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "      shreya      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shreya.com/shreya%20";
console.log(url.replace("%20", "-"));

// split is used to split elements of any value or variable into array elements
