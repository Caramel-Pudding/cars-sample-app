import { autoBasicRoute } from "../consts/routes";
import { Manufacturer } from "../../types/cars";

interface FetchManufacturersResponse {
  manufacturers: Manufacturer[];
}

export const fetchManufacturers =
  async (): Promise<FetchManufacturersResponse> => {
    const res = await fetch(`${autoBasicRoute}/manufacturers`);
    // eslint-disable-next-line @typescript-eslint/return-await
    return (await res.json()) as Promise<FetchManufacturersResponse>;
  };
