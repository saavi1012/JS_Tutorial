// Date objects are static

let myDate = new Date();

/* console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); */

let myCreatedDate = new Date(2023, 9, 12, 5, 3);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp); // converted into miliseconds, like if we want to check who submitted a test first we can use this timestamp method
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000)); // When we want to convert the miliseconds into seconds we divide it by 1000 and we dont't want the seconds in decimal so we can use Math.floor for that

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});
