import React, { FC, memo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Main } from "./pages/main";
import { Purchase } from "./pages/purchase";

import styles from "./app.module.css";

export const App: FC = memo(() => (
  <div className={styles.container}>
    <Header />
    <main>
      <Switch>
        <Route path="/purchase">
          <Purchase />
        </Route>
        <Route path="/orders">
          <div />
        </Route>
        <Route path="/sell">
          <div />
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
