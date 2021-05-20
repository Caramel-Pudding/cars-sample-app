import { Car } from "../../redux/features/cars/types";
import { autoBasicRoute } from "../consts/routes";

export interface GetCarResponse {
  car: Car;
}

export const buildGetSignleCarUrl = (carId: string): string =>
  `${autoBasicRoute}/cars/${carId}`;
