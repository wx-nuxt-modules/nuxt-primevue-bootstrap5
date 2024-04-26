import type { SidebarPassThroughOptions } from 'primevue/sidebar';

import { BPV_SIDEBAR_POSITION } from '../../../constants';
import { inArrayValidator } from '../../../utils/validators';

export const sidebarPT = <SidebarPassThroughOptions>{
  root: ({ props }) => {
    const position = inArrayValidator(props.position, BPV_SIDEBAR_POSITION, 'left');

    const classes = [
      'bpv-offcanvas offcanvas show',
      { 'offcanvas-start': position === 'left' },
      { 'offcanvas-end': position === 'right' }
    ];

    return { class: classes };
  },
  header: () => {
    const classes = ['offcanvas-header'];

    return { class: classes };
  },
  title: () => {
    const classes = ['offcanvas-title'];

    return { class: classes };
  },
  content: () => {
    const classes = ['offcanvas-body'];

    return { class: classes };
  },
  closeButton: () => {
    const classes = ['btn-close'];

    return { class: classes };
  },
  closeIcon: () => {
    const classes = ['d-none'];

    return { class: classes };
  },
  mask: () => {
    const classes = ['offcanvas-backdrop bpv-offcanvas-backdrop'];

    return { class: classes };
  },
  transition: {
    name: 'bpv-offcanvas'
  }
};
