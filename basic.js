// Primitive Types
let name = "SDM"; // string
let age = 24; // number
let isApproved = true; // boolean
let firstName = undefined; // default value in js
let lastName = null; // null
console.log(typeof name);

// Dynamic Typing
let person = {
  fName: "SDM",
  lName: "DM",
  age: 24,
};

console.log(person);

// dot notation
console.log(person.fName);
console.log(person.lName);

// brackets notation
person["occ"] = "student";
console.log(person);

let gender = 'gender'
person[gender] = 'male'

console.log(person);



