
const score = 400;

console.log(score); // 400

const balance = new Number(5000);

console.log(balance); // [Number: 5000]
console.log(balance.toString()); // 5000
console.log(balance.toFixed(2)); // 5000.00  returns string

// const otherNumber = 23.8648;
//console.log(otherNumber.toPrecision(3));  // 23.9 returns string
// console.log(otherNumber.toPrecision(2)); // 24 

const otherNumber = 1123.8648;

console.log(otherNumber.toPrecision(3)); // 1.12e+3  // use precision wisely

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 1,000,000  US standards by default
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 Indian Standard

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991


/****************************************************   MATHS   *******************************************************************/

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.abs(4)); // 4
console.log(Math.round(3.4)); // 3
console.log(Math.round(3.6)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4

console.log(Math.random());
console.log((Math.random()*10)+1);

const max = 20;
const min = 10;

console.log(Math.floor((Math.random()) * (max - min + 1)) + min); // important

console.log(Math.floor((Math.random()*6)+1)); // 1st way between 1 to 6
const minnum = 6;
const maxnum = 1;
console.log(Math.floor((Math.random()) * (maxnum - minnum + 1)) + minnum); // 2nd way between 1 to 6






