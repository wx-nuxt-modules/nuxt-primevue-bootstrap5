import type { BPVToastPassThroughOptions } from './types';

import { BPV_SEVERITY } from '../../../constants';
import { inArrayValidator } from '../../../utils/validators';

export const toastPT = <BPVToastPassThroughOptions>{
  root: (rest) => {
    const classes = ['bpv-toast'];

    return { class: classes };
  },
  message: () => {
    const classes = ['toast-container'];

    return { class: classes };
  },
  container: ({ props, instance }) => {
    const severity = inArrayValidator(props.message.severity, BPV_SEVERITY);

    const classes = ['toast', severity && `text-bg-${severity}`, 'fade', 'show'];

    return {
      class: classes
    };
  },
  header: () => {
    const classes = ['toast-header'];

    return {
      class: classes
    };
  },
  body: () => {
    const classes = ['toast-body'];

    return {
      class: classes
    };
  },
  closeButton: () => {
    const classes = ['btn bpv-toast-btn-close'];

    return {
      class: classes
    };
  },
  buttonContainer: () => {
    const classes = ['bpv-toast-btn-container'];

    return {
      class: classes
    };
  },
  icon: () => {
    const classes = ['bpv-toast-icon'];

    return {
      class: classes
    };
  },
  transition: {
    name: 'bpv-toast'
  }
};
