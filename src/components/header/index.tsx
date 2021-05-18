import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../consts/routes";

import { NavBar } from "../nav-bar";
import logo from "../../assets/img/logo.png";

import styles from "./styles.module.css";

export const Header: FC = memo(() => (
  <header className={styles.header}>
    <Link to={Routes.Main}>
      <img src={logo} alt="Auto logo" />
    </Link>
    <NavBar />
  </header>
));
