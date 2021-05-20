import { Sort } from "../../redux/features/sorting/types";
import {
  convertStringEnumToArrayOfKeys,
  convertStringEnumToArrayOfNames,
  getEnumKeyByValue,
} from "../enums";

describe("convertStringEnumToArrayOfNames", () => {
  // * #TEST: ARRANGE
  const testCases = [
    {
      input: Sort,
      expected: ["asc", "des"],
    },
  ];

  testCases.forEach((test) => {
    it(`if input is enum should return correct array of names`, () => {
      // * #TEST: ACT
      const result = convertStringEnumToArrayOfNames(test.input);
      // * #TEST: ASSERT
      expect(result).toEqual(test.expected);
    });
  });
});

describe("convertStringEnumToArrayOfKeys", () => {
  // * #TEST: ARRANGE
  const testCases = [
    {
      input: Sort,
      expected: ["Ascending", "Descending"],
    },
  ];

  testCases.forEach((test) => {
    it(`if input is enum should return correct array of names`, () => {
      // * #TEST: ACT
      const result = convertStringEnumToArrayOfKeys(test.input);
      // * #TEST: ASSERT
      expect(result).toEqual(test.expected);
    });
  });
});

describe("getEnumKeyByValue", () => {
  // * #TEST: ARRANGE
  const testCases = [
    {
      inputEnum: Sort,
      inputKey: "asc",
      expected: "Ascending",
    },
    {
      inputEnum: Sort,
      inputKey: "des",
      expected: "Descending",
    },
  ];

  testCases.forEach((test) => {
    it(`if input is enum should return correct array of names`, () => {
      // * #TEST: ACT
      const result = getEnumKeyByValue(test.inputEnum, test.inputKey);
      // * #TEST: ASSERT
      expect(result).toEqual(test.expected);
    });
  });
});
