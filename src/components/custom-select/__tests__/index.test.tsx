import React, { FC, useState } from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../../../redux/store";
import { CustomSelect, CustomSelectProps, inputDataTestId } from "..";

describe("<CustomSelect />", () => {
  afterEach(cleanup);

  const options = ["TEST1", "TEST2"];
  const testLabel = "TEST";
  const placeholder = "placeholder";

  const TestWrapper: FC<Partial<CustomSelectProps>> = () => {
    const [selectValue, setSelectValue] = useState(options[0]);

    return (
      <Provider store={store}>
        <Router>
          <CustomSelect
            placeholder={placeholder}
            chosenOption={selectValue}
            handler={setSelectValue}
            labelText={testLabel}
            options={options}
          />
        </Router>
      </Provider>
    );
  };

  it("should render proper label", () => {
    // * #TEST: ARRANGE
    const { container, getByText } = render(<TestWrapper />, {});
    const label = getByText(testLabel);
    // * #TEST: ASSERT
    expect(label).toHaveTextContent(testLabel);
    expect(container).toMatchSnapshot();
  });

  it("should render undefined label as ''", () => {
    // * #TEST: ARRANGE
    const strange = render(<TestWrapper labelText={undefined} />, {});
    const common = render(<TestWrapper labelText="" />, {});

    // * #TEST: ASSERT
    expect(strange.container).toEqual(common.container);
    expect(strange.container).toMatchSnapshot();
    expect(common.container).toMatchSnapshot();
  });

  it("Properly select another option", () => {
    // * #TEST: ARRANGE
    const { container, getByText, getByTestId } = render(<TestWrapper />);

    // * #TEST: ASSERT
    expect(getByTestId(inputDataTestId)).toHaveTextContent(options[0]);
    expect(container).toMatchSnapshot();

    // * #TEST: ACT

    fireEvent.click(getByTestId(inputDataTestId));
    fireEvent.click(getByText(options[1])!);

    // * #TEST: ASSERT
    expect(getByTestId(inputDataTestId)).toHaveTextContent(options[1]);
    expect(container).toMatchSnapshot();
  });

  it("Uncheck when already selected option clicked", () => {
    // * #TEST: ARRANGE
    const { container, getAllByText, getByTestId } = render(<TestWrapper />);

    // * #TEST: ASSERT
    expect(getByTestId(inputDataTestId)).toHaveTextContent(options[0]);
    expect(container).toMatchSnapshot();

    // * #TEST: ACT

    fireEvent.click(getByTestId(inputDataTestId));
    fireEvent.click(getAllByText(options[0])[1]);

    // * #TEST: ASSERT
    expect(getByTestId(inputDataTestId)).toHaveTextContent(placeholder);
    expect(container).toMatchSnapshot();
  });
});
