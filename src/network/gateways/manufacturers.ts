import { Manufacturer } from "../../redux/features/cars/types";
import { autoBasicRoute } from "../consts/routes";

export interface GetManufacturersResponse {
  readonly manufacturers: Manufacturer[];
}

export const getManufacturersUrl = `${autoBasicRoute}/manufacturers`;
