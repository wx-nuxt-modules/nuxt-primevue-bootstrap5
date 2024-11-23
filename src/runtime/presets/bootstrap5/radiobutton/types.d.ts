import { RadioButtonProps, RadioButtonSlots, RadioButtonEmits } from 'primevue/radiobutton';
import { ClassComponent } from 'primevue/ts-helpers';

export interface BPVRadioButtonProps extends Omit<RadioButtonProps, 'invalid'> {
  state?: 'valid' | 'invalid' | undefined;
}

export * from 'primevue/radiobutton';
export default class BPVRadioButton extends ClassComponent<BPVRadioButtonProps, RadioButtonSlots, RadioButtonEmits> {}
