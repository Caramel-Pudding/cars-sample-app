import React, { FC, memo } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { setTotalPageCount } from "../../redux/features/pagination/slice";
import { setCars, setTotalCarsCount } from "../../redux/features/cars/slice";
import { CarListItem } from "../car-list-item";
import { CarListHeader } from "../car-list-header";
import { Pagination } from "../pagination";
import { Car } from "../../redux/features/cars/types";
import { GetCarsResponse } from "../../network/gateways/get-all";
import { buildGetAllCarsUrl } from "../../network/utilities/url-builders";
import { useFetch } from "../../hooks/use-fetch";

import styles from "./styles.module.css";

export const CarList: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { color, manufacturer } = useAppSelector((state) => state.filters);
  const { currentPage } = useAppSelector((state) => state.pagination);
  const { sort } = useAppSelector((state) => state.sorting);
  const { cars, totalCarsCount } = useAppSelector((state) => state.cars);

  const { response, isLoading, error } = useFetch<GetCarsResponse>(
    buildGetAllCarsUrl({
      color,
      manufacturer,
      page: currentPage,
      sort,
    })
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !response) {
    return null;
  }

  dispatch(setCars({ cars: response.cars }));
  dispatch(setTotalCarsCount({ value: response.totalCarsCount }));
  dispatch(setTotalPageCount({ value: response.totalPageCount }));

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
