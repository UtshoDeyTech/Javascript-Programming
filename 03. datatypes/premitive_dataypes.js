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

// Extended part begins here

// Date datatype
let currentDate = new Date();
console.log(typeof currentDate); // object
console.log(currentDate); // Current date and time

// RegExp datatype
let pattern = /\d+/g;
console.log(typeof pattern); // object
console.log(pattern); // /\d+/g
console.log(pattern.test("123")); // true

// Map datatype (ES6)
let map = new Map();
map.set("name", "John");
map.set("age", 24);
console.log(typeof map); // object
console.log(map); // Map(2) { 'name' => 'John', 'age' => 24 }

// Set datatype (ES6)
let set = new Set([1, 2, 3, 3, 4]);
console.log(typeof set); // object
console.log(set); // Set(4) { 1, 2, 3, 4 }

// WeakMap datatype (ES6)
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "value");
console.log(typeof weakMap); // object
console.log(weakMap); // WeakMap {}

// WeakSet datatype (ES6)
let weakSet = new WeakSet();
weakSet.add(obj);
console.log(typeof weakSet); // object
console.log(weakSet); // WeakSet {}

// ArrayBuffer and TypedArrays
let buffer = new ArrayBuffer(16);
console.log(typeof buffer); // object
console.log(buffer); // ArrayBuffer(16)

let int32View = new Int32Array(buffer);
console.log(typeof int32View); // object
console.log(int32View); // Int32Array(4) [ 0, 0, 0, 0 ]

// Promise datatype (ES6)
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});
console.log(typeof promise); // object
console.log(promise); // Promise { <pending> }

// Arrow function
let arrowFunction = () => console.log("Arrow function");
console.log(typeof arrowFunction); // function
arrowFunction(); // Arrow function

// Generator function
function* generator() {
  yield 1;
  yield 2;
}
let gen = generator();
console.log(typeof gen); // object
console.log(gen.next()); // { value: 1, done: false }

// Class
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return `Hello, ${this.name}!`;
  }
}
let person2 = new Person("Jane");
console.log(typeof Person); // function (classes are special functions in JS)
console.log(typeof person2); // object
console.log(person2.greet()); // Hello, Jane!

// Proxy
let proxy = new Proxy({}, {
  get: function(target, property) {
    return property in target ? target[property] : `Property ${property} doesn't exist`;
  }
});
console.log(typeof proxy); // object
proxy.name = "John";
console.log(proxy.name); // John
console.log(proxy.age); // Property age doesn't exist

// Type conversion examples
console.log("\nType Conversion Examples:");

// Number conversions
console.log("String to Number:", Number("42")); // 42
console.log("Boolean to Number:", Number(true)); // 1
console.log("Null to Number:", Number(null)); // 0
console.log("Undefined to Number:", Number(undefined)); // NaN
console.log("Non-numeric String to Number:", Number("hello")); // NaN

// String conversions
console.log("Number to String:", String(42)); // "42"
console.log("Boolean to String:", String(true)); // "true"
console.log("Null to String:", String(null)); // "null"
console.log("Undefined to String:", String(undefined)); // "undefined"
console.log("Object to String:", String({name: "John"})); // "[object Object]"
console.log("Array to String:", String([1, 2, 3])); // "1,2,3"

// Boolean conversions
console.log("Number to Boolean:", Boolean(42)); // true
console.log("Zero to Boolean:", Boolean(0)); // false
console.log("NaN to Boolean:", Boolean(NaN)); // false
console.log("Empty String to Boolean:", Boolean("")); // false
console.log("Non-empty String to Boolean:", Boolean("hello")); // true
console.log("Null to Boolean:", Boolean(null)); // false
console.log("Undefined to Boolean:", Boolean(undefined)); // false
console.log("Object to Boolean:", Boolean({})); // true

// Special numeric values
console.log("\nSpecial Numeric Values:");
console.log("NaN:", NaN);
console.log("Infinity:", Infinity);
console.log("-Infinity:", -Infinity);
console.log("NaN === NaN:", NaN === NaN); // false
console.log("isNaN(NaN):", isNaN(NaN)); // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("isFinite(42):", isFinite(42)); // true
console.log("isFinite(Infinity):", isFinite(Infinity)); // false

// Object methods for type conversion
console.log("\nObject Methods for Type Conversion:");
let num = 42;
console.log("Number toString():", num.toString()); // "42"
console.log("Number toString(2):", num.toString(2)); // "101010" (binary)
console.log("Number toString(16):", num.toString(16)); // "2a" (hexadecimal)

// TypedArray examples
console.log("\nTypedArray Examples:");
let int8Array = new Int8Array([1, 2, 3]);
let uint8Array = new Uint8Array([1, 2, 3]);
let float32Array = new Float32Array([1.1, 2.2, 3.3]);
console.log("Int8Array:", int8Array);
console.log("Uint8Array:", uint8Array);
console.log("Float32Array:", float32Array);