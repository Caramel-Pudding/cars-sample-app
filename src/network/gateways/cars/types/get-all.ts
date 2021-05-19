import { Car } from "../../../../types/cars";
import { Sort } from "../../../../redux/features/sorting/types";

export interface GetCarsRequestParams {
  page: number;
  color?: string;
  manufacturer?: string;
  sort?: Sort;
}

export interface GetCarsResponse {
  cars: Car[];
  totalPageCount: number;
  totalCarsCount: number;
}
