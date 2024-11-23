import type { OverlayPanelPassThroughOptions } from 'primevue/overlaypanel';

import { sidebarPT } from '../sidebar';

export function createOverlaypanelRoot() {
  return { class: ['popover fade show bpv-overlaypanel'] };
}

export function createOverlaypanelTransition() {
  return <const>{
    name: 'bpv-overlaypanel'
  };
}

export const overlaypanelPT = <OverlayPanelPassThroughOptions>{
  root: () => {
    return createOverlaypanelRoot();
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
  transition: createOverlaypanelTransition()
};
