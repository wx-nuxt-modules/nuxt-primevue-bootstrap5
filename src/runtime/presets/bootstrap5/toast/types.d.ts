import { type VNode } from 'vue';
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

export interface BPVToastSlots extends Pick<ToastSlots, 'container'> {
  'message(root)'(scope: { message: any; closeCallback: () => void }): VNode[];
  'message(header)'(scope: { message: any; attrs: { class: any }; closeCallback: () => void }): VNode[];
  'message(body)'(scope: { message: any; attrs: { class: any }; closeCallback: () => void }): VNode[];
  'message(icon)'(scope: { class: any }): VNode[];
  'message(closeicon)'(scope: { class: any }): VNode[];
}

export * from 'primevue/toast';
export default class BPVToast extends ClassComponent<BPVToastProps, BPVToastSlots, ToastEmits> {}
