import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Routes } from "../../consts/routes";
import { sharedClasses } from "../../consts/css";

import styles from "./styles.module.css";

interface NavItemProps {
  readonly label: string;
  readonly route: Routes;
}

export const NavItem: FC<NavItemProps> = memo(({ label, route }) => (
  <li className={styles.navItem}>
    <Link
      tabIndex={0}
      className={classnames(styles.link, sharedClasses.fonts.Md)}
      to={route}
    >
      {label}
    </Link>
  </li>
));
