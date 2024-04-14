import type { BreadcrumbPassThroughOptions } from 'primevue/breadcrumb';

export const breadcrumbPT = <BreadcrumbPassThroughOptions>{
  root: { 'aria-label': 'breadcrumb' },
  menu: { class: 'breadcrumb bpv-breadcrumb' },
  menuitem: { class: 'breadcrumb-item bpv-breadcrumb-item' },
  separator: { class: 'bpv-breadcrumb-separator' }
};
