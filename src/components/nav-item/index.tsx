import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Routes } from "../../consts/routes";
import { Fonts, Colors } from "../../consts/css";

import styles from "./styles.module.css";

interface NavItemProps {
  label: string;
  route: Routes;
}

export const NavItem: FC<NavItemProps> = memo(({ label, route }) => (
  <li className={styles.navItem}>
    <Link className={classnames(styles.link, Fonts.Md, Colors.Dark)} to={route}>
      {label}
    </Link>
  </li>
));
