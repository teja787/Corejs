const sampleArr = new Array(10);
const sampleobj = {};
for (let index = 0; index < sampleArr.length; index++) {
  sampleArr[index] = Math.round(Math.random() * 20);
  sampleobj[index] = Math.round(Math.random() * 20);
}

console.log(sampleArr);
console.log(sampleobj);

//forof loop is used to return arrayitems
for (const item of sampleArr) {
  console.log(item);
}
// forif loop used to return objectkey
for (const key in sampleobj) {
  if (Object.hasOwnProperty.call(sampleobj, key)) {
    const element = sampleobj[key];
    console.log(key, element);
  }
}
