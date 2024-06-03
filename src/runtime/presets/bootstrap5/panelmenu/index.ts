import type { PanelMenuPassThroughOptions } from 'primevue/panelmenu';

import { sharedMenuPT } from '../menu';
import { tieredmenuSharedPT } from '../tieredmenu';

export const panelmenuPT = <PanelMenuPassThroughOptions>{
  root: () => {
    const base = sharedMenuPT.menu();

    return {
      ...base,
      class: [...base.class, 'bpv-panelmenu']
    };
  },
  panel: () => sharedMenuPT.menuitem(),
  headerAction: () => sharedMenuPT.action(),
  headerIcon: () => sharedMenuPT.icon(),
  menu: () => sharedMenuPT.menu(),
  submenu: () => sharedMenuPT.menu(),
  menuitem: () => sharedMenuPT.menuitem(),
  action: () => sharedMenuPT.action(),
  submenuIcon: () => {
    const base = sharedMenuPT.icon();

    return {
      ...base,
      class: [...base.class, 'bpv-menu-item-action-icon-submenu']
    };
  },
  separator: () => tieredmenuSharedPT.separator(),
  icon: () => sharedMenuPT.icon()
};
