// for (let index = 1; index < 10; index++) {
//   console.log(index * 16);
// }
/**
 * 1. filter prime number from this array and print
 * 2. filter even number from this array and print
 * 3. filter odd number from this array and print
 * 4. print sum  of all items in array.
 * 5. [1 to 4] do with for, forEach, forof
 */
// const utils = require("./utils");

// console.log(utils);
// utils.filterPrimes("Hello world");
// utils.filterEvenOddUsingFor();

// Array or Object
// [number, string, Boolean] other than these. all are object in js

const scores = [2, 4, 6, 7, 8, 9, 11, 13, 18, 20, 30, 40, 50];
const b = [13, 24, 50, 30, 50, 30];
/**
 * 1. using array method [map] calculate sum of array Items
 * 2. [7, -1, length, ] forEach items of arr b create array of their indexes
 * 3. filterEvenOddUsingForOf => using array [filter] method
 */
// sum of array items using Map method
let sum = 0;
const meth = scores.map((a) => (sum += a));
// Here the map returns an array but if i try isArray method on sum it shows false
// console.log(Array.isArray(meth));

// filter even numbers using filter method
function filterEvenUsingFilter() {
  const filter = scores.filter((fil) => fil % 2 === 0);
  console.log(filter);
}
// filterEvenUsingFilter();

// filter odd numbers using filter method and forOf

function filterOddUsingFilter() {
  const filter = scores.filter((fil) => fil % 2 != 0);
  console.log(filter);
}
// filterOddUsingFilter();

// indexes of array b

function indexesOfArray() {
  const c = [];
  b.forEach((element, index) => {
    const ind = scores.findIndex((score) => score === element);
    c.push(ind);
  });
  console.log(c);
}
// indexesOfArray();

let fruits = ["banana", "orange", "apple", "mango"];

let arraySlice = fruits.slice(0, 2);
// console.log(arraySlice);
let arr = Array.from(fruits);

// sort
// -1[less than 0] or 1[greater than 0]
console.log(scores.sort((a, b) => (a > b ? 1 : -1)));
console.log(fruits.sort());
// console.log(arr);

let ob = fruits.entries();
// console.log(ob.next());
// console.log(ob.next());
// console.log(ob.next());
// console.log(ob.next());
// console.log(ob.next());

// entries
// every
const isArrayOfNum = scores.some((item) => typeof item == "string");
// console.log(isArrayOfNum);

const isArrayOfString = scores.every((item) => typeof item == "string");
// console.log(isArrayOfString);
// difference between toString and toLocalString
let e = fruits.toLocaleString();
let f = fruits.toString();
// console.log(`${e} using toLocalString`);
// console.log(`${f} using toString`);
// const e = scores.concat(b);
// console.log(e);

// scores.splice(0, 2);
// console.log(scores);

// scores.splice(scores.length, 0, b);
// scores.splice(scores.length, 0, ...b);

// scores.splice(9, 4);
// console.log(scores);
// scores.shift();
// console.log(scores);
// scores.unshift(...b);
// console.log(scores);

// difference between find method and includes method

// const foundElement = scores.find((value) => value === 13);
// console.log(foundElement);
// const foundIndex = scores.findIndex((value) => value === 13);
// console.log(foundIndex);
// console.log(typeof scores);
// console.log(Array.isArray(scores));

// [number,string, object, Boolean, Array]
// {}

// function checkArgumentType(inputValue) {
//   if (typeof inputValue == "number") {
//     console.log("it is a number");
//   } else if (typeof inputValue == "string") {
//     console.log("it is a string");
//   } else if (typeof inputValue == "boolean") {
//     console.log("it is a boolean");
//   } else if (Array.isArray(inputValue)) {
//     console.log("it is an array");
//   } else if (typeof inputValue == "object") {
//     console.log("it is an object");
//   }
// }

// checkArgumentType(10);
// checkArgumentType("hello");
// checkArgumentType(true);
// checkArgumentType([]);
// checkArgumentType({});
