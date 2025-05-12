// Basic string operations
let str = "utsho";

// Standard for loop
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

console.log("======================");

// String operations with for...of loop
for (let char of str) {
  console.log(char);
}

console.log("======================");

// String operations with forEach loop
str.split("").forEach((char) => {
  console.log(char);
});

console.log("======================");

// String operations with forEach loop and arrow function (same as above)
str.split("").forEach((char) => {
  console.log(char);
});

console.log("======================");

// FIXED: forEach with destructuring needs to match the structure
// Each element is just a character (string), not an object with a char property
str.split("").forEach((char, index) => {
  console.log(char); // Just use the character directly
});

console.log("======================");

// FIXED: Working with index and value
str.split("").forEach((char, index) => {
  console.log(index, ": " + char);
});

console.log("======================");

// FIXED: Using rest parameters correctly
const chars = [...str];
chars.forEach((char, index, array) => {
  const rest = array.slice(index + 1);
  console.log(char, "remaining:", rest);
});

console.log("======================");

// FIXED: Default parameters example
str.split("").forEach((char = " ") => {
  console.log(char);
});

console.log("======================");

// Template Literals
let specialString = `This is a special string with a variable: ${str}`;
console.log(specialString); // This is a special string with a variable: hello world


console.log("======================");

let obj = {
  name: "utsho",
  age: 20,
}

console.log("My name is " + obj.name + " and I am " + obj.age + " years old.");
console.log(`My name is ${obj.name} and I am ${obj.age} years old.`); // My name is utsho and I am 20 years old.
console.log(`My name is ${obj.name} \nI am ${obj.age} years old.`); 
