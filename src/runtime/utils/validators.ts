import { isNullOrUndefined } from '@windx-foobar/shared';

export const inArrayValidator = <T extends any[] | Readonly<any[]>>(
  value: any,
  search: T,
  defaultValue: T[number] | null = null
) => {
  return search.includes(value) ? value : defaultValue;
};

export const isVueTruthy = (maybeUndef: unknown): boolean => {
  return !isNullOrUndefined(maybeUndef) && [true, 'true', ''].includes(maybeUndef as string | boolean);
};

export const isVueFalsy = (maybeUndef: unknown): boolean => {
  return !isVueTruthy(maybeUndef);
};

export { isUndefined, isNullOrUndefined, isTruthy } from '@windx-foobar/shared';
