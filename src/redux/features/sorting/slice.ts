import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sort, SortingChangePayload, SortingState } from "./types";

// Define the initial state using that type
export const initialState: SortingState = {
  sort: Sort.Ascending,
};

export const descriptorsSlice = createSlice({
  name: "Filters",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    setSort: (state, action: PayloadAction<SortingChangePayload>) => {
      state.sort = action.payload.value;
    },
    /* eslint-enable no-param-reassign */
  },
});

export const { setSort } = descriptorsSlice.actions;

export const { reducer } = descriptorsSlice;
