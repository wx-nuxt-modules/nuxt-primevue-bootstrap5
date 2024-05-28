import type { ColumnPassThroughOptions, ColumnPassThroughMethodOptions } from 'primevue/column';
import { DomHandler } from 'primevue/utils';

import { registerResizeDbClick } from './plugins';

export const columnPT = <ColumnPassThroughOptions>{
  headerCell: ({ column, parent, instance }: ColumnPassThroughMethodOptions & { column: any }) => {
    const isResiableColumns = parent?.props?.resizableColumns;
    const isFitResizableMode = (parent?.props?.columnResizeMode || 'fit') === 'fit';

    if (isResiableColumns && isFitResizableMode) {
      // registerResizeDbClick(instance);
    }

    const classes = [
      'bpv-table-column bpv-table-column-header',
      column.props && column.props.sortable && 'bpv-table-column-sortable',
      column.context && column.context.sorted && 'bpv-table-column-sorted',
      isResiableColumns && 'bpv-table-column-resizable',
      column.props && [true, ''].includes(column.props.frozen) && 'bpv-table-column-frozen'
    ];

    return { class: classes };
  },
  bodyCell: (...args) => {
    const classes = ['bpv-table-column'];

    return { class: classes };
  },
  columnResizer: (...args) => {
    const classes = ['bpv-table-column-resizer'];

    return { class: classes };
  },
  sort: () => {
    const classes = ['bpv-table-column-sort'];

    return { class: classes };
  }
};
