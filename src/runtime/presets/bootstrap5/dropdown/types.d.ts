import { DropdownProps, DropdownSlots, DropdownEmits } from 'primevue/dropdown';
import { ClassComponent } from 'primevue/ts-helpers';
import { BPVDropdownSize } from '../../../types';

export interface BPVDropdownProps extends DropdownProps {
  size?: BPVDropdownSize | undefined;
}

export default class BPVDropdown extends ClassComponent<BPVDropdownProps, DropdownSlots, DropdownEmits> {}
