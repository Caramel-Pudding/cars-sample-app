import React, { FC, memo, useEffect, useState } from "react";
import classnames from "classnames";

import { useAppSelector } from "../../hooks/redux";
import { CarListItem } from "../car-list-item";
import { Fonts } from "../../consts/css";
import { Car } from "../../types/cars";
import { fetchCars } from "../../network/gateways/cars/methods/get-all";

import styles from "./styles.module.css";

export const CarList: FC = memo(() => {
  const chosenColor = useAppSelector((state) => state.filters.color);
  const chosenManufacturer = useAppSelector(
    (state) => state.filters.manufacturer
  );

  const [amountOfPages, setAmountOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCarsCount, setTotalCarsCount] = useState(0);
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCars({
        color: chosenColor,
        manufcaturer: chosenManufacturer,
        page: 1,
      });

      setCars(data.cars);
      setCurrentPage(1);
      setTotalCarsCount(data.totalCarsCount);
      setAmountOfPages(data.totalPageCount);
    };

    fetchData();
  }, [chosenColor, chosenManufacturer]);

  return (
    <article className={styles.container}>
      <h1 className={classnames(Fonts.LgBold, styles.headTitle)}>
        Available Cars
      </h1>
      <div className={classnames(styles.resultsSubTitle, Fonts.Md)}>
        Showing {cars.length} of {totalCarsCount} results
      </div>
      <ul>
        {cars.map((car: Car) => (
          <li className={styles.listElement}>
            <CarListItem car={car} />
          </li>
        ))}
      </ul>
    </article>
  );
});
