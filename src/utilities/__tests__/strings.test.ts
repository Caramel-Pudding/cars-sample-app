import { capitalizeFirstLetter, separateNumberWithDots } from "../strings";

describe("capitalizeFirstLetter", () => {
  // * #TEST: ARRANGE
  const testCases = [
    {
      input: "",
      expected: "",
    },
    {
      input: "red",
      expected: "Red",
    },
    {
      input: "Red",
      expected: "Red",
    },
    {
      input: "RED",
      expected: "RED",
    },
  ];

  testCases.forEach((test) => {
    it(`if input string is: ${test.input} should correctly convert it to: ${test.expected}`, () => {
      // * #TEST: ACT
      const result = capitalizeFirstLetter(test.input);
      // * #TEST: ASSERT
      expect(result).toEqual(test.expected);
    });
  });
});

describe("separateNumberWithDots", () => {
  // * #TEST: ARRANGE
  const testCases = [
    {
      input: 0,
      expected: "0",
    },
    {
      input: 100,
      expected: "100",
    },
    {
      input: -100,
      expected: "-100",
    },
    {
      input: 1000,
      expected: "1.000",
    },
    {
      input: 10_000_000_000,
      expected: "10.000.000.000",
    },
  ];

  testCases.forEach((test) => {
    it(`if input string is: ${test.input} should correctly convert it to: ${test.expected}`, () => {
      // * #TEST: ACT
      const result = separateNumberWithDots(test.input);
      // * #TEST: ASSERT
      expect(result).toEqual(test.expected);
    });
  });
});
