// what is function and methods

// functions which you access with [.]]funcName => method
// if you directly its (function)

// const marks = [2, 4, 5, 6, 7, 8, 9];

// function printArray() {
//   console.log(mar);
// }
// printArray();

function nameOFfunc(...args) {
  console.log(args);
}

const nameOFfunc2 = (...args) => {
  console.log(args);
};
nameOFfunc(2, 4, 6, 7, "Hello");
nameOFfunc2(2, 5, 6, "World");
// parameter vs argument

//---------------Pass by reference && pass by value------------------------

// 1. [boolean, string, number] are (pass by value)
// 2. other than [boolean, string, number] everything is pass by reference

let count = 9;

// memory representation
// [
//     9 => "0Xfdffdfd",
//     person => "0xdfjhfdfd"
// ]
const students = [];

let person = { name: "teja" };
const modifyCount = (counter) => {
  counter = 1000;
  students.push(counter);
};
const modifyPerson = (person) => {
  person.age = 44;
  students.push(person);
};

modifyCount(count);
modifyPerson(person);
console.log(count);
console.log(person);
console.log(students);

// Functions are first class citizens
// this means
// 1. we can assign a function to a variable
// 2. we can pass a function as an argument to another function
// 3. we can return function from function

const functionVariable = function () {
  const name = "John";
  return () => name + " Hello";
};

const functionVariable2 = (h = 34443434343) => {
  console.log("World");
  return h;
};

// functionVariable();
const ret = functionVariable2(functionVariable);
const returnedInnerFunc = ret();
console.log(returnedInnerFunc());
// currying
// [Promises and async await]

function greet(message = " Hello") {
  const functionVariable = function () {
    const name = "John";
    return () => name + message;
  };
  return functionVariable;
}

const greetMessage = greet()();

console.log(greetMessage());
const scores = [2, 4];
console.log(scores);
