import type { TieredMenuPassThroughOptions } from 'primevue/tieredmenu';

export const tieredmenuPT = <TieredMenuPassThroughOptions>{
  root: () => {
    return { class: 'bpv-tieredmenu' };
  },
  menu: () => {
    return { class: 'list-group bpv-tieredmenu-menu' };
  },
  menuitem: ({ context }) => {
    const classes = ['list-group-item list-group-item-action bpv-tieredmenu-menu-item', { active: context.active }];

    return { class: classes };
  },
  action: () => {
    return { class: 'bpv-tieredmenu-menu-item-action' };
  },
  icon: () => {
    return { class: 'bpv-tieredmenu-menu-item-action-icon' };
  },
  submenuIcon: () => {
    return { class: 'bpv-tieredmenu-menu-item-action-submenu-icon' };
  },
  separator: () => {
    return { class: 'list-group-item bpv-tieredmenu-menu-separator' };
  },
  submenu: () => {
    return { class: 'list-group bpv-tieredmenu-menu bpv-tieredmenu-submenu' };
  }
};
