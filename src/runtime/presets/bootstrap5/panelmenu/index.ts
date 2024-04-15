import type { PanelMenuPassThroughOptions } from 'primevue/panelmenu';

import { baseMenuPT } from '../menu';

const separatorHandler = (parentId: string, index: number) => {
  const el = document.getElementById(`${parentId}_${index}_header`);
  if (!el) return;

  const itemEl = el.closest('[data-pc-section="panel"]');
  if (!itemEl) return;

  itemEl.innerHTML = '';
  itemEl.classList.replace('bpv-menu-item', 'bpv-menu-separator');
};

export const panelmenuPT = <PanelMenuPassThroughOptions>{
  root: ({ instance, props }) => {
    const base = baseMenuPT.menu();

    instance.$nextTick(() => {
      const elId = instance.$el?.getAttribute('id');
      if (!elId) return;

      (props.model || []).forEach((item, idx) => {
        if (!item.separator) return;

        separatorHandler(elId, idx);
      });
    });

    return {
      ...base,
      class: [...base.class, 'bpv-panelmenu']
    };
  },
  panel: baseMenuPT.menuitem,
  headerAction: baseMenuPT.action,
  headerIcon: baseMenuPT.icon,
  menu: baseMenuPT.menu,
  submenu: baseMenuPT.menu,
  menuitem: baseMenuPT.menuitem,
  action: baseMenuPT.action,
  submenuIcon: () => {
    const base = baseMenuPT.icon();

    return {
      ...base,
      class: [...base.class, 'bpv-menu-item-action-icon-submenu']
    };
  },
  icon: baseMenuPT.icon
};
