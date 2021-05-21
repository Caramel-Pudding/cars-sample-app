import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { reducer as filtersReducer } from "./features/filters/slice";
import { reducer as paginationReducer } from "./features/pagination/slice";
import { reducer as sortingReducer } from "./features/sorting/slice";
import { reducer as carsReducer } from "./features/cars/slice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    pagination: paginationReducer,
    sorting: sortingReducer,
    cars: carsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = Readonly<ReturnType<typeof store.getState>>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
