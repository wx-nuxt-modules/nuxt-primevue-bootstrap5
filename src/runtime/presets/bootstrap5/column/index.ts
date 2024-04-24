import type { ColumnPassThroughOptions } from 'primevue/column';

export const columnPT = <ColumnPassThroughOptions>{
  headerCell: ({ column }: any) => {
    const classes = [
      'bpv-table-column bpv-table-column-header',
      column.props && column.props.sortable && 'bpv-table-column-sortable',
      column.context && column.context.sorted && 'bpv-table-column-sorted'
    ];

    return { class: classes };
  },
  bodyCell: () => {
    const classes = ['bpv-table-column'];

    return { class: classes };
  },
  sort: () => {
    const classes = ['bpv-table-column-sort'];

    return { class: classes };
  }
};
