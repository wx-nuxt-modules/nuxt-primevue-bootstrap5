import type { MessagePassThroughOptions } from 'primevue/message';
import type { Icon } from 'primevue/icons';

import CheckIcon from 'primevue/icons/check';
import ExclamationTriangleIcon from 'primevue/icons/exclamationtriangle';
import InfoCircleIcon from 'primevue/icons/infocircle';
import TimesCircleIcon from 'primevue/icons/timescircle';

import { BPV_SEVERITY } from '../../../constants';
import { inArrayValidator } from '../../../utils/validators';

export const messagePT = <MessagePassThroughOptions>{
  root: ({ props, ...rest }) => {
    Object.defineProperty(rest.instance, 'iconComponent', {
      get() {
        const obj: Partial<Record<(typeof BPV_SEVERITY)[number], typeof Icon>> = {
          info: InfoCircleIcon,
          success: CheckIcon,
          warning: ExclamationTriangleIcon,
          danger: TimesCircleIcon
        };

        obj.primary = obj.secondary = obj.dark = obj.light = obj.info;
        return obj[(props.severity as (typeof BPV_SEVERITY)[number]) || 'info'];
      }
    });

    return {
      class: ['alert', 'bpv-alert', `alert-${inArrayValidator(props.severity, BPV_SEVERITY, 'info')}`]
    };
  },
  wrapper: () => ({
    class: 'bpv-alert-wrapper'
  }),
  icon: () => {
    return {
      class: 'bpv-alert-icon'
    };
  },
  closeButton: () => ({
    class: 'btn bpv-alert-btn-close'
  }),
  transition: {
    name: 'bpv-alert'
  }
};
