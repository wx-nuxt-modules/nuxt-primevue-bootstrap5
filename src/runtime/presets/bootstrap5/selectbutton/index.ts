import type { SelectButtonPassThroughOptions } from 'primevue/selectbutton';

import { sharedButtongroupPT } from '../buttongroup';

export const selectbuttonPT = <SelectButtonPassThroughOptions>{
  root: () => {
    const inherits = sharedButtongroupPT.root();

    const classes = [inherits.class, 'bpv-selectbutton'];

    return {
      // @ts-ignore
      ...inherits,
      class: classes
    };
  },
  button: ({ context }) => {
    const classes = ['btn', context.active && 'active'];

    return { class: classes };
  }
};
