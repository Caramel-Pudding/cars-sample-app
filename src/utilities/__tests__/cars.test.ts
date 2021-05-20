import { constructCarInfoString } from "../cars";
import { getCarsResponseStub } from "../../tests/stubs";

describe("constructCarInfoString", () => {
  // * #TEST: ARRANGE
  const testCases = [
    {
      input: getCarsResponseStub.cars[0],
      expected: "Stock # 63428 - 100.049 KM - Diesel - Yellow",
    },
    {
      input: getCarsResponseStub.cars[1],
      expected: "Stock # 44298 - 100.133 KM - Diesel - Green",
    },
    {
      input: getCarsResponseStub.cars[2],
      expected: "Stock # 20458 - 100.206 KM - Petrol - White",
    },
    {
      input: getCarsResponseStub.cars[3],
      expected: "Stock # 49056 - 100.237 KM - Diesel - Blue",
    },
    {
      input: getCarsResponseStub.cars[4],
      expected: "Stock # 53044 - 100.368 KM - Petrol - Red",
    },
  ];

  testCases.forEach((test) => {
    it(`if input car is ${test.input.stockNumber} from stub-file correctly should correctly return ${test.expected}`, () => {
      // * #TEST: ACT
      const result = constructCarInfoString(test.input);
      // * #TEST: ASSERT
      expect(result).toEqual(test.expected);
    });
  });
});
