import React, { FC, memo, useState, useRef, KeyboardEvent } from "react";
import classnames from "classnames";
import { useCloseOnOutsideClick } from "../../hooks/use-close-on-outside-click";
import { sharedClasses } from "../../consts/css";

import styles from "./styles.module.css";

export const inputDataTestId = "INPUT_DATA_TEST_ID";

export interface CustomSelectProps {
  readonly labelText: string;
  readonly options: string[];
  readonly chosenOption: string;
  readonly handler: (select: string) => void;
  readonly placeholder?: string;
  readonly containerClasses?: string;
  readonly selectClasses?: string;
  readonly optionClasses?: string;
}

export const CustomSelect: FC<CustomSelectProps> = memo(
  ({
    labelText,
    options = [],
    chosenOption,
    handler,
    placeholder = "",
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

    const isElementSelected = (value: string) => chosenOption === value;

    const selectHandler = (value: string) => {
      if (value === chosenOption) {
        if (!placeholder) {
          return;
        }
        handler("");
        return;
      }
      handler(value);
    };

    return (
      <label className={classnames(styles.container, containerClasses)}>
        {labelText}
        <button
          data-testid={inputDataTestId}
          tabIndex={0}
          type="button"
          className={classnames(
            styles.input,
            sharedClasses.fonts.Md,
            selectClasses
          )}
          onClick={toggleIsOpened}
          onKeyDown={keyboardHandler}
        >
          {chosenOption || placeholder}
          <svg
            className={classnames(styles.bullet, {
              [styles.bulletActive]: isOpen,
            })}
            height="15"
            tabIndex={0}
            width="15"
            onClick={toggleIsOpened}
            onKeyDown={keyboardHandler}
          >
            <polygon points="1,1 7,10 14,1" style={{ fill: "#EDEDED" }} />
          </svg>
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
                  className={classnames(sharedClasses.fonts.Md, styles.button)}
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
