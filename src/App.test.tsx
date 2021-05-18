import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { App } from "./app";

test("renders learn react link", () => {
  const { getByRole } = render(
    <Router>
      <App />
    </Router>
  );
  const main = getByRole("main");
  expect(main).toBeInTheDocument();
});
