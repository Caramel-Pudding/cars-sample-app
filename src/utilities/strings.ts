export const capitalizeFirstLetter = (string: string): string =>
  string[0].toUpperCase() + string.slice(1);

export const separateNumberWithDots = (number: number): string =>
  number.toLocaleString().replaceAll(",", ".");
