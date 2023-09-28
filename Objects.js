const mySym = Symbol("key1");

const jsUser = {
  name: "Shreya",
  age: "20",
  mySym: "mykey1",
  location: "noida",
  isLoggedIn: false,
};

console.log(jsUser["name"]); // best way using an object

console.log(jsUser.mySym); // when we want to refer to a symbol key we put it inside []

jsUser.age = "21"; // changes the value of whichever key we want to
// Object.freeze(jsUser);
jsUser.age = "22";
console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello JS User");
};

jsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`); // It is a feature that allows injecting variables, function calls, arithmetic expressions directly into a string. String interpolation was absent in JavaScript before ES6
};
console.log(jsUser.greeting());
