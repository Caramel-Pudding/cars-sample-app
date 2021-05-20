import React, { FC, memo, useState } from "react";
import classnames from "classnames";

import { useAppDispatch } from "../../hooks/redux";
import { setColor, setManufacturer } from "../../redux/features/filters/slice";
import { setCurrentPage } from "../../redux/features/pagination/slice";
import {
  getColorsUrl,
  getManufacturersUrl,
} from "../../network/utilities/url-builders";
import { FetchColorResponse } from "../../network/gateways/colors";
import { FetchManufacturersResponse } from "../../network/gateways/manufacturers";
import { Manufacturer } from "../../redux/features/cars/types";
import { BasicSelct } from "../basic-select";
import { sharedClasses } from "../../consts/css";
import { capitalizeFirstLetter } from "../../utilities/strings";
import { useFetch } from "../../hooks/use-fetch";

import styles from "./styles.module.css";
import { LoaderPlaceholder } from "../loader-placeholder";

export const CarFilter: FC = memo(() => {
  const colors = useFetch<FetchColorResponse>(getColorsUrl);
  const manufacturers =
    useFetch<FetchManufacturersResponse>(getManufacturersUrl);

  const dispatch = useAppDispatch();

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>("");

  const handleFiltration = () => {
    dispatch(setColor({ value: selectedColor }));
    dispatch(setManufacturer({ value: selectedManufacturer }));
    dispatch(setCurrentPage({ value: 1 }));
  };

  if (colors.isLoading || manufacturers.isLoading) {
    return <div className={styles.container}>Please, wait a second...</div>;
  }

  if (
    (colors.error || !colors.response?.colors) &&
    (manufacturers.error || !manufacturers.response?.manufacturers)
  ) {
    return null;
  }

  return (
    <form className={styles.container}>
      {colors.response?.colors && (
        <BasicSelct
          placeholder="All car colors"
          options={colors.response.colors.map((color) =>
            capitalizeFirstLetter(color)
          )}
          handler={(color) => setSelectedColor(color)}
          chosenOption={selectedColor}
          labelText="Color"
          containerClasses={styles.selectContainer}
          selectClasses={styles.selectInput}
        />
      )}
      {manufacturers.response?.manufacturers && (
        <BasicSelct
          placeholder="All manufacturers"
          options={manufacturers.response.manufacturers.map(
            (manufacturer: Manufacturer) => manufacturer.name
          )}
          handler={(manufacturer) => setSelectedManufacturer(manufacturer)}
          chosenOption={selectedManufacturer}
          labelText="Manufacturers"
          containerClasses={styles.selectContainer}
          selectClasses={styles.selectInput}
        />
      )}
      <section className={styles.buttonContainer}>
        <button
          className={classnames(
            sharedClasses.elements.button,
            sharedClasses.fonts.MdBold
          )}
          type="button"
          onClick={handleFiltration}
        >
          Filter
        </button>
      </section>
    </form>
  );
});
