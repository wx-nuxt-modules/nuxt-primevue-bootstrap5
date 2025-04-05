import type { ButtonGroupPassThroughOptions } from '../../../components/buttongroup/types';

export const sharedButtongroupPT = {
  root: () => ({
    class: 'btn-group bpv-btn-group'
  })
};

export const buttongroupPT = <ButtonGroupPassThroughOptions>{
  root: sharedButtongroupPT.root()
};
