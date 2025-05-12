// Advanced Array Methods

// Advanced map, filter, reduce combinations
console.log("--- Advanced Array Manipulations ---");

let users = [
    { id: 1, name: "Alice", age: 25, active: true },
    { id: 2, name: "Bob", age: 30, active: false },
    { id: 3, name: "Charlie", age: 35, active: true },
    { id: 4, name: "Dave", age: 40, active: false },
    { id: 5, name: "Eve", age: 45, active: true }
];

// Get names of active users
let activeNames = users
    .filter(user => user.active)
    .map(user => user.name);
console.log("Active users:", activeNames); // ["Alice", "Charlie", "Eve"]

// Find the average age
let avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log("Average age:", avgAge); // 35

// Group users by active status
let groupedByStatus = users.reduce((result, user) => {
    let key = user.active ? "active" : "inactive";
    if (!result[key]) {
        result[key] = [];
    }
    result[key].push(user);
    return result;
}, {});
console.log("Grouped by status:", groupedByStatus);

// flatMap example - gets all skills from users (if they had skills)
let usersWithSkills = [
    { name: "Alice", skills: ["JavaScript", "React", "Node"] },
    { name: "Bob", skills: ["Python", "Django"] },
    { name: "Charlie", skills: ["Java", "Spring", "Hibernate"] }
];

let allSkills = usersWithSkills.flatMap(user => user.skills);
console.log("All skills:", allSkills);
// ["JavaScript", "React", "Node", "Python", "Django", "Java", "Spring", "Hibernate"]

// Array.from methods
console.log("\n--- Array.from Examples ---");

// Create array from string
let charsArray = Array.from("hello");
console.log(charsArray); // ["h", "e", "l", "l", "o"]

// Create array with mapping function
let squaredNumbers = Array.from([1, 2, 3, 4, 5], x => x * x);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// Create array from Set (to remove duplicates)
let uniqueNumbers = Array.from(new Set([1, 2, 2, 3, 3, 4, 5]));
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// Array Iterator methods
console.log("\n--- Array Iterator Methods ---");

let fruits = ["Apple", "Banana", "Cherry", "Date"];

// keys() - returns Array Iterator with keys
console.log("Array keys:");
for (let key of fruits.keys()) {
    console.log(key); // 0, 1, 2, 3
}

// values() - returns Array Iterator with values
console.log("Array values:");
for (let value of fruits.values()) {
    console.log(value); // "Apple", "Banana", "Cherry", "Date"
}

// entries() - returns Array Iterator with key-value pairs
console.log("Array entries:");
for (let [index, value] of fruits.entries()) {
    console.log(index, value); // 0 "Apple", 1 "Banana", etc.
}

// Advanced String Methods
console.log("\n--- Advanced String Methods ---");

// padStart and padEnd (ES2017)
let str = "5";
console.log(str.padStart(3, "0")); // "005"
console.log(str.padEnd(3, "0")); // "500"

// startsWith and endsWith
let email = "johndoe@example.com";
console.log(email.startsWith("john")); // true
console.log(email.endsWith(".com")); // true
console.log(email.startsWith("doe", 4)); // true - starts checking from index 4

// repeat
console.log("Ha".repeat(3)); // "HaHaHa"

// Template literals with tagged templates
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        let value = values[i] || '';
        return result + str + (typeof value === 'string' ? `<em>${value}</em>` : value);
    }, '');
}

let name = "Alice";
let age = 25;
let highlightedText = highlight`My name is ${name} and I'm ${age} years old.`;
console.log(highlightedText); // "My name is <em>Alice</em> and I'm 25 years old."

// Advanced RegExp methods with strings
console.log("\n--- Advanced RegExp Methods ---");

let text = "The quick brown fox jumps over the lazy dog. The dog was not amused.";

// Matching with global flag (g)
let wordsRegex = /\b\w{3,}\b/g; // All words with 3+ characters
let matches = text.match(wordsRegex);
console.log("Words with 3+ characters:", matches);

// Using exec with while loop
let regex = /dog/g;
let result;
console.log("All occurrences of 'dog':");
while ((result = regex.exec(text)) !== null) {
    console.log(`Found '${result[0]}' at position ${result.index}`);
}

// String matchAll method (ES2020)
let phoneNumbers = "Call me at 555-123-4567 or 555-987-6543";
let phoneRegex = /(\d{3})-(\d{3})-(\d{4})/g;
let phoneMatches = [...phoneNumbers.matchAll(phoneRegex)];
console.log("Phone number matches:");
phoneMatches.forEach(match => {
    console.log(`Full match: ${match[0]}`);
    console.log(`Area code: ${match[1]}`);
    console.log(`Prefix: ${match[2]}`);
    console.log(`Line number: ${match[3]}`);
});

// replaceAll method (ES2021)
let replaceText = "The cat sat on the mat. The cat was happy.";
let newText = replaceText.replaceAll("cat", "dog");
console.log("After replaceAll:", newText);
// "The dog sat on the mat. The dog was happy."

// Using regular expressions with replace for complex replacements
let htmlText = "<div>Hello</div><p>World</p>";
let stripTags = htmlText.replace(/<[^>]*>|<\/[^>]*>/g, "");
console.log("Stripped HTML tags:", stripTags); // "HelloWorld"

// Object Methods
console.log("\n--- Object Methods ---");

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    
    // Object method
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    // Arrow function doesn't have its own 'this' context
    greet: () => {
        // 'this' refers to outer scope, not the object
        console.log("Hi there!");
    }
};

console.log(person.getFullName()); // "John Doe"
person.greet(); // "Hi there!"

// Object.keys(), Object.values(), Object.entries()
console.log("Object.keys():", Object.keys(person)); // ["firstName", "lastName", "age", "getFullName", "greet"]
console.log("Object.values():", Object.values(person)); // ["John", "Doe", 30, ƒ, ƒ]
console.log("Object.entries():", Object.entries(person)); // [["firstName", "John"], ["lastName", "Doe"], ...]

// Object.assign() - copy values from one object to another
let defaults = { theme: "light", fontSize: 12 };
let userPrefs = { theme: "dark" };
let merged = Object.assign({}, defaults, userPrefs);
console.log("Merged preferences:", merged); // { theme: "dark", fontSize: 12 }

// Object spread operator (alternative to Object.assign)
let spreadMerged = { ...defaults, ...userPrefs };
console.log("Spread merged:", spreadMerged); // { theme: "dark", fontSize: 12 }

// Object.freeze() - prevents modifications
let frozen = Object.freeze({ name: "Frozen Object" });
// frozen.name = "Modified"; // This will fail silently in non-strict mode
console.log("Frozen object:", frozen.name); // "Frozen Object"

// Object.seal() - allows modification of existing properties but not adding/removing
let sealed = Object.seal({ name: "Sealed Object", type: "Example" });
sealed.name = "Modified Sealed Object"; // Works
// sealed.newProp = "New"; // This will fail silently in non-strict mode
console.log("Sealed object:", sealed);

// Promise Methods
console.log("\n--- Promise Methods ---");

// Basic Promise
let basicPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 100);
});

basicPromise.then(result => console.log("Basic promise result:", result));

// Promise.all - wait for all promises to resolve
let promise1 = Promise.resolve("One");
let promise2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 100));
let promise3 = new Promise((resolve) => setTimeout(() => resolve("Three"), 50));

Promise.all([promise1, promise2, promise3])
    .then(values => console.log("Promise.all result:", values)) // ["One", "Two", "Three"]
    .catch(error => console.error("Promise.all error:", error));

// Promise.race - resolves or rejects as soon as one promise resolves/rejects
Promise.race([promise1, promise2, promise3])
    .then(value => console.log("Promise.race result:", value)) // "One" (fastest to resolve)
    .catch(error => console.error("Promise.race error:", error));

// Promise.allSettled (ES2020) - waits for all promises to settle
let successPromise = Promise.resolve("Success");
let failurePromise = Promise.reject("Failed");

Promise.allSettled([successPromise, failurePromise])
    .then(results => {
        console.log("Promise.allSettled results:");
        results.forEach(result => console.log(result));
    });

// Promise.any (ES2021) - resolves if any promise resolves
Promise.any([
    new Promise((resolve) => setTimeout(() => resolve("Fast"), 200)),
    new Promise((resolve) => setTimeout(() => resolve("Faster"), 100)),
    new Promise((_, reject) => setTimeout(() => reject("Failed"), 50))
])
.then(result => console.log("Promise.any result:", result)) // "Faster"
.catch(error => console.error("Promise.any error:", error));

// Map and Set methods
console.log("\n--- Map and Set Methods ---");

// Map methods
let userMap = new Map();
userMap.set("john", { name: "John", role: "Admin" });
userMap.set("sarah", { name: "Sarah", role: "User" });

console.log("Map has 'john':", userMap.has("john")); // true
console.log("Map get 'sarah':", userMap.get("sarah")); // { name: "Sarah", role: "User" }
console.log("Map size:", userMap.size); // 2

userMap.forEach((value, key) => {
    console.log(`${key}: ${value.name} (${value.role})`);
});

// Map keys, values, entries
console.log("Map keys:", [...userMap.keys()]); // ["john", "sarah"]
console.log("Map values:", [...userMap.values()]); // [{ name: "John"... }, { name: "Sarah"... }]
console.log("Map entries:", [...userMap.entries()]); // [["john", { name: "John"... }], ...]

// Set methods
let uniqueSet = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log("Set size:", uniqueSet.size); // 5
console.log("Set has 3:", uniqueSet.has(3)); // true

uniqueSet.add(6);
uniqueSet.delete(1);
console.log("Modified set:", [...uniqueSet]); // [2, 3, 4, 5, 6]

// Set operations
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

// Union
let union = new Set([...setA, ...setB]);
console.log("Union:", [...union]); // [1, 2, 3, 4, 5, 6]

// Intersection
let intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection:", [...intersection]); // [3, 4]

// Difference
let difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference (A-B):", [...difference]); // [1, 2]

// WeakMap and WeakSet
console.log("\n--- WeakMap and WeakSet ---");
// These are special versions that don't prevent garbage collection of keys
// Useful for private object data and memory management

// Symbol methods
console.log("\n--- Symbol Methods ---");

let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log("Symbols equal?", sym1 === sym2); // false - each Symbol is unique

// Symbol.for - global Symbol registry
let globalSym1 = Symbol.for("global");
let globalSym2 = Symbol.for("global");
console.log("Global symbols equal?", globalSym1 === globalSym2); // true

// Symbol.keyFor - get key for global Symbol
console.log("Symbol.keyFor result:", Symbol.keyFor(globalSym1)); // "global"

// Reflect API methods
console.log("\n--- Reflect API Methods ---");

let target = { name: "target" };
Reflect.set(target, "property", "value");
console.log("Reflect.get result:", Reflect.get(target, "property")); // "value"
console.log("Reflect.has result:", Reflect.has(target, "property")); // true
console.log("Reflect.ownKeys result:", Reflect.ownKeys(target)); // ["name", "property"]

// BigInt methods (ES2020)
console.log("\n--- BigInt Methods ---");

let bigInt = 1234567890123456789012345678901234567890n;
console.log("BigInt toString:", bigInt.toString());
console.log("BigInt + BigInt:", bigInt + 1n);
// console.log("BigInt + Number:", bigInt + 1); // TypeError: Cannot mix BigInt and other types