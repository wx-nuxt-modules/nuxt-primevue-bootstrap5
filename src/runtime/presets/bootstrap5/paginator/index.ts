import type { PaginatorPassThroughOptions, PaginatorPassThroughOptionType } from 'primevue/paginator';
import { sharedDropdownPT } from '../dropdown';
import { BPV_PAGINATOR_ALIGNMENT } from '../../../constants';
import { inArrayValidator } from '../../../utils/validators';

const sharedButtons = <{ [k: string]: PaginatorPassThroughOptionType }>{
  button: ({ context }) => {
    const classes = ['page-item bpv-page-item bpv-page-item-btn', context.disabled && 'disabled'];

    return { class: classes };
  },
  icon: () => {
    const classes = ['bpv-page-item-icon'];

    return { class: classes };
  }
};

export const paginatorPT = <PaginatorPassThroughOptions>{
  paginatorWrapper: () => {
    return { 'aria-label': 'Paginator' };
  },
  root: ({ attrs }: any) => {
    const alignment = inArrayValidator(attrs.alignment, BPV_PAGINATOR_ALIGNMENT, 'start');

    const classes = ['pagination', `justify-content-${alignment}`];

    return { class: classes };
  },
  firstPageButton: sharedButtons.button,
  firstPageIcon: sharedButtons.icon,
  previousPageButton: sharedButtons.button,
  previousPageIcon: sharedButtons.icon,
  nextPageButton: sharedButtons.button,
  nextPageIcon: sharedButtons.icon,
  lastPageButton: sharedButtons.button,
  lastPageIcon: sharedButtons.icon,
  pages: () => {
    const classes = ['bpv-pages'];

    return { class: classes };
  },
  pageButton: ({ context }) => {
    const classes = ['page-item bpv-page-item bpv-page-item-btn bpv-page-item-inner', { active: context.active }];

    return { class: classes };
  },
  current: () => {
    const classes = ['page-item bpv-page-item bpv-page-item-btn bpv-page-item-current'];

    return { class: classes };
  },
  rowPerPageDropdown: {
    root: () => {
      const base = sharedDropdownPT.root();

      const classes = [...base.class, 'bpv-page-item-input'];
      return { ...base, class: classes };
    }
  },
  start: () => {
    const classes = ['bpv-page-item-start'];

    return { class: classes };
  },
  end: () => {
    const classes = ['bpv-page-item-end'];

    return { class: classes };
  }
};
