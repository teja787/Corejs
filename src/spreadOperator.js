let arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
// arr1 = arr1.concat(arr2);

arr1.push(...arr2);
console.log(arr1);

function sum(...arr3) {
  let sum = arr3.reduce((a, b) => a + b);
  return sum;
}
console.log(sum(2, 3, 5, 7));

const abc = { name: "john doe", age: 33 };
const def = { age: 22 };

const cd = { ...def, ...abc };
console.log(cd);
