const tableOfTen = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const fetchTable = new Promise((res, reject) => {
  setTimeout(() => {
    res(tableOfTen);
  }, 0);
});

console.log("before table");
fetchTable.then((res) => {
  console.log(res);
});
setTimeout(() => {
  console.log("Hello world");
}, 0);
console.log("after table");
