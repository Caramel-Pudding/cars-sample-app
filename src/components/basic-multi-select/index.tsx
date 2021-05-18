import React, { FC, memo, FormEvent } from "react";
import classnames from "classnames";

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
    const selectHandler = (event: FormEvent<HTMLSelectElement>) => {
      if (chosenOptions.includes(event.currentTarget.value)) {
        handler(
          chosenOptions.filter((option) => option !== event.currentTarget.value)
        );
      } else {
        handler([...chosenOptions, event.currentTarget.value]);
      }
    };

    return (
      <label className={classnames(styles.container, containerClasses)}>
        {labelText}
        <select
          placeholder={placeholder}
          className={classnames(selectClasses)}
          multiple
          value={chosenOptions}
          onBlur={selectHandler}
        >
          {options.map((option) => (
            <option
              key={option}
              className={classnames(optionClasses)}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
);
