import type { BadgePassThroughOptions } from 'primevue/badge';
import type { BadgeDirectivePassThroughOptions } from 'primevue/badgedirective';
import type { BPVSeverity } from '../../../types';

import { BPV_SEVERITY, BPV_BADGE_SIZE } from '../../../constants';
import { inArrayValidator, isNullOrUndefined, isUndefined } from '../../../utils/validators';

const sharedPT = {
  severity(value: BPVSeverity | string | null | undefined) {
    if (isNullOrUndefined(value)) return 'bpv-badge-secondary';
    return `bpv-badge-${value}`;
  }
};

export const badgePT = <BadgePassThroughOptions>{
  root: ({ instance, props }) => {
    const { pill, rounded } = instance.$params.attrs;
    const { severity, size } = props;

    const classes = [
      'badge',
      'bpv-badge',
      sharedPT.severity(severity as BPVSeverity),
      { 'bpv-badge-rounded': !isUndefined(rounded) },
      { 'bpv-badge-pill': !isUndefined(pill) },
      { [`bpv-badge-${size}`]: inArrayValidator(size, BPV_BADGE_SIZE, null) }
    ];

    return { class: classes };
  }
};

export const badgeDirectivePT = <BadgeDirectivePassThroughOptions>{
  root: ({ context }: any) => {
    const severity = BPV_SEVERITY.find((val) => context[val]);

    const classes = [
      'badge',
      'bpv-badge',
      sharedPT.severity(severity),
      'bpv-badge-pill',
      { 'bpv-badge-dot': context.dot }
    ];

    return { class: classes };
  }
};
