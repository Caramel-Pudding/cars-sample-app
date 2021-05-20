import React, { FC, memo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Main } from "./pages/main";
import { Details } from "./pages/details";

import styles from "./app.module.css";
import { Routes } from "./consts/routes";

export const App: FC = memo(() => (
  <div className={styles.container}>
    <Header />
    <main>
      <Switch>
        <Route path={`/${Routes.Purchase}`}>
          <div />
        </Route>
        <Route path={`/${Routes.Orders}`}>
          <div />
        </Route>
        <Route path={`/${Routes.Sell}`}>
          <div />
        </Route>
        <Route path={`/${Routes.Details}`}>
          <Details />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
    <Footer />
  </div>
));
