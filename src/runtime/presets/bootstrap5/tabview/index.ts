import type { TabViewPassThroughOptions } from 'primevue/tabview';

import { tabmenuPT } from '../tabmenu';

export const tabviewPT = <TabViewPassThroughOptions>{
  root: () => {
    const classes = ['bpv-tabview'];

    return { class: classes };
  },
  nav: ({ attrs }: any) => {
    // @ts-ignore
    const base = tabmenuPT.menu({
      attrs: {
        underline: [attrs['nav-underline'], attrs['navUnderline']].some((item) => ['', true, 'true'].includes(item))
      }
    });

    return {
      ...base
    };
  },
  tabpanel: {
    header: () => {
      // @ts-ignore
      const base = tabmenuPT.menuitem();

      return {
        ...base
      };
    },
    headerAction: ({ state, context }: any) => {
      // @ts-ignore
      const base = tabmenuPT.action({ state, context: { index: context.index } });

      return {
        ...base
      };
    }
  },
  panelContainer: () => {
    const classes = ['bpv-tabview-body'];

    return { class: classes };
  }
};
