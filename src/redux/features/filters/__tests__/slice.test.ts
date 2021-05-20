import { reducer, setColor, setManufacturer } from "../slice";

import { FiltersState } from "../types";

describe("Filters reducer", () => {
  const initialState: FiltersState = {
    color: "Green",
    manufacturer: "BMW",
  };

  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      color: "",
      manufacturer: "",
    });
  });

  it("should handle setColor", () => {
    const result = reducer(initialState, setColor({ value: "Red" }));
    expect(result.color).toEqual("Red");
  });

  it("should handle setManufacturer", () => {
    const result = reducer(initialState, setManufacturer({ value: "Audi" }));
    expect(result.manufacturer).toEqual("Audi");
  });
});
