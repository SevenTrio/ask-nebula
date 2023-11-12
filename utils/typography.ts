export const capitalize = <T extends string>(string: T) => {
  const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalizedString as Capitalize<typeof string>;
};
