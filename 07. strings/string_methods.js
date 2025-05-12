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