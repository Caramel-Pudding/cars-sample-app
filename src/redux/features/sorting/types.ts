export enum Sort {
  Ascending = "asc",
  Descending = "des",
}

export interface SortingState {
  readonly sort: Sort;
}

export interface SortingChangePayload {
  readonly value: Sort;
}
