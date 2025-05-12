// Variables without declarations (not recommended - creates global variables)
fullName = "John Doe";
console.log(fullName);
age = 30;
console.log(age);
price = 19.99;
console.log(price);
isStudent = true;
console.log(isStudent);
x = null;
console.log(x);
y = undefined;
console.log(y);

// var, let, const
// var - function-scoped, can be redeclared and updated
var Name = "John";
console.log(Name); // John
var Name = "Doe";  // Redeclaration allowed
console.log(Name); // Doe

// let - block-scoped, can be updated but not redeclared
let age = 25;
console.log(age); // 25
// let age = 30; // SyntaxError: Identifier 'age' has already been declared
// console.log(age); // 30
age = 30;  // Updating is allowed
console.log(age); // 30

// let value can be use in block scope
{
    let a = 10;
    console.log(a); // 10
}
{
    let a = 20;
    console.log(a); // 20
}

// const - block-scoped, cannot be updated or redeclared
const PI = 3.14;
console.log(PI); // 3.14
// PI = 3.14159; // TypeError: Assignment to constant variable.
// console.log(PI); // 3.14159
// const PI = 3.14; // SyntaxError: Identifier 'PI' has already been declared
// console.log(PI); // 3.14
// const PI = 3.14; // SyntaxError: Identifier 'PI' has already been declared

// Extended content below

// Variable hoisting with var
console.log("\nVariable Hoisting with var:");
console.log(hoistedVar); // undefined (hoisted but not initialized)
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // "I am hoisted"

// Equivalent to:
var hoistedVar2;
console.log(hoistedVar2); // undefined
hoistedVar2 = "I am hoisted too";
console.log(hoistedVar2); // "I am hoisted too"

// Hoisting with let and const (Temporal Dead Zone)
console.log("\nTemporal Dead Zone with let/const:");
// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "Not accessible before declaration";
console.log(hoistedLet); // "Not accessible before declaration"

// const declarations must be initialized
// const MUST_INITIALIZE; // SyntaxError: Missing initializer in const declaration
const INITIALIZED = "I must be initialized";
console.log(INITIALIZED);

// Function scope vs Block scope
console.log("\nFunction Scope vs Block Scope:");

// var is function-scoped
function varScope() {
    var funcVar = "I am function-scoped";
    if (true) {
        var blockVar = "I am also function-scoped despite being in a block";
    }
    console.log(funcVar); // "I am function-scoped"
    console.log(blockVar); // "I am also function-scoped despite being in a block"
}
varScope();
// console.log(funcVar); // ReferenceError: funcVar is not defined

// let and const are block-scoped
function blockScope() {
    let funcLet = "I am block-scoped";
    const funcConst = "I am also block-scoped";
    
    if (true) {
        let blockLet = "I am only accessible in this block";
        const blockConst = "I am also only accessible in this block";
        console.log(blockLet); // "I am only accessible in this block"
        console.log(blockConst); // "I am also only accessible in this block"
    }
    
    console.log(funcLet); // "I am block-scoped"
    console.log(funcConst); // "I am also block-scoped"
    // console.log(blockLet); // ReferenceError: blockLet is not defined
    // console.log(blockConst); // ReferenceError: blockConst is not defined
}
blockScope();

// Global scope
console.log("\nGlobal Scope:");
var globalVar = "I am a global variable with var";
let globalLet = "I am a global variable with let";
const globalConst = "I am a global variable with const";

function accessGlobals() {
    console.log(globalVar); // "I am a global variable with var"
    console.log(globalLet); // "I am a global variable with let"
    console.log(globalConst); // "I am a global variable with const"
}
accessGlobals();

// Global object (window in browsers, global in Node.js)
console.log("\nGlobal Object Properties:");
var varOnGlobal = "var adds to global object";
let letNotOnGlobal = "let does NOT add to global object";

// In browser console you can test:
// console.log(window.varOnGlobal); // "var adds to global object"
// console.log(window.letNotOnGlobal); // undefined

// Variable shadowing
console.log("\nVariable Shadowing:");
let shadowedVar = "Outer value";
console.log(shadowedVar); // "Outer value"

function shadow() {
    let shadowedVar = "Inner value";
    console.log(shadowedVar); // "Inner value"
}
shadow();
console.log(shadowedVar); // "Outer value" (unchanged)

// Constants vs Immutability
console.log("\nConstants vs Immutability:");

// Constants with primitive values
const PI_VALUE = 3.141592653589793;
// PI_VALUE = 3; // TypeError: Assignment to constant variable

// Constants with objects (object reference is constant, but properties can change)
const person = {
    name: "John",
    age: 30
};
console.log(person); // { name: "John", age: 30 }

// Can't reassign the variable
// person = { name: "Jane", age: 25 }; // TypeError: Assignment to constant variable

// But can modify properties
person.name = "Jane";
person.age = 25;
console.log(person); // { name: "Jane", age: 25 }

// Constants with arrays (array reference is constant, but elements can change)
const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]

// Can't reassign the variable
// numbers = [6, 7, 8, 9, 10]; // TypeError: Assignment to constant variable

// But can modify elements and add/remove elements
numbers[0] = 10;
numbers.push(6);
console.log(numbers); // [10, 2, 3, 4, 5, 6]

// To make objects truly immutable, use Object.freeze()
console.log("\nUsing Object.freeze() for Immutability:");

const frozenPerson = Object.freeze({
    name: "Alex",
    age: 35
});

// Modifications to frozen objects are silently ignored in non-strict mode
frozenPerson.name = "Alexander";
frozenPerson.age = 40;
console.log(frozenPerson); // Still { name: "Alex", age: 35 }

// Nested objects are not frozen by default
const nestedObject = Object.freeze({
    name: "Taylor",
    age: 27,
    address: {
        city: "New York",
        country: "USA"
    }
});

// Can still modify nested objects
nestedObject.address.city = "Boston";
console.log(nestedObject.address.city); // "Boston"

// Deeply freezing objects requires a recursive approach
function deepFreeze(obj) {
    Object.freeze(obj);
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop) && 
            obj[prop] !== null && 
            (typeof obj[prop] === "object" || typeof obj[prop] === "function") && 
            !Object.isFrozen(obj[prop])) {
            deepFreeze(obj[prop]);
        }
    }
    return obj;
}

const deepFrozenObj = deepFreeze({
    name: "Sam",
    age: 40,
    address: {
        city: "Seattle",
        country: "USA"
    }
});

// Now nested properties can't be modified either
deepFrozenObj.address.city = "Portland";
console.log(deepFrozenObj.address.city); // Still "Seattle"

// Using var in loops vs let
console.log("\nUsing var vs let in Loops:");

// Using var in loops
console.log("Using var in a loop closure:");
function varInLoop() {
    var funcs = [];
    for (var i = 0; i < 3; i++) {
        funcs.push(function() {
            console.log("var i:", i);
        });
    }
    // i is 3 here for all functions
    return funcs;
}

var varFuncs = varInLoop();
varFuncs[0](); // "var i: 3"
varFuncs[1](); // "var i: 3"
varFuncs[2](); // "var i: 3"

// Using let in loops
console.log("Using let in a loop closure:");
function letInLoop() {
    var funcs = [];
    for (let i = 0; i < 3; i++) {
        funcs.push(function() {
            console.log("let i:", i);
        });
    }
    // Each i is scoped to the current iteration
    return funcs;
}

var letFuncs = letInLoop();
letFuncs[0](); // "let i: 0"
letFuncs[1](); // "let i: 1"
letFuncs[2](); // "let i: 2"

// Variable declaration best practices
console.log("\nVariable Declaration Best Practices:");

// 1. Always declare variables before using them
let properDeclaration = "Declared properly";
console.log(properDeclaration);

// 2. Use const by default, let when needed, avoid var
const CONSTANT_VALUE = "I won't change";
let changingValue = "I might change";

// 3. Be descriptive with variable names
const userFirstName = "John";
const userLastName = "Doe";
// Renamed from userAge to personAge to avoid redeclaration
const personAge = 30;
const isUserActive = true;

// 4. Use camelCase for variables and functions
const myVariableName = "camelCase is standard";
function myFunctionName() {
    return "Also camelCase";
}

// 5. Use UPPER_SNAKE_CASE for constants that are truly constant
const MAX_USERS = 100;
const API_KEY = "abcd1234";

// 6. Declare all variables at the top of their scope
function goodPractice() {
    // Variables declared at the top
    const firstName = "Jane";
    let age = 25;
    let scores = [];
    
    // Code that uses the variables
    console.log(firstName);
    age++;
    scores.push(100);
}

// Variable declarations with destructuring
console.log("\nVariable Declarations with Destructuring:");

// Array destructuring
const rgb = [255, 200, 0];
const [red, green, blue] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`); // "R: 255, G: 200, B: 0"

// Object destructuring
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

const { firstName, lastName, email } = user;
console.log(`Name: ${firstName} ${lastName}, Email: ${email}`);
// "Name: John Doe, Email: john.doe@example.com"

// Renaming variables during destructuring
const { firstName: fName, lastName: lName } = user;
console.log(`Name: ${fName} ${lName}`); // "Name: John Doe"

// Default values in destructuring
// Changed from userAge to personAgeValue to avoid redeclaration
const { age: personAgeValue = 18, country = "Unknown" } = user;
console.log(`Age: ${personAgeValue}, Country: ${country}`); // "Age: 30, Country: Unknown"

// Nested destructuring
const details = {
    name: {
        first: "John",
        last: "Doe"
    },
    location: {
        city: "New York",
        country: "USA",
        coordinates: {
            lat: 40.7128,
            long: -74.0060
        }
    }
};

const { name: { first, last }, location: { city, coordinates: { lat, long } } } = details;
console.log(`${first} ${last} is at coordinates: ${lat}, ${long}`);
// "John Doe is at coordinates: 40.7128, -74.006"