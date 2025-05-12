// Advanced String Operations in JavaScript

// Creating strings
console.log("Different ways to create strings:");
const str1 = "Double quotes";
const str2 = 'Single quotes';
const str3 = `Template literal`;
const str4 = new String("String object"); // Creates a String object, not primitive

console.log(typeof str1); // string (primitive)
console.log(typeof str4); // object
console.log(str4 instanceof String); // true
console.log(str4.valueOf() === String(str4)); // true

// Template literals with expressions and functions
console.log("\nAdvanced template literals:");
const name = "Utsho";
const age = 20;
const interests = ["coding", "music", "reading"];

const bio = `
Name: ${name}
Age: ${age}
Interests: ${interests.join(", ")}
Adult: ${age >= 18 ? "Yes" : "No"}
`;

console.log(bio);

// Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? `<em>${values[i]}</em>` : '');
  }, '');
}

const highlightedBio = highlight`My name is ${name} and I'm ${age} years old.`;
console.log("\nTagged template literal:");
console.log(highlightedBio);

// Raw strings
console.log("\nRaw strings:");
console.log(`Normal: Line 1\nLine 2`); // Processes escape sequences
console.log(String.raw`Raw: Line 1\nLine 2`); // Doesn't process escape sequences

// Unicode and emoji
console.log("\nUnicode and emoji support:");
const heart = "❤️";
const smile = "😊";
const rainbow = "🌈";
console.log(`Emoji length: ${heart.length}`); // May be 2 due to UTF-16 encoding
console.log(`Unicode code point: ${heart.codePointAt(0)}`);
console.log(`Creating emoji from code point: ${String.fromCodePoint(0x1F600)}`); // 😀

// Regular expressions with strings
console.log("\nAdvanced regex operations:");
const text = "The quick brown fox jumps over the lazy dog";

// Using regex for global matches
const words = text.match(/\b\w{3,}\b/g); // Words with 3+ characters
console.log(`Words with 3+ characters: ${words.join(', ')}`);

// Named capture groups (ES2018)
const namePattern = /My name is (?<name>\w+)/;
const nameMatch = "My name is Utsho".match(namePattern);
console.log(`Extracted name: ${nameMatch?.groups?.name}`);

// Positive and negative lookahead
const password = "Abcd1234";
const hasUppercase = /(?=.*[A-Z])/.test(password);
const hasNumber = /(?=.*\d)/.test(password);
const hasLowercase = /(?=.*[a-z])/.test(password);
console.log(`Password has uppercase: ${hasUppercase}`);
console.log(`Password has number: ${hasNumber}`);
console.log(`Password has lowercase: ${hasLowercase}`);

// replace() with function
const capitalizeWords = text.replace(/\b\w+\b/g, (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(`\nCapitalized words: ${capitalizeWords}`);

// String normalization (for international characters)
console.log("\nString normalization:");
const nonNormalized = "café"; // "e" and acute accent as separate code points
const normalized = nonNormalized.normalize("NFC"); // Combined form
console.log(`Non-normalized length: ${nonNormalized.length}`);
console.log(`Normalized length: ${normalized.length}`);

// String localization and internationalization
console.log("\nLocalization methods:");
const number = 1234567.89;
console.log(`US format: ${number.toLocaleString('en-US')}`);
console.log(`German format: ${number.toLocaleString('de-DE')}`);
console.log(`Currency (USD): ${number.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`);
console.log(`Currency (EUR): ${number.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})}`);

// Case conversion for international characters
const turkishString = "istanbul";
console.log(`\nTurkish uppercase I: ${turkishString.toLocaleUpperCase('tr-TR')}`);
console.log(`English uppercase I: ${turkishString.toUpperCase()}`);

// Working with code points and surrogate pairs
console.log("\nWorking with code points:");
const face = "😀"; // Emoji: may use surrogate pairs in UTF-16
console.log(`Face emoji length: ${face.length}`); // Often 2 due to surrogate pairs
console.log(`Face code point: ${face.codePointAt(0).toString(16)}`);

// Safely iterating over string with code points
console.log("Characters using for...of (handles surrogate pairs correctly):");
for (const char of "Hello 😀 World 🌍") {
  console.log(char);
}

// ES2017+ string methods
console.log("\nES2017+ string methods:");
// padStart and padEnd
console.log(`"42".padStart(5, '0'): ${"42".padStart(5, '0')}`);
console.log(`"42".padEnd(5, '0'): ${"42".padEnd(5, '0')}`);

// trimStart and trimEnd (ES2019)
const paddedText = "   Hello world   ";
console.log(`Trimmed start: "${paddedText.trimStart()}"`);
console.log(`Trimmed end: "${paddedText.trimEnd()}"`);

// ES2020: matchAll
const regex = /\b(\w+)\b/g;
const str = "Hello world, welcome to JavaScript!";
console.log("\nmatchAll method results:");
if (typeof str.matchAll === 'function') {
  const matches = [...str.matchAll(regex)];
  matches.forEach((match, i) => {
    console.log(`Match ${i+1}: ${match[0]}, at position ${match.index}`);
  });
} else {
  console.log("matchAll is not available in this JS environment");
}

// ES2021: replaceAll
if (typeof "".replaceAll === 'function') {
  const newStr = "Hello world!".replaceAll('l', '*');
  console.log(`\nreplaceAll: ${newStr}`); // "He**o wor*d!"
} else {
  console.log("\nreplaceAll is not available in this JS environment");
  console.log(`Using regex: ${"Hello world!".replace(/l/g, '*')}`);
}

// String encoding and decoding
console.log("\nString encoding and decoding:");
// URL encoding/decoding
const url = "https://example.com/search?q=hello world&lang=en";
const encoded = encodeURIComponent(url);
console.log(`Encoded URL: ${encoded}`);
console.log(`Decoded URL: ${decodeURIComponent(encoded)}`);

// Base64 encoding/decoding
if (typeof btoa === 'function') {
  const base64 = btoa("Hello, World!");
  console.log(`Base64 encoded: ${base64}`);
  console.log(`Base64 decoded: ${atob(base64)}`);
} else {
  console.log("btoa/atob not available in this environment");
}

// Modern approaches (for Node.js or using polyfills)
if (typeof TextEncoder === 'function') {
  console.log("\nModern text encoding:");
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  
  const encoded = encoder.encode("Hello, 世界!");
  console.log("UTF-8 encoded bytes:", Array.from(encoded));
  console.log("Decoded back:", decoder.decode(encoded));
} else {
  console.log("\nTextEncoder/TextDecoder not available in this environment");
}

// String performance considerations
console.log("\nString performance examples:");

// Efficient string concatenation with arrays
console.log("Building large string efficiently:");
const start = Date.now();
const items = [];
for (let i = 0; i < 1000; i++) {
  items.push(`Item ${i}`);
}
const result = items.join('\n');
console.log(`Built string with ${items.length} lines in ${Date.now() - start}ms`);
console.log(`First line: ${result.split('\n')[0]}`);
console.log(`Last line: ${result.split('\n')[result.split('\n').length - 1]}`);

// String interning and comparison
console.log("\nString interning and comparison:");
const s1 = "hello";
const s2 = "hello";
const s3 = new String("hello").valueOf();
const s4 = "hel" + "lo";
const s5 = ["h", "e", "l", "l", "o"].join("");

console.log(`s1 === s2: ${s1 === s2}`); // true (identical string literals are interned)
console.log(`s1 === s3: ${s1 === s3}`); // true (comparing primitive values)
console.log(`s1 === s4: ${s1 === s4}`); // true (compile-time optimization)
console.log(`s1 === s5: ${s1 === s5}`); // true (primitive string values are compared)

// Common string utility functions
console.log("\nCommon string utility functions:");

function truncate(str, maxLength, suffix = "...") {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
}

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return [...str].reverse().join('');
}

function countOccurrences(str, char) {
  return str.split(char).length - 1;
}

console.log(`Truncate: ${truncate("This is a very long string that needs to be truncated", 20)}`);
console.log(`Slugify: ${slugify("Hello World! Special chars: @#$%")}`);
console.log(`Capitalize: ${capitalize("hello world")}`);
console.log(`Reverse: ${reverseString("hello")}`);
console.log(`Count 'l' in 'hello': ${countOccurrences("hello", "l")}`);

// Demonstrating string immutability
console.log("\nString immutability:");
let mutableVar = "hello";
console.log(`Original: ${mutableVar}`);
mutableVar = mutableVar + " world";
console.log(`Modified by creating new string: ${mutableVar}`);

// Simulating "mutable" operations using arrays
const characters = [...mutableVar];
characters[0] = "H";
const newString = characters.join("");
console.log(`"Modified" by converting to array first: ${newString}`);