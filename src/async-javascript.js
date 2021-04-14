// //Event-loop

const calculatSum = (age) => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("user is eligible");
    } else {
      reject("kids not allowed");
    }
  });
};

function fetchGreet() {
  console.log("sync");
}

// while (true) console.log("sync");

// setTimeout(() => {
//   console.log("async");
// }, 0);

// setTimeout(() => {
//   console.log("async");
// }, 1000);
// fetchGreet();

calculatSum(19)
  .then((res) => {
    return new Promise((resolve, rej) => {
      resolve(res);
    });
  })
  .then((response) => {
    console.log(response, "!");
  })
  .catch((err) => {
    console.error(err);
  });
// callBack hell

// [we can write await inside async function only]
async function sayHello() {
  return "Hello world ....!";
  //   throw new Error("No message available");
}
// sayHello().then((res) => {
//   console.log(res);
// });
// open a file. waiting for api....
async function resolvePromises() {
  try {
    const res = await sayHello();
    console.log(res);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("finally block");
    // close a file
  }
}

resolvePromises();
// Typescript =>

function Sum(...args) {
  //   let args = Array.from(arguments);

  let sumOfvalues = args.reduce((a, b) => a + b);
  return sumOfvalues;
}

let s = "1,2,3,4";
console.log(Array.from([1, 2, 3, 4]));
console.log(Sum(10, 20, 30, 40));

const convert = (min) => {
  return min * 60;
};
console.log(convert(6));

const date = new Date();
const dateFormat =
  date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
const time =
  date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
console.log(time);

const t = date.toLocaleTimeString();
console.log(t);

const areaOfTriangle = (base, height) => {
  return (base * height) / 2;
};
console.log(areaOfTriangle(4, 6));

// const str = "Pavan";
// const arr = Array.from(str);
// console.log(arr);

const changeCase = (str) => {
  let swapResult = "";
  for (let i = 0; i < str.length; i++) {
    let asc = str.charCodeAt(i);
    // console.log(asc);
    if (asc >= 65 && asc <= 90) {
      //   swapResult += str[i].toLowerCase();
      swapResult += String.fromCharCode(asc + 32);
    } else if (asc >= 97 && asc <= 122) {
      swapResult += String.fromCharCode(asc - 32);
    }
  }
  return swapResult;
};
console.log(changeCase("PaVaN"));
sayHello();
// promise is use
