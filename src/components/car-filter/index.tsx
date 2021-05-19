import React, { FC, memo, useState, useEffect } from "react";

import classnames from "classnames";
import { fetchColors } from "../../network/methods/colors";
import { fetchManufacturers } from "../../network/methods/manufacturers";
import { Manufacturer } from "../../types/cars";
import { BasicMultiSelct } from "../basic-multi-select";

import styles from "./styles.module.css";
import { Fonts } from "../../consts/css";

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

  const [selectedColors, setSelectedColor] = useState<string[]>([]);
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>(
    []
  );

  return (
    <form className={styles.container}>
      <BasicMultiSelct
        placeholder="All car colors"
        options={availableColors}
        handler={(color) => setSelectedColor(color)}
        chosenOptions={selectedColors}
        labelText="Color"
      />
      <BasicMultiSelct
        placeholder="All manufacturers"
        options={availableManufacturers}
        handler={(manufacturer) => setSelectedManufacturers(manufacturer)}
        chosenOptions={selectedManufacturers}
        labelText="Manufacturers"
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
