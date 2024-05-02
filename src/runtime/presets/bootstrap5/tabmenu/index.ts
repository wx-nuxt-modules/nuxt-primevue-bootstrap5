import type { TabMenuPassThroughOptions } from 'primevue/tabmenu';

import { isUndefined } from '../../../utils/validators';

export const tabmenuPT = <TabMenuPassThroughOptions>{
  menu: ({ attrs }) => {
    const classes = [
      'nav',
      {
        'nav-tabs':
          [undefined, 'false', false].includes(attrs.pill) && [undefined, 'false', false].includes(attrs.underline)
      },
      { 'nav-pills': [true, 'true', ''].includes(attrs.pill) },
      { 'nav-underline': [true, 'true', ''].includes(attrs.underline) }
    ];

    return { class: classes };
  },
  menuitem: () => {
    const classes = ['nav-item'];

    return { class: classes };
  },
  action: ({ state, context }) => {
    const classes = ['nav-link', state.d_activeIndex === context.index && 'active'];

    return { class: classes };
  }
};
