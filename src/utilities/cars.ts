import { Car } from "../redux/features/cars/types";
import { capitalizeFirstLetter, separateNumberWithDots } from "./strings";

export const constructCarInfoString = (car: Car): string =>
  `Stock # ${car.stockNumber} - ${separateNumberWithDots(
    car.mileage.number
  )} ${car.mileage.unit.toUpperCase()} - ${
    car.fuelType
  } - ${capitalizeFirstLetter(car.color)}`;
