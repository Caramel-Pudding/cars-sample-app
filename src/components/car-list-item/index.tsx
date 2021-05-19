import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import { Fonts } from "../../consts/css";
import { Car } from "../../redux/features/cars/types";

import styles from "./styles.module.css";
import { constructCarInfoString } from "../../utilities/cars";

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
      <div className={Fonts.Md}>{constructCarInfoString(car)}</div>
      <Link className={styles.link} to={`details/${car.stockNumber}`}>
        View details
      </Link>
    </section>
  </article>
));
