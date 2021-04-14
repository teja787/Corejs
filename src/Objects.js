// Objects
// function(){}
// keeps context of this

// () => {} doesn't keep context of this
const person = {
  //string, boolean, number, function, other object
  // [number, string]:[string, boolean, number, function, other objects]
  ["firstname lastname"]: "John",
  age: 22,
  greet: function () {
    console.log(`Hello ${this["firstname lastname"]}`);
  },
};

console.log(person);
person.greet();

console.log(Object.keys(person));
console.log(Object.values(person));

const college = {
  collegeName: null,
  branch: "CSE",
};
// delete college["collegeName"];
// console.log({ ...college, ...person }); //brand new obj is created
// Object.assign(college, person); //college is modified
console.log(college);

console.log(college.hasOwnProperty("collegeName"));
console.log("collegeName" in college);

const objectKeys = Object.keys(college);

const isCollegeNmPresent = objectKeys.find((c) => c == "collegeName");
console.log(isCollegeNmPresent);
if (!college.collegeName) {
  // key and truthy value
  console.log("college name is present in the object");
}

// const rollNumbers = [];
// for (let index = 0; index < 20; index++) {
//   rollNumbers.push(Math.floor(Math.random() * 100));
// }
// console.log(rollNumbers);

// const num = {};

// for (let i = 0; i < rollNumbers.length; i++) {
//   num[i] = rollNumbers[i];
// }
// console.log(num);

const sampleObj = [
  {
    greet: "Hello",
  },
  {
    greet: {
      greet: "How",
    },
  },

  {
    greet: {
      greet: {
        greet: "Are",
      },
    },
  },

  {
    greet: {
      greet: {
        greet: {
          greet: "You",
        },
      },
    },
  },

  {
    greet: {
      greet: {
        greet: {
          greet: {
            greet: "You",
          },
        },
      },
    },
  },

  {
    greet: {
      greet: {
        greet: {
          greet: {
            greet: {
              greet: "You",
            },
          },
        },
      },
    },
  },
];

// // what is Oliver Steele’s Nested Object Access Pattern
// // const name = ((user || {}).personalInfo || {}).name;
// let getValue = 0;
// for (let i = 0; i < sampleObj.length; i++) {
//   getValue = sampleObj[0].greet;
// }
// console.log(getValue);

/**
 * ==================================================
 */

//  {
//     greet: {
//       greet: {
//         greet: {
//           greet: {
//             greet: "You",
//           },
//         },
//       },
//     },
//   },

// Recursion: when a function calls itself.
const checkIfHasObjChild = (nestedObj) => {
  if (typeof nestedObj === "string") {
    console.log(nestedObj);
    return;
  }
  checkIfHasObjChild(nestedObj["greet"]);
};

for (const nestedObj of sampleObj) {
  checkIfHasObjChild(nestedObj);
}

// /**
//  *
//  *
//  * [4 => 4* factorial(3), 3 =>]
//  *
//  */
// const itemValue = 4;
// const recursion = (itr) => {
//   if (itr == 1) return itr;
//   return itr * recursion(--itr);
// };
// console.log(recursion(itemValue));
/**
 * ==================================================
 */

const abcd = [
  [[[2, 2], 4, 5], 2, 3],
  [2, 3, 5],
  [2, 3, 6],
  [2, 3, 57],
  [2, 3, 577],
];

// const flatten = abcd.reduce((a, b) => a.concat(b));
// const flatRemainingArray = flatten.reduce((a, b) => a.concat(b));
// console.log(flatRemainingArray);

/**
 *  [[[2, 2], 4, 5], 2, 3] => 3
 * [[2, 2], 4, 5] => 2
 * [2, 2] => 1
 */
const flattedArr = [];
const flatArray = (arrRef, level) => {
  for (const arrItem of arrRef) {
    if (level == 1) {
      if (Array.isArray(arrItem)) {
        // flattedArr.push(...arrItem);
        arrItem.forEach((value) => flattedArr.push(value));
      } else {
        flattedArr.push(arrItem);
      }
    } else if (Array.isArray(arrItem)) {
      flatArray(arrItem, --level);
    } else {
      flattedArr.push(arrItem);
    }
  }
};
flatArray(abcd, 3);

// ####5####
// ###4#####
// ##3######
// #2#######
// 1########

console.log(flattedArr);

// // Math.abs;
// // console.log(abcd.flat(2));

// // customFlat(abcd,) => abcd.flat(2)

// Object.freeze() [locks the object property]
// const high = [4, 5, 6, 7, 3];
// let h = Math.max(...high);
// console.log(h);

let rectangle = () => {
  let pattern = "";
  let noOfColumns = 8;
  let noOfROws = 4;
  for (let i = 0; i <= noOfROws; i++) {
    for (let j = 1; j <= noOfColumns; j++) {
      if (i == 0 && j == 5) {
        pattern += "5";
      } else if (i == 1 && j == 4) {
        pattern += "4";
      } else if (i == 2 && j == 3) {
        pattern += "3";
      } else if (i == 3 && j == 2) {
        pattern += "2";
      } else if (i == 4 && j == 1) {
        pattern += "1";
      }
      pattern += "#";
    }
    pattern += "\n";
  }
  console.log(pattern);
};
rectangle();

let tri = 0;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    tri += j;
    tri += " ";
  }
  tri += "\n";
}
console.log(tri);

let revTri = 0;
for (let k = 1; k <= 5; k++) {
  for (let l = k; l <= 5; l++) {
    revTri += l;
    revTri += " ";
  }
  revTri += "\n";
}
console.log(revTri);
/**
 * 1. (6*(5))
 * 2. 6*(5*(4))
 * 3. 6*5*(4*(3))
 * 4. 6*5*4*(3*(2))
 * 5. 6*5*4*3*(2*(1))
 */
const fact = (n) => {
  if (n === 1) return 1;
  return n * fact(n - 1);
};
console.log(fact(6));
/**
 * first call (2*power(2,3))
 * 2. 2*(2*power(2,2))
 * 3. 2*2*(2* power(2,1))
 * 4. (2*2*2*2)
 */
const power = (num, p) => {
  if (p === 1) return num;
  return num * power(num, p - 1);
};
console.log(power(2, 6));

/**
 *
 *               *
 *              ***
 *             *****
 *            *******
 *    level => [1 to n]
 */

/***
 * Reverse of above pattern
 *  level => [1 to n]
 */

/**
 * | *
 * | *   *
 * | *   * *
 * | *   *
 * | *
 *  opposite of above pattern
 *
 *
 */

const triangle = (n) => {
  let dis = "";
  let el = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = n - 1; j >= i; j--) {
      dis += " ";
    }
    for (let k = 1; k <= el; k++) {
      dis += "*";
    }
    el += 2;
    dis += "\n";
  }
  console.log(dis);
};
triangle(6);

const reverseTriangle = (n) => {
  let dis = "";
  let el = n * 2 - 1;
  for (let i = n; i >= 1; i--) {
    for (let j = n - 1; j >= i; j--) {
      dis += " ";
    }
    for (let k = 1; k <= el; k++) {
      dis += "*";
    }
    el -= 2;
    dis += "\n";
  }
  console.log(dis);
};
reverseTriangle(6);

const tiltedTriangle = (n) => {
  let dis = "";
  for (let i = n; i >= -n; i--) {
    for (let j = n; j >= Math.abs(i); j--) {
      dis += "*";
    }
    dis += "\n";
  }
  console.log(dis);
};
tiltedTriangle(5);
