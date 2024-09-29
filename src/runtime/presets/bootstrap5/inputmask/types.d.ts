import { InputMaskProps, InputMaskSlots, InputMaskEmits } from 'primevue/inputmask';
import { ClassComponent } from 'primevue/ts-helpers';
import { BPVFormState, BPVButtonSize } from '../../../types';

export interface BPVInputMaskProps extends Omit<InputMaskProps, 'invalid'> {
  state?: BPVFormState | null | undefined;
  size?: BPVButtonSize | null | undefined;
  readonly?: boolean | null | undefined;
}

export * from 'primevue/inputmask';
export default class BPVInputMask extends ClassComponent<BPVInputMaskProps, InputMaskSlots, InputMaskEmits> {}
