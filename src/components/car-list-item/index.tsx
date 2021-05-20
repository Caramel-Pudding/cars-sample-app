import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import { sharedClasses } from "../../consts/css";
import { Car } from "../../redux/features/cars/types";

import styles from "./styles.module.css";
import { constructCarInfoString } from "../../utilities/cars";
import { Routes } from "../../consts/routes";

interface CarListItemProps {
  car: Car;
}

export const CarListItem: FC<CarListItemProps> = memo(({ car }) => (
  <article className={styles.container}>
    <img
      height={80}
      width={100}
      src={car.pictureUrl}
      alt={`${car.modelName}`}
    />
    <section className={styles.infoBlock}>
      <h2
        className={classnames(sharedClasses.fonts.LgBold, styles.headerTitle)}
      >
        {car.modelName}
      </h2>
      <div className={sharedClasses.fonts.Md}>
        {constructCarInfoString(car)}
      </div>
      <Link
        className={sharedClasses.elements.link}
        to={`${Routes.Details}/${car.stockNumber}`}
      >
        View details
      </Link>
    </section>
  </article>
));
