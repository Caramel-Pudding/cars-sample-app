import React, { FC, memo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { fetchCar } from "../../network/gateways/cars/methods/get-one";
import { Car } from "../../redux/features/cars/types";
import { constructCarInfoString } from "../../utilities/cars";

import styles from "./styles.module.css";

export const Details: FC = memo(() => {
  const currentCarId = useLocation().pathname.split("/")[2];
  const [chosenCar, setChosenCar] = useState<Car>();

  useEffect(() => {
    const fetchData = async () => {
      const { car } = await fetchCar(currentCarId);

      setChosenCar(car);
    };

    fetchData();
  }, [currentCarId]);

  if (!chosenCar) {
    return <div />;
  }

  return (
    <article className={styles.container}>
      <img height={600} alt={chosenCar.modelName} src={chosenCar.pictureUrl} />
      <section className={styles.infoBlock}>
        <section>
          <h1>{chosenCar.modelName}</h1>
          <div>{constructCarInfoString(chosenCar)}</div>
          <p>
            This car is currently available and can be delivered as soon as
            tomorrow morning. Please be aware that delivery times shown in this
            page are not definitive and may change due to bad weather
            conditions.
          </p>
        </section>
        <section>
          <p>
            If you like this car, click on the button and save it in your
            collection of favourite items.
          </p>
          <button type="button">Save</button>
        </section>
      </section>
    </article>
  );
});
