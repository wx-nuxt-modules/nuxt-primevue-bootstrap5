import type { PasswordPassThroughOptions } from 'primevue/password';

import { createRootClasses } from '../inputtext';

const createSharedIcons = (options?: Record<string, any>) => {
  return { class: 'bpv-password-toggle-mask-icon' };
};

export const passwordPT = <PasswordPassThroughOptions>{
  root: () => {
    const classes = ['bpv-password'];

    return { class: classes };
  },
  input: {
    root: ({ props, parent }: any) => {
      return {
        class: createRootClasses({
          variant: props.variant,
          state: parent.attrs.state,
          size: parent.attrs.size,
          plainText: parent.attrs['plain-text'] !== undefined || parent.attrs['plainText'] !== undefined
        })
      };
    }
  },
  hideIcon: ({}) => {
    const shared = createSharedIcons();
    return { class: [shared.class] };
  },
  showIcon: ({}) => {
    const shared = createSharedIcons();
    return { class: [shared.class] };
  }
};
