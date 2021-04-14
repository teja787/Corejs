// const counter = require("./closures");

// const prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("hello world");
//   }, 2000);
// });
// prom.then(
//   (res) => {
//     console.log("resolve");
//     console.log(res);
//   },
//   (reject) => {
//     console.log("reject");
//     console.log(reject);
//   }
// );

// const { getValue, incrCounter, decrCounter } = counter();

// console.log(getValue()); //0
// incrCounter();
// incrCounter();
// console.log(getValue()); //2
// decrCounter();
// console.log(getValue()); //1

// async function foo1() {
//   try {
//     const result = await prom;
//     console.log("resolve");
//     console.log(result);
//   } catch (error) {
//     console.log("reject");
//     console.log(error);
//   }
// }

// foo1();
const sleep = (ms) => {
  console.log(`Waiting for ${ms} milliseconds`);
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};
async function withOutPromiseKeyWord() {
  await sleep(2000);
  return "Hello world";
}

async function Hello() {
  try {
    const fun = await withOutPromiseKeyWord();
    await withOutPromiseKeyWord();
    console.log(fun);
  } catch (error) {
    console.log(error.message);
  }
}
Hello();
