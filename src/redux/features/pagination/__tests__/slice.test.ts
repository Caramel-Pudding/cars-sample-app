import { reducer, setCurrentPage, setTotalPageCount } from "../slice";

import { PaginationState } from "../types";

describe("Pagination reducer", () => {
  const initialState: PaginationState = {
    currentPage: 2,
    totalPageCount: 7,
  };

  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      currentPage: 1,
      totalPageCount: 0,
    });
  });

  it("should handle setCurrentPage", () => {
    const result = reducer(initialState, setCurrentPage({ value: 1 }));
    expect(result.currentPage).toEqual(1);
  });

  it("should handle setTotalPageCount", () => {
    const result = reducer(initialState, setTotalPageCount({ value: 0 }));
    expect(result.totalPageCount).toEqual(0);
  });
});
