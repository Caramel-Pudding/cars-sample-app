export const convertStringEnumToArrayOfNames = (stringEnum: {
  [stringEnum: string]: string;
}): string[] => Object.values(stringEnum);

export const convertStringEnumToArrayOfKeys = (stringEnum: {
  [stringEnum: string]: string;
}): string[] => Object.keys(stringEnum);

export const getEnumKeyByValue = (
  stringEnum: {
    [stringEnum: string]: string;
  },
  enumValue: string
): string =>
  Object.entries(stringEnum).find(([key, value]) => value === enumValue)![0];
