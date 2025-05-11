// number datatype
let age = 24;
console.log(typeof age); // number
console.log(age); // 24

// string datatype
let name = "John Doe"; 
console.log(typeof name); // string
console.log(name); // John Doe

// boolean datatype
let isStudent = true;
console.log(typeof isStudent); // boolean
console.log(isStudent); // true

// null datatype
let x = null;
console.log(typeof x); // object (this is a known quirk in JavaScript)
console.log(x); // null

// undefined datatype  
let y;
console.log(typeof y); // undefined
console.log(y); // undefined

// BigInt datatype
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntValue); // bigint
console.log(bigIntValue); // 1234567890123456789012345678901234567890n

// Symbol datatype
let symbolValue = Symbol("unique");
console.log(typeof symbolValue); // symbol
console.log(symbolValue); // Symbol(unique)

// object datatype
const person = {
    name: "John Doe",
    age: 24,
    isStudent: true
};
console.log(typeof person); // object
console.log(person); // { name: 'John Doe', age: 24, isStudent: true }

// array datatype
let fruits = ["apple", "banana", "cherry"];
console.log(typeof fruits); // object (arrays are a type of object in JavaScript)
console.log(fruits); // [ 'apple', 'banana', 'cherry' ]

// function datatype
function greet() {
    console.log("Hello, World!");
}
console.log(typeof greet); // function
greet(); // Hello, World!

// function as a variable
let greetFunction = function() {
    console.log("Hello, World!");
};
console.log(typeof greetFunction); // function
greetFunction(); // Hello, World!