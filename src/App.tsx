import React, { FC, memo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Main } from "./pages/main";
import { Details } from "./pages/details";

import styles from "./app.module.css";

export const App: FC = memo(() => (
  <div className={styles.container}>
    <Header />
    <main>
      <Switch>
        <Route path="/purchase">
          <div />
        </Route>
        <Route path="/orders">
          <div />
        </Route>
        <Route path="/sell">
          <div />
        </Route>
        <Route path="/details">
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
