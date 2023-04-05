const {
  stringLength,
  reverseString,
  Calculator,
  capitalize,
} = require("./index");

describe("stringLength tests", () => {
  test("Length of hello", () => {
    expect(stringLength("hello")).toBe(5);
  });

  test("Length of Out of bounds", () => {
    expect(stringLength("")).toBe(-1);
    expect(stringLength("abcdefghijk")).toBe(-1);
  });
});

describe("reverseString tests", () => {
  test('Reverse "abcde"', () => {
    expect(reverseString("abcde")).toBe("edcba");
  });
});

describe("calculator tests", () => {
  const calculator = new Calculator();
  test("add 1, 2, 3, 4, 5", () => {
    expect(calculator.add(1, 2, 3, 4, 5)).toBe(15);
  });
  test("subtract 1, 2, 3, 4, 5", () => {
    expect(calculator.subtract(1, 2, 3, 4, 5)).toBe(-13);
  });
  test("multiply 1, 2, 3, 4, 5", () => {
    expect(calculator.multiply(1, 2, 3, 4, 5)).toBe(120);
  });
  test("divide 6, 2", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });
});

describe("Capitalize test", () => {
  test("capitalize exErCIsE", () => {
    expect(capitalize("exErCIsE")).toBe("Exercise");
  });
});
