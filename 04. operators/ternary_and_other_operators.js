// Ternary and Other Operators

console.log("Ternary and Other Operators in JavaScript");

// Ternary Operator (Conditional Operator)
console.log("\nTernary Operator (condition ? exprIfTrue : exprIfFalse):");

let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(`Age ${age}: ${message}`);

age = 15;
message = age >= 18 ? "Adult" : "Minor";
console.log(`Age ${age}: ${message}`);

// Nested ternary operators (can be hard to read, use with caution)
age = 65;
message = age < 13 ? "Child" : age < 18 ? "Teenager" : age < 65 ? "Adult" : "Senior";
console.log(`Age ${age}: ${message}`);

// Better readability with if-else equivalent:
if (age < 13) {
    message = "Child";
} else if (age < 18) {
    message = "Teenager";
} else if (age < 65) {
    message = "Adult";
} else {
    message = "Senior";
}
console.log(`Age ${age} (using if-else): ${message}`);

// Ternary operator with multiple operations
let isAuthenticated = true;
isAuthenticated ? (
    console.log("Welcome back!"),
    console.log("Last login: Yesterday")
) : (
    console.log("Please log in"),
    console.log("Don't have an account? Sign up")
);

// Comma Operator
console.log("\nComma Operator:");
let x = 1, y = 2, z = 3; // Declaration with commas
console.log(`x = ${x}, y = ${y}, z = ${z}`);

let a = (5, 10, 15); // Comma in expression - evaluates each and returns the last
console.log(`a = ${a}`); // 15

// The comma operator in a for loop
console.log("Comma operator in for loop:");
for (let i = 0, j = 10; i <= 5; i++, j--) {
    console.log(`i = ${i}, j = ${j}`);
}

// Void Operator
console.log("\nVoid Operator:");
console.log(`void 0 = ${void 0}`); // undefined
console.log(`void(5) = ${void(5)}`); // undefined
console.log(`void true = ${void true}`); // undefined

// Using void to prevent a hyperlink from navigating
console.log('Example of using void in HTML: <a href="javascript:void(0)" onclick="console.log(\'Clicked\')">Click me</a>');

// Typeof Operator
console.log("\nTypeof Operator:");
console.log(`typeof 42 = ${typeof 42}`); // "number"
console.log(`typeof "hello" = ${typeof "hello"}`); // "string"
console.log(`typeof true = ${typeof true}`); // "boolean"
console.log(`typeof undefined = ${typeof undefined}`); // "undefined"
console.log(`typeof null = ${typeof null}`); // "object" (this is a historical bug in JavaScript)
console.log(`typeof {} = ${typeof {}}`); // "object"
console.log(`typeof [] = ${typeof []}`); // "object"
console.log(`typeof function() {} = ${typeof function() {}}`); // "function"
console.log(`typeof Symbol() = ${typeof Symbol()}`); // "symbol"
console.log(`typeof 42n = ${typeof 42n}`); // "bigint"

// The ?. operator (Optional Chaining, ES2020)
console.log("\nOptional Chaining Operator (?.):");
let user = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
};
console.log(`user.address.city = ${user.address.city}`); // "Anytown"

let user2 = {
    name: "Jane"
    // No address property
};
// Without optional chaining, this would throw an error
// console.log(user2.address.city); // TypeError: Cannot read property 'city' of undefined

// With optional chaining
console.log(`user2?.address?.city = ${user2?.address?.city}`); // undefined
console.log(`user?.nonExistentMethod?.() = ${user?.nonExistentMethod?.()}`); // undefined

// The ?? operator (Nullish Coalescing, ES2020)
console.log("\nNullish Coalescing Operator (??):");
let value1 = null;
let value2 = undefined;
let value3 = 0;
let value4 = "";
let value5 = false;

console.log(`value1 ?? "Default" = ${value1 ?? "Default"}`); // "Default"
console.log(`value2 ?? "Default" = ${value2 ?? "Default"}`); // "Default"
console.log(`value3 ?? "Default" = ${value3 ?? "Default"}`); // 0 (not null or undefined, so returns 0)
console.log(`value4 ?? "Default" = ${value4 ?? "Default"}`); // "" (not null or undefined, so returns "")
console.log(`value5 ?? "Default" = ${value5 ?? "Default"}`); // false (not null or undefined, so returns false)

// Comparing ?? with ||
console.log("\nComparing ?? with ||:");
console.log(`value1 || "Default" = ${value1 || "Default"}`); // "Default"
console.log(`value3 || "Default" = ${value3 || "Default"}`); // "Default" (0 is falsy, so returns "Default")
console.log(`value4 || "Default" = ${value4 || "Default"}`); // "Default" (empty string is falsy, so returns "Default")
console.log(`value5 || "Default" = ${value5 || "Default"}`); // "Default" (false is falsy, so returns "Default")

// delete Operator
console.log("\nDelete Operator:");
let obj = { a: 1, b: 2, c: 3 };
console.log("Before delete:", obj);
delete obj.b;
console.log("After delete obj.b:", obj);

let arr = [1, 2, 3, 4];
console.log("Before delete:", arr);
delete arr[1]; // This leaves a "hole" in the array
console.log("After delete arr[1]:", arr);
console.log("arr.length after delete:", arr.length); // Still 4

// in Operator
console.log("\nin Operator:");
console.log(`"a" in obj = ${"a" in obj}`); // true
console.log(`"b" in obj = ${"b" in obj}`); // false after delete
console.log(`"toString" in obj = ${"toString" in obj}`); // true (inherited property)

console.log(`0 in arr = ${0 in arr}`); // true
console.log(`1 in arr = ${1 in arr}`); // false after delete
console.log(`3 in arr = ${3 in arr}`); // true

// instanceof Operator
console.log("\ninstanceof Operator:");
class Person {
    constructor(name) {
        this.name = name;
    }
}
let john = new Person("John");
console.log(`john instanceof Person = ${john instanceof Person}`); // true
console.log(`john instanceof Object = ${john instanceof Object}`); // true (Person inherits from Object)
console.log(`"hello" instanceof String = ${"hello" instanceof String}`); // false (primitive string, not String object)
console.log(`new String("hello") instanceof String = ${new String("hello") instanceof String}`); // true

// Spread operator (...)
console.log("\nSpread Operator (...):");
// Array spread
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];
console.log("Combined array:", combinedArray);

// Object spread
let object1 = { a: 1, b: 2 };
let object2 = { c: 3, d: 4 };
let combinedObject = { ...object1, ...object2 };
console.log("Combined object:", combinedObject);

// Function arguments using spread
function sum(a, b, c) {
    return a + b + c;
}
let numbers = [1, 2, 3];
console.log(`sum(...numbers) = ${sum(...numbers)}`); // 6

// Rest parameters (...)
console.log("\nRest Parameters (...):");
function multiply(multiplier, ...args) {
    return args.map(arg => multiplier * arg);
}
console.log(`multiply(2, 1, 2, 3) = ${multiply(2, 1, 2, 3)}`); // [2, 4, 6]

// new Operator
console.log("\nnew Operator:");
let date = new Date();
console.log(`new Date() = ${date}`);
let regex = new RegExp("\\d+");
console.log(`new RegExp("\\\\d+") = ${regex}`);

// yield Operator (used in generator functions)
console.log("\nyield Operator:");
function* generatorExample() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = generatorExample();
console.log("Generator results:");
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }

// The await operator (ES2017)
console.log("\nawait Operator (normally used in async functions):");
console.log("Example of await in async function:");
console.log("async function fetchData() {");
console.log("  const response = await fetch('https://api.example.com/data');");
console.log("  const data = await response.json();");
console.log("  return data;");
console.log("}");