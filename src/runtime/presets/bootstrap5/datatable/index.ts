import type { DataTablePassThroughOptions } from 'primevue/datatable';
import type { BPVDataTableProps } from './types';
import { paginatorPT } from '../paginator';
import { inArrayValidator } from '../../../utils/validators';
import { BPV_TABLE_SIZE } from '../../../constants';

export const datatablePT = <DataTablePassThroughOptions>{
  root: ({ props }: { props: BPVDataTableProps }) => {
    const size = inArrayValidator(props.size, BPV_TABLE_SIZE, 'md');

    const classes = [
      'bpv-datatable',
      `bpv-datatable-${size}`,
      props.showGridlines && `bpv-datatable-bordered`,
      props.stripedRows && `bpv-datatable-stripped`
    ];

    return { class: classes };
  },
  wrapper: () => {
    const classes = ['table-responsive'];

    return { class: classes };
  },
  table: ({ props }) => {
    const classes = ['table', props.rowHover && 'table-hover'];

    return { class: classes };
  },
  header: () => {
    const classes = ['bpv-datatable-header'];

    return { class: classes };
  },
  footer: () => {
    const classes = ['bpv-datatable-footer'];

    return { class: classes };
  },
  loadingOverlay: () => {
    const classes = ['bpv-datatable-loading'];

    return { class: classes };
  },
  loadingIcon: () => {
    const classes = ['bpv-datatable-loading-icon'];

    return { class: classes };
  },
  paginator: {
    paginatorWrapper: () => {
      const base = paginatorPT.paginatorWrapper();

      const classes = [base.class, 'bpv-datatable-paginator'];

      return { ...base, class: classes };
    },
    root: ({ parent }: any) => {
      const parentAttrs = parent.attrs;

      const alignment = parentAttrs['paginator-alignment'] || parentAttrs['paginatorAlignment'];

      // @ts-ignore
      return paginatorPT.root({ attrs: { alignment } });
    }
  }
};
