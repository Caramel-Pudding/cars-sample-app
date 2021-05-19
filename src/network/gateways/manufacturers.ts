import { autoBasicRoute } from "../consts/routes";
import { Manufacturer } from "../../redux/features/cars/types";

interface FetchManufacturersResponse {
  readonly manufacturers: Manufacturer[];
}

export const fetchManufacturers =
  async (): Promise<FetchManufacturersResponse> => {
    const res = await fetch(`${autoBasicRoute}/manufacturers`);
    // eslint-disable-next-line @typescript-eslint/return-await
    return (await res.json()) as Promise<FetchManufacturersResponse>;
  };