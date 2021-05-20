import { Sort } from "../../redux/features/sorting/types";
import { autoBasicRoute } from "../consts/routes";
import { GetCarsRequestParams } from "../gateways/get-all";

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

export const buildGetSignleCarUrl = (carId: string): string =>
  `${autoBasicRoute}/cars/${carId}`;

export const getColorsUrl = `${autoBasicRoute}/colors`;

export const getManufacturersUrl = `${autoBasicRoute}/manufacturers`;
