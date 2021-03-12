module.exports = {
  numopr: () => {
    const minor = [];
    const major = [];
    for (i = 0; i < 100; i++) {
      let random = Math.round(Math.random() * 10);
      if (random < 5) {
        minor.push(random);
      } else {
        major.push(random);
      }
    }
    console.log("minor num", minor);
    console.log("major num", major);
    return "hai";
  },

  stropr: () => {
    const a = "time";
    const b = "8:50";
    const c = "PM";
    const d = a + b + c;
    console.log(d);
    return "hello";
  },
};
