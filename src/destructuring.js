// const userDetail = ["john", "doe", 33];

// const [name, lastname, age = 22] = userDetail;
// console.log(name, lastname, age);

// const [name, ...ages] = userDetail;
// console.log(name);
// console.log(age);

const person = {
  name: "john",
  age: 32,
  subjects: "PCM",
  education: {
    college: "abc",
    major: "CSE",
  },
};

const {
  name: personName,
  age: personAge,
  subjects,
  education: { college, major },
} = person;
// const { college, major } = education;
// console.log(personName, personAge, subjects, education);
console.log(college, major);
