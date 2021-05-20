import React, { FC, memo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CarDetails } from "../../components/car-details";

import { CarSave } from "../../components/car-save";
import { fetchCar } from "../../network/gateways/get-one";
import { Car } from "../../redux/features/cars/types";

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
        <CarDetails car={chosenCar} />
        <CarSave />
      </section>
    </article>
  );
});
