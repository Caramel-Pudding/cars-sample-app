import React, { FC, memo, FormEvent } from "react";

interface BasicSelectProps {
  readonly labelText: string;
  readonly options: string[];
  readonly chosenOption: string;
  readonly handler: (event: string) => void;
  readonly placeholder?: string;
  readonly containerClasses?: string;
  readonly selectClasses?: string;
  readonly optionClasses?: string;
}

export const BasicSelct: FC<BasicSelectProps> = memo(
  ({
    labelText,
    options,
    chosenOption,
    handler,
    placeholder,
    containerClasses = "",
    selectClasses = "",
    optionClasses = "",
  }) => {
    const selectHandler = (event: FormEvent<HTMLSelectElement>) => {
      handler(event.currentTarget.value);
    };

    return (
      <label className={containerClasses}>
        {labelText}
        <select
          className={selectClasses}
          value={chosenOption || placeholder}
          onChange={selectHandler}
        >
          {options.map((option) => (
            <option key={option} className={optionClasses} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
);
