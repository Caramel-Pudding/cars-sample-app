import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { CarListHeader } from "..";
import { store } from "../../../redux/store";
import { inputDataTestId } from "../../custom-select";

describe("CarListHeader", () => {
  const TestWrapper = (
    <Provider store={store}>
      <Router>
        <CarListHeader currentPageCarsCount={10} totalCarsCount={100} />
      </Router>
    </Provider>
  );

  afterEach(cleanup);

  it("Renders with proper data", () => {
    const { container, getByText } = render(TestWrapper);
    const carsInfo = getByText("Showing 10 of 100 results");
    expect(carsInfo).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
