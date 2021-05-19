import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { App } from "./app";
import { store } from "./redux/store";

test("renders learn react link", () => {
  const { getByRole } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  const main = getByRole("main");
  expect(main).toBeInTheDocument();
});
