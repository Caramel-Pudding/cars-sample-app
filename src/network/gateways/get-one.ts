import { Car } from "../../redux/features/cars/types";
import { autoBasicRoute } from "../consts/routes";

interface GetCarResponse {
  car: Car;
}

export const fetchCar = async (carId: string): Promise<GetCarResponse> => {
  const res = await fetch(`${autoBasicRoute}/cars/${carId}`);
  // eslint-disable-next-line @typescript-eslint/return-await
  return (await res.json()) as Promise<GetCarResponse>;
};
