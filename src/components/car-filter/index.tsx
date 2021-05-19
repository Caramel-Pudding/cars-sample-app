import React, { FC, memo, useState, useEffect } from "react";
import classnames from "classnames";

import { fetchColors } from "../../network/gateways/colors";
import { fetchManufacturers } from "../../network/gateways/manufacturers";
import { Manufacturer } from "../../types/cars";
import { BasicSelct } from "../basic-select";

import styles from "./styles.module.css";
import { Fonts } from "../../consts/css";
import { capitalizeFirstLetter } from "../../utilities/strings";

export const CarFilter: FC = memo(() => {
  const [availableColors, setAvailableColors] = useState<string[]>([]);
  const [availableManufacturers, setAvailableManufacturers] = useState<
    string[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const { colors } = await fetchColors();
      const manufacturers = (await fetchManufacturers()).manufacturers.map(
        (manufacuter: Manufacturer) => manufacuter.name
      );

      setAvailableColors(colors);
      setAvailableManufacturers(manufacturers);
    };

    fetchData();
  }, []);

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>("");

  return (
    <form className={styles.container}>
      <BasicSelct
        placeholder="All car colors"
        options={availableColors.map((color) => capitalizeFirstLetter(color))}
        handler={(color) => setSelectedColor(color)}
        chosenOption={selectedColor}
        labelText="Color"
        containerClasses={styles.selectContainer}
        selectClasses={styles.selectInput}
      />
      <BasicSelct
        placeholder="All manufacturers"
        options={availableManufacturers}
        handler={(manufacturer) => setSelectedManufacturer(manufacturer)}
        chosenOption={selectedManufacturer}
        labelText="Manufacturers"
        containerClasses={styles.selectContainer}
        selectClasses={styles.selectInput}
      />
      <section className={styles.buttonContainer}>
        <button
          className={classnames(styles.filterButton, Fonts.MdBold)}
          type="button"
        >
          Filter
        </button>
      </section>
    </form>
  );
});
