import React, { FC, memo } from "react";
import { Routes } from "../../consts/routes";

import { NavItem } from "../nav-item";

import styles from "./styles.module.css";

export const NavBar: FC = memo(() => (
  <ul className={styles.navBar}>
    <NavItem route={Routes.Purchase} label="Purchase" />
    <NavItem route={Routes.Orders} label="My Orders" />
    <NavItem route={Routes.Sell} label="Sell" />
  </ul>
));
