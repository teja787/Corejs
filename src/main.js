// for (let index = 1; index < 10; index++) {
//   console.log(index * 16);
// }

const scores = [2, 4, 6, 7, 8, 9];

// for (let index = 0; index < scores.length; index++) {
//   scores[index] = 5;
// }

// console.log(scores);

// 2. forEach

// for (let index = 0; index < scores.length; index++) {
//   console.log(scores[index]);
// }

// const printItems = (item) => {
//   console.log(item);
// };

// scores.forEach(printItems);

for (const iterator of scores) {
  console.log(iterator);
}
