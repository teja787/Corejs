const scores = [2, 4, 6, 7, 8, 9, 11, 13, 18, 20, 30];

function filterPrimes(message) {
  console.log(message);
  const prime = scores.filter((number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });

  console.log(prime);
}

function filterEvenOddUsingFor() {
  let even = [];
  let odd = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0) {
      even.push(scores[i]);
    } else {
      odd.push(scores[i]);
    }
  }
  console.log(even);
  console.log(odd);
}
// filtering even and odd numbers using forof
function filterEvenOddUsingForOf() {
  const a = [];
  const b = [];
  for (const iterator of scores) {
    if (iterator % 2 == 0) {
      a.push(iterator);
    } else {
      b.push(iterator);
    }
  }
  console.log(a);
  console.log(b);
}
// filtering even and odd numbers using foreach
function filterEvenOddUsingForEach() {
  const c = [];
  const d = [];
  scores.forEach((element) => {
    if (element % 2 == 0) {
      c.push(element);
    } else {
      d.push(element);
    }
  });
  console.log(c);
  console.log(d);
}
// sum of array items using for
function sumUsingFor() {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
  }
  console.log(sum);
}
//sum of array items using foreach
function sumUsingForEach() {
  let s = 0;
  scores.forEach((element) => {
    s = s + element;
  });
  console.log(s);
}
//sum of array items using forof
function sumUsingForOf() {
  let add = null;
  for (const iterator of scores) {
    add = add + iterator;
  }
  console.log(add);
}

module.exports = {
  sumUsingForOf: sumUsingForOf,
  sumUsingForEach: sumUsingForEach,
  sumUsingFor: sumUsingFor,
  filterEvenOddUsingForEach: filterEvenOddUsingForEach,
  filterEvenOddUsingForOf: filterEvenOddUsingForOf,
  filterEvenOddUsingFor: filterEvenOddUsingFor,
  filterPrimes: filterPrimes,
};
