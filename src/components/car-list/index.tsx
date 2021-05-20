import React, { FC, memo, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { setTotalPageCount } from "../../redux/features/pagination/slice";
import { setCars, setTotalCarsCount } from "../../redux/features/cars/slice";
import { CarListItem } from "../car-list-item";
import { CarListHeader } from "../car-list-header";
import { Pagination } from "../pagination";
import { Car } from "../../redux/features/cars/types";
import { fetchCars } from "../../network/gateways/get-all";

import styles from "./styles.module.css";

export const CarList: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { color, manufacturer } = useAppSelector((state) => state.filters);
  const { currentPage } = useAppSelector((state) => state.pagination);
  const { sort } = useAppSelector((state) => state.sorting);
  const { cars, totalCarsCount } = useAppSelector((state) => state.cars);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCars({
        color,
        manufacturer,
        page: currentPage,
        sort,
      });

      dispatch(setCars({ cars: data.cars }));
      dispatch(setTotalCarsCount({ value: data.totalCarsCount }));
      dispatch(setTotalPageCount({ value: data.totalPageCount }));
    };

    fetchData();
  }, [color, manufacturer, currentPage, sort, dispatch]);

  return (
    <article className={styles.container}>
      <CarListHeader
        totalCarsCount={totalCarsCount}
        currentPageCarsCount={cars.length}
      />
      <ul>
        {cars.map((car: Car) => (
          <li key={car.stockNumber} className={styles.listElement}>
            <CarListItem car={car} />
          </li>
        ))}
      </ul>
      <Pagination />
    </article>
  );
});
