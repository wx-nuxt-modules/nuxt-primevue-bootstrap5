import type { ButtonGroupPassThroughOptions } from '../../../components/buttongroup/types';

export const buttongroupPT = <ButtonGroupPassThroughOptions>{
  root: () => {
    const classes = ['btn-group'];

    return { class: classes };
  }
};
