import { Car } from "../../../../types/cars";
import { Sort } from "../../../../types/general";

export interface GetCarsRequestParams {
  page: number;
  color?: string;
  manufcaturer?: string;
  sort?: Sort;
}

export interface GetCarsResponse {
  cars: Car[];
  totalPageCount: number;
  totalCarsCount: number;
}
