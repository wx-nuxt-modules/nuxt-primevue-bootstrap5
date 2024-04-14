import { InputTextProps, InputTextSlots, InputTextEmits } from 'primevue/inputtext';
import { ClassComponent } from 'primevue/ts-helpers';
import { BPVFormState, BPVButtonSize } from '../../../types';

export interface BPVInputTextProps extends Omit<InputTextProps, 'invalid'> {
  state?: BPVFormState | null | undefined;
  size?: BPVButtonSize | null | undefined;
  readonly?: boolean | null | undefined;
  plainText?: boolean | null | undefined;
}

export default class BPVInputText extends ClassComponent<BPVInputTextProps, InputTextSlots, InputTextEmits> {}
