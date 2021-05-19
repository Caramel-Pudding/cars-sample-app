import React, { FC, memo, useEffect, useState } from "react";
import classnames from "classnames";

import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { setSort } from "../../redux/features/sorting/slice";
import { Sort } from "../../redux/features/sorting/types";
import { Fonts } from "../../consts/css";

import styles from "./styles.module.css";
import { BasicSelct } from "../basic-select";
import { getEnumKeyByValue } from "../../utilities/enums";

interface CarListHeaderProps {
  currentPageCarsCount: number;
  totalCarsCount: number;
}

export const CarListHeader: FC<CarListHeaderProps> = memo(
  ({ currentPageCarsCount, totalCarsCount }) => {
    const dispatch = useAppDispatch();
    const { sort } = useAppSelector((state) => state.sorting);
    return (
      <section className={styles.header}>
        <section>
          <h1 className={classnames(Fonts.LgBold, styles.headTitle)}>
            Available Cars
          </h1>
          <div className={classnames(styles.resultsSubTitle, Fonts.Md)}>
            Showing {currentPageCarsCount} of {totalCarsCount} results
          </div>
        </section>
        <section>
          <BasicSelct
            chosenOption={getEnumKeyByValue(Sort, sort)}
            labelText="Sort by"
            options={Object.keys(Sort)}
            handler={(value) => {
              dispatch(setSort({ value: Sort[value as keyof typeof Sort] }));
            }}
            containerClasses={styles.selectContainer}
            selectClasses={styles.selectInput}
          />
        </section>
      </section>
    );
  }
);
