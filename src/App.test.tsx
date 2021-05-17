import React from "react";
import { render } from "@testing-library/react";
import { App } from "./app";

test("renders learn react link", () => {
  const { getByRole } = render(<App />);
  const main = getByRole("main");
  expect(main).toBeInTheDocument();
});
