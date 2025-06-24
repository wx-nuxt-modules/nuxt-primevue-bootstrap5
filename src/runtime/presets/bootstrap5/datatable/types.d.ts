import { DataTableProps, DataTableEmits, DataTableSlots } from 'primevue/datatable';
import { ClassComponent } from 'primevue/ts-helpers';
import { type BPVTableSize } from '../../../types';
import { type BPVPaginatorProps } from '../paginator/types';

export interface BPVDataTableProps extends Omit<DataTableProps, 'size' | 'rowClass' | 'rowStyle'> {
  size?: BPVTableSize | undefined | null;
  paginatorAlignment?: BPVPaginatorProps['alignment'];
  rowClass?: (data: any) => any;
  rowStyle?: (data: any) => any;
  rowsPerPageDropdownPosition?: BPVPaginatorProps['rowsPerPageDropdownPosition'];
}

export interface BPVDataTableEmits extends DataTableEmits {
  'column-filter-overlay-show'(): void;
  'column-filter-overlay-hide'(): void;
}

export * from 'primevue/datatable';
export default class BPVDataTable extends ClassComponent<BPVDataTableProps, DataTableSlots, BPVDataTableEmits> {}
