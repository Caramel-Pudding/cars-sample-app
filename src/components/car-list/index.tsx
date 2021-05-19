import React, { FC, memo, useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { setTotalPageCount } from "../../redux/features/pagination/slice";
import { CarListItem } from "../car-list-item";
import { CarListHeader } from "../car-list-header";
import { Pagination } from "../pagination";
import { Car } from "../../types/cars";
import { fetchCars } from "../../network/gateways/cars/methods/get-all";

import styles from "./styles.module.css";

export const CarList: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { color, manufacturer } = useAppSelector((state) => state.filters);
  const { currentPage } = useAppSelector((state) => state.pagination);
  const { sort } = useAppSelector((state) => state.sorting);

  const [totalCarsCount, setTotalCarsCount] = useState(0);
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCars({
        color,
        manufacturer,
        page: currentPage,
        sort,
      });

      setCars(data.cars);
      setTotalCarsCount(data.totalCarsCount);
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
