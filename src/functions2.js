const sleep = (ms) => {
  console.log(`Waiting for ${ms} milliseconds`);
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

async function foo1() {
  await sleep(2000);
  foo3();
  console.log({
    bar: "foo1",
  });
}

function foo3() {
  console.log({
    bar: "foo3",
  });
}

function foo2() {
  //closures => keeps context alive
  const getname = () => "john doe";
  setTimeout(() => {
    console.log(`I am ${getname()}`);
  }, 5000);
  foo1();
  return {
    bar: "foo2",
  };
}
console.log(foo2());

// foo3, foo1, foo2, async
// es5 => IIFE =>Immidiately invoked function expression
(function () {
  console.log("Hello");
})();
