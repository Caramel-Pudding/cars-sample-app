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
  const url = new URL(`${autoBasicRoute}/cars`);
  url.searchParams.append("sort", sort);
  url.searchParams.append("page", String(page));
  if (color) {
    url.searchParams.append("color", color);
  }
  if (manufacturer) {
    url.searchParams.append("manufacturer", manufacturer);
  }
  return url.href;
};
