import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  CarsState,
  CarsChangePayload,
  TotalCarsCountChangePayload,
} from "./types";

// Define the initial state using that type
export const initialState: CarsState = {
  cars: [],
  totalCarsCount: 0,
};

export const descriptorsSlice = createSlice({
  name: "Filters",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    setCars: (state, action: PayloadAction<CarsChangePayload>) => {
      state.cars = action.payload.cars;
    },
    setTotalCarsCount: (
      state,
      action: PayloadAction<TotalCarsCountChangePayload>
    ) => {
      state.totalCarsCount = action.payload.value;
    },
    /* eslint-enable no-param-reassign */
  },
});

export const { setCars, setTotalCarsCount } = descriptorsSlice.actions;

export const { reducer } = descriptorsSlice;
