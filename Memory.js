/* There are 2 types of memories, Stack and Heap.

We use Stack Memory in Primitive Datatypes. Here, we get a copy of the variable declared.

We use Heap Memory in Non-Primitive Datatypes. Here, we get the reference of the variable declared. */

let myFullname = "Shreya Tyagi";
let anothername = myFullname;
anothername = "Shreya Sharma";
console.log(myFullname);
console.log(anothername);

let userOne = {
  email: "shreyat1012@gamil.com",
  upi: "user@upi",
};

let userTwo = userOne;

userTwo.email = "saavi1012@gamil.com";
console.log(userOne.email);
console.log(userTwo.email);
