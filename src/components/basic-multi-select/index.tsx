import React, { FC, memo, useState, useRef, KeyboardEvent } from "react";
import classnames from "classnames";
import { useCloseOnOutsideClick } from "../../hooks/use-close-on-outside-click";

import styles from "./styles.module.css";

export interface BasicMultiSelctProps {
  readonly labelText: string;
  readonly options: string[];
  readonly chosenOptions: string[];
  readonly handler: (select: string[]) => void;
  readonly placeholder: string;
  readonly containerClasses?: string;
  readonly selectClasses?: string;
  readonly optionClasses?: string;
}

export const BasicMultiSelct: FC<BasicMultiSelctProps> = memo(
  ({
    labelText,
    options = [],
    chosenOptions,
    handler,
    placeholder,
    containerClasses = "",
    selectClasses = "",
    optionClasses = "",
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const list = useRef<HTMLUListElement>(null);
    useCloseOnOutsideClick(setIsOpen, isOpen, list);

    const toggleIsOpened = () => {
      setIsOpen((prevState) => !prevState);
    };

    const keyboardHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        toggleIsOpened();
      }
    };

    const isElementSelected = (value: string) => chosenOptions.includes(value);

    const selectHandler = (value: string) => {
      if (isElementSelected(value)) {
        handler(chosenOptions.filter((option) => option !== value));
      } else {
        handler([...chosenOptions, value]);
      }
    };

    const selectedValuesFormattedForInput = chosenOptions.join(", ");

    return (
      <label className={classnames(styles.container, containerClasses)}>
        {labelText}
        <button
          tabIndex={0}
          type="button"
          className={classnames(styles.input, selectClasses)}
          onClick={toggleIsOpened}
          onKeyDown={keyboardHandler}
        >
          {chosenOptions.length > 0
            ? selectedValuesFormattedForInput
            : placeholder}
        </button>
        {isOpen && (
          <ul className={styles.list} ref={list}>
            {options.map((option) => (
              <li
                key={option}
                className={classnames(
                  styles.listElement,
                  isElementSelected(option)
                    ? styles.listElementSelected
                    : styles.listElementNotSelected,
                  optionClasses
                )}
                value={option}
              >
                <button
                  className={styles.button}
                  type="button"
                  onClick={() => selectHandler(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </label>
    );
  }
);
