export interface FiltersState {
  readonly color: string;
  readonly manufacturer: string;
}

export interface FiltersChangePayload {
  readonly value: string;
}
