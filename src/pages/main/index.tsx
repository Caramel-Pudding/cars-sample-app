import React, { FC, memo } from "react";

import { CarFilter } from "../../components/car-filter";
import { CarList } from "../../components/car-list";

import styles from "./styles.module.css";

export const Main: FC = memo(() => (
  <article className={styles.container}>
    <CarFilter />
    <CarList />
  </article>
));
