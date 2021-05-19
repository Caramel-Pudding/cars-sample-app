import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PaginationChangePayload, PaginationState } from "./types";

// Define the initial state using that type
export const initialState: PaginationState = {
  currentPage: 1,
  totalPageCount: 0,
};

export const descriptorsSlice = createSlice({
  name: "Pagination",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    setCurrentPage: (state, action: PayloadAction<PaginationChangePayload>) => {
      state.currentPage = action.payload.value;
    },
    setTotalPageCount: (
      state,
      action: PayloadAction<PaginationChangePayload>
    ) => {
      state.totalPageCount = action.payload.value;
    },
    /* eslint-enable no-param-reassign */
  },
});

export const { setCurrentPage, setTotalPageCount } = descriptorsSlice.actions;

export const { reducer } = descriptorsSlice;
