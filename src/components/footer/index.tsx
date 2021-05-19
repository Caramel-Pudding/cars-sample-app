import React, { FC, memo } from "react";
import classnames from "classnames";
import { Fonts } from "../../consts/css";

import styles from "./styles.module.css";

export const Footer: FC = memo(() => (
  <footer className={styles.footer}>
    <span className={classnames(Fonts.Md)}>© AUO1 Group 2018</span>
  </footer>
));
