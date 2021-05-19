import { Sort } from "../../../../redux/features/sorting/types";
import { autoBasicRoute } from "../../../consts/routes";
// eslint-disable-next-line import/no-cycle
import { GetCarsRequestParams } from "../types/get-all";

export const getCarsLinkBuilder = ({
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
