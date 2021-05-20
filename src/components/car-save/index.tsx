import React, { FC, memo } from "react";
import classnames from "classnames";

import { sharedClasses } from "../../consts/css";

import styles from "./styles.module.css";

export const CarSave: FC = memo(() => {
  return (
    <form className={styles.container}>
      <p>
        If you like this car, click on the button and save it in your collection
        of favourite items.
      </p>
      <section className={styles.buttonContainer}>
        <button
          className={classnames(
            sharedClasses.fonts.MdBold,
            sharedClasses.elements.button
          )}
          type="button"
        >
          Save
        </button>
      </section>
    </form>
  );
});
