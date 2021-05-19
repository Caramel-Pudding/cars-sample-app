import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// eslint-disable-next-line import/no-cycle
import { FiltersState, FiltersChangePayload } from "./types";

// Define the initial state using that type
export const initialState: FiltersState = {
  color: "",
  manufacturer: "",
};

export const descriptorsSlice = createSlice({
  name: "Filters",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    setColor: (state, action: PayloadAction<FiltersChangePayload>) => {
      state.color = action.payload.value;
    },
    setManufacturer: (state, action: PayloadAction<FiltersChangePayload>) => {
      state.manufacturer = action.payload.value;
    },
    /* eslint-enable no-param-reassign */
  },
});

export const { setColor, setManufacturer } = descriptorsSlice.actions;

export const { reducer } = descriptorsSlice;
