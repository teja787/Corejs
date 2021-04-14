const counter = (initialValue = 0) => {
  function getValue() {
    return initialValue;
  }

  const incrCounter = () => {
    ++initialValue;
  };

  const decrCounter = () => {
    --initialValue;
  };

  return {
    getValue,
    incrCounter,
    decrCounter,
  };
};

module.exports = counter;
