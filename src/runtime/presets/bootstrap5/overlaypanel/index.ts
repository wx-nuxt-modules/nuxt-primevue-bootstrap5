import type { OverlayPanelPassThroughOptions } from 'primevue/overlaypanel';

export const overlaypanelPT = <OverlayPanelPassThroughOptions>{
  root: () => {
    const classes = ['popover fade show bpv-overlaypanel'];

    return { class: classes };
  },
  content: () => {
    const classes = ['popover-body bpv-overlaypanel-body'];

    return { class: classes };
  },
  transition: {
    name: 'bpv-overlaypanel'
  }
};
