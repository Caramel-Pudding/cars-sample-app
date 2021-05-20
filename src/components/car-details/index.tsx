import React, { FC, memo } from "react";

import { constructCarInfoString } from "../../utilities/cars";
import { Car } from "../../redux/features/cars/types";

import styles from "./styles.module.css";

interface CarDetailsProps {
  car: Car;
}

export const CarDetails: FC<CarDetailsProps> = memo(({ car }) => {
  return (
    <section>
      <h1>{car.modelName}</h1>
      <div>{constructCarInfoString(car)}</div>
      <p>
        This car is currently available and can be delivered as soon as tomorrow
        morning. Please be aware that delivery times shown in this page are not
        definitive and may change due to bad weather conditions.
      </p>
    </section>
  );
});