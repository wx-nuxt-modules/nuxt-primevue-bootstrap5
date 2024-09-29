import type { InputMaskPassThroughOptions } from 'primevue/inputmask';
import { createRootClasses } from '../inputtext';

export const inputmaskPT = <InputMaskPassThroughOptions>{
  root: ({ props, attrs }) => {
    return {
      class: createRootClasses({
        variant: props.variant,
        state: attrs.state,
        size: attrs.size,
        plainText: attrs['plain-text'] !== undefined || attrs['plainText'] !== undefined
      })
    };
  }
};
