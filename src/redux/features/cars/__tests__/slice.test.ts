import { reducer, setCars, setTotalCarsCount } from "../slice";
import { getCarsResponseStub } from "../../../../tests/stubs";

import { CarsState } from "../types";

describe("Sorting reducer", () => {
  const initialState: CarsState = {
    cars: getCarsResponseStub.cars,
    totalCarsCount: getCarsResponseStub.totalCarsCount,
  };

  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      cars: [],
      totalCarsCount: 0,
    });
  });

  it("should handle setCars", () => {
    const result = reducer(
      initialState,
      setCars({ cars: getCarsResponseStub.cars })
    );
    expect(result.cars).toEqual(getCarsResponseStub.cars);
  });

  it("should handle setTotalCarsCount", () => {
    const result = reducer(initialState, setTotalCarsCount({ value: 500 }));
    expect(result.totalCarsCount).toEqual(500);
  });
});
