import type { OverlayPanelPassThroughOptions } from 'primevue/overlaypanel';

import { sidebarPT } from '../sidebar';

export const overlaypanelPTRoot = () => {
  const classes = ['popover fade show bpv-overlaypanel'];

  return { class: classes };
};

export const overlaypanelPT = <OverlayPanelPassThroughOptions>{
  root: () => {
    return overlaypanelPTRoot();
  },
  content: () => {
    const classes = ['popover-body bpv-overlaypanel-body'];

    return { class: classes };
  },
  closeButton: ({ instance }) => {
    if (typeof window !== 'undefined') {
      instance.$nextTick(() => {
        const closeBtnEl = document.querySelector<HTMLButtonElement>('[data-pc-section="closebutton"]');
        if (!closeBtnEl) return;

        closeBtnEl.removeAttribute('autofocus');
        closeBtnEl.blur();
      });
    }

    return sidebarPT.closeButton;
  },
  closeIcon: () => {
    return sidebarPT.closeIcon;
  },
  transition: {
    name: 'bpv-overlaypanel'
  }
};
