import React, { FC, memo } from "react";
import classnames from "classnames";
import { sharedClasses } from "../../consts/css";

import styles from "./styles.module.css";

export const Footer: FC = memo(() => (
  <footer className={styles.footer}>
    <span className={classnames(sharedClasses.fonts.Md)}>
      © AUO1 Group 2018
    </span>
  </footer>
));
