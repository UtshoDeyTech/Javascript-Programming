// Assignment Operators
let a = 10;
let b = 20;
console.log("Initial values: a =", a, ", b =", b);

// Basic assignment
console.log("\nBasic Assignment:");
let c = 30; // Assigns value 30 to variable c
console.log("c =", c);

// Compound assignment operators
console.log("\nCompound Assignment Operators:");

// Addition assignment
let num1 = 10;
console.log("Initial num1 =", num1);
num1 += 5; // Equivalent to: num1 = num1 + 5
console.log("After num1 += 5: num1 =", num1); // 15

// Subtraction assignment
let num2 = 20;
console.log("Initial num2 =", num2);
num2 -= 7; // Equivalent to: num2 = num2 - 7
console.log("After num2 -= 7: num2 =", num2); // 13

// Multiplication assignment
let num3 = 5;
console.log("Initial num3 =", num3);
num3 *= 3; // Equivalent to: num3 = num3 * 3
console.log("After num3 *= 3: num3 =", num3); // 15

// Division assignment
let num4 = 20;
console.log("Initial num4 =", num4);
num4 /= 4; // Equivalent to: num4 = num4 / 4
console.log("After num4 /= 4: num4 =", num4); // 5

// Remainder assignment
let num5 = 17;
console.log("Initial num5 =", num5);
num5 %= 5; // Equivalent to: num5 = num5 % 5
console.log("After num5 %= 5: num5 =", num5); // 2

// Exponentiation assignment (ES2016)
let num6 = 2;
console.log("Initial num6 =", num6);
num6 **= 3; // Equivalent to: num6 = num6 ** 3
console.log("After num6 **= 3: num6 =", num6); // 8

// Bitwise assignment operators
console.log("\nBitwise Assignment Operators:");

// Bitwise AND assignment
let num7 = 5; // Binary: 101
console.log("Initial num7 =", num7, "(Binary:", num7.toString(2) + ")");
num7 &= 3; // Binary: 3 = 011, result: 001 = 1
console.log("After num7 &= 3: num7 =", num7, "(Binary:", num7.toString(2) + ")"); // 1

// Bitwise OR assignment
let num8 = 5; // Binary: 101
console.log("Initial num8 =", num8, "(Binary:", num8.toString(2) + ")");
num8 |= 3; // Binary: 3 = 011, result: 111 = 7
console.log("After num8 |= 3: num8 =", num8, "(Binary:", num8.toString(2) + ")"); // 7

// Bitwise XOR assignment
let num9 = 5; // Binary: 101
console.log("Initial num9 =", num9, "(Binary:", num9.toString(2) + ")");
num9 ^= 3; // Binary: 3 = 011, result: 110 = 6
console.log("After num9 ^= 3: num9 =", num9, "(Binary:", num9.toString(2) + ")"); // 6

// Left shift assignment
let num10 = 5; // Binary: 101
console.log("Initial num10 =", num10, "(Binary:", num10.toString(2) + ")");
num10 <<= 2; // Binary: 10100 = 20
console.log("After num10 <<= 2: num10 =", num10, "(Binary:", num10.toString(2) + ")"); // 20

// Right shift assignment
let num11 = 20; // Binary: 10100
console.log("Initial num11 =", num11, "(Binary:", num11.toString(2) + ")");
num11 >>= 2; // Binary: 101 = 5
console.log("After num11 >>= 2: num11 =", num11, "(Binary:", num11.toString(2) + ")"); // 5

// Unsigned right shift assignment
let num12 = -10; // Binary representation is negative
console.log("Initial num12 =", num12);
num12 >>>= 2; // Shifts bits and fills with 0s from left
console.log("After num12 >>>= 2: num12 =", num12);

// Logical assignment operators (ES2021)
console.log("\nLogical Assignment Operators (ES2021):");

// Logical AND assignment (&&=)
let obj1 = { name: "John" };
console.log("Initial obj1 =", obj1);
obj1 &&= obj1.age = 30; // Only assigns if obj1 is truthy
console.log("After obj1 &&= obj1.age = 30: obj1 =", obj1);

let obj2 = null;
console.log("Initial obj2 =", obj2);
obj2 &&= { name: "Jane" }; // Doesn't assign because obj2 is falsy
console.log("After obj2 &&= { name: 'Jane' }: obj2 =", obj2);

// Logical OR assignment (||=)
let obj3 = { name: "Bob" };
console.log("Initial obj3 =", obj3);
obj3 ||= { name: "Robert" }; // Doesn't assign because obj3 is truthy
console.log("After obj3 ||= { name: 'Robert' }: obj3 =", obj3);

let obj4 = null;
console.log("Initial obj4 =", obj4);
obj4 ||= { name: "Alice" }; // Assigns because obj4 is falsy
console.log("After obj4 ||= { name: 'Alice' }: obj4 =", obj4);

// Nullish coalescing assignment (??=)
let obj5 = { name: "Charlie" };
console.log("Initial obj5 =", obj5);
obj5 ??= { name: "Charles" }; // Doesn't assign because obj5 is not null/undefined
console.log("After obj5 ??= { name: 'Charles' }: obj5 =", obj5);

let obj6 = undefined;
console.log("Initial obj6 =", obj6);
obj6 ??= { name: "Dave" }; // Assigns because obj6 is null/undefined
console.log("After obj6 ??= { name: 'Dave' }: obj6 =", obj6);

// Destructuring assignment (ES6)
console.log("\nDestructuring Assignment (ES6):");

// Array destructuring
const array = [1, 2, 3, 4, 5];
const [first, second, ...rest] = array;
console.log("array =", array);
console.log("After [first, second, ...rest] = array:");
console.log("first =", first); // 1
console.log("second =", second); // 2
console.log("rest =", rest); // [3, 4, 5]

// Object destructuring
const person = { name: "John", age: 30, job: "developer" };
const { name, age, job: profession } = person; // Rename job to profession
console.log("person =", person);
console.log("After { name, age, job: profession } = person:");
console.log("name =", name); // "John"
console.log("age =", age); // 30
console.log("profession =", profession); // "developer"

// Nested destructuring
const nested = { user: { firstName: "Jane", lastName: "Doe" }, id: 123 };
const { user: { firstName, lastName }, id } = nested;
console.log("nested =", nested);
console.log("After { user: { firstName, lastName }, id } = nested:");
console.log("firstName =", firstName); // "Jane"
console.log("lastName =", lastName); // "Doe"
console.log("id =", id); // 123