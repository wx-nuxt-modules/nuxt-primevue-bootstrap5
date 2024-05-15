import type { PassThrough } from 'primevue/ts-helpers';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { ComponentHooks } from 'primevue/basecomponent';

export declare type ButtonGroupPassThroughOptionType =
  | ButtonGroupPassThroughAttributes
  | ((options: ButtonGroupPassThroughMethodOptions) => ButtonGroupPassThroughAttributes | string)
  | string
  | null
  | undefined;

export interface ButtonGroupProps {
  pt?: PassThrough<ButtonGroupPassThroughOptions>;
  ptOptions?: PassThroughOptions;
  unstyled?: boolean;
}

export interface ButtonGroupPassThroughMethodOptions {
  instance: any;
  props: ButtonGroupProps;
  global: object | undefined;
}

export interface ButtonGroupPassThroughOptions {
  root?: ButtonGroupPassThroughOptionType;
  hooks?: ComponentHooks;
}

export interface ButtonGroupPassThroughAttributes {
  [key: string]: any;
}
