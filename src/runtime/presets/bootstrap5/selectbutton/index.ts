import type { SelectButtonPassThroughOptions } from 'primevue/selectbutton';

import { buttongroupPT } from '../buttongroup';

export const selectbuttonPT = <SelectButtonPassThroughOptions>{
  root: () => {
    // @ts-ignore
    const inherits = buttongroupPT.root();

    const classes = [...inherits.class, 'bpv-selectbutton'];

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
