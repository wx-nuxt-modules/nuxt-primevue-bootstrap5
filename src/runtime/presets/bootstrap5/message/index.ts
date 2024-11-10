import type { MessagePassThroughOptions } from 'primevue/message';

import {
  createRootOptions,
  createWrapperOptions,
  createIconOptions,
  createCloseButtonOptions,
  createTransitionOptions,
  createCloseIconButtonOptions
} from './shared';
import { BPV_SEVERITY } from '../../../constants';
import { inArrayValidator } from '../../../utils/validators';

export const messagePT = <MessagePassThroughOptions>{
  root: ({ props, instance }) => {
    const severity = inArrayValidator(props.severity, BPV_SEVERITY, 'info');
    const isNotClosable = props.closable === false;

    return createRootOptions({ severity, instance, isNotClosable });
  },
  wrapper: () => createWrapperOptions(),
  icon: () => createIconOptions(),
  closeButton: () => createCloseButtonOptions(),
  closeIcon: () => createCloseIconButtonOptions(),
  transition: createTransitionOptions()
};
