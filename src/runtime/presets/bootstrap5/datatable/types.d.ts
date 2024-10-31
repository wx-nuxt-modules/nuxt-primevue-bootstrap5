import { DataTableProps, DataTableEmits, DataTableSlots } from 'primevue/datatable';
import { ClassComponent } from 'primevue/ts-helpers';
import { type BPVTableSize } from '../../../types';
import { type BPVPaginatorProps } from '../paginator/types';

export interface BPVDataTableProps extends Omit<DataTableProps, 'size'> {
  size?: BPVTableSize | undefined | null;
  paginatorAlignment?: BPVPaginatorProps['alignment'];
}

export * from 'primevue/datatable';
export default class BPVDataTable extends ClassComponent<BPVDataTableProps, DataTableSlots, DataTableEmits> {}
