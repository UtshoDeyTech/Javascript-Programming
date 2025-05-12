// Arithmetic Operators
let a = 10;
let b = 20;
console.log("a =", a); // 10
console.log("b =", b); // 20

console.log("Basic Arithmetic Operators:");
console.log("a + b =", a + b); // 30 (Addition)
console.log("a - b =", a - b); // -10 (Subtraction)
console.log("a * b =", a * b); // 200 (Multiplication)
console.log("a / b =", a / b); // 0.5 (Division)
console.log("a % b =", a % b); // 10 (Modulus/Remainder)
console.log("a ** b =", a ** b); // 10000000000 (Exponentiation)

// Increment and Decrement Operators
console.log("\nIncrement and Decrement Operators:");
let x = 5;
console.log("Initial x =", x); // 5

// Postfix increment (returns original value, then increments)
console.log("x++ =", x++); // 5
console.log("After x++ =", x); // 6

// Postfix decrement (returns original value, then decrements)
console.log("x-- =", x--); // 6
console.log("After x-- =", x); // 5

// Prefix increment (increments first, then returns value)
console.log("++x =", ++x); // 6
console.log("After ++x =", x); // 6

// Prefix decrement (decrements first, then returns value)
console.log("--x =", --x); // 5
console.log("After --x =", x); // 5

// Unary plus and minus
console.log("\nUnary Plus and Minus:");
console.log("+5 =", +5); // 5 (converts to number, but 5 is already a number)
console.log("-5 =", -5); // -5 (negates value)
console.log("+'5' =", +'5'); // 5 (converts string to number)
console.log("-'5' =", -'5'); // -5 (converts string to number, then negates)
console.log("+true =", +true); // 1 (converts boolean to number)
console.log("-false =", -false); // 0 (converts boolean to number, then negates)

// Numeric precision examples
console.log("\nNumeric Precision Examples:");
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004 (floating-point precision issue)
console.log("3 / 0 =", 3 / 0); // Infinity
console.log("-3 / 0 =", -3 / 0); // -Infinity
console.log("0 / 0 =", 0 / 0); // NaN (Not a Number)

// BigInt arithmetic (ES2020)
console.log("\nBigInt Arithmetic:");
const bigA = 9007199254740991n; // Max safe integer as BigInt
const bigB = 2n;
console.log("bigA =", bigA);
console.log("bigB =", bigB);
console.log("bigA + bigB =", bigA + bigB);
console.log("bigA * bigB =", bigA * bigB);
console.log("bigA / bigB =", bigA / bigB); // Integer division, no remainder
console.log("bigA % bigB =", bigA % bigB);

// Mixing BigInt and regular numbers is not allowed
try {
  console.log(bigA + 1); // Error: Cannot mix BigInt and other types
} catch (error) {
  console.log("Error:", error.message);
}

// Math object examples
console.log("\nMath Object Examples:");
console.log("Math.round(4.7) =", Math.round(4.7)); // 5
console.log("Math.round(4.4) =", Math.round(4.4)); // 4
console.log("Math.floor(4.7) =", Math.floor(4.7)); // 4
console.log("Math.ceil(4.2) =", Math.ceil(4.2)); // 5
console.log("Math.trunc(4.7) =", Math.trunc(4.7)); // 4 (removes decimal part)
console.log("Math.abs(-4) =", Math.abs(-4)); // 4
console.log("Math.sqrt(16) =", Math.sqrt(16)); // 4
console.log("Math.pow(2, 3) =", Math.pow(2, 3)); // 8 (same as 2 ** 3)
console.log("Math.min(2, 5, 1) =", Math.min(2, 5, 1)); // 1
console.log("Math.max(2, 5, 1) =", Math.max(2, 5, 1)); // 5