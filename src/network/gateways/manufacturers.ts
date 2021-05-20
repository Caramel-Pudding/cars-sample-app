import { Manufacturer } from "../../redux/features/cars/types";

export interface FetchManufacturersResponse {
  readonly manufacturers: Manufacturer[];
}
