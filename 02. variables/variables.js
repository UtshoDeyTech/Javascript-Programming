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
// var
var Name = "John";
console.log(Name); // John
var Name = "Doe";
console.log(Name); // Doe

// let
let age = 25;
console.log(age); // 25
// let age = 30; // SyntaxError: Identifier 'age' has already been declared
// console.log(age); // 30
age = 30;
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


// const
const PI = 3.14;
console.log(PI); // 3.14
// PI = 3.14159; // TypeError: Assignment to constant variable.
// console.log(PI); // 3.14159
// const PI = 3.14; // SyntaxError: Identifier 'PI' has already been declared
// console.log(PI); // 3.14
// const PI = 3.14; // SyntaxError: Identifier 'PI' has already been declared