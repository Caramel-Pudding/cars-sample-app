import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import { Fonts } from "../../consts/css";
import { Car } from "../../types/cars";

import styles from "./styles.module.css";
import { capitalizeFirstLetter } from "../../utilities/strings";

interface CarListItemProps {
  car: Car;
}

export const CarListItem: FC<CarListItemProps> = memo(({ car }) => (
  <article className={styles.container}>
    <img height={80} src={car.pictureUrl} alt={`${car.modelName}`} />
    <section className={styles.infoBlock}>
      <h2 className={classnames(Fonts.LgBold, styles.headerTitle)}>
        {car.modelName}
      </h2>
      <div className={Fonts.Md}>
        <span>Stock # {car.stockNumber}</span> -{" "}
        <span>{`${car.mileage.number} ${car.mileage.unit}`}</span> -{" "}
        <span>{car.fuelType}</span> -{" "}
        <span>{capitalizeFirstLetter(car.color)}</span>
      </div>
      <Link className={styles.link} to={car.manufacturerName}>
        View details
      </Link>
    </section>
  </article>
));
