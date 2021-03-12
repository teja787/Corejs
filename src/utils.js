module.exports = {
  numopr: () => {
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
    return "Hello";
  },
  stropr: () => {
    const a = "time";
    const b = "10:30";
    const c = "PM";
    const d = a + b + c;
    console.log(d);
    console.log("---------------1 done-----------------");
    return "World";
  },
};
