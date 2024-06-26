import {
  ToastProps,
  ToastSlots,
  ToastEmits,
  ToastPassThroughOptionType,
  ToastPassThroughOptions
} from 'primevue/toast';
import { ClassComponent } from 'primevue/ts-helpers';

export interface BPVToastProps extends Omit<ToastProps, 'warnIcon' | 'errorIcon'> {
  warningIcon?: string | undefined;
  dangerIcon?: string | undefined;
}

export interface BPVToastPassThroughOptions extends Omit<ToastPassThroughOptions, 'detail'> {
  header?: ToastPassThroughOptionType;
  body?: ToastPassThroughOptionType;
}

export * from 'primevue/toast';
export default class BPVToast extends ClassComponent<BPVToastProps, ToastSlots, ToastEmits> {}
