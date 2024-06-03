import type { MenuPassThroughOptions } from 'primevue/menu';

import { inArrayValidator } from '../../../utils/validators';

export const sharedMenuPT = {
  menu: ({ flush }: { flush?: string | boolean | undefined } = {}) => {
    const currentFlush = inArrayValidator(flush, [true, ''], false);

    const classes = ['list-group bpv-menu', [true, ''].includes(currentFlush) && 'list-group-flush'];

    return { class: classes };
  },
  menuitem: () => {
    const classes = ['list-group-item bpv-menu-item'];

    return { class: classes };
  },
  submenuHeader: () => {
    const classes = ['list-group-item bpv-menu-item-header'];

    return { class: classes };
  },
  action: () => {
    const classes = ['list-group-item-action bpv-menu-item-action'];

    return { class: classes };
  },
  icon: () => {
    const classes = ['bpv-menu-item-action-icon'];

    return { class: classes };
  }
};

export const menuPT = <MenuPassThroughOptions>{
  menu: ({ attrs }) => sharedMenuPT.menu({ flush: attrs.flush }),
  menuitem: () => sharedMenuPT.menuitem(),
  submenuHeader: () => sharedMenuPT.submenuHeader(),
  action: () => sharedMenuPT.action(),
  icon: () => sharedMenuPT.icon()
};
