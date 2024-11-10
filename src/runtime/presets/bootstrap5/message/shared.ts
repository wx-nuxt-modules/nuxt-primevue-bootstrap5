import type { Icon } from 'primevue/icons';
import type { BPVSeverity } from '../../../types';

import InfoCircleIcon from 'primevue/icons/infocircle';
import CheckIcon from 'primevue/icons/check';
import ExclamationTriangleIcon from 'primevue/icons/exclamationtriangle';
import TimesCircleIcon from 'primevue/icons/timescircle';

export interface CreateRootOptionsOptions {
  severity: BPVSeverity;
  instance: any;
  isNotClosable: boolean;
}

export const createRootOptions = (options: CreateRootOptionsOptions) => {
  const { severity, instance, isNotClosable } = options;

  if (!Object.prototype.hasOwnProperty.call(instance, '__definedCustomIconComponents__')) {
    Object.defineProperty(instance, '__definedCustomIconComponents__', {
      configurable: false,
      value: true,
      enumerable: false,
      writable: false
    });
    Object.defineProperty(instance, 'iconComponent', {
      get() {
        const obj: Partial<Record<BPVSeverity, typeof Icon>> = {
          info: InfoCircleIcon,
          success: CheckIcon,
          warning: ExclamationTriangleIcon,
          danger: TimesCircleIcon
        };

        obj.primary = obj.secondary = obj.dark = obj.light = obj.info;
        return obj[severity || 'info'];
      }
    });
  }

  const classes = ['alert bpv-alert', `alert-${severity}`, !isNotClosable && 'alert-dismissible'];

  return { class: classes };
};

export const createWrapperOptions = () => ({
  class: 'bpv-alert-wrapper'
});

export const createIconOptions = () => ({
  class: 'bpv-alert-icon'
});

export const createCloseButtonOptions = () => ({
  class: 'btn-close bpv-alert-btn-close'
});

export const createCloseIconButtonOptions = () => ({
  class: 'd-none'
});

export const createTransitionOptions = () => ({
  name: 'bpv-alert'
});
