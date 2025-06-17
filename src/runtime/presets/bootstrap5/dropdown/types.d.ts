import { DropdownProps, DropdownSlots, DropdownEmits } from 'primevue/dropdown';
import { ClassComponent } from 'primevue/ts-helpers';
import { BPVDropdownSize } from '../../../types';

export interface BPVDropdownProps extends Omit<DropdownProps, 'invalid'> {
  size?: BPVDropdownSize | undefined;
  state?: 'valid' | 'invalid' | undefined;
  position?: 'top' | 'bottom' | 'auto' | undefined;
}

export * from 'primevue/dropdown';
export default class BPVDropdown extends ClassComponent<BPVDropdownProps, DropdownSlots, DropdownEmits> {}
