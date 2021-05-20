import React, { FC, memo, useState } from "react";
import classnames from "classnames";

import { useLocalStorage } from "../../hooks/use-local-storage";
import { sharedClasses } from "../../consts/css";

import styles from "./styles.module.css";
import { Car } from "../../redux/features/cars/types";

interface CarSaveProps {
  car: Car;
}

enum SaveStatus {
  NotSaved,
  Saved,
  AlreadyExists,
}

export const CarSave: FC<CarSaveProps> = memo(({ car }) => {
  const [currentSaveStatus, setCurrentSaveStatus] = useState(
    SaveStatus.NotSaved
  );
  const [savedCars, setSavedCars] = useLocalStorage<Car[]>("savedCars", []);

  const handleSaveClick = () => {
    if (
      savedCars.some(
        (savedCar: Car) => savedCar.stockNumber === car.stockNumber
      )
    ) {
      setCurrentSaveStatus(SaveStatus.AlreadyExists);
      return;
    }
    setSavedCars([...savedCars, car]);
    setCurrentSaveStatus(SaveStatus.Saved);
  };

  const getCurrentSaveStatusText = () => {
    switch (currentSaveStatus) {
      case SaveStatus.Saved: {
        return "Successfully saved!";
      }
      case SaveStatus.AlreadyExists: {
        return "The car you wanted to save already was in your cart.";
      }
      default:
      case SaveStatus.NotSaved: {
        return "If you like this car, click on the button and save it in your collection of favourite items.";
      }
    }
  };

  return (
    <form className={styles.container}>
      <p className={sharedClasses.fonts.Md}>{getCurrentSaveStatusText()}</p>
      <section className={styles.buttonContainer}>
        <button
          className={classnames(
            sharedClasses.fonts.MdBold,
            sharedClasses.elements.button
          )}
          type="button"
          onClick={handleSaveClick}
          disabled={currentSaveStatus !== SaveStatus.NotSaved}
        >
          Save
        </button>
      </section>
    </form>
  );
});
