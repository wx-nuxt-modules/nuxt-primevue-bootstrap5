import type { MenuPassThroughOptions } from 'primevue/menu';

export const baseMenuPT = {
  menu: () => {
    const classes = ['list-group bpv-menu'];

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

export const menuPT = <MenuPassThroughOptions>baseMenuPT;
