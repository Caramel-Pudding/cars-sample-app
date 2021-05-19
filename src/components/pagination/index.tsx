import React, { FC, memo } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { setCurrentPage } from "../../redux/features/pagination/slice";

import styles from "./styles.module.css";

export const Pagination: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { currentPage, totalPageCount } = useAppSelector(
    (state) => state.pagination
  );

  const handlePaginationChange = (page: number) => {
    if (page < 1 || page > totalPageCount) {
      return;
    }
    dispatch(setCurrentPage({ value: page }));
  };

  return (
    <section className={styles.container}>
      <button
        onClick={() => handlePaginationChange(1)}
        type="button"
        tabIndex={0}
        disabled={currentPage === 1}
        className={styles.changePageButton}
      >
        First
      </button>
      <button
        onClick={() => handlePaginationChange(currentPage - 1)}
        type="button"
        tabIndex={0}
        disabled={currentPage === 1}
        className={styles.changePageButton}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPageCount}
      </span>
      <button
        onClick={() => handlePaginationChange(currentPage + 1)}
        type="button"
        disabled={currentPage === totalPageCount}
        tabIndex={0}
        className={styles.changePageButton}
      >
        Next
      </button>
      <button
        onClick={() => handlePaginationChange(totalPageCount)}
        type="button"
        tabIndex={0}
        disabled={currentPage === totalPageCount}
        className={styles.changePageButton}
      >
        Last
      </button>
    </section>
  );
});
