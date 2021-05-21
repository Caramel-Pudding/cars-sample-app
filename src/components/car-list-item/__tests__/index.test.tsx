import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { getCarsResponseStub } from "../../../tests/stubs";
import { CarListItem } from "..";
import { store } from "../../../redux/store";
import { constructCarInfoString } from "../../../utilities/cars";

describe("CarListItem", () => {
  const chosenCar = getCarsResponseStub.cars[0];
  const TestWrapper = (
    <Provider store={store}>
      <Router>
        <CarListItem car={chosenCar} />
      </Router>
    </Provider>
  );

  afterEach(cleanup);

  it("Renders with proper data", () => {
    const { container, getByText } = render(TestWrapper);
    const title = getByText(chosenCar.modelName);
    const carInfo = getByText(constructCarInfoString(chosenCar));
    expect(title).toBeInTheDocument();
    expect(carInfo).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
