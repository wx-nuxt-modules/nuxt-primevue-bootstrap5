import type { ProgressBarPassThroughOptions, ProgressBarPassThroughOptionType } from 'primevue/progressbar';

import { inArrayValidator } from '../../../utils/validators';
import { BPV_SEVERITY } from '../../../constants';

export const progressbarPT: Partial<ProgressBarPassThroughOptions> = {
  root: { class: 'progress' },
  value: ({
    attrs
  }: ProgressBarPassThroughOptionType & {
    attrs: { severity?: string; striped?: boolean | ''; animated?: boolean | '' };
  }) => {
    const severity = inArrayValidator(attrs.severity, BPV_SEVERITY, 'primary');
    const striped = attrs.striped === '' || attrs.striped === true;
    const animated = attrs.animated === '' || attrs.animated === true;

    return {
      class: [
        'progress-bar',
        `bg-${severity}`,
        striped && 'progress-bar-striped',
        striped && animated && 'progress-bar-animated'
      ]
    };
  }
};
