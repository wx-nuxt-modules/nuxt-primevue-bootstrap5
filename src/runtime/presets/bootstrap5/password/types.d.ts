import { PasswordEmits, PasswordProps, PasswordSlots } from 'primevue/password';
import { ClassComponent } from 'primevue/ts-helpers';

import { BPVFormState, BPVButtonSize } from '../../../types';

export interface BPVPasswordProps extends Omit<PasswordProps, 'invalid'> {
  state?: BPVFormState | null | undefined;
  size?: BPVButtonSize | null | undefined;
  readonly?: boolean | null | undefined;
  plainText?: boolean | null | undefined;
}

export * from 'primevue/password';
export default class BPVPassword extends ClassComponent<BPVPasswordProps, PasswordSlots, PasswordEmits> {}
