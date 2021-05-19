import React, { FC, memo, useEffect, useState } from "react";
import classnames from "classnames";

import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { setTotalPageCount } from "../../redux/features/pagination/slice";
import { CarListItem } from "../car-list-item";
import { Pagination } from "../pagination";
import { Fonts } from "../../consts/css";
import { Car } from "../../types/cars";
import { fetchCars } from "../../network/gateways/cars/methods/get-all";

import styles from "./styles.module.css";

export const CarList: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { color, manufacturer } = useAppSelector((state) => state.filters);
  const { currentPage } = useAppSelector((state) => state.pagination);

  const [totalCarsCount, setTotalCarsCount] = useState(0);
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCars({
        color,
        manufacturer,
        page: currentPage,
      });

      setCars(data.cars);
      setTotalCarsCount(data.totalCarsCount);
      dispatch(setTotalPageCount({ value: data.totalPageCount }));
    };

    fetchData();
  }, [color, manufacturer, currentPage, dispatch]);

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
      <Pagination />
    </article>
  );
});
