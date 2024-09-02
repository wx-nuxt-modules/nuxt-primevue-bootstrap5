import { CheckboxProps, CheckboxSlots, CheckboxEmits } from 'primevue/checkbox';
import { ClassComponent } from 'primevue/ts-helpers';

export interface BPVCheckboxProps extends Omit<CheckboxProps, 'invalid'> {
  state?: 'valid' | 'invalid' | undefined;
}

export * from 'primevue/checkbox';
export default class BPVCheckbox extends ClassComponent<BPVCheckboxProps, CheckboxSlots, CheckboxEmits> {}
