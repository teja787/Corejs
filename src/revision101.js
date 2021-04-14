// array find method => findArrItem(arrRef, findValue)

const marks = [2, 3, 5, 67, 8, 455, 10, 100];

// for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }
// for (const value of marks) {
//   console.log(value);
// }

// console.log(marks.every((a) => a % 2 == 0));
// console.log(marks.every((a) => a >= 2));
// console.log(marks.some((a) => a % 2 == 0));
// console.log(marks.some((a) => a == 100));
// console.log("custom starts here !");

// const customSome = (arrRef, callBack) => {
//   for (let i = 0; i < arrRef.length; i++) {
//     if (callBack(arrRef[i])) return true;
//   }
//   return false;
// };
// console.log(customSome(marks, (a) => a % 2 == 0));
// console.log(customSome(marks, (a) => a == 100));

// const customEvery = (arrRef, callBack) => {
//   for (let i = 0; i < arrRef.length; i++) {
//     if (callBack(arrRef[i]) == false) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(customEvery(marks, (a) => a % 2 == 0));
// console.log(customEvery(marks, (a) => a >= 2));

// console.log(marks.findIndex((a) => a == 67));
// console.log(marks.findIndex((a) => a == 60));
// console.log(marks.map((a) => a * 2));
// console.log(marks.filter((a) => a % 2 == 0));

// const cunstomFilter = (arrRef, callBack) => {
//   let result = [];
//   for (let i = 0; i < arrRef.length; i++) {
//     if (callBack(arrRef[i])) {
//       result.push(arrRef[i]);
//     }
//   }
//   return result;
// };
// console.log(cunstomFilter(marks, (a) => a % 2 == 0));

// const customMap = (arrRef, callBack) => {
//   let result = [];
//   for (let i = 0; i < arrRef.length; i++) {
//     result.push(callBack(arrRef[i]));
//   }
//   return result;
// };
// console.log(customMap(marks, (a) => a * 2));
// console.log(customMap(marks, (a) => a / 2));

// const findArrIndex = (arrRef, findValue) => {
//   for (let i = 0; i < arrRef.length; i++) {
//     if (arrRef[i] === findValue) return i;
//   }
//   return -1;
// };

// console.log(findArrIndex(marks, 67));
// console.log(findArrIndex(marks, 60));

// 67 find methods.
// console.log(marks.find((a) => a == 67));

// const findArrItem = (arrRef, findValue) => {
//   for (let i = 0; i < arrRef.length; i++) {
//     if (arrRef[i] === findValue) return arrRef[i];
//   }
// };
// console.log(findArrItem(marks, 60));
