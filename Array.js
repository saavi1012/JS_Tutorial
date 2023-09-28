// In JS, Arrays are objects

const { Splitscreen } = require("@mui/icons-material");

// Arrays are resizable and can contain mix of different data types.

const myArr = [0, 1, 2, 3, 4, 5, 6];

console.log(myArr[0]); // JS Arrays are associative, thus elements can't be accessed using arbitrary strings as indexes, but must be accessed using non-negative integers

// Shallow Copy ---> A shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made

// Deep Copy ---> These copies don't share the same reference

const name = ["shreya", "yash"];

const myArr2 = new Array(1, 2, 3, 4); // Arrays can also be declared like this

myArr.push(7); // used for adding an element in array
myArr.pop(); // used for removing an element from array
console.log(myArr);

myArr.unshift(9);
myArr.shift();
console.log(myArr);

// Difference between slice and Splice

/* Slice returns a piece of array but doesn't affect  the original array
 Splice changes the original array by removing, replacing or adding values and returns the affected values.
*/

// In array, if we do myArr1.push(myArr2) then these 2 arrays aren't merged, myArr2 is comes inside myArr1

// But, myArr1.concat(myArr2), this merges both array easily

// const allArr = [...myArr1, ...myArr2], this is called spreading the array, this is the best way of merging 2 arrays, also if we want we can add new value here

// if there are array inside array inside array, then we can use flat() and enter the depth till where we want to concatenate the values as single elements inside array

// We can convert any value into an array, by using from
