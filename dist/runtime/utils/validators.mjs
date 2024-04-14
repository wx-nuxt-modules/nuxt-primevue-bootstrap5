export const inArrayValidator = (value, search, defaultValue = null) => {
  return search.includes(value) ? value : defaultValue;
};
export { isUndefined } from "@windx-foobar/shared";
