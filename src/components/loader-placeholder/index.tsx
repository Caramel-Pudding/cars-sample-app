import React, { FC, memo } from "react";

import styles from "./styles.module.css";

export const LoaderPlaceholder: FC = memo(() => {
  return (
    <article className={styles.container}>
      <div className={styles.picturePlaceholder} />
      <section className={styles.infoBlock}>
        <div className={styles.titlePlaceholder} />
        <div className={styles.infoPlaceholder} />
        <div className={styles.linkPlaceholder} />
      </section>
    </article>
  );
});
