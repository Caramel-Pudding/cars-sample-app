import React, { FC, memo, useState } from "react";
import classnames from "classnames";

import { useLocalStorage } from "../../hooks/use-local-storage";
import { sharedClasses } from "../../consts/css";

import styles from "./styles.module.css";
import { Car } from "../../redux/features/cars/types";

interface CarSaveProps {
  car: Car;
}

export const CarSave: FC<CarSaveProps> = memo(({ car }) => {
  const [savedCars, setSavedCars] = useLocalStorage<Car[]>("savedCars", []);

  const isCarAlreadyAdded = savedCars.some(
    (savedCar: Car) => savedCar.stockNumber === car.stockNumber
  );

  const [isAdded, setIsAdded] = useState(isCarAlreadyAdded);

  const handleSaveClick = () => {
    if (isCarAlreadyAdded) {
      return;
    }
    setSavedCars([...savedCars, car]);
    setIsAdded(true);
  };

  const handleRemoveClick = () => {
    if (!isCarAlreadyAdded) {
      return;
    }
    setSavedCars(
      savedCars.filter(
        (savedCar: Car) => savedCar.stockNumber !== car.stockNumber
      )
    );
    setIsAdded(false);
  };

  return (
    <form className={styles.container}>
      <p className={sharedClasses.fonts.Md}>
        {isAdded
          ? "This car is currenty in your cart. You may remove it if you want."
          : "If you like this car, click on the button and save it in your collection of favourite items."}
      </p>
      <section className={styles.buttonContainer}>
        <button
          className={classnames(
            sharedClasses.fonts.MdBold,
            sharedClasses.elements.button
          )}
          type="button"
          onClick={isAdded ? handleRemoveClick : handleSaveClick}
        >
          {isAdded ? "Remove" : "Save"}
        </button>
      </section>
    </form>
  );
});
