import type { TieredMenuPassThroughOptions } from 'primevue/tieredmenu';

export const tieredmenuSharedPT = {
  separator: () => ({ class: 'list-group-item bpv-menu-separator' })
};

export const tieredmenuPT = <TieredMenuPassThroughOptions>{
  root: () => {
    return { class: 'bpv-menu bpv-tieredmenu' };
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
  separator: tieredmenuSharedPT.separator(),
  submenu: () => {
    return { class: 'list-group bpv-tieredmenu-menu bpv-tieredmenu-submenu' };
  }
};
