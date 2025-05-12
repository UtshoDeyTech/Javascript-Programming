// string methods
let str = "Utsho dey";

console.log("str.length: Returns the length of string");
console.log(str.length);

console.log("str.charAt(0): Returns character at specified index 0");
console.log(str.charAt(0));

console.log("str.charAt(str.length - 1): Returns last character using length-1");
console.log(str.charAt(str.length - 1));

console.log("str.indexOf('d'): Returns first occurrence index of 'd'");
console.log(str.indexOf("d"));

console.log("str.lastIndexOf('d'): Returns last occurrence index of 'd'");
console.log(str.lastIndexOf("d"));

console.log("str.indexOf('d', 3): Returns first 'd' after index 3");
console.log(str.indexOf("d", 3));

console.log("str.indexOf('d', 5): Returns first 'd' after index 5");
console.log(str.indexOf("d", 5));

console.log("str.indexOf('d', 7): Returns first 'd' after index 7");
console.log(str.indexOf("d", 7));

console.log("str.toUpperCase(): Converts string to uppercase");
console.log(str.toUpperCase());

console.log("str.toLowerCase(): Converts string to lowercase");
console.log(str.toLowerCase());

console.log("str.trim(): Removes whitespace from both ends");
console.log(str.trim());

console.log("str.trimStart(): Removes whitespace from start");
console.log(str.trimStart());

console.log("str.trimEnd(): Removes whitespace from end");
console.log(str.trimEnd());

console.log("str.slice(0, 4): Extracts characters from index 0 to 4");
console.log(str.slice(0, 4));

console.log("str.slice(4): Extracts characters from index 4 to end");
console.log(str.slice(4));

console.log("str.slice(-4): Extracts last 4 characters");
console.log(str.slice(-4));

console.log("str.slice(-4, -1): Extracts characters from index -4 to -1");
console.log(str.slice(-4, -1));

console.log("str.substring(0, 4): Extracts characters between index 0 and 4");
console.log(str.substring(0, 4));

console.log("str.substring(4): Extracts characters from index 4 to end");
console.log(str.substring(4));

console.log("str.substring(-4): Note: negative indices are treated as 0");
console.log(str.substring(-4));

console.log("str.substring(-4, -1): Note: negative indices are treated as 0");
console.log(str.substring(-4, -1));

let str2 = "Utsho"
let str3 = "dey"

console.log("str2.concat(' ', str3): Concatenates two strings");
console.log(str2.concat(" ", str3));

str = str.replace("Utsho", "Utsav");
console.log("str.replace('Utsho', 'Utsav'): Replaces 'Utsho' with 'Utsav'");
console.log(str);
console.log("Note: replace() does not change the original string, it returns a new string");

str2 = str2.replace("o", "a");
console.log("str2.replace('o', 'a'): Replaces first 'o' with 'a'");
console.log(str2);
console.log("Note: replace() does not change the original string, it returns a new string");

// Extended content follows

console.log("\nstr.split(' '): Splits string by spaces");
console.log(str.split(' '));

console.log("\nstr.split(''): Splits string into array of characters");
console.log(str.split(''));

console.log("\nstr.split(): Without arguments, returns the whole string as a single array element");
console.log(str.split());

let csv = "apple,banana,cherry,date";
console.log("\ncsv.split(','): Splits CSV string by commas");
console.log(csv.split(','));

console.log("\nstr.includes('Utsav'): Checks if string contains 'Utsav'");
console.log(str.includes('Utsav'));

console.log("\nstr.includes('Utsho'): Checks if string contains 'Utsho'");
console.log(str.includes('Utsho'));

console.log("\nstr.startsWith('Utsav'): Checks if string starts with 'Utsav'");
console.log(str.startsWith('Utsav'));

console.log("\nstr.endsWith('dey'): Checks if string ends with 'dey'");
console.log(str.endsWith('dey'));

let paddedStr = "   padded string   ";
console.log("\npaddedStr (with spaces): '" + paddedStr + "'");
console.log("paddedStr.trim(): '" + paddedStr.trim() + "'");
console.log("paddedStr.trimStart(): '" + paddedStr.trimStart() + "'");
console.log("paddedStr.trimEnd(): '" + paddedStr.trimEnd() + "'");

console.log("\nstr.repeat(3): Repeats string 3 times");
console.log(str.repeat(3));

let num = 42;
let strNum = String(num);
console.log("\nConverting number to string using String(): " + strNum);
console.log("Type of strNum: " + typeof strNum);

let bool = true;
let strBool = String(bool);
console.log("\nConverting boolean to string using String(): " + strBool);
console.log("Type of strBool: " + typeof strBool);

console.log("\nstr.charAt(0): Gets character at index 0");
console.log(str.charAt(0));

console.log("\nstr[0]: Alternative way to get character at index 0");
console.log(str[0]);

console.log("\nstr.charCodeAt(0): Gets UTF-16 code of character at index 0");
console.log(str.charCodeAt(0));

console.log("\nstr.codePointAt(0): Gets Unicode code point of character at index 0");
console.log(str.codePointAt(0));

let camelCase = "camelCaseString";
console.log("\nConverting camelCase to other cases:");
console.log("Original: " + camelCase);
console.log("To snake_case (manually): " + camelCase.replace(/([A-Z])/g, '_$1').toLowerCase());
console.log("To kebab-case (manually): " + camelCase.replace(/([A-Z])/g, '-$1').toLowerCase());

console.log("\nstr.search(/[A-Z]/): Searches for uppercase letter using regex");
console.log(str.search(/[A-Z]/));

console.log("\nstr.match(/[a-z]/g): Matches all lowercase letters using regex");
console.log(str.match(/[a-z]/g));

console.log("\nstr.replace(/[aeiou]/g, '*'): Replaces all vowels with *");
console.log(str.replace(/[aeiou]/g, '*'));

// ES2021 String.prototype.replaceAll
if (typeof String.prototype.replaceAll === 'function') {
  console.log("\nstr.replaceAll('e', '*'): Replaces all occurrences of 'e' with '*'");
  console.log(str.replaceAll('e', '*'));
} else {
  console.log("\nreplaceAll is not available in this JS environment. Using regex instead:");
  console.log(str.replace(/e/g, '*'));
}

console.log("\nConverting string to array of characters:");
let charArray = [...str];
console.log(charArray);

console.log("\nJoining array back to string:");
console.log(charArray.join(''));

let longString = "This is a very long string that we want to truncate";
let maxLength = 20;
console.log("\nTruncating string to 20 characters with ellipsis:");
let truncated = longString.length > maxLength 
  ? longString.slice(0, maxLength) + "..." 
  : longString;
console.log(truncated);

let whitespaceStr = "   This   has   extra   spaces   ";
console.log("\nRemoving all extra spaces from string:");
let normalized = whitespaceStr.trim().replace(/\s+/g, ' ');
console.log(normalized);