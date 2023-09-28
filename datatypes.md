# Datatypes

"use strict"; // treat all JS code as newer version

In most of the JS Frameworks we avoid using semi-colon. We should also make our code readable.

## Primitive Datatypes

7 types: String, Number, Boolean, null, undefined, symbol

JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

    Example:  const score = 100
              const scoreValue = 100.3

              const isLoggedIn = false
              const outsideTemp = null
              let userEmail;

              const id = Symbol('123')
              const anotherId = Symbol('123')

              console.log(id == anotherId);

              const bigNumber = 23465634827495820n  // n at the end of number represnets bigint

let name = "Shreya" // string datatype
let age = 20 // int dataype
let isLoggedIn = false // boolean datatype

number => 2^53
bigint
string => "value inside double-quotes"
boolean => true/false
null => stand-alone value, it is like an empty value
undefined => value not assigned to dataype
symbol => used to find uniqueness in a component

## Reference Datatype (Non-Primitive)

It includes array, objects and functions

    Example:  const persons = ["shreya", "yash", "saavi"];
              let obj = {
                name: "yash",
                age: 21,
              }

We can also store a function as variable,

    Example:  const myFunction = function(){
                    console.log("Hello World");
              }  // The dataype of myFunction is function only

## Object

console.log(typeof "Shreya") ---> used to specify the type or dataype of the variable given

console.log(typeof null) ---> it comes out to be object
In JavaScript null is "nothing". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object. You can consider it a bug in JavaScript that typeof null is an object.

console.log(typeof undefined) ---> undefined
