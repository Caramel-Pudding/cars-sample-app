import { Sort } from "../../../../types/general";
import { GetCarsRequestParams, GetCarsResponse } from "../types/get-all";
import { getCarsLinkBuilder } from "../utilities/link-builder";

export const fetchCars = async ({
  page,
  color,
  manufacturer,
  sort = Sort.Ascending,
}: GetCarsRequestParams): Promise<GetCarsResponse> => {
  const res = await fetch(
    getCarsLinkBuilder({ page, color, manufacturer, sort })
  );
  // eslint-disable-next-line @typescript-eslint/return-await
  return (await res.json()) as Promise<GetCarsResponse>;
};
