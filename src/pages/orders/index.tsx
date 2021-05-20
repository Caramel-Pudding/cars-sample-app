import React, { FC, memo } from "react";

import { CarListItem } from "../../components/car-list-item";
import { Car } from "../../redux/features/cars/types";
import { useLocalStorage } from "../../hooks/use-local-storage";

import styles from "./styles.module.css";

export const Orders: FC = memo(() => {
  const [savedCars, setSavedCars] = useLocalStorage<Car[]>("savedCars", []);

  return (
    <article className={styles.container}>
      <h1>Your Cart</h1>
      {savedCars.length > 0 ? (
        <ul className={styles.list}>
          {savedCars.map((car: Car) => (
            <li key={car.stockNumber} className={styles.listElement}>
              <CarListItem car={car} />
            </li>
          ))}
        </ul>
      ) : (
        <span>You should defintetly get something!</span>
      )}
    </article>
  );
});
