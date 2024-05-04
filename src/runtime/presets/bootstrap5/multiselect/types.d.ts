import { MultiSelectProps, MultiSelectSlots, MultiSelectEmits } from 'primevue/multiselect';
import { ClassComponent } from 'primevue/ts-helpers';

export interface BPVMultiSelectProps extends MultiSelectProps {
  maxSelectedLabels?: number | string;
  selectedItemsLabel?: string;
}

export default class BPVInputText extends ClassComponent<BPVMultiSelectProps, MultiSelectSlots, MultiSelectEmits> {}
