import { Sort } from "../../redux/features/sorting/types";
import { Car } from "../../redux/features/cars/types";
import { autoBasicRoute } from "../consts/routes";

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

export const buildGetAllCarsUrl = ({
  page,
  color,
  manufacturer,
  sort = Sort.Ascending,
}: GetCarsRequestParams): string => {
  if (color && manufacturer) {
    return `${autoBasicRoute}/cars?manufacturer=${manufacturer}&color=${color}&sort=${sort}&page=${page}`;
  }
  if (color) {
    return `${autoBasicRoute}/cars?color=${color}&sort=${sort}&page=${page}`;
  }
  if (manufacturer) {
    return `${autoBasicRoute}/cars?manufacturer=${manufacturer}&sort=${sort}&page=${page}`;
  }
  return `${autoBasicRoute}/cars?sort=${sort}&page=${page}`;
};
