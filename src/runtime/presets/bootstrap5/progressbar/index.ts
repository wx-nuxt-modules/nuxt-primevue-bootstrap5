import type { ProgressBarPassThroughOptions, ProgressBarPassThroughOptionType } from 'primevue/progressbar';

import { inArrayValidator } from '../../../utils/validators';
import { BPV_SEVERITY } from '../../../constants';

export const progressbarPT: Partial<ProgressBarPassThroughOptions> = {
  root: ({
    attrs
  }: ProgressBarPassThroughOptionType & {
    attrs: { label?: string };
  }) => {
    return {
      class: 'progress',
      'aria-label': attrs.label,
      label: undefined
    };
  },
  value: ({
    attrs
  }: ProgressBarPassThroughOptionType & {
    attrs: { severity?: string; striped?: boolean | ''; animated?: boolean | '' };
  }) => {
    const striped = attrs.striped === '' || attrs.striped === true;
    const animated = attrs.animated === '' || attrs.animated === true;

    return {
      class: [
        'progress-bar',
        `bg-${attrs.severity || 'primary'}`,
        striped && 'progress-bar-striped',
        striped && animated && 'progress-bar-animated'
      ]
    };
  }
};
