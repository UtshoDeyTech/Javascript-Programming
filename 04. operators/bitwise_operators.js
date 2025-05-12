// Bitwise Operators

console.log("Bitwise Operators in JavaScript");

// Sample numbers for demonstration
let a = 5;  // Binary: 0000 0101
let b = 3;  // Binary: 0000 0011

console.log("Values:");
console.log("a =", a, "(Decimal) =", a.toString(2).padStart(8, '0'), "(Binary)");
console.log("b =", b, "(Decimal) =", b.toString(2).padStart(8, '0'), "(Binary)");

// Bitwise AND (&)
// Sets each bit to 1 if both bits are 1
console.log("\nBitwise AND (&):");
let resultAND = a & b; // 5 & 3 = 0000 0101 & 0000 0011 = 0000 0001 = 1
console.log("a & b =", resultAND, "(Decimal) =", resultAND.toString(2).padStart(8, '0'), "(Binary)");

// Bitwise OR (|)
// Sets each bit to 1 if at least one of the bits is 1
console.log("\nBitwise OR (|):");
let resultOR = a | b; // 5 | 3 = 0000 0101 | 0000 0011 = 0000 0111 = 7
console.log("a | b =", resultOR, "(Decimal) =", resultOR.toString(2).padStart(8, '0'), "(Binary)");

// Bitwise XOR (^)
// Sets each bit to 1 if only one of the bits is 1
console.log("\nBitwise XOR (^):");
let resultXOR = a ^ b; // 5 ^ 3 = 0000 0101 ^ 0000 0011 = 0000 0110 = 6
console.log("a ^ b =", resultXOR, "(Decimal) =", resultXOR.toString(2).padStart(8, '0'), "(Binary)");

// Bitwise NOT (~)
// Inverts all the bits (0 becomes 1, 1 becomes 0)
console.log("\nBitwise NOT (~):");
let resultNOT_A = ~a; // ~5 = ~0000 0101 = 1111 1010 = -6 (due to two's complement)
let resultNOT_B = ~b; // ~3 = ~0000 0011 = 1111 1100 = -4 (due to two's complement)
console.log("~a =", resultNOT_A, "(Decimal)");
console.log("~b =", resultNOT_B, "(Decimal)");
console.log("Note: Negative numbers are represented using two's complement in JavaScript");

// Left Shift (<<)
// Shifts all bits to the left by the specified number of places
console.log("\nLeft Shift (<<):");
let resultLeftShift1 = a << 1; // 5 << 1 = 0000 0101 << 1 = 0000 1010 = 10
let resultLeftShift2 = a << 2; // 5 << 2 = 0000 0101 << 2 = 0001 0100 = 20
console.log("a << 1 =", resultLeftShift1, "(Decimal) =", resultLeftShift1.toString(2).padStart(8, '0'), "(Binary)");
console.log("a << 2 =", resultLeftShift2, "(Decimal) =", resultLeftShift2.toString(2).padStart(8, '0'), "(Binary)");
console.log("Note: Left shift by n is equivalent to multiplying by 2^n");

// Right Shift (>>)
// Shifts all bits to the right by the specified number of places
console.log("\nRight Shift (>>):");
let resultRightShift1 = a >> 1; // 5 >> 1 = 0000 0101 >> 1 = 0000 0010 = 2
let resultRightShift2 = a >> 2; // 5 >> 2 = 0000 0101 >> 2 = 0000 0001 = 1
console.log("a >> 1 =", resultRightShift1, "(Decimal) =", resultRightShift1.toString(2).padStart(8, '0'), "(Binary)");
console.log("a >> 2 =", resultRightShift2, "(Decimal) =", resultRightShift2.toString(2).padStart(8, '0'), "(Binary)");
console.log("Note: Right shift by n is equivalent to dividing by 2^n and rounding down");

// Unsigned Right Shift (>>>)
// Shifts all bits to the right by the specified number of places and fills with 0s
console.log("\nUnsigned Right Shift (>>>):");
let resultUnsignedRightShift = a >>> 1; // For positive numbers, same as >>
console.log("a >>> 1 =", resultUnsignedRightShift, "(Decimal) =", resultUnsignedRightShift.toString(2).padStart(8, '0'), "(Binary)");

// Example with negative numbers to show the difference between >> and >>>
let negativeNumber = -5; // In two's complement: 1111...1011
console.log("\nNegative Number Example:");
console.log("negativeNumber =", negativeNumber);
let resultNegRightShift = negativeNumber >> 1; // Preserves sign: 1111...1101 = -3
let resultNegUnsignedRightShift = negativeNumber >>> 1; // Doesn't preserve sign, fills with 0s from left
console.log("negativeNumber >> 1 =", resultNegRightShift);
console.log("negativeNumber >>> 1 =", resultNegUnsignedRightShift);

// Bitwise applications

// Example 1: Using bitwise & to check if a number is even or odd
console.log("\nBitwise Applications:");
console.log("Using bitwise & to check if a number is even or odd:");
console.log("Is 5 even?", (5 & 1) === 0); // false, because 5 & 1 = 1
console.log("Is 6 even?", (6 & 1) === 0); // true, because 6 & 1 = 0

// Example 2: Using bitwise | to round up to the nearest power of 2
function roundUpToPowerOfTwo(n) {
    n--;
    n |= n >> 1;
    n |= n >> 2;
    n |= n >> 4;
    n |= n >> 8;
    n |= n >> 16;
    n++;
    return n;
}
console.log("\nRounding up to the nearest power of 2:");
console.log("roundUpToPowerOfTwo(5) =", roundUpToPowerOfTwo(5)); // 8
console.log("roundUpToPowerOfTwo(17) =", roundUpToPowerOfTwo(17)); // 32

// Example 3: Using bitwise operators for flags
console.log("\nUsing bitwise operators for flags:");
// Define flags
const READ = 1;     // 0001
const WRITE = 2;    // 0010
const EXECUTE = 4;  // 0100
const DELETE = 8;   // 1000

// Set permissions using bitwise OR
let permissions = READ | WRITE; // 0011 = 3
console.log("Initial permissions:", permissions);

// Add EXECUTE permission
permissions |= EXECUTE; // 0111 = 7
console.log("After adding EXECUTE:", permissions);

// Check if user has READ permission using bitwise AND
console.log("Has READ permission?", (permissions & READ) === READ); // true

// Check if user has DELETE permission
console.log("Has DELETE permission?", (permissions & DELETE) === DELETE); // false

// Remove WRITE permission using bitwise XOR
permissions ^= WRITE; // 0101 = 5
console.log("After removing WRITE:", permissions);

// Example 4: Swapping two variables without using a temporary variable
console.log("\nSwapping two variables without a temporary variable:");
let x = 10;
let y = 20;
console.log("Before swap: x =", x, ", y =", y);

x = x ^ y;
y = x ^ y;
x = x ^ y;

console.log("After swap: x =", x, ", y =", y);