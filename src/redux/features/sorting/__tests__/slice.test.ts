import { reducer, setSort } from "../slice";

import { Sort, SortingState } from "../types";

describe("Sorting reducer", () => {
  const initialState: SortingState = {
    sort: Sort.Descending,
  };

  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      sort: Sort.Ascending,
    });
  });

  it("should handle setSort", () => {
    const result = reducer(initialState, setSort({ value: Sort.Ascending }));
    expect(result.sort).toEqual(Sort.Ascending);
  });
});
