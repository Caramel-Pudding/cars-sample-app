import { Sort } from "../../../../types/general";
import { autoBasicRoute } from "../../../consts/routes";
// eslint-disable-next-line import/no-cycle
import { GetCarsRequestParams } from "../types/get-all";

export const getCarsLinkBuilder = ({
  page,
  color,
  manufcaturer,
  sort = Sort.Ascending,
}: GetCarsRequestParams): string => {
  if (color && manufcaturer) {
    return `${autoBasicRoute}/cars?manufacturer=${manufcaturer}&color=${color}&sort=${sort}&page=${page}`;
  }
  if (color) {
    return `${autoBasicRoute}/cars?color=${color}&sort=${sort}&page=${page}`;
  }
  if (manufcaturer) {
    return `${autoBasicRoute}/cars?manufacturer=${manufcaturer}&sort=${sort}&page=${page}`;
  }
  return `${autoBasicRoute}/cars?sort=${sort}&page=${page}`;
};
