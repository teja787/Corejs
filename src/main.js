// 1. add multiple strings and number
// ex: time is 10:30 pm
// print 100 random intergers
// between 0 to 10
// if Number is less than 5 store in array "minors" otherwise "major"

const a = "time";
const b = "10:30";
const c = "PM";
const d = a + b + c;
console.log(d);

console.log("---------------1 done-----------------");

const minor = [];
const major = [];
// i++ = (i = i+1)
for (let i = 0; i < 100; i++) {
  let random = Math.round(Math.random() * 10);
  if (random < 5) {
    minor.push(random);
  } else {
    major.push(random);
  }

  //   /**
  //    * TODO: change if-else into ternery operator
  //    */

  //   console.log(random < 5 ? "minor : " : "major : ", random);
}

console.log("All minors b/w 100 is ", minor);
console.log("All majors b/w 100 is ", major);



