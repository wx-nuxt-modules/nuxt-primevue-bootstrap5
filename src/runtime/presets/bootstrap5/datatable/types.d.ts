import { DataTableProps, DataTableEmits, DataTableSlots } from 'primevue/datatable';
import { ClassComponent } from 'primevue/ts-helpers';
import { type BPVTableSize } from '../../../types';

export interface BPVDataTableProps extends DataTableProps {
  size?: BPVTableSize | undefined | null;
}

export default class BPVButton extends ClassComponent<BPVDataTableProps, DataTableSlots, DataTableEmits> {}
