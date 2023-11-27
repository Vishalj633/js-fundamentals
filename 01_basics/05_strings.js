

const name = "Vishal";
const age = 27;

// console.log(name + age + " Jagadale");  // outdated syntax, use backticks ` ` -> for string interpolation

console.log(`Hello my name is ${name} and my age is ${age}`); // modern way, called as string interpolation.

const getName = new String ('Jaggu');

// String {'Jaggu'}
// 0: "J"
// 1: "a"
// 2: "g"
// 3: "g"
// 4: "u"
// length: 5
// [[Prototype]]: String

console.log(getName[0]) // J
console.log(getName[0].__proto__); // {}
console.log(getName.length); // 5
console.log(getName.toUpperCase()); // JAGGU

console.log(getName.charAt(2)); // g
console.log(getName.indexOf('g')); // 2

const newString = getName.substring(0, 4);
// const newString = getName.substring(-8, 4); // can pass negative values but substring will start from 0th index only
console.log(newString); // jagg  0,1,2,3  (end index i.e. 4 not included)

// const anotherString = getName.slice(0, 4); // jagg  0,1,2,3  (end index i.e. 4 not included)
const anotherString = getName.slice(-7, 1); // not clear 
console.log(anotherString); // jagg  0,1,2,3  (end index i.e. 4 not included)


const getSurname = "   Jagadale    "
console.log(getSurname); //    Jagadale    
console.log(getSurname.trim()); // Jagadale

const url = "https://vishal.com/vishal%20jagadale";

console.log(url); // https://vishal.com/vishal%20jagadale
console.log(url.replace('%20', '-')); // https://vishal.com/vishal-jagadale

console.log(url.includes('vishal')); // true
console.log(url.includes('bidal')); // false

const getLongVariable = 'vishal-jagadale-bidal-stara-man';

console.log(getLongVariable.split('-')); // [ 'vishal', 'jagadale', 'bidal', 'stara', 'man' ]   


