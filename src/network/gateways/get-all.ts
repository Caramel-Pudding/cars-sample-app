import { Sort } from "../../redux/features/sorting/types";
// eslint-disable-next-line import/no-cycle
import { getCarsLinkBuilder } from "../utilities/link-builder";
import { Car } from "../../redux/features/cars/types";

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

export const fetchCars = async ({
  page,
  color,
  manufacturer,
  sort = Sort.Ascending,
}: GetCarsRequestParams): Promise<GetCarsResponse> => {
  const res = await fetch(
    getCarsLinkBuilder({ page, color, manufacturer, sort })
  );
  // eslint-disable-next-line @typescript-eslint/return-await
  return (await res.json()) as Promise<GetCarsResponse>;
};
