import { DataTableProps, DataTableEmits, DataTableSlots } from 'primevue/datatable';
import { ClassComponent } from 'primevue/ts-helpers';
import { ColumnSlots } from 'primevue/column';
import { type BPVTableSize } from '../../../types';
import { type BPVPaginatorProps } from '../paginator/types';

export interface BPVDataTableProps extends Omit<DataTableProps, 'size' | 'rowClass' | 'rowStyle'> {
  size?: BPVTableSize | undefined | null;
  paginatorAlignment?: BPVPaginatorProps['alignment'];
  rowClass?: (data: any) => any;
  rowStyle?: (data: any) => any;
  rowsPerPageDropdownPosition?: BPVPaginatorProps['rowsPerPageDropdownPosition'];
}

export type ColumnFilerOverlayShowOrHideEvent = Omit<Parameters<ColumnSlots['filterapply']>[0], 'filterCallback'> & {
  applyFilter: () => void;
  clearFilter: () => void;
};
export interface BPVDataTableEmits extends DataTableEmits {
  'column-filter-overlay-show'(event: ColumnFilerOverlayShowOrHideEvent): void;
  'column-filter-overlay-hide'(event: ColumnFilerOverlayShowOrHideEvent): void;
}

export * from 'primevue/datatable';
export default class BPVDataTable extends ClassComponent<BPVDataTableProps, DataTableSlots, BPVDataTableEmits> {}
