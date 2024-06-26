import type { MessagePassThroughOptions } from 'primevue/message';

import {
  createRootOptions,
  createWrapperOptions,
  createIconOptions,
  createCloseButtonOptions,
  createTransitionOptions
} from './shared';
import { BPV_SEVERITY } from '../../../constants';
import { inArrayValidator } from '../../../utils/validators';

export const messagePT = <MessagePassThroughOptions>{
  root: ({ props, instance }) => {
    const severity = inArrayValidator(props.severity, BPV_SEVERITY, 'info');
    return createRootOptions({ severity, instance });
  },
  wrapper: () => createWrapperOptions(),
  icon: () => createIconOptions(),
  closeButton: () => createCloseButtonOptions(),
  transition: createTransitionOptions()
};
