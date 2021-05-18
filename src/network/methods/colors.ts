import { autoBasicRoute } from "../consts/routes";

interface FetchColorResponse {
  colors: string[];
}

export const fetchColors = async (): Promise<FetchColorResponse> => {
  const res = await fetch(`${autoBasicRoute}/colors`);
  // eslint-disable-next-line @typescript-eslint/return-await
  return (await res.json()) as Promise<FetchColorResponse>;
};
