// Comparison Operators
let a = 10;
let b = 20;
let c = "10";
let d = 10;
let e = null;
let f = undefined;

console.log("Values:");
console.log("a =", a, "(number)");
console.log("b =", b, "(number)");
console.log("c =", c, "(string)");
console.log("d =", d, "(number)");
console.log("e =", e, "(null)");
console.log("f =", f, "(undefined)");

// Equality operators
console.log("\nEquality Operators:");

// Loose equality (==)
// Compares values but allows type coercion
console.log("a == b:", a == b); // false (10 != 20)
console.log("a == c:", a == c); // true (10 == "10" after coercion)
console.log("a == d:", a == d); // true (10 == 10)
console.log("e == f:", e == f); // true (null == undefined with loose equality)
console.log("e == null:", e == null); // true
console.log("f == undefined:", f == undefined); // true

// Strict equality (===)
// Compares values AND types, no coercion
console.log("\nStrict Equality Operators:");
console.log("a === b:", a === b); // false (10 !== 20)
console.log("a === c:", a === c); // false (number !== string)
console.log("a === d:", a === d); // true (both are number 10)
console.log("e === f:", e === f); // false (null !== undefined)
console.log("e === null:", e === null); // true
console.log("f === undefined:", f === undefined); // true

// Inequality operators
console.log("\nInequality Operators:");

// Loose inequality (!=)
console.log("a != b:", a != b); // true (10 != 20)
console.log("a != c:", a != c); // false (10 == "10" after coercion)
console.log("a != d:", a != d); // false (10 == 10)

// Strict inequality (!==)
console.log("a !== b:", a !== b); // true (10 !== 20)
console.log("a !== c:", a !== c); // true (number !== string)
console.log("a !== d:", a !== d); // false (both are number 10)

// Relational operators
console.log("\nRelational Operators:");

// Greater than (>)
console.log("a > b:", a > b); // false (10 is not greater than 20)
console.log("b > a:", b > a); // true (20 is greater than 10)

// Less than (<)
console.log("a < b:", a < b); // true (10 is less than 20)
console.log("b < a:", b < a); // false (20 is not less than 10)

// Greater than or equal to (>=)
console.log("a >= b:", a >= b); // false (10 is not greater than or equal to 20)
console.log("a >= d:", a >= d); // true (10 is equal to 10)
console.log("b >= a:", b >= a); // true (20 is greater than 10)

// Less than or equal to (<=)
console.log("a <= b:", a <= b); // true (10 is less than 20)
console.log("a <= d:", a <= d); // true (10 is equal to 10)
console.log("b <= a:", b <= a); // false (20 is not less than or equal to 10)

// Special comparison cases
console.log("\nSpecial Comparison Cases:");

// NaN comparisons
console.log("NaN == NaN:", NaN == NaN); // false (NaN is not equal to anything, including itself)
console.log("NaN === NaN:", NaN === NaN); // false
console.log("isNaN(NaN):", isNaN(NaN)); // true (isNaN function checks if value is NaN)
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true (more reliable check for NaN)

// Object comparisons
let obj1 = { name: "John" };
let obj2 = { name: "John" };
let obj3 = obj1;

console.log("\nObject Comparisons:");
console.log("obj1 == obj2:", obj1 == obj2); // false (different objects in memory)
console.log("obj1 === obj2:", obj1 === obj2); // false (different objects in memory)
console.log("obj1 == obj3:", obj1 == obj3); // true (same object reference)
console.log("obj1 === obj3:", obj1 === obj3); // true (same object reference)

// Array comparisons
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log("\nArray Comparisons:");
console.log("arr1 == arr2:", arr1 == arr2); // false (different arrays in memory)
console.log("arr1 === arr2:", arr1 === arr2); // false (different arrays in memory)
console.log("arr1 == arr3:", arr1 == arr3); // true (same array reference)
console.log("arr1 === arr3:", arr1 === arr3); // true (same array reference)

// String comparisons
console.log("\nString Comparisons:");
console.log("'a' < 'b':", 'a' < 'b'); // true (lexicographical comparison)
console.log("'apple' < 'banana':", 'apple' < 'banana'); // true
console.log("'apple' < 'Apple':", 'apple' < 'Apple'); // false (lowercase comes after uppercase in ASCII)
console.log("'10' < '2':", '10' < '2'); // true (string comparison by characters, '1' comes before '2')

// Using comparison operators with non-primitive values
console.log("\nComparisons with Type Conversion:");
console.log("'10' > 5:", '10' > 5); // true (string '10' is converted to number 10)
console.log("true > 0:", true > 0); // true (true is converted to 1, and 1 > 0)
console.log("false < 1:", false < 1); // true (false is converted to 0, and 0 < 1)
console.log("'10' + 5:", '10' + 5); // "105" (+ operator with strings does concatenation)
console.log("'10' - 5:", '10' - 5); // 5 (- operator forces numeric conversion)

// Object.is() (ES6) - similar to === but handles edge cases better
console.log("\nObject.is() Comparisons:");
console.log("Object.is(a, b):", Object.is(a, b)); // false (10 is not 20)
console.log("Object.is(a, d):", Object.is(a, d)); // true (both are 10)
console.log("Object.is(+0, -0):", Object.is(+0, -0)); // false (distinguishes between +0 and -0, unlike ===)
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true (correctly identifies NaN as equal to itself, unlike ===)