import { PaginatorProps, PaginatorEmits, PaginatorSlots } from 'primevue/paginator';
import { ClassComponent } from 'primevue/ts-helpers';
import { type BPVPaginatorAlignment } from '../../../types';
import { BPVDropdownProps } from '../dropdown/types';

export interface BPVPaginatorProps extends PaginatorProps {
  alignment?: BPVPaginatorAlignment | undefined | null;
  rowsPerPageDropdownPosition?: BPVDropdownProps['position'];
}

export * from 'primevue/paginator';
export default class BPVPaginator extends ClassComponent<BPVPaginatorProps, PaginatorSlots, PaginatorEmits> {}
