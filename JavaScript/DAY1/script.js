/* 
! JavaScript Document

Token: DAY1/script.js

!keywords: 

Keywards are the predefined words which is used to perform some specific task in JavaScript like var, let, const, if, else, for, while, function, return, etc.

!identifiers:
Identifiers are the names given to variables, functions, arrays, objects, etc., in JavaScript. They are used to identify these entities uniquely in the code. Examples of identifiers include myVariable, calculateSum, userList, etc.

!literals:
Literals are fixed values that are directly written into the code. They can be of various types such as string literals (e.g., "Hello, World!"), numeric literals (e.g., 42), boolean literals (e.g., true or false), array literals (e.g., [1, 2, 3]), and object literals (e.g., {name: "John", age: 30}).

RULES FOR NAMING IDENTIFIERS:
1. Identifiers must begin with a letter (A-Z or a-z), underscore (_), or dollar sign ($).
2. Subsequent characters can also include digits (0-9).
3. Identifiers are case-sensitive (e.g., myVar and myvar are different).
4. Identifiers cannot be the same as JavaScript reserved keywords (e.g., var, function, if, else).
5. Identifiers should not contain spaces or special characters (except _ and $).



!operators:
Operators are special symbols or keywords in JavaScript that perform operations on operands (values or variables). They can be categorized into several types, including arithmetic operators (e.g., +, -, *, /), comparison operators (e.g., ==, ===, !=, >, <), logical operators (e.g., &&, ||, !), assignment operators (e.g., =, +=, -=), and more.


!DATA TYPES IN JAVASCRIPT:
1. Primitive Data Types:
   - Number: Represents both integer and floating-point numbers (e.g., 42, 3.14).
   - String: Represents a sequence of characters enclosed in single or double quotes (e.g., "Hello", 'World').
    - Boolean: Represents a logical entity that can be either true or false.
    - Undefined: Represents a variable that has been declared but not assigned a value.
    - Null: Represents the intentional absence of any object value.
    - Symbol: Represents a unique and immutable primitive value, often used as object property keys.
    - BigInt: Represents integers with arbitrary precision, allowing for the representation of very large numbers.

2. Non-Primitive Data Types:
   - Object: Represents a collection of key-value pairs, where keys are strings (or Symbols) and values can be of any data type (e.g., {name: "John", age: 30}).
   - Array: A special type of object used to store ordered collections of values (e.g., [1, 2, 3, 4, 5]).
   - Function: A block of reusable code that can be called with arguments to perform a specific task.

    

*/



/*

!Interview Questions:
1-what is client side language?
Client-side language is a programming language that is executed on the user's web browser rather than on the web server. It is primarily used to create interactive and dynamic web pages, allowing users to interact with the content without needing to communicate with the server for every action. Examples of client-side languages include JavaScript, HTML, and CSS.
OR U can say jo web browser pr run hota hai use client side language kehte hai jaise javascript

2-differentiate between == and === operators in JavaScript?
The == operator in JavaScript is known as the loose equality operator. It compares two values for equality after performing type coercion, meaning it converts the values to a common type before making the comparison. For example, 5 == '5' would return true because the string '5' is coerced to the number 5 before comparison.     
The === operator, on the other hand, is known as the strict equality operator. It compares both the value and the type of the two operands without performing any type coercion. For example, 5 === '5' would return false because one is a number and the other is a string, so their types are different.

3-Differqentiate between null and undefined in JavaScript?
In JavaScript, null and undefined are both used to represent the absence of a value, but they have different meanings and uses.
Undefined is a primitive value that indicates that a variable has been declared but has not yet been assigned a value. For example, if you declare a variable without initializing it, its value will be undefined.
Null, on the other hand, is an assignment value that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object reference is intentionally empty. For example, you might set a variable to null to indicate that it does not currently hold any meaningful data.

or in short:

Undefined bhi empty value  h jo automatically bnta hai agar hm kuch assign nhi krte
null bhi empty value h lekin ye hm khud assign krte hai jb hm chahte hai ki variable me koi value na ho
 */

let sampleString = "Hello, World!";
 // String literal
 console.log(sampleString);
 console.log(typeof sampleString);
let sampleNumber = 42; // Numeric literal
console.log(sampleNumber);
console.log(typeof sampleNumber);

let sampleBoolean = true; // Boolean literal
console.log(sampleBoolean);
console.log(typeof sampleBoolean);
let sampleArray = [1, 2, 3];
console.log(sampleArray); // Array literal
console.log(typeof sampleArray);

let sampleObject = { name: "John", age: 30 }; // Object literal
console.log(sampleObject);
console.log(typeof sampleObject);


let undefinedVar; // Undefined
console.log(undefinedVar);
console.log(typeof undefinedVar);

let nullVar = null; // Null
console.log(nullVar);
console.log(typeof nullVar);    

let bigIntVar = 9007199254741991n; // BigInt literal
console.log(bigIntVar);
console.log(typeof bigIntVar);

let symbolVar = Symbol("uniqueIdentifier"); // Symbol literal
let anotherSymbolVar = Symbol("uniqueIdentifier");
console.log(symbolVar);
console.log(typeof symbolVar);
console.log(symbolVar === anotherSymbolVar); // false, as symbols are unique
console.log(symbolVar===symbolVar); // true



//loose comparison
// It checks only value, not data type
console.log(5 == '5'); // true

//strict comparison
// It checks both value and data type
console.log(5 === '5'); // false








// !hosting in JavaScript

console.log(a1); // Output: ReferenceError: a1 is not defined it can move the element to top so accesable to all but this is not initialized yet so it returns undefined                                    

var a1 = 10; // Declaration and Initialization
console.log(a1); // Output: 10