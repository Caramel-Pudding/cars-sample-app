import { Sort } from "../../../../types/general";
import { GetCarsRequestParams, GetCarsResponse } from "../types/get-all";
import { getCarsLinkBuilder } from "../utilities/link-builder";

export const fetchCars = async ({
  page,
  color,
  manufcaturer,
  sort = Sort.Ascending,
}: GetCarsRequestParams): Promise<GetCarsResponse> => {
  const res = await fetch(
    getCarsLinkBuilder({ page, color, manufcaturer, sort })
  );
  // eslint-disable-next-line @typescript-eslint/return-await
  return (await res.json()) as Promise<GetCarsResponse>;
};
