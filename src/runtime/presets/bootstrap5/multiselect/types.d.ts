import { MultiSelectProps, MultiSelectSlots, MultiSelectEmits } from 'primevue/multiselect';
import { ClassComponent } from 'primevue/ts-helpers';
import { BPVDropdownSize } from '../../../types';

export interface BPVMultiSelectProps extends MultiSelectProps {
  maxSelectedLabels?: number;
  selectedItemsLabel?: string;
  size?: BPVDropdownSize | undefined;
}

export * from 'primevue/multiselect';
export default class BPVMultiSelect extends ClassComponent<BPVMultiSelectProps, MultiSelectSlots, MultiSelectEmits> {}
