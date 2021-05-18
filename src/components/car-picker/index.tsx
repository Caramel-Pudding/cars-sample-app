import React, { FC, memo, useState, useEffect } from "react";

import { fetchColors } from "../../network/methods/colors";
import { fetchManufacturers } from "../../network/methods/manufacturers";
import { Manufacturer } from "../../types/cars";
import { BasicMultiSelct } from "../basic-multi-select";

export const CarPicker: FC = memo(() => {
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
    <form>
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
      <button type="button">Filter</button>
    </form>
  );
});
