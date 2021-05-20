import React, { FC, memo } from "react";
import { Link } from "react-router-dom";

import { sharedClasses } from "../../consts/css";
import { Routes } from "../../consts/routes";
import logo from "../../assets/img/logo.png";

import styles from "./styles.module.css";

export const NotFound: FC = memo(() => {
  return (
    <article className={styles.container}>
      <section className={styles.error}>
        <img height={40} src={logo} alt="Auto logo" />
        <h1 className={sharedClasses.fonts.LgBold}>404 - Not Found</h1>
        <p className={sharedClasses.fonts.Md}>
          Sorry, the page you are looking for does not exist.
        </p>
        <p className={sharedClasses.fonts.Md}>
          You can always go back to the{" "}
          <Link className={sharedClasses.elements.link} to={Routes.Main}>
            homepage
          </Link>
          .
        </p>
      </section>
    </article>
  );
});
