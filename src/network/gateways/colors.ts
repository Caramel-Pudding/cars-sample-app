import { autoBasicRoute } from "../consts/routes";

export interface GetColorResponse {
  readonly colors: string[];
}

export const getColorsUrl = `${autoBasicRoute}/colors`;
