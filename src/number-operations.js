// print 100 random intergers
// between 0 to 10
// if Number is less than 5 store in array "minors" otherwise "major"
module.exports = function () {
  const minor = [];
  const major = [];
  for (let i = 0; i < 100; i++) {
    let random = Math.round(Math.random() * 10);
    if (random < 5) {
      minor.push(random);
    } else {
      major.push(random);
    }
  }

  console.log("All minors b/w 100 is ", minor);
  console.log("All majors b/w 100 is ", major);
};
