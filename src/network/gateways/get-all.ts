import { Sort } from "../../redux/features/sorting/types";
import { Car } from "../../redux/features/cars/types";

export interface GetCarsRequestParams {
  readonly page: number;
  readonly color?: string;
  readonly manufacturer?: string;
  readonly sort?: Sort;
}

export interface GetCarsResponse {
  readonly cars: Car[];
  readonly totalPageCount: number;
  readonly totalCarsCount: number;
}
