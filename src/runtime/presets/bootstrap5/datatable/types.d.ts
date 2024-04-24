import { DataTableProps, DataTableEmits, DataTableSlots } from 'primevue/datatable';
import { ClassComponent } from 'primevue/ts-helpers';
import { type BPVTableSize } from '../../../types';
import { type BPVPaginatorProps } from '../paginator/types';

export interface BPVDataTableProps extends DataTableProps {
  size?: BPVTableSize | undefined | null;
  paginatorAlignment?: BPVPaginatorProps['alignment'];
}

export default class BPVButton extends ClassComponent<BPVDataTableProps, DataTableSlots, DataTableEmits> {}
