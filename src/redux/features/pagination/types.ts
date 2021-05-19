export interface PaginationState {
  readonly currentPage: number;
  readonly totalPageCount: number;
}

export interface PaginationChangePayload {
  readonly value: number;
}
