const stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    return -1;
  }
  return str.length;
};

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

class Calculator {
  add(...nums) {
    return nums.reduce((a, b) => a + b);
  }

  subtract(...nums) {
    return nums.reduce((a, b) => a - b);
  }

  multiply(...nums) {
    return nums.reduce((a, b) => a * b);
  }

  divide(...nums) {
    return nums.reduce((a, b) => {
      if (b !== 0) {
        return a / b;
      }
    });
  }
}

const capitalize = (str) => {
    str = str.toLowerCase();
    const firstLetter = str.charAt(0).toUpperCase();
    return firstLetter.concat(str.slice(1));
}

module.exports = { stringLength, reverseString, Calculator, capitalize };
