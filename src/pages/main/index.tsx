import React, { FC, memo } from "react";

import { CarFilter } from "../../components/car-filter";

export const Main: FC = memo(() => (
  <article>
    <CarFilter />
  </article>
));
