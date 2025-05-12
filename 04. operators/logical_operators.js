// Logical Operators
console.log("Logical Operators in JavaScript");

// AND operator (&&)
console.log("\nLogical AND (&&):");
console.log("true && true:", true && true); // true
console.log("true && false:", true && false); // false
console.log("false && true:", false && true); // false
console.log("false && false:", false && false); // false

// Short-circuit evaluation with &&
console.log("\nShort-circuit evaluation with &&:");
console.log("true && 'Hello':", true && 'Hello'); // "Hello" (returns the second operand if first is truthy)
console.log("false && 'Hello':", false && 'Hello'); // false (short-circuits, doesn't evaluate second operand)
console.log("null && 'Hello':", null && 'Hello'); // null (short-circuits for any falsy value)
console.log("undefined && 'Hello':", undefined && 'Hello'); // undefined (short-circuits)
console.log("'' && 'Hello':", '' && 'Hello'); // "" (short-circuits for empty string)
console.log("0 && 'Hello':", 0 && 'Hello'); // 0 (short-circuits for zero)

// OR operator (||)
console.log("\nLogical OR (||):");
console.log("true || true:", true || true); // true
console.log("true || false:", true || false); // true
console.log("false || true:", false || true); // true
console.log("false || false:", false || false); // false

// Short-circuit evaluation with ||
console.log("\nShort-circuit evaluation with ||:");
console.log("true || 'Hello':", true || 'Hello'); // true (short-circuits, doesn't evaluate second operand)
console.log("false || 'Hello':", false || 'Hello'); // "Hello" (returns the second operand if first is falsy)
console.log("null || 'Default':", null || 'Default'); // "Default" (provides default value)
console.log("undefined || 'Default':", undefined || 'Default'); // "Default"
console.log("'' || 'Default':", '' || 'Default'); // "Default" (for empty string)
console.log("0 || 'Default':", 0 || 'Default'); // "Default" (for zero)
console.log("'Hello' || 'Default':", 'Hello' || 'Default'); // "Hello" (first truthy value)

// NOT operator (!)
console.log("\nLogical NOT (!):");
console.log("!true:", !true); // false
console.log("!false:", !false); // true
console.log("!'Hello':", !'Hello'); // false (string with content is truthy)
console.log("!'':", !''); // true (empty string is falsy)
console.log("!0:", !0); // true (0 is falsy)
console.log("!1:", !1); // false (1 is truthy)
console.log("!null:", !null); // true (null is falsy)
console.log("!undefined:", !undefined); // true (undefined is falsy)
console.log("!NaN:", !NaN); // true (NaN is falsy)

// Double negation (!!) - converts to boolean
console.log("\nDouble negation (!!):");
console.log("!!true:", !!true); // true
console.log("!!false:", !!false); // false
console.log("!!'Hello':", !!'Hello'); // true (converts to boolean true)
console.log("!!'':", !!''); // false (converts to boolean false)
console.log("!!0:", !!0); // false
console.log("!!1:", !!1); // true
console.log("!!null:", !!null); // false
console.log("!!undefined:", !!undefined); // false
console.log("!!{}:", !!{}); // true (empty object is truthy)
console.log("!![]:", !![]); // true (empty array is truthy)

// Nullish coalescing operator (??) - ES2020
console.log("\nNullish Coalescing Operator (??):");
console.log("null ?? 'Default':", null ?? 'Default'); // "Default"
console.log("undefined ?? 'Default':", undefined ?? 'Default'); // "Default"
console.log("0 ?? 'Default':", 0 ?? 'Default'); // 0 (zero is not null or undefined)
console.log("'' ?? 'Default':", '' ?? 'Default'); // "" (empty string is not null or undefined)
console.log("false ?? 'Default':", false ?? 'Default'); // false (false is not null or undefined)
console.log("NaN ?? 'Default':", NaN ?? 'Default'); // NaN (NaN is not null or undefined)

// Difference between || and ??
console.log("\nDifference between || and ??:");
console.log("0 || 'Default':", 0 || 'Default'); // "Default" (0 is falsy)
console.log("0 ?? 'Default':", 0 ?? 'Default'); // 0 (0 is not null or undefined)
console.log("'' || 'Default':", '' || 'Default'); // "Default" (empty string is falsy)
console.log("'' ?? 'Default':", '' ?? 'Default'); // "" (empty string is not null or undefined)
console.log("false || 'Default':", false || 'Default'); // "Default" (false is falsy)
console.log("false ?? 'Default':", false ?? 'Default'); // false (false is not null or undefined)

// Logical assignment operators (ES2021)
console.log("\nLogical Assignment Operators (ES2021):");

// Logical AND assignment (&&=)
let a = true;
let b = 'Original Value';
console.log("Initial a =", a, ", b =", b);
a &&= 'New Value'; // Assigns 'New Value' to a because a is truthy
b &&= 'New Value'; // Assigns 'New Value' to b because b is truthy
console.log("After a &&= 'New Value', a =", a);
console.log("After b &&= 'New Value', b =", b);

// Logical OR assignment (||=)
let c = false;
let d = null;
let e = 'Original Value';
console.log("Initial c =", c, ", d =", d, ", e =", e);
c ||= 'New Value'; // Assigns 'New Value' to c because c is falsy
d ||= 'New Value'; // Assigns 'New Value' to d because d is falsy
e ||= 'New Value'; // Does NOT assign because e is truthy
console.log("After c ||= 'New Value', c =", c);
console.log("After d ||= 'New Value', d =", d);
console.log("After e ||= 'New Value', e =", e);

// Nullish coalescing assignment (??=)
let f = undefined;
let g = null;
let h = 0;
let i = '';
console.log("Initial f =", f, ", g =", g, ", h =", h, ", i =", i);
f ??= 'New Value'; // Assigns 'New Value' to f because f is null/undefined
g ??= 'New Value'; // Assigns 'New Value' to g because g is null/undefined
h ??= 'New Value'; // Does NOT assign because h is not null/undefined (even though it's falsy)
i ??= 'New Value'; // Does NOT assign because i is not null/undefined (even though it's falsy)
console.log("After f ??= 'New Value', f =", f);
console.log("After g ??= 'New Value', g =", g);
console.log("After h ??= 'New Value', h =", h);
console.log("After i ??= 'New Value', i =", i);

// Complex logical expressions
console.log("\nComplex Logical Expressions:");
let age = 25;
let hasLicense = true;

// Using logical operators in conditions
let canDrive = age >= 18 && hasLicense;
console.log("Age:", age, "Has License:", hasLicense);
console.log("Can Drive:", canDrive);

// Setting defaults with logical operators
let username = '';
let displayName = username || 'Anonymous';
console.log("Username:", username);
console.log("Display Name:", displayName);

// Conditional execution using &&
let isAdmin = true;
console.log("Is Admin:", isAdmin);
isAdmin && console.log("This only prints if isAdmin is true");

// Using logical operators for validation
let email = 'test@example.com';
let password = '';
let isValidForm = email && password;
console.log("Email:", email, "Password:", password);
console.log("Is Form Valid:", isValidForm);