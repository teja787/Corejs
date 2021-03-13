// const abcObj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3];

// const obj = arr1.reduce((ab, arr1, i) => {
//   ab[arr1] = arr2[i];
//   return ab;
// }, {});
// console.log(obj);

// const combinedObj = {};
// arr1.forEach((el, index) => {
//   combinedObj[el] = arr2[index];
// });
// console.log(combinedObj);

const combinedObj2 = {};

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
  console.log(arr2[i]);
  combinedObj2[arr1[i]] = arr2[i];
}
console.log(combinedObj2);

console.log("-----------Task one completed-----------");
// console.log(Object.keys(abcObj));
// console.log(Object.values(abcObj));

// you have to print table of 10 .
// each value per second

// sec1 => 10
// sec2 => 20

// const numbers = () => {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// };
// numbers();

let count = 0;

const cancelInterval = () => clearInterval(intervalRef);
const intervalRef = setInterval(() => {
  console.log(++count);
  if (count == 10) cancelInterval();
}, 1000);
