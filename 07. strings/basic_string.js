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

// Extended content follows

console.log("======================");
// String escape sequences
console.log("String with tab \t and newline \n characters");
console.log("String with backslash \\ and quotes \'single\' \"double\"");
console.log("Unicode character: \u00A9"); // Copyright symbol

console.log("======================");
// Using String constructor
let constructedString = new String("utsho");
console.log(typeof constructedString); // object
console.log(typeof constructedString.valueOf()); // string

console.log("======================");
// Multi-line template literals
let multiLine = `This is a
multi-line
string using
template literals`;
console.log(multiLine);

console.log("======================");
// Template literal with expressions
let a = 5;
let b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}`);
console.log(`${a} times ${b} equals ${a * b}`);

console.log("======================");
// Tagged template literals
function highlight(strings, ...values) {
  let result = '';
  strings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      result += `<strong>${values[i]}</strong>`;
    }
  });
  return result;
}

let name = "utsho";
let age = 20;
let highlightedText = highlight`My name is ${name} and I am ${age} years old.`;
console.log(highlightedText); // My name is <strong>utsho</strong> and I am <strong>20</strong> years old.

console.log("======================");
// Raw string literals
console.log(String.raw`Not processing \n as a newline`);

console.log("======================");
// String comparison
let str1 = "apple";
let str2 = "banana";
console.log(str1 < str2); // true (lexicographical comparison)
console.log("apple" === "Apple"); // false (case-sensitive)
console.log("apple".localeCompare("banana")); // negative (comes before)

console.log("======================");
// String.fromCharCode and String.fromCodePoint
console.log(String.fromCharCode(65)); // "A"
console.log(String.fromCodePoint(128512)); // "😀"

console.log("======================");
// String padding (ES2017)
let shortString = "42";
console.log(shortString.padStart(5, "0")); // "00042"
console.log(shortString.padEnd(5, "*")); // "42***"

console.log("======================");
// String iteration with for-await-of (for async iteration)
async function asyncStringIteration() {
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      const str = "utsho";
      let i = 0;
      return {
        next() {
          if (i < str.length) {
            return Promise.resolve({ value: str[i++], done: false });
          }
          return Promise.resolve({ done: true });
        }
      };
    }
  };

  console.log("Async iteration of string:");
  for await (const char of asyncIterable) {
    console.log(char);
  }
}
// asyncStringIteration(); // Uncomment to run