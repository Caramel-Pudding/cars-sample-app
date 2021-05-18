import React, { FC, memo } from "react";

import { CarPicker } from "../../components/car-picker";

export const Main: FC = memo(() => (
  <article>
    <CarPicker />
  </article>
));
