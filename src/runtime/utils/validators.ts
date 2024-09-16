export const inArrayValidator = <T extends any[] | Readonly<any[]>>(
  value: any,
  search: T,
  defaultValue: T[number] | null = null
) => {
  return search.includes(value) ? value : defaultValue;
};

export { isUndefined, isNullOrUndefined, isTruthy } from '@windx-foobar/shared';
