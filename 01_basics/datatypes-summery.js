
// Primitive datatypes

// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt

// Reference (Non primitive)

// 1. Arrays
// 2. Objects
// 3. Functions

const Id = Symbol('123');
const anotherId = Symbol('123');

console.log(Id === anotherId);  // false

console.log(Id == anotherId); // false

console.log(Id); // Symbol(132)

console.log(anotherId); // Symbol(123)

console.log(typeof Id); // symbol

const bigIntNumber = 35648798516546445655n;

// Array

const superHeros = ["Shaktiman", "JuniorG", "Hatim"];

console.log(typeof superHeros); // object

// Object

let myObject = {
    Name: "Vishal",
    Age: 26,
    Gender: "Male"
};

console.log(typeof myObject); // Object

let myFunction = function () {
    console.log("New Function");
};

console.log(typeof myFunction); // Function/Object function